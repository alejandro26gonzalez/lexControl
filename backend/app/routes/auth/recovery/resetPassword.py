from datetime import datetime, timezone

from flask import request
from app import db

from app.helpers.alertCodes import auth_error, auth_success
from app.models.auth.session import Session
from app.models.user.user import User
from app.routes.auth.recovery import recovery_bp
from app.services.auth.password_policy import validate_password
from app.services.auth.recovery import consume_recovery_session_record, get_active_recovery_session



@recovery_bp.route("/reset-password", methods=["POST"])
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
        
        #1. actualizar contraseña
        user.set_password(new_password)
        
        #2. consultar autorizacion temporal
        consume_recovery_session_record(
            recovery_session
        )
        
        #3. revocar sesiones activas
        active_sessions = Session.query.filter(
            Session.user_id == user.id,
            Session.revoked_at.is_(None),
            Session.expires_at > now
        ).all()
        
        for user_session in active_sessions:
            user_session.revoked_at = now
            
        #4. confirmar toda la operacion
        db.session.commit()
        
        #5. eliminar cookie de recuperacion
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
            "PASSWORD_RESET_FAILED",
            500
        )