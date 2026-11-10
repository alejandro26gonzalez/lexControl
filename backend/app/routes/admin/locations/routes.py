import logging

from flask import request, current_app

from sqlalchemy.exc import SQLAlchemyError

from app.helpers.alertCodes import (
    auth_error,
    auth_success
)

from app.exceptions import (
    ValidationError,
    ResourceNotFoundError
)

from app.services import role_required

from app.routes.admin.locations import locations_bp

from app.routes.admin.locations.services.commands import (
    get_all_sites,
    get_all_courts,
    create_site,
    create_court,
    update_site,
    update_court,
    toggle_site_status,
    toggle_court_status
)

from app.routes.admin.locations.serializers import (
    serialize_locations
)

logger = logging.getLogger(__name__)


@locations_bp.route("/sites", methods=["GET"])
@role_required("ADMIN", "COLLABORATOR")
def get_sites_route():

    try:
        sites = get_all_sites()
        serialized = serialize_locations(sites)

        return auth_success(
            "Sedes obtenidas correctamente.",
            "SITES_RETRIEVED",
            200,
            sites=serialized,
            total=len(serialized)
        )

    except SQLAlchemyError:
        logger.exception("Error al consultar las sedes.")

        return auth_error(
            "No fue posible obtener las sedes.",
            "SITES_FETCH_ERROR",
            500
        )


@locations_bp.route("/courts", methods=["GET"])
@role_required("ADMIN", "COLLABORATOR")
def get_courts_route():

    try:
        courts = get_all_courts()
        serialized = serialize_locations(courts)

        return auth_success(
            "Juzgados obtenidos correctamente.",
            "COURTS_RETRIEVED",
            200,
            courts=serialized,
            total=len(serialized)
        )

    except SQLAlchemyError:
        logger.exception("Error al consultar los juzgados.")

        return auth_error(
            "No fue posible obtener los juzgados.",
            "COURTS_FETCH_ERROR",
            500
        )

@locations_bp.route("/courts", methods=["POST"])
@role_required("ADMIN")
def create_court_route():

    payload = request.get_json(silent=True)

    try:
        court = create_court(payload)

        return auth_success(
            "Juzgado creado correctamente.",
            "COURT_CREATED",
            201,
            court=serialize_locations([court])[0]
        )

    except ValidationError as error:
        return auth_error(
            "Los datos del juzgado no son válidos.",
            "VALIDATION_ERROR",
            400,
            errors=error.errors
        )

    except SQLAlchemyError:
        logger.exception("Error de base de datos al crear juzgado.")

        return auth_error(
            "No fue posible registrar el juzgado.",
            "COURT_CREATE_ERROR",
            500
        )

    except Exception:
        logger.exception("Error inesperado al crear juzgado.")

        return auth_error(
            "Ocurrió un error al registrar el juzgado.",
            "INTERNAL_ERROR",
            500
        )
        
@locations_bp.route("/sites", methods=["POST"])
@role_required("ADMIN")
def create_site_route():

    payload = request.get_json(silent=True)

    try:
        site = create_site(payload)

        return auth_success(
            "Sede creada correctamente.",
            "SITE_CREATED",
            201,
            site=serialize_locations([site])[0]
        )

    except ValidationError as error:
        return auth_error(
            "Los datos de la sede no son válidos.",
            "VALIDATION_ERROR",
            400,
            errors=error.errors
        )

    except SQLAlchemyError:
        logger.exception("Error de base de datos al crear sede.")

        return auth_error(
            "No fue posible registrar la sede.",
            "SITE_CREATE_ERROR",
            500
        )

    except Exception:
        logger.exception("Error inesperado al crear sede.")

        return auth_error(
            "Ocurrió un error al registrar la sede.",
            "INTERNAL_ERROR",
            500
        )
        
@locations_bp.route("/sites/<int:site_id>", methods=["PATCH"])
@role_required("ADMIN")
def update_site_route(site_id):

    try:
        site = update_site(
            site_id,
            request.get_json(silent=True)
        )

        return auth_success(
            "Sede actualizada correctamente.",
            "SITE_UPDATED",
            200,
            site=serialize_locations([site])[0]
        )

    except ValidationError as error:
        return auth_error(
            "Los datos de la sede no son válidos.",
            "VALIDATION_ERROR",
            400,
            errors=error.errors
        )

    except ResourceNotFoundError as error:
        return auth_error(str(error), "SITE_NOT_FOUND", 404)

    except Exception:
        logger.exception("Error al actualizar sede %s.", site_id)

        return auth_error(
            "No fue posible actualizar la sede.",
            "SITE_UPDATE_ERROR",
            500
        )


@locations_bp.route("/courts/<int:court_id>", methods=["PATCH"])
@role_required("ADMIN")
def update_court_route(court_id):

    try:
        court = update_court(
            court_id,
            request.get_json(silent=True)
        )

        return auth_success(
            "Juzgado actualizado correctamente.",
            "COURT_UPDATED",
            200,
            court=serialize_locations([court])[0]
        )

    except ValidationError as error:
        return auth_error(
            "Los datos del juzgado no son válidos.",
            "VALIDATION_ERROR",
            400,
            errors=error.errors
        )

    except ResourceNotFoundError as error:
        return auth_error(str(error), "COURT_NOT_FOUND", 404)

    except Exception:
        logger.exception("Error al actualizar juzgado %s.", court_id)

        return auth_error(
            "No fue posible actualizar el juzgado.",
            "COURT_UPDATE_ERROR",
            500
        )
        
@locations_bp.route("/sites/<int:site_id>/status", methods=["PATCH"])
@role_required("ADMIN")
def toggle_site_status_route(site_id):

    payload = request.get_json(silent=True)

    if not isinstance(payload, dict) or not isinstance(
        payload.get("is_active"), bool
    ):
        return auth_error(
            "El estado debe ser verdadero o falso.",
            "SITE_STATUS_INVALID",
            400
        )

    try:
        site = toggle_site_status(
            site_id,
            payload["is_active"]
        )

        return auth_success(
            "Estado de sede actualizado correctamente.",
            "SITE_STATUS_UPDATED",
            200,
            site={
                "id": site.id,
                "is_active": site.is_active
            }
        )

    except ResourceNotFoundError as error:
        return auth_error(str(error), "SITE_NOT_FOUND", 404)

    except Exception:
        logger.exception("Error al cambiar estado de sede %s.", site_id)

        return auth_error(
            "No fue posible cambiar el estado de la sede.",
            "SITE_STATUS_ERROR",
            500
        )


@locations_bp.route("/courts/<int:court_id>/status", methods=["PATCH"])
@role_required("ADMIN")
def toggle_court_status_route(court_id):

    payload = request.get_json(silent=True)

    if not isinstance(payload, dict) or not isinstance(
        payload.get("is_active"), bool
    ):
        return auth_error(
            "El estado debe ser verdadero o falso.",
            "COURT_STATUS_INVALID",
            400
        )

    try:
        court = toggle_court_status(
            court_id,
            payload["is_active"]
        )

        return auth_success(
            "Estado del juzgado actualizado correctamente.",
            "COURT_STATUS_UPDATED",
            200,
            court={
                "id": court.id,
                "is_active": court.is_active
            }
        )

    except ResourceNotFoundError as error:
        return auth_error(str(error), "COURT_NOT_FOUND", 404)

    except Exception:
        logger.exception("Error al cambiar estado de juzgado %s.", court_id)

        return auth_error(
            "No fue posible cambiar el estado del juzgado.",
            "COURT_STATUS_ERROR",
            500
        )
        
