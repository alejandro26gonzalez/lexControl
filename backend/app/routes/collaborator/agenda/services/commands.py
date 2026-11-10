
from app import db

from app.models.shared.agenda import Agenda
from app.models.shared.expediente import Expediente
from app.models.sites.site import Site
from app.models.sites.court import Court

from app.exceptions import (
    ValidationError,
    ResourceNotFoundError
)


# =========================================================
# CONSULTAS INTERNAS
# =========================================================

def _obtener_expediente_asignado(expediente_id, collaborator_id):
    """
    Comprueba que el expediente pertenece al colaborador.
    """

    expediente = Expediente.query.filter_by(
        id=expediente_id,
        collaborator_id=collaborator_id
    ).first()

    if not expediente:
        raise ResourceNotFoundError(
            "El expediente no existe o no está asignado al colaborador."
        )

    return expediente


def _obtener_compromiso_asignado(compromiso_id, collaborator_id):
    """
    Obtiene un compromiso perteneciente al colaborador.
    """

    compromiso = Agenda.query.filter_by(
        id=compromiso_id,
        collaborator_id=collaborator_id
    ).first()

    if not compromiso:
        raise ResourceNotFoundError(
            "El compromiso no existe o no tienes acceso a él."
        )

    return compromiso


def _obtener_sede_activa(site_id):
    """
    Obtiene una sede existente y activa.
    """

    if site_id is None:
        return None

    site = Site.query.filter_by(
        id=site_id,
        is_active=True
    ).first()

    if not site:
        raise ResourceNotFoundError(
            "La sede seleccionada no existe o está inactiva."
        )

    return site


def _obtener_juzgado_activo(court_id):
    """
    Obtiene un juzgado existente y activo.
    """

    if court_id is None:
        return None

    court = Court.query.filter_by(
        id=court_id,
        is_active=True
    ).first()

    if not court:
        raise ResourceNotFoundError(
            "El juzgado seleccionado no existe o está inactivo."
        )

    return court


def _validar_disponibilidad(
    collaborator_id,
    starts_at,
    ends_at,
    exclude_id=None
):
    """
    Evita programar compromisos simultáneos
    para el mismo colaborador.

    Los compromisos cancelados no bloquean la agenda.
    """

    query = Agenda.query.filter(
        Agenda.collaborator_id == collaborator_id,
        Agenda.status != "CANCELADO",
        Agenda.starts_at < ends_at,
        Agenda.ends_at > starts_at
    )

    if exclude_id is not None:
        query = query.filter(
            Agenda.id != exclude_id
        )

    conflicto = query.first()

    if conflicto:
        raise ValidationError(
            "Ya existe un compromiso programado "
            "en ese horario."
        )


# =========================================================
# CREAR COMPROMISO
# =========================================================

def crear_compromiso(data, collaborator_id):
    """
    Registra una reunión con cliente o audiencia judicial.

    El cliente se obtiene directamente del expediente.
    El colaborador autenticado se asigna automáticamente.

    La sede y el juzgado se obtienen desde sus catálogos.
    """

    try:

        # -------------------------------------------------
        # 1. Verificar propiedad del expediente
        # -------------------------------------------------

        expediente = _obtener_expediente_asignado(
            data["expediente_id"],
            collaborator_id
        )

        # -------------------------------------------------
        # 2. Consultar sede y juzgado
        # -------------------------------------------------

        site = _obtener_sede_activa(
            data.get("site_id")
        )

        court = _obtener_juzgado_activo(
            data.get("court_id")
        )

        # -------------------------------------------------
        # 3. Verificar disponibilidad
        # -------------------------------------------------

        _validar_disponibilidad(
            collaborator_id=collaborator_id,
            starts_at=data["starts_at"],
            ends_at=data["ends_at"]
        )

        # -------------------------------------------------
        # 4. Construir registro
        # -------------------------------------------------

        compromiso = Agenda(
            expediente_id=expediente.id,

            client_id=expediente.client_id,
            collaborator_id=collaborator_id,
            requested_by_id=collaborator_id,

            title=data["title"],
            description=data.get("description"),

            event_type=data["event_type"],
            modality=data["modality"],

            starts_at=data["starts_at"],
            ends_at=data["ends_at"],

            site_id=site.id if site else None,
            court_id=court.id if court else None,

            # Compatibilidad con columnas descriptivas existentes
            location=(
                f"{site.name}, {site.address}, {site.city}"
                if site else None
            ),

            court=court.name if court else None,

            meeting_url=data.get("meeting_url"),

            status="PENDIENTE"
        )

        # -------------------------------------------------
        # 5. Persistir
        # -------------------------------------------------

        db.session.add(compromiso)
        db.session.commit()

        return compromiso

    except Exception:
        db.session.rollback()
        raise


# =========================================================
# REPROGRAMAR COMPROMISO
# =========================================================

def reprogramar_compromiso(
    compromiso_id,
    collaborator_id,
    data
):
    """
    Modifica la fecha y los horarios de un compromiso.

    Solo permite reprogramar compromisos pendientes.
    """

    try:
        compromiso = _obtener_compromiso_asignado(
            compromiso_id,
            collaborator_id
        )

        if compromiso.status != "PENDIENTE":
            raise ValidationError(
                "Solo se pueden reprogramar compromisos pendientes."
            )

        _validar_disponibilidad(
            collaborator_id=collaborator_id,
            starts_at=data["starts_at"],
            ends_at=data["ends_at"],
            exclude_id=compromiso.id
        )

        compromiso.starts_at = data["starts_at"]
        compromiso.ends_at = data["ends_at"]

        db.session.commit()

        return compromiso

    except Exception:
        db.session.rollback()
        raise


# =========================================================
# CANCELAR COMPROMISO
# =========================================================

def cancelar_compromiso(compromiso_id, collaborator_id):
    """
    Cancela un compromiso perteneciente al colaborador.
    """

    try:
        compromiso = _obtener_compromiso_asignado(
            compromiso_id,
            collaborator_id
        )

        if compromiso.status != "PENDIENTE":
            raise ValidationError(
                "Solo se pueden cancelar compromisos pendientes."
            )

        compromiso.status = "CANCELADO"

        db.session.commit()

        return compromiso

    except Exception:
        db.session.rollback()
        raise
