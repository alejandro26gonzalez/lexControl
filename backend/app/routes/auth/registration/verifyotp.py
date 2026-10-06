from flask import request
from app import db

from app.helpers.alertCodes import auth_error, auth_success
from app.routes.auth.registration import register_bp
from app.services.registration.registration import get_active_registration_session
from app.services.registration.registration_otp import validate_registration_otp


@register_bp.route("/verify-otp", methods=["POST"])
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
            "OTP_REQUIRED",
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
            "OTP_VERIFIED",
            200
        )

    except Exception:

        db.session.rollback()

        return auth_error(
                "No fue posible validar el código de verificación.",
                "OTP_NOT_VERIFIED",500
            )