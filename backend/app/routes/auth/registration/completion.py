from app.routes.auth.registration import register_bp

from flask import request
from app import db

from app.helpers.alertCodes import auth_error, auth_success
from app.services.registration.registration import finalize_registration, get_active_registration_session



@register_bp.route("/complete", methods=["POST"])
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
        # Verificar si el registro ya fue completado
        # -----------------------------------------
        
        if registration_session.completed_at is not None:
            return auth_error(
                "El registro de esta cuenta ya fue completado.",
                "REGISTRATION_ALREADY_COMPLETED",
                409
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
                "REGISTRATION_COMPLETED"
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

    except Exception as error:

        db.session.rollback()
        
        print("ERROR REGISTRATION COMPLETE:", error)

        return auth_error(
            "No fue posible completar el registro.",
            "REGISTRATION_COMPLETE_FAILED",
            500
        )