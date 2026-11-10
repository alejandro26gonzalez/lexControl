import logging

from flask import request
from sqlalchemy.exc import SQLAlchemyError

from app.helpers.alertCodes import auth_error, auth_success
from app.exceptions import ValidationError, ResourceNotFoundError
from app.services import role_required

from app.routes.admin.catalog.specialties import specialties_bp

from app.routes.admin.catalog.specialties.services.commands import (
    get_all_specialties,
    create_specialty,
    update_specialty,
    toggle_specialty_status
)

from app.routes.admin.catalog.specialties.serializers import (
    serialize_specialty,
    serialize_specialties
)


logger = logging.getLogger(__name__)


# =========================================
# GET - Obtener especialidades
# =========================================

@specialties_bp.route("/", methods=["GET"])
@role_required("ADMIN")
def get_specialties():

    try:
        specialties = get_all_specialties()

        return auth_success(
            "Especialidades obtenidas correctamente.",
            "SPECIALTIES_FETCHED",
            specialties=serialize_specialties(specialties)
        )

    except SQLAlchemyError:
        logger.exception("Error consultando especialidades.")

        return auth_error(
            "No fue posible consultar las especialidades.",
            "SPECIALTIES_FETCH_ERROR",
            500
        )


# =========================================
# POST - Crear especialidad
# =========================================

@specialties_bp.route("/", methods=["POST"])
@role_required("ADMIN")
def post_specialty():

    try:
        payload = request.get_json(silent=True)

        specialty = create_specialty(payload)

        return auth_success(
            "Especialidad creada correctamente.",
            "SPECIALTY_CREATED",
            201,
            specialty=serialize_specialty(specialty)
        )

    except ValidationError as error:
        return auth_error(
            str(error),
            "VALIDATION_ERROR",
            400
        )

    except SQLAlchemyError:
        logger.exception("Error creando especialidad.")

        return auth_error(
            "No fue posible crear la especialidad.",
            "SPECIALTY_CREATE_ERROR",
            500
        )


# =========================================
# PATCH - Actualizar especialidad
# =========================================

@specialties_bp.route("/<int:specialty_id>", methods=["PATCH"])
@role_required("ADMIN")
def patch_specialty(specialty_id):

    try:
        payload = request.get_json(silent=True)

        specialty = update_specialty(
            specialty_id,
            payload
        )

        return auth_success(
            "Especialidad actualizada correctamente.",
            "SPECIALTY_UPDATED",
            specialty=serialize_specialty(specialty)
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
            "SPECIALTY_NOT_FOUND",
            404
        )

    except SQLAlchemyError:
        logger.exception("Error actualizando especialidad.")

        return auth_error(
            "No fue posible actualizar la especialidad.",
            "SPECIALTY_UPDATE_ERROR",
            500
        )


# =========================================
# PATCH - Cambiar estado de la especialidad
# =========================================

@specialties_bp.route("/<int:specialty_id>/status", methods=["PATCH"])
@role_required("ADMIN")
def patch_specialty_status(specialty_id):

    try:
        payload = request.get_json(silent=True) or {}

        specialty = toggle_specialty_status(
            specialty_id,
            payload.get("is_active")
        )

        return auth_success(
            "Estado de la especialidad actualizado correctamente.",
            "SPECIALTY_STATUS_UPDATED",
            specialty=serialize_specialty(specialty)
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
            "SPECIALTY_NOT_FOUND",
            404
        )

    except SQLAlchemyError:
        logger.exception("Error cambiando estado de la especialidad.")

        return auth_error(
            "No fue posible cambiar el estado de la especialidad.",
            "SPECIALTY_STATUS_ERROR",
            500
        )