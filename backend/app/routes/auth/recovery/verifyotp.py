from flask import request
from app import db

from app.helpers.alertCodes import auth_error, auth_success
from app.routes.auth.recovery import recovery_bp
from app.services.auth.verify_otp import verify_recovery_otp


@recovery_bp.route("/verify-otp", methods=["POST"])
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