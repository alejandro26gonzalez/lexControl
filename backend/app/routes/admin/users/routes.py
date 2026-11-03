import logging
from urllib.parse import urlencode

from flask import request, current_app

from app import db

from sqlalchemy.exc import IntegrityError, SQLAlchemyError

from app.helpers.alertCodes import (
    auth_error,
    auth_success
)

from app.exceptions import (
    ValidationError,
    DuplicateResourceError,
    ResourceNotFoundError
)

from app.services import (
    role_required,
    get_current_session
)

from app.routes.admin.users import users_bp
from app.routes.admin.users.services import get_all_users
from app.routes.admin.users.serializers import serialize_users
from app.routes.admin.users.services.commands import (
    create_user, 
    update_user,
    toggle_user_status,
    delete_user,
    get_user_stats
)

from app.services.email.factory import get_email_service
from app.services.email.template_renderer import render_email_template

logger = logging.getLogger(__name__)

@users_bp.route("/", methods=["GET"])
@role_required("ADMIN")
def get_users():
    """
    Obtiene el listado de usuarios para el módulo administrativo.
    """

    try:
        users = get_all_users()
        serialized_users = serialize_users(users)

        return auth_success(
            "Usuarios obtenidos correctamente.",
            "USERS_RETRIEVED",
            200,
            users=serialized_users,
            total=len(serialized_users)
        )

    except Exception:
        logger.exception("Error al obtener usuarios.")

        return auth_error(
            "No fue posible obtener los usuarios.",
            "USERS_FETCH_ERROR",
            500
        )


@users_bp.route("/", methods=["POST"])
@role_required("ADMIN")
def create_user_route():
    payload = request.get_json(silent=True)

    try:
        result = create_user(payload)

        user = result["user"]
        activation_token = result["activation_token"]

        # Construir URL de activación
        frontend_url = current_app.config["FRONTEND_URL"]

        query_string = urlencode({
            "token": activation_token
        })

        activation_url = (
            f"{frontend_url}/activate-account?{query_string}"
        )

        # Renderizar plantilla de correo
        html = render_email_template(
            "activation_email.html",
            user_name=user.profile.name,
            activation_url=activation_url,
            expiration_hours=24
        )

        # Enviar correo mediante Resend
        email_sent = False

        try:
            email_service = get_email_service()

            email_service.send_email(
                to=user.email,
                subject="Activa tu cuenta de LexControl",
                html=html
            )

            email_sent = True

        except Exception:
            logger.exception(
                "No fue posible enviar el correo de activación a %s",
                user.email
            )

        return auth_success(
            "Usuario creado correctamente. Pendiente de activación.",
            "USER_CREATED",
            201,
            user={
                "id": user.id,
                "email": user.email
            },
            email_sent=email_sent
        )

    except ValidationError as error:
        return auth_error(
            "Los datos proporcionados no son válidos.",
            "VALIDATION_ERROR",
            400,
            errors=error.errors
        )

    except DuplicateResourceError as error:
        return auth_error(
            error.message,
            "USER_ALREADY_EXISTS",
            409
        )

    except ResourceNotFoundError as error:
        return auth_error(
            error.message,
            "ROLE_NOT_FOUND",
            404
        )

    except IntegrityError:
        logger.exception(
            "Conflicto de integridad al crear usuario."
        )

        return auth_error(
            "Existe un conflicto con los datos registrados.",
            "INTEGRITY_ERROR",
            409
        )

    except SQLAlchemyError:
        logger.exception(
            "Error de base de datos al crear usuario."
        )

        return auth_error(
            "Ocurrió un error interno al crear el usuario.",
            "DATABASE_ERROR",
            500
        )

    except Exception:
        logger.exception(
            "Error inesperado al crear usuario."
        )

        return auth_error(
            "Ocurrió un error inesperado al crear el usuario.",
            "INTERNAL_ERROR",
            500
        )


@users_bp.route("/<int:user_id>", methods=["PATCH"])
@role_required("ADMIN")
def update_user_route(user_id):

    payload = request.get_json(silent=True)

    try:
        user = update_user(user_id, payload)

        return auth_success(
            "Usuario actualizado correctamente.",
            "USER_UPDATED",
            200,
            user={
                "id": user.id,
                "email": user.email
            }
        )

    except ValueError as error:
        return auth_error(
            str(error),
            "USER_VALIDATION_ERROR",
            400
        )

    except DuplicateResourceError as error:
        return auth_error(
            str(error),
            "USER_ALREADY_EXISTS",
            409
        )

    except ResourceNotFoundError as error:
        return auth_error(
            str(error),
            "USER_NOT_FOUND",
            404
        )

    except Exception:
        current_app.logger.exception(
            "Error al actualizar el usuario %s.",
            user_id
        )

        return auth_error(
            "No fue posible actualizar el usuario.",
            "USER_UPDATE_ERROR",
            500
        )

        
@users_bp.route("/<int:user_id>/status", methods=["PATCH"])
@role_required("ADMIN")
def toggle_user_status_route(user_id):

    payload = request.get_json(silent=True)

    if not isinstance(payload, dict):
        return auth_error(
            "Los datos proporcionados no son válidos.",
            "USER_DATA_INVALID",
            400
        )

    is_active = payload.get("is_active")

    if not isinstance(is_active, bool):
        return auth_error(
            "El estado debe ser verdadero o falso.",
            "USER_STATUS_INVALID",
            400
        )

    try:
        user = toggle_user_status(user_id, is_active)

        return auth_success(
            "Usuario habilitado correctamente."
            if user.is_active
            else "Usuario inhabilitado correctamente.",
            "USER_STATUS_UPDATED",
            200,
            user={
                "id": user.id,
                "is_active": user.is_active
            }
        )

    except ResourceNotFoundError as error:
        return auth_error(
            str(error),
            "USER_NOT_FOUND",
            404
        )

    except Exception:
        current_app.logger.exception(
            "Error al cambiar el estado del usuario %s.",
            user_id
        )

        return auth_error(
            "No fue posible cambiar el estado del usuario.",
            "USER_STATUS_ERROR",
            500
        )
        
@users_bp.route("/<int:user_id>", methods=["DELETE"])
@role_required("ADMIN")
def delete_user_route(user_id):

    current_session = get_current_session()

    if current_session and current_session.user_id == user_id:
        return auth_error(
            "No puedes eliminar tu propia cuenta.",
            "USER_SELF_DELETE_FORBIDDEN",
            403
        )

    try:
        delete_user(user_id)

        return auth_success(
            "Usuario eliminado correctamente.",
            "USER_DELETED",
            200,
            user={
                "id": user_id
            }
        )

    except ResourceNotFoundError as error:
        return auth_error(
            str(error),
            "USER_NOT_FOUND",
            404
        )

    except IntegrityError:
        db.session.rollback()

        return auth_error(
            "No es posible eliminar el usuario porque tiene registros asociados.",
            "USER_DELETE_CONFLICT",
            409
        )

    except SQLAlchemyError:
        db.session.rollback()

        current_app.logger.exception(
            "Error de base de datos al eliminar el usuario %s.",
            user_id
        )

        return auth_error(
            "No fue posible eliminar el usuario.",
            "USER_DELETE_ERROR",
            500
        )

    except Exception:
        db.session.rollback()

        current_app.logger.exception(
            "Error al eliminar el usuario %s.",
            user_id
        )

        return auth_error(
            "No fue posible eliminar el usuario.",
            "USER_DELETE_ERROR",
            500
        )



@users_bp.route("/stats", methods=["GET"])
@role_required("ADMIN")
def get_user_stats_route():

    try:
        stats = get_user_stats()

        return auth_success(
            "Estadísticas de usuarios obtenidas correctamente.",
            "USER_STATS_RETRIEVED",
            200,
            stats=stats
        )

    except SQLAlchemyError:
        current_app.logger.exception(
            "Error al consultar las estadísticas de usuarios."
        )

        return auth_error(
            "No fue posible obtener las estadísticas de usuarios.",
            "USER_STATS_ERROR",
            500
        )