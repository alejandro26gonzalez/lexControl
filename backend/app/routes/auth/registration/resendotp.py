from app.routes.auth.registration import register_bp
from app import db

from flask import request

from app.helpers.alertCodes import auth_error, auth_success
from app.services.otp.otp_email_service import send_otp_email
from app.services.registration.registration import get_active_registration_session, get_registration_session_by_token
from app.services.registration.registration_otp import create_registration_otp

MAX_OTP_REQUESTS_PER_SESSION = 5

@register_bp.route("/resend-otp", methods=["POST"])
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
                    "REGISTRATION_SESSION_INVALID",
                    400
                )
        
        # -----------------------------------------
        # Verificar si el registro ya fue completado
        # -----------------------------------------
    
        if registration_session.completed_at is not None:
            return auth_error(
                "El registro de esta cuenta ya fue completado.",
                "REGISTRATION_ALREADY_COMPLETED",
                409
            )
    
        # -----------------------------------------
        # Verificar si el correo ya fue confirmado
        # -----------------------------------------
    
        if registration_session.otp_verified_at is not None:
            return auth_error(
                "El correo electrónico ya fue verificado. Puedes continuar con la creación de tu cuenta.",
                "OTP_ALREADY_VERIFIED",
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

        if registration_session.otp_verified_at is not None :
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
        # Reenvío de OTP por correo
        # -----------------------------------------
        
        send_otp_email(
            email=registration_session.email,
            name=registration_session.name,
            otp=otp,
            purpose="registration",
            context="resend"
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