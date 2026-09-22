import json

from flask import Blueprint, jsonify, request, session, current_app
from datetime import datetime, timezone, timedelta
from werkzeug.security import generate_password_hash

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
    verify_recovery_otp,
    get_recovery_session_by_token
)
MAX_OTP_REQUESTS_PER_SESSION = 5


# temporal
from app.models import RegistrationSession
from app.services.registration.registration import _hash_registration_token


from app.services.registration import (
    create_registration_session,
    create_registration_otp,
    get_active_registration_session_by_email,
    get_active_registration_session,
    validate_registration_otp,
    get_registration_session_by_token,
    update_registration_profile,
    finalize_registration
)

from app.services.users import (
    get_user_by_email
)

auth_bp = Blueprint(
    "auth", 
    __name__, 
    url_prefix="/auth"
)


# helpers para normalizar erroes y exitos
def auth_error(message, code, status=400, **extra):
    return jsonify({
        "error": message,
        "code": code,
        **extra
    }), status
    
def auth_success(message, code, status=200, **extra):
    return jsonify({
        "message": message,
        "code": code,
        **extra
    }), status

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    
    if not data:
        return auth_error(
            "Datos de autenticación requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )
        
    email = data.get("email")
    password = data.get("password")
    
    
    if not email or not password:
        return auth_error(
            "Email y contraseña son obligatorios.",
            "AUTH_DATA_REQUIRED",
            400
        )
        
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return auth_error(
            "Credenciales inválidas.",
            "AUTH_INVALID_CREDENTIALS",
            400
        )
        
    if not user.is_active:
        return auth_error(
            "Usuario inactivo.",
            "AUTH_USER_INACTIVE",
            400
        )
        
    if not user.check_password(password):
        return auth_error(
            "Credenciales inválidas.",
            "AUTH_INVALID_CREDENTIALS",
            400
        )
        
    session.clear()
    
    raw_token = generate_session_token()
    token_hash = hash_session_token(raw_token)
    
    now = datetime.now(timezone.utc)
    
    new_session = Session(
        user_id = user.id,
        session_token_hash = token_hash,
        created_at = now,
        expires_at = now + timedelta(hours=8)
    )
    
    db.session.add(new_session)
    db.session.commit()
    
    session["session_token"] = raw_token
    
    roles = get_user_roles(user.id)
    
    return auth_success(
        "Autenticación exitosa.",
        "AUTH_LOGIN_OK",
        user={
            "id": user.id,
            "email": user.email,
            "roles": roles
        }
    )
    
@auth_bp.route("/me", methods=["GET"])
def get_me():
    user = get_current_user()
    
    if not user:
        return auth_error(
            "No hay una sesión autenticada.",
            "AUTH_SESSION_INVALID",
            401,
            authenticated=False
        )
        
    roles = get_user_roles(user.id)
    
    return auth_success(
        "Sesión autenticada correctamente.",
        "AUTH_CURRENT_USER",
        user={
            "id": user.id,
            "email": user.email,
            "roles": roles
        },
        authenticated=True
    )
    
@auth_bp.route("/logout", methods=["POST"])
def logout():
    
    current_session = get_current_session()
    
    if current_session:
        
        current_session.revoked_at = datetime.now(
            timezone.utc
        )
        
        db.session.commit()
    
    session.clear()
    
    return auth_success(
        "Sesión cerrada correctamente",
        "AUTH_LOGOUT_OK"
    )

@auth_bp.route("/forgot-password/verify-otp", methods=["POST"])
def verify_otp():
    data = request.get_json()

    if not data:
        return auth_error(
            "Datos requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )

    otp = data.get("otp")

    if not otp:
        return auth_error(
                "OTP es mandatorio.",
                "OTP_REQUIRED",
                400
            )

    recovery_token = request.cookies.get("recovery_token")

    if not recovery_token:
        return auth_error(
                "Sesión inválida o expirada.",
                "AUTH_SESSION_INVALID",
                400
            )

    try:
        (
        valid, 
        recovery_session, 
        otp_record, 
        remaining_attempts,
        otp_exhausted,
        session_blocked,
        message
        ) = verify_recovery_otp(
            recovery_token,
            otp
        )
        
        if not valid:
            db.session.commit()
            
            if session_blocked:
                code = "RECOVERY_SESSION_BLOCKED"
            elif otp_exhausted:
                code = "OTP_MAX_ATTEMPTS"
            else:
                code = "OTP_INVALID"

            return auth_error(
                message,
                code,
                400,
                remaining_attempts=remaining_attempts,
                otp_exhausted=otp_exhausted,
                session_blocked=session_blocked
            )

        
        db.session.commit()
        
        return auth_success(
            "OTP validado exitosamente.",
            "OTP_VERIFIED",
            200
        )
    except Exception:
        db.session.rollback()

        return auth_error(
            "No fue posible validar el OTP",
            "OTP_NOT_VERIFIED",
            500
        )

@auth_bp.route("/reset-password", methods=["POST"])
def reset_password():
    
    data = request.get_json()
    
    if not data:
        return auth_error(
            "Datos requeridos",
            "AUTH_DATA_REQUIRED",
            400
        )
        
    new_password = data.get("new_password")
    confirm_password = data.get("confirm_password")
    
    if not new_password or not confirm_password:
        return auth_error(
            "Datos requeridos",
            "AUTH_DATA_REQUIRED",
            400
        )
        
    if new_password != confirm_password:
        return auth_error(
                "Las contraseñas no coinciden.",
                "PASSWORD_MISMATCH",
                400
            )

        
    recovery_token = request.cookies.get("recovery_token")
    
    if not recovery_token:
        return auth_error(
            "Sesión de recuperación inválida o expirada.",
            "RECOVERY_SESSION_INVALID",
            400
        )
        
    recovery_session = get_active_recovery_session(
        recovery_token
    )
    
    if not recovery_session:
        return auth_error(
            "Debes validar el OTP antes de cambiar la contraseña.",
            "OTP_VERIFICATION_REQUIRED",
            400
        )
        
    user = db.session.get(
        User,
        recovery_session.user_id
    )
    
    if not user or not user.is_active:
        return auth_error(
            "Solicitud inválida",
            "RECOVERY_INVALID_REQUEST",
            400
        )
        
    password_valid, password_errors = validate_password(
        new_password,
        user.email
    )
    
    if not password_valid:
        return auth_error(
            "La contraseña no cumple con la política de privacidad.",
            "PASSWORD_POLICY_INVALID",
            400
        )
        
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
        response, status = auth_success(
            "Contraseña actualizada correctamente.",
            "PASSWORD_RESET_SUCCESS"
        )
        
        response.delete_cookie("recovery_token")
        
        return response, 200
        
    except Exception:
        db.session.rollback()

        return auth_error(
            "No fue posible actualizar la contraseña.",
            "RECOVERY_REQUEST_FAILED",
            500
        )
        
@auth_bp.route("/forgot-password", methods=["POST"])
def forgot_password():
    
    data = request.get_json()
    
    if not data:
        return auth_error(
            "Datos requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )
    
    email = data.get("email")
    
    if not email:
        return auth_error(
            "El correo electrónico es obligatorio.",
            "AUTH_DATA_REQUIRED",
            400
        )
        
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
    
            response, status = auth_success(
                    "Si el correo está registrado, recibirás un código de recuperación.",
                    "RECOVERY_REQUESTED"
                )
            
            response.set_cookie(
                "recovery_token",
                recovery_token,
                httponly=True,
                secure=current_app.config["ENVIRONMENT"] == "development",
                samesite="Lax",
                max_age=600
            )
            
            return response, 200
            
        except Exception:
            db.session.rollback()
            
            return auth_error(
                "No fue posible iniciar la recuperación.",
                "RECOVERY_REQUEST_FAILED",
                500
            )
            
    return auth_success(
            (
                "Si el correo está registrado, "
                "recibirás un código de recuperación."
            ),
            "RECOVERY_REQUESTED"
        )
    
@auth_bp.route("/forgot-password/resend-otp", methods=["POST"])
def resend_otp():
    
    recovery_token = request.cookies.get("recovery_token")
    
    if not recovery_token:
        return auth_error(
            "Sesión de recuperación inválida o expirada.",
            "RECOVERY_SESSION_INVALID",
            400
        )
        
    try:
        
        recovery_session = get_recovery_session_by_token(recovery_token)
        
        if not recovery_session:
            return auth_error(
                    "Sesión de recuperación inválida o expirada.",
                    "RECOVERY_SESSION_INVALID",
                    400
                )
            
        if recovery_session.blocked_at is not None:
            return auth_error(
                    "La sesión de recuperación está bloqueada.",
                    "RECOVERY_SESSION_BLOCKED",
                    429,
                    session_blocked = True
                )
            
        if (
            recovery_session.revoked_at is not None
            or recovery_session.used_at is not None
        ):
            return auth_error(
                    "Sesión de recuperación inválida o expirada.",
                    "RECOVERY_SESSION_INVALID",
                    400
                )
            
        if recovery_session.expires_at <= datetime.now(timezone.utc):
            return auth_error(
                    "Sesión de recuperación inválida o expirada.",
                    "RECOVERY_SESSION_INVALID",
                    400
                )
            
        if recovery_session.otp_verified_at is not None:
            return auth_error(
                    "El OTP ya fue validado.",
                    "OTP_ALREADY_VERIFIED",
                    400
                )
            
        if recovery_session.otp_requests_count >= MAX_OTP_REQUESTS_PER_SESSION:
            return auth_error(
                    "Se alcanzó el límite de códigos de recuperación para esta sesión.",
                        "OTP_REQUEST_LIMIT_REACHED",
                        429,
                        otp_request_limit_reached = True
                    )
            
        otp, otp_record = create_password_reset_otp_record(recovery_session.user_id)
        
        recovery_session.otp_requests_count += 1
            
        db.session.commit()
        
        if current_app.config["ENVIRONMENT"] == "development":
            print(
                f"[DEV] OTP reenviado para el usuario."
                f"{recovery_session.user_id}: {otp}"
            )
            
        return auth_success(
            "Se ha generado un nuevo código de recuperación.",
            "OTP_RESENT",
            200
        )
    
    except Exception:
        db.session.rollback()
        
        return auth_error(
            "No fue posible reenviar el código.",
            "OTP_NOT_RESENT",
            500
        )
        
@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    if not data:
        return auth_error(
            "Datos requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )

    name = data.get("name")
    last_name = data.get("last_name")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirm_password")

    if not name or not last_name:
        return auth_error(
            "Nombres y apellidos son obligatorios.",
            "AUTH_DATA_REQUIRED",
            400
        )

    if not email:
        return auth_error(
                "El correo es obligatorio.",
                "AUTH_DATA_REQUIRED",
                400
            )

    if not password:
        return auth_error(
                "La contraseña es obligatoria.",
                "AUTH_DATA_REQUIRED",
                400
            )

    if not confirm_password:
        return auth_error(
                "La confirmación de la contraseña es obligatoria.",
                "AUTH_DATA_REQUIRED",
                400
            )

    email = email.strip().lower()

    # 1. Verificar si ya existe un usuario confirmado
    existing_user = get_user_by_email(email)

    if existing_user:
        return auth_error(
                "El correo electrónico brindado ya está registrado.",
                "EMAIL_ALREADY_REGISTERED",
                409
            )
        
    active_registration = get_active_registration_session_by_email(email)
    
    if active_registration:
        return auth_error(
            "Ya existe un proceso de registro activo para este correo electrónico.",
            "REGISTRATION_IN_PROGRESS",
            409,
            registration_in_progress = True
        )

    # 2. Verificar coincidencia de contraseñas
    if password != confirm_password:
        return auth_error(
            "Las contraseñas no coinciden.",
            "PASSWORD_MISMATCH",
            400
        )

    # 3. Validar política de contraseña
    password_valid, password_errors = validate_password(
        password=password,
        user_email=email
    )

    if not password_valid:
        return auth_error(
            "La contraseña no cumple con los requisitios de seguridad.",
            "PASSWORD_POLICY_INVALID",
            400,
            password_errors = password_errors
        )

    try:

        # 4. Generar hash de contraseña
        password_hash = generate_password_hash(
            password
        )

        # 5. Crear sesión temporal de registro
        registration_token, registration_session = (
            create_registration_session(
                email=email,
                password_hash=password_hash,
                name=name.strip(),
                last_name=last_name.strip()
            )
        )
        
        #6. confirmar la sesión en postrgresql
        db.session.commit()

        response, status = auth_success(
            "Registro iniciado correctamente, continúa con la información de tu perfil.",
            "REGISTRATION_STARTED"
        )

        response.set_cookie(
            "registration_token",
            registration_token,
            httponly=True,
            secure=current_app.config["ENVIRONMENT"] != "development",
            samesite="Lax",
            max_age=600
        )

        return response, 201

    except Exception:
        db.session.rollback()

        return auth_error(
            "No fue posible iniciar el registro.",
            "REGISTRATION_START_FAILED",
            500
        )

@auth_bp.route("/register/profile", methods=["POST"])
def register_profile():

    data = request.get_json()

    if not data:
        return auth_error(
            "Datos requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )
    # -----------------------------------------
    # Obtener token de registro
    # -----------------------------------------
    
    registration_token = request.cookies.get(
        "registration_token"
    )
    
    if not registration_token:
        return auth_error(
            "Sesión de registro inválida o expirada.",
            "REGISTRATION_SESSION_INVALID",
            400
        )
    # -----------------------------------------
    # Obtener datos del perfil
    # -----------------------------------------   
    
    phone = data.get("phone")
    city = data.get("city")
    position = data.get("position")
    specialty = data.get("specialty")
    professional_card = data.get("professional_card")
    
    try:
            # -----------------------------------------
            # buscar la misma sesion creada en fase 1
            # -----------------------------------------
        
        registration_session = (
            get_active_registration_session(
                registration_token
            )
        )
        
        if not registration_session:
            return auth_error(
                    "Sesión de registro inválida o expirada.",
                    "REGISTRATION_SESSION_INVALID",
                    400
                )
            
            # -----------------------------------------
            # verificar que el correo todavia no ha sido verificado
            # -----------------------------------------        
        
        if registration_session.otp_verified_at is not None:
            return auth_error(
                "El correo electrónico ya fue verificado.",
                "EMAIL_ALREADY_VERIFIED",
                400
            )
            
        # -----------------------------------------
        # Actualizar la misma RegistrationSession
        # -----------------------------------------
        
        update_registration_profile(
            registration_session=registration_session,
            phone=phone,
            city=city,
            position=position,
            specialty=specialty,
            professional_card=professional_card
        )
        # -----------------------------------------
        # Generar OTP asociado a la sesión
        # -----------------------------------------
        
        otp, otp_record = create_registration_otp(
            registration_session.id
        )        
        
        registration_session.otp_requests_count += 1
        
        # -----------------------------------------
        # Confirmar cambios
        # -----------------------------------------
        
        db.session.commit()
        
        # -----------------------------------------
        # Mostrar OTP únicamente en desarrollo
        # -----------------------------------------
        
        if current_app.config["ENVIRONMENT"] == "development":
            print(
                f"[DEV] Registration OTP para"
                f"{registration_session.email}: {otp}"
            )                
        
        return auth_success(
            "Información del perfil guardada correctamente. Se generó un código de verificación.",
            "REGISTRATION_PROFILE_SAVED",
            200
        )
        
    except Exception:
        
        db.session.rollback()
        
        return auth_error(
            "No fue posible guardar la información del perfil.",
            "PROFILE_VALIDATION_FAILED",
            500
        )
        
@auth_bp.route("/register/verify-otp", methods=["POST"])
def verify_registration_otp():

    data = request.get_json()

    if not data:
        return auth_error(
            "Datos requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )

    otp = data.get("otp")

    if not otp:
        return auth_error(
            "El código de verificación es obligatorio.",
            "AUTH_DATA_REQUIRED",
            400
        )

    registration_token = request.cookies.get(
        "registration_token"
    )

    if not registration_token:
        return auth_error(
                "Sesión de verificación de OTP inválida o expirada.",
                "REGISTRATION_SESSION_INVALID",
                400
            )

    try:

        # -----------------------------------------
        # Buscar sesión activa
        # -----------------------------------------

        registration_session = (
            get_active_registration_session(
                registration_token
            )
        )

        if not registration_session:
            return auth_error(
                    "Sesión de verificación de OTP inválida o expirada.",
                    "REGISTRATION_SESSION_INVALID",
                    400
                )

        # -----------------------------------------
        # Verificar OTP
        # -----------------------------------------

        (
            valid,
            otp_record,
            remaining_attempts,
            otp_exhausted,
            session_blocked,
            message
        ) = validate_registration_otp(
            registration_session,
            otp
        )

        # -----------------------------------------
        # OTP inválido
        # -----------------------------------------

        if not valid:

            db.session.commit()

            return auth_error(
                message,
                "OTP_INVALID",
                400,
                remaining_attempts=remaining_attempts,
                otp_exhausted=otp_exhausted,
                session_blocked=session_blocked
            )

        # -----------------------------------------
        # OTP válido
        # -----------------------------------------

        db.session.commit()

        return auth_success(
            "Correo electrónico verificado correctamente.",
            "EMAIL_VERIFIED",
            200
        )

    except Exception:

        db.session.rollback()

        return auth_error(
                "No fue posible validar el código de verificación.",
                "OTP_NOT_VERIFIED",500
            )
        
@auth_bp.route("/register/resend-otp", methods=["POST"])
def resend_registration_otp():

    registration_token = request.cookies.get(
        "registration_token"
    )

    if not registration_token:
        return auth_error(
                "Reenvío de OTP no completado por sesión inválida o expirada.",
                "AUTH_SESSION_INVALID",
                400
            )

    try:

        # -----------------------------------------
        # Buscar sesión por token
        # -----------------------------------------

        registration_session = (
            get_registration_session_by_token(
                registration_token
            )
        )

        if not registration_session:
            return auth_error(
                    "Reenvío de OTP no completado por sesión inválida o expirada.",
                    "AUTH_SESSION_INVALID",
                    400
                )

        # -----------------------------------------
        # Verificar estado de la sesión
        # -----------------------------------------

        active_session = get_active_registration_session(
            registration_token
        )

        if not active_session:

            if registration_session.blocked_at is not None:
                return auth_error(
                        "La sesión de registro está bloqueada.",
                        "REGISTRATION_SESSION_BLOCKED",
                        400,
                        session_blocked=True
                    )

            if registration_session.completed_at is not None:
                return auth_error(
                        "El registro ya fue completado.", 
                        "REGISTRATION_ALREADY_COMPLETED",
                        400
                    )

            if registration_session.revoked_at is not None:
                return auth_error(
                            "La sesión de registro fue revocada.", 
                            "REGISTRATION_SESSION_BLOCKED",
                            400
                        )

            return auth_error(
                    "La sesión de registro ha expirado.", 
                    "REGISTRATION_SESSION_EXPIRED",
                    400
                )

        # -----------------------------------------
        # Verificar si el correo ya fue validado
        # -----------------------------------------

        if registration_session.otp_verified_at is not None:
            return auth_error(
                    "El correo electrónico ya fue verificado.", 
                    "EMAIL_ALREADY_VERIFIED",
                    400
                )

        # -----------------------------------------
        # Verificar límite de solicitudes
        # -----------------------------------------

        if (
            registration_session.otp_requests_count
            >= MAX_OTP_REQUESTS_PER_SESSION
        ):
            return auth_error(
                "Se alcanzó el límite de códigos de verificación para esta sesión.",
                "OTP_REQUEST_LIMIT_REACHED",
                429,
                otp_request_limit_reached=True
            )

        # -----------------------------------------
        # Crear nuevo OTP
        # -----------------------------------------

        otp, otp_record = create_registration_otp(
            registration_session.id
        )

        registration_session.otp_requests_count += 1

        db.session.commit()

        # -----------------------------------------
        # OTP en desarrollo
        # -----------------------------------------

        if current_app.config["ENVIRONMENT"] == "development":
            print(
                f"[DEV] Registration OTP para "
                f"{registration_session.email}: {otp}"
            )

        return auth_success(
                "Se generó un nuevo código de verificación.",
                "OTP_RESENT",
                200
            )

    except Exception:

        db.session.rollback()

        return auth_error(
                "No fue posible generar un nuevo código.",
                "OTP_NOT_RESENT",
                500
            )
        
@auth_bp.route("/register/complete", methods=["POST"])
def complete_registration():

    registration_token = request.cookies.get(
        "registration_token"
    )

    if not registration_token:
        return auth_error(
                "Sesión de registro inválida o expirada.",
                "REGISTRATION_SESSION_INVALID",
                400
            )

    try:

        # -----------------------------------------
        # Buscar sesión activa
        # -----------------------------------------

        registration_session = (
            get_active_registration_session(
                registration_token
            )
        )

        if not registration_session:
            return auth_error(
                "Sesión de registro inválida o expirada.",
                "REGISTRATION_SESSION_INVALID",
                400
            )

        # -----------------------------------------
        # Verificar OTP
        # -----------------------------------------

        if registration_session.otp_verified_at is None:
            return auth_error(
                "El correo electrónico aún no ha sido verificado.",
                "OTP_NOT_VERIFIED",
                400
            )

        # -----------------------------------------
        # Finalizar registro
        # -----------------------------------------

        user, profile, user_role = finalize_registration(
            registration_session
        )

        db.session.commit()

        # -----------------------------------------
        # Eliminar cookie de registro
        # -----------------------------------------

        response, status = auth_success(
                    "Cuenta creada exitosamente.",
                    "REGISTRATION_COMPLETE"
                )

        response.delete_cookie(
                "registration_token",
                httponly=True,
                samesite="Lax"
            )

        return response, 201

    except ValueError as error:

        db.session.rollback()

        return auth_error(
            str(error),
            "REGISTRATION_COMPLETE_FAILED",
            400
        )

    except Exception:

        db.session.rollback()

        return auth_error(
            "No fue posible completar el registro.",
            "REGISTRATION_COMPLETE_FAILED",
            500
        )