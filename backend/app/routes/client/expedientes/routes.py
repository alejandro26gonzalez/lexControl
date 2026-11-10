import logging

from flask import request
from sqlalchemy.exc import SQLAlchemyError

from app.helpers.alertCodes import auth_error, auth_success
from app.exceptions import ValidationError, ResourceNotFoundError
from app.services import role_required

from app.services import get_current_session

from app.routes.client.expedientes import expedientes_bp

from app.routes.client.expedientes.services.queries import (
    get_client_expedientes,
    get_client_expediente_by_id
)

from app.routes.client.expedientes.serializers import (
    serialize_expediente,
    serialize_expedientes
)

from app.routes.client.expedientes.validators import (
    validate_expediente_filters
)


logger = logging.getLogger(__name__)


# =========================================
# GET - Obtener expedientes del cliente
# =========================================

@expedientes_bp.route("/", methods=["GET"])
@role_required("CLIENT")
def get_expedientes():

    try:

        current_session = get_current_session()

        if not current_session:
            return auth_error(
                "No se pudo identificar la sesión del usuario.",
                "SESSION_NOT_FOUND",
                401
            )

        filters = validate_expediente_filters(
            request.args.to_dict()
        )

        expedientes = get_client_expedientes(
            current_session.user_id,
            filters
        )

        return auth_success(
            "Expedientes obtenidos correctamente.",
            "EXPEDIENTES_FETCHED",
            expedientes=serialize_expedientes(expedientes)
        )

    except ValidationError as error:
        return auth_error(
            str(error),
            "VALIDATION_ERROR",
            400
        )

    except SQLAlchemyError:
        logger.exception(
            "Error consultando expedientes del cliente."
        )

        return auth_error(
            "No fue posible consultar los expedientes.",
            "EXPEDIENTES_FETCH_ERROR",
            500
        )


# =========================================
# GET - Obtener expediente por ID
# =========================================

@expedientes_bp.route("/<int:expediente_id>", methods=["GET"])
@role_required("CLIENT")
def get_expediente(expediente_id):

    try:

        current_session = get_current_session()

        if not current_session:
            return auth_error(
                "No se pudo identificar la sesión del usuario.",
                "SESSION_NOT_FOUND",
                401
            )

        expediente = get_client_expediente_by_id(
            current_session.user_id,
            expediente_id
        )

        return auth_success(
            "Expediente obtenido correctamente.",
            "EXPEDIENTE_FETCHED",
            expediente=serialize_expediente(expediente)
        )

    except ResourceNotFoundError as error:
        return auth_error(
            str(error),
            "EXPEDIENTE_NOT_FOUND",
            404
        )

    except SQLAlchemyError:
        logger.exception(
            "Error consultando expediente del cliente."
        )

        return auth_error(
            "No fue posible consultar el expediente.",
            "EXPEDIENTE_FETCH_ERROR",
            500
        )