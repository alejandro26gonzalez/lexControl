import logging

from flask import request
from sqlalchemy.exc import SQLAlchemyError

from app.helpers.alertCodes import auth_error, auth_success
from app.exceptions import ValidationError, ResourceNotFoundError
from app.services import role_required

from app.routes.admin.catalog.professionals import professionals_bp

from app.routes.admin.catalog.professionals.services.commands import (
    get_all_professionals,
    create_professional,
    update_professional,
    toggle_professional_status
)

from app.routes.admin.catalog.professionals.serializers import (
    serialize_professional,
    serialize_professionals
)


logger = logging.getLogger(__name__)


# =========================================
# GET - Obtener profesionales
# =========================================

@professionals_bp.route("/", methods=["GET"])
@role_required("ADMIN")
def get_professionals():

    try:
        professionals = get_all_professionals()

        return auth_success(
            "Profesionales obtenidos correctamente.",
            "PROFESSIONALS_FETCHED",
            professionals=serialize_professionals(professionals)
        )

    except SQLAlchemyError:
        logger.exception("Error consultando profesionales.")

        return auth_error(
            "No fue posible consultar los profesionales.",
            "PROFESSIONALS_FETCH_ERROR",
            500
        )


# =========================================
# POST - Crear profesional
# =========================================

@professionals_bp.route("/", methods=["POST"])
@role_required("ADMIN")
def post_professional():

    try:
        payload = request.get_json(silent=True)

        professional = create_professional(payload)

        return auth_success(
            "Profesional creado correctamente.",
            "PROFESSIONAL_CREATED",
            201,
            professional=serialize_professional(professional)
        )

    except ValidationError as error:
        return auth_error(
            str(error),
            "VALIDATION_ERROR",
            400
        )

    except SQLAlchemyError:
        logger.exception("Error creando profesional.")

        return auth_error(
            "No fue posible crear el profesional.",
            "PROFESSIONAL_CREATE_ERROR",
            500
        )


# =========================================
# PATCH - Actualizar profesional
# =========================================

@professionals_bp.route("/<int:professional_id>", methods=["PATCH"])
@role_required("ADMIN")
def patch_professional(professional_id):

    try:
        payload = request.get_json(silent=True)

        professional = update_professional(
            professional_id,
            payload
        )

        return auth_success(
            "Profesional actualizado correctamente.",
            "PROFESSIONAL_UPDATED",
            professional=serialize_professional(professional)
        )

    except ValidationError as error:
        return auth_error(
            str(error),
            "VALIDATION_ERROR",
            400
        )

    except ResourceNotFoundError as error:
        return auth_error(
            str(error),
            "PROFESSIONAL_NOT_FOUND",
            404
        )

    except SQLAlchemyError:
        logger.exception("Error actualizando profesional.")

        return auth_error(
            "No fue posible actualizar el profesional.",
            "PROFESSIONAL_UPDATE_ERROR",
            500
        )


# =========================================
# PATCH - Cambiar estado del profesional
# =========================================

@professionals_bp.route(
    "/<int:professional_id>/status",
    methods=["PATCH"]
)
@role_required("ADMIN")
def patch_professional_status(professional_id):

    try:
        payload = request.get_json(silent=True) or {}

        professional = toggle_professional_status(
            professional_id,
            payload.get("is_active")
        )

        return auth_success(
            "Estado del profesional actualizado correctamente.",
            "PROFESSIONAL_STATUS_UPDATED",
            professional=serialize_professional(professional)
        )

    except ValidationError as error:
        return auth_error(
            str(error),
            "VALIDATION_ERROR",
            400
        )

    except ResourceNotFoundError as error:
        return auth_error(
            str(error),
            "PROFESSIONAL_NOT_FOUND",
            404
        )

    except SQLAlchemyError:
        logger.exception("Error cambiando estado del profesional.")

        return auth_error(
            "No fue posible cambiar el estado del profesional.",
            "PROFESSIONAL_STATUS_ERROR",
            500
        )