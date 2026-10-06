from datetime import datetime, timezone

from flask import request

from app import db
from app.helpers.alertCodes import auth_error, auth_success
from app.models.user.user import User
from app.models.user.user_profile import UserProfile
from app.routes.auth.recovery import recovery_bp
from app.services.auth.password_reset import create_password_reset_otp_record
from app.services.auth.recovery import get_recovery_session_by_token
from app.services.otp.otp_email_service import send_otp_email


MAX_OTP_REQUESTS_PER_SESSION = 5


@recovery_bp.route("/resend-otp", methods=["POST"])
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
            
        user = db.session.get(
            User,
            recovery_session.user_id
        )
        
        profile = UserProfile.query.filter_by(
            user_id=user.id
        ).first()
        
        if not user or not user.is_active:
            return auth_error(
                "Solcitiud inválida.",
                "RECOVERY_INVALID_REQUEST",
                400
            )
            
        otp, otp_record = create_password_reset_otp_record(recovery_session.user_id)
        
        recovery_session.otp_requests_count += 1
            
        db.session.commit()
        
        send_otp_email(
            email=user.email,
            name=profile.name,
            otp=otp,
            purpose="password_reset",
            context="resend"
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