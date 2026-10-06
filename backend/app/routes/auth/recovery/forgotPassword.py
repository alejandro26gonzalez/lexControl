from flask import current_app, request
from app import db

from app.models.user.user import User
from app.models.user.user_profile import UserProfile
from app.routes.auth.recovery import recovery_bp

from app.helpers import auth_success, auth_error
from app.services.auth.password_reset import create_password_reset_otp_record
from app.services.auth.recovery import create_recovery_session_record
from app.services.otp.otp_email_service import send_otp_email


@recovery_bp.route("", methods=["POST"])
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
            recovery_token, recovery_session = create_recovery_session_record(
                user.id
            )
            
            #2. crear otp asociado al usuario
            otp, otp_record = create_password_reset_otp_record(
                user.id
            )
            
            #3. confirmar ambas operaciones
            db.session.commit()
            
            profile = UserProfile.query.filter_by(
                user_id=user.id
            ).first()
            
            if not profile:
                return auth_error(
                    "Solicitud inválida.",
                    "RECOVERY_INVALID_REQUEST",
                    400
                )
                
            send_otp_email(
                email=user.email,
                name=profile.name,
                otp=otp,
                purpose="password_reset",
                context="new"
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