from flask import Blueprint, jsonify, request, session, current_app
from datetime import datetime, timezone, timedelta
import traceback

from app import db
from app.models import User, Session

from app.services import (
    generate_session_token,
    hash_session_token,
    get_current_session,
    get_current_user,
    get_user_roles,
    validate_password,
    create_password_reset_otp_record,
    create_recovery_session_record,
    get_active_recovery_session,
    consume_recovery_session_record,
    verify_recovery_otp
)


auth_bp = Blueprint(
    "auth", 
    __name__, 
    url_prefix="/auth"
)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    
    if not data:
        return jsonify({
            "error": "Datos de autenticación requeridos"
        }), 400
        
    email = data.get("email")
    password = data.get("password")
    
    
    if not email or not password:
        return jsonify({
            "error": "Email y contraseña son obligatorios",
        }), 400
        
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({
            "error": "Credenciales inválidas"
        }), 400
        
    if not user.is_active:
        return jsonify({
            "error": "Usuario inactivo"
        }), 400
        
    if not user.check_password(password):
        return jsonify({
            "error": "Credenciales inválidas"
        }), 400
        
    session.clear()
    
    raw_token = generate_session_token()
    token_hash = hash_session_token(raw_token)
    
    now = datetime.now(timezone.utc)
    
    new_session = Session(
        user_id = user.id,
        session_token_hash = token_hash,
        created_at = now,
        expires_at = now + timedelta(
            hours=8
        )
    )
    
    db.session.add(new_session)
    db.session.commit()
    
    session["session_token"] = raw_token
    
    roles = get_user_roles(user.id)
    
    return jsonify({
        "message": "Autenticación exitosa",
        "user": {
            "id": user.id,
            "email": user.email,
            "roles": roles
        }
    }), 200
    
@auth_bp.route("/me", methods=["GET"])
def get_me():
    user = get_current_user()
    
    if not user:
        return jsonify({
            "authenticated": False
        }), 401
        
    roles = get_user_roles(user.id)
        
    return jsonify({
        "authenticated": True,
        "user": {
            "id": user.id,
            "email": user.email,
            "roles": roles
        }
    }), 200
    
@auth_bp.route("/logout", methods=["POST"])
def logout():
    
    current_session = get_current_session()
    
    if current_session:
        
        current_session.revoked_at = datetime.now(
            timezone.utc
        )
        
        db.session.commit()
    
    session.clear()
    
    return jsonify({
        "message": "Sesión cerrada correctamente"
    }), 200

@auth_bp.route("/verify-otp", methods=["POST"])
def verify_otp():
    data = request.get_json()

    if not data:
        return jsonify({
            "error": "Datos requeridos."
        }), 400

    otp = data.get("otp")

    if not otp:
        return jsonify({
            "error": "El OTP es obligatorio."
        }), 400

    recovery_token = request.cookies.get("recovery_token")

    if not recovery_token:
        return jsonify({
            "error": "Sesión de recuperación inválida o expirada."
        }), 400

    try:
        valid, recovery_session, otp_record, message = verify_recovery_otp(
            recovery_token,
            otp
        )
        if not valid:
            db.session.commit()
            print("VERIFY OTP - mensaje:", message)
            print("VERIFY OTP - recovery session:", recovery_session is not None)
            print("VERIFY OTP - OTP record:", otp_record is not None)
            return jsonify({
                "error:": message
            }), 400
        
        db.session.commit()
        
        return jsonify({
            "message": "OTP validado exitosamente."
        }), 200
    
    except Exception:
        db.session.rollback()
        traceback.print_exc()
        return jsonify({
            "message": "No fue posible validar el OTP."
        }), 500

@auth_bp.route("/reset-password", methods=["POST"])
def reset_password():
    
    data = request.get_json()
    
    if not data:
        return jsonify({
            "error": "Datos requeridos."
        }), 400
        
    new_password = data.get("new_password")
    confirm_password = data.get("confirm_password")
    
    if not new_password or not confirm_password:
        return jsonify({
            "error:": "Todos los campos son obligatorios."
        }), 400
        
    if new_password != confirm_password:
        return jsonify({
            "error": "Las contraseñas no coinciden."
        }), 400
        
    recovery_token = request.cookies.get("recovery_token")
    
    if not recovery_token:
        return jsonify({
            "error": "Sesión de recuperación inválida o expirada."
        }), 400
        
    recovery_session = get_active_recovery_session(
        recovery_token
    )
    
    if not recovery_session:
        return jsonify({
            "error": "Debes validar el OTP antes de cambiar la contraseña."
        }), 400
        
    user = db.session.get(
        User,
        recovery_session.user_id
    )
    
    if not user or not user.is_active:
        return jsonify({
            "error": "Solicitud inválida"
        }), 400
        
    password_valid, password_errors = validate_password(
        new_password,
        user.email
    )
    
    if not password_valid:
        return jsonify({
            "error": "La contraseña no cumple con la política de privacidad",
            "details": password_errors
        }), 400
        
    try:
        now = datetime.now(timezone.utc)
        
        #1 actualizar contraseña
        user.set_password(new_password)
        
        #2 consultar autorizacion temporal
        consume_recovery_session_record(
            recovery_session
        )
        
        #3 revocar sesiones activas
        active_sessions = Session.query.filter(
            Session.user_id == user.id,
            Session.revoked_at.is_(None),
            Session.expires_at > now
        ).all()
        
        for user_session in active_sessions:
            user_session.revoked_at = now
        
        #4 confirmar toda la operacion
        db.session.commit()
        
        # 5. Eliminar cookie de recuperación
        response = jsonify({
            "message": "Contraseña actualizada correctamente."
        })
        
        response.delete_cookie("recovery_token")
        
        return response, 200
        
    except Exception:
        db.session.rollback()

        return jsonify({
            "error": "No fue posible actualizar la contraseña."
        }), 500
        
@auth_bp.route("/forgot-password", methods=["POST"])
def forgot_password():
    
    data = request.get_json()
    
    if not data:
        return jsonify({
            "error": "Datos requeridos"
        }), 400
    
    email = data.get("email")
    
    if not email:
        return jsonify({
            "error": "El correo electrónico es obligatorio"
        }), 400
        
    user = User.query.filter_by(email=email).first()
    
    if user and user.is_active:
        try:
            
            #1. crear la sesion de recuperacion
            recovery_token, recovery_session = create_recovery_session_record(user.id)
            
            #2. crear otp asociado al usuario
            otp, otp_record = create_password_reset_otp_record(user.id)
            
            #3. confirmar ambas operaciones
            db.session.commit()
        
            if current_app.config["ENVIRONMENT"] == "development":
                print(
                    f"[DEV] OTP generado para {user.email}: {otp}"
                )
    
            response = jsonify({
                    "message": (
                        "Si el correo está registrado, "
                        "recibirás un código de recuperación."
                    )
                })
            
            response.set_cookie(
                "recovery_token",
                recovery_token,
                httponly=True,
                secure=current_app.config["ENVIRONMENT"] == "development",
                samesite="Lax",
                max_age=600
            )
            
            return response, 200
            
        except Exception as e:
            db.session.rollback()
            
            return jsonify({
                "error": "No fue posible iniciar la recuperación."
            }), 500
            
    return jsonify({
        "message": (
            "Si el correo está registrado, "
            "Recibirás un código de recuperación."
        )
    }), 200