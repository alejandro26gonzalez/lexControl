from flask import request, current_app

from app.routes.auth import auth_bp

from app.helpers.alertCodes import (
    auth_error,
    auth_success
)

from app.services.auth.auth import revoke_current_session
from app.services.users.activation import (
    activate_user_account,
    ActivationError
)


@auth_bp.route("/activate-account", methods=["POST"])
def activate_account():

    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return auth_error(
            "Los datos proporcionados no son válidos.",
            "AUTH_DATA_REQUIRED",
            400
        )

    token = data.get("token")
    new_password = data.get("new_password")
    confirm_password = data.get("confirm_password")

    if not all([token, new_password, confirm_password]):
        return auth_error(
            "Todos los campos son obligatorios.",
            "AUTH_DATA_REQUIRED",
            400
        )

    if not isinstance(token, str) or not isinstance(new_password, str) or not isinstance(confirm_password, str):
        return auth_error(
            "Los datos proporcionados no son válidos.",
            "ACTIVATION_DATA_INVALID",
            400
        )

    if new_password != confirm_password:
        return auth_error(
            "Las contraseñas no coinciden.",
            "PASSWORD_MISMATCH",
            400
        )

    try:
        activate_user_account(
            token=token,
            new_password=new_password
        )
        
        revoke_current_session()

        return auth_success(
            "Cuenta activada correctamente. Ya puedes iniciar sesión.",
            "ACCOUNT_ACTIVATED",
            200
        )

    except ActivationError as error:
        return auth_error(
            str(error),
            "ACTIVATION_FAILED",
            400
        )

    except Exception:
        current_app.logger.exception(
            "Error al activar una cuenta."
        )

        return auth_error(
            "No fue posible activar la cuenta.",
            "ACCOUNT_ACTIVATION_ERROR",
            500
        )