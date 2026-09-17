from flask import Blueprint, jsonify, request, session
from datetime import datetime, timezone, timedelta

from app import db
from app.models import User, Session

from app.helpers.auth import (
    generate_session_token,
    hash_session_token,
    get_current_session,
    get_current_user,
    get_user_roles,
    SESSION_DURATION_HOURS
)

from app.helpers.password_reset import (
    validate_password_reset_otp,
    create_password_reset_session,
    get_active_password_reset_session,
    consume_password_reset_session_record,
)

from app.helpers.password_policy import validate_password

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
            hours=SESSION_DURATION_HOURS
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

    user_id = data.get("user_id")
    otp = data.get("otp")

    if not user_id or not otp:
        return jsonify({
            "error": "Usuario y OTP son obligatorios."
        }), 400

    user = db.session.get(User, user_id)

    if not user:
        return jsonify({
            "error": "Solicitud inválida."
        }), 400

    valid, otp_record, message = validate_password_reset_otp(
        user_id,
        otp
    )

    if not valid:
        return jsonify({
            "error": message
        }), 400

    reset_token, reset_session = create_password_reset_session(user_id)

    return jsonify({
        "message": "OTP validado exitosamente.",
        "reset_token": reset_token
    }), 200
    
@auth_bp.route("/reset-password", methods=["POST"])
def reset_password():
    
    data = request.get_json()
    
    if not data:
        return jsonify({
            "error": "Datos requeridos."
        }), 400
        
    reset_token = data.get("reset_token")
    new_password = data.get("new_password")
    confirm_password = data.get("confirm_password")
    
    if not reset_token or not new_password or not confirm_password:
        return jsonify({
            "error:": "Todos los campos son obligatorios."
        }), 400
        
    if new_password != confirm_password:
        return jsonify({
            "error": "Las contraseñas no coinciden."
        }), 400
        
    reset_session = get_active_password_reset_session(reset_token)
    
    if not reset_session:
        return jsonify({
            "error": "Autorización inválida o expirada."
        }), 400
        
    user = db.session.get(
        User,
        reset_session.user_id
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
            "error": "La contraseña no cumple con la política de privacidad"
        }), 400
        
    try:
        now = datetime.now(timezone.utc)
        
        #1 actualizar contraseña
        user.set_password(new_password)
        
        #2 consultar autorizacion temporal
        consume_password_reset_session_record(reset_session)
        
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
        
        return jsonify({
            "message": "Contraseña actualizada correctamente."
        }), 200
        
    except Exception:
        db.session.rollback()

        return jsonify({
            "error": "No fue posible actualizar la contraseña."
        }), 500