
import logging

from datetime import datetime
from zoneinfo import ZoneInfo

from flask import request, jsonify
from sqlalchemy.exc import SQLAlchemyError

from app.routes.collaborator.agenda import agenda_bp

from app.helpers.alertCodes import auth_error, auth_success

from app.routes.collaborator.agenda.serializers import (
    serialize_agenda,
    serialize_agenda_list
)

from app.routes.collaborator.agenda.validators import (
    validar_creacion_agenda,
    validar_reprogramacion,
    validar_filtros_agenda
)

from app.routes.collaborator.agenda.services.commands import (
    crear_compromiso,
    reprogramar_compromiso,
    cancelar_compromiso
)

from app.routes.collaborator.agenda.services.queries import (
    obtener_compromisos,
    obtener_resumen_agenda
)

from app.services.auth.auth import get_current_session

from app.services import role_required

from app.exceptions import (
    ValidationError,
    ResourceNotFoundError
)


logger = logging.getLogger(__name__)

TIMEZONE = ZoneInfo("America/Bogota")


# =========================================================
# RESPUESTAS
# =========================================================

def obtener_usuario_actual():
    """
    Obtiene el ID del usuario autenticado desde la sesión.
    """
    current_session = get_current_session()
    
    if not current_session:
        return None

    return current_session.user_id


# =========================================================
# GET: LISTAR AGENDA
# =========================================================

@agenda_bp.route("", methods=["GET"])
@role_required("COLLABORATOR")
def listar_agenda():

    try:
        
        collaborator_id = obtener_usuario_actual()

        filtros = validar_filtros_agenda(
            request.args
        )

        compromisos = obtener_compromisos(
            collaborator_id,
            filtros
        )

        return auth_success(
            "Agenda consultada correctamente.",
            "APPOINTMENT_SEARCH",
            200,
            data=serialize_agenda_list(compromisos)
        )

    except ValidationError as e:
        return auth_error(
            f"{str(e)}",
            "APPOINTMENT_SEARCH_ERROR",
            400
        )

    except SQLAlchemyError:
        logger.exception("Error consultando la agenda.")
        return auth_error(
            "No fue posible consultar la agenda",
            "APPOINTMENT_SEARCH_GENERIC",
            500
        )


# =========================================================
# GET: RESUMEN DE AGENDA
# =========================================================


@agenda_bp.route("/summary", methods=["GET"])
@role_required("COLLABORATOR")
def resumen_agenda():

    try:
        collaborator_id = obtener_usuario_actual()

        if not collaborator_id:
            return auth_error(
                "No hay una sesión autenticada.",
                "AGENDA_ERROR",
                401
            )

        filtros = validar_filtros_agenda(
            request.args
        )

        resumen = obtener_resumen_agenda(
            collaborator_id,
            filtros
        )

        return auth_success(
            "Resumen de agenda consultado.",
            "APPOINTMENT_SEARCH",
            200,
            data=resumen
        )

    except ValidationError as e:
        return auth_error(
            str(e),
            "AGENDA_ERROR",
            400
        )

    except SQLAlchemyError:

        return auth_error(
            "No fue posible obtener el resumen.",
            "AGENDA_ERROR",
            500
        )


# =========================================================
# POST: CREAR COMPROMISO
# =========================================================

@agenda_bp.route("", methods=["POST"])
@role_required("COLLABORATOR")
def registrar_compromiso():

    try:
        collaborator_id = obtener_usuario_actual()

        if not collaborator_id:
            return auth_error(
                "No hay una sesión autenticada.",
                "APPOINTMENT_CREATE_ERROR",
                401
            )

        data = request.get_json(silent=True)

        datos_validados = validar_creacion_agenda(
            data
        )

        compromiso = crear_compromiso(
            datos_validados,
            collaborator_id
        )

        return auth_success(
            "Compromiso registrado correctamente.",
            "APPOINTMENT_CREATED",
            201,
            data=serialize_agenda(compromiso)
        )

    except ValidationError as e:
        # return auth_error(
        #         f"{str(e)}",
        #         "APPOINTMENT_CREATE_ERROR",
        #         400
        #     )
        logger.exception("Error de validación creando compromiso.")

        return auth_error(
            str(e),
            "APPOINTMENT_CREATE_ERROR",
            400
        )

    except ResourceNotFoundError as e:
        return auth_error(
                f"{str(e)}",
                "APPOINTMENT_CREATE_ERROR",
                404
            )

    except SQLAlchemyError:
        logger.exception("Error registrando compromiso.")
        return auth_error(
                "No fue posible registrar el compromiso.",
                "APPOINTMENT_CREATE_ERROR",
                500
            )


# =========================================================
# PATCH: REPROGRAMAR COMPROMISO
# =========================================================

@agenda_bp.route("/<int:compromiso_id>/reschedule", methods=["PATCH"])
@role_required("COLLABORATOR")
def reprogramar_cita(compromiso_id):

    try:
        collaborator_id = obtener_usuario_actual()

        if not collaborator_id:
            return auth_error(
                "No hay una sesión autenticada.",
                "APPOINTMENT_RESCHEDULE_ERROR",
                401
            )

        data = request.get_json(silent=True)

        datos_validados = validar_reprogramacion(
            data
        )

        compromiso = reprogramar_compromiso(
            compromiso_id=compromiso_id,
            collaborator_id=collaborator_id,
            data=datos_validados
        )

        return auth_success(
                "Compromiso reprogramado correctamente.",
                "APPOINTMENT_RESCHEDULED",
                200,
                data=serialize_agenda(compromiso)
            )

    except ValidationError as e:
        return auth_error(
                f"{str(e)}",
                "APPOINTMENT_RESCHEDULE_ERROR",
                400
            )

    except ResourceNotFoundError as e:
        return auth_error(
                f"{str(e)}",
                "APPOINTMENT_RESCHEDULE_ERROR",
                404
            )

    except SQLAlchemyError:
        logger.exception("Error reprogramando compromiso.")
        return auth_error(
                "No fue posible reprogramar el compromiso.",
                "APPOINTMENT_RESCHEDULE_ERROR",
                500
            )


# =========================================================
# PATCH: CANCELAR COMPROMISO
# =========================================================

@agenda_bp.route("/<int:compromiso_id>/cancel", methods=["PATCH"])
@role_required("COLLABORATOR")
def cancelar_cita(compromiso_id):

    try:
        collaborator_id = obtener_usuario_actual()

        if not collaborator_id:
            return auth_error(
                "No hay una sesión autenticada.",
                "APPOINTMENT_CANCEL_ERROR",
                401
            )

        compromiso = cancelar_compromiso(
            compromiso_id,
            collaborator_id
        )

        return auth_success(
                "Compromiso cancelado correctamente.",
                "APPOINTMENT_CANCELLED",
                200,
                data=serialize_agenda(compromiso)
            )

    except ValidationError as e:
        return auth_error(
                f"{str(e)}",
                "APPOINTMENT_CANCEL_ERROR",
                400
            )

    except ResourceNotFoundError as e:
        return auth_error(
                f"{str(e)}",
                "APPOINTMENT_CANCEL_ERROR",
                404
            )

    except SQLAlchemyError:
        logger.exception("Error cancelando compromiso.")
        return auth_error(
                "No fue posible cancelar el compromiso.",
                "APPOINTMENT_CANCEL_ERROR",
                500
            )
