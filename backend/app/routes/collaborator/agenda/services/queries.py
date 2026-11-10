
from datetime import datetime, time, timedelta, timezone
from zoneinfo import ZoneInfo

from sqlalchemy.orm import joinedload, selectinload
from sqlalchemy import func, case

from app.models.shared.agenda import Agenda


# =========================================================
# CONFIGURACIÓN
# =========================================================

TIMEZONE = ZoneInfo("America/Bogota")

def _obtener_rango_periodo(periodo, fecha):
    """
    Calcula los límites de un periodo en Bogotá
    y los convierte a UTC para consultar PostgreSQL.

    Intervalo utilizado: [inicio, fin).
    """

    if periodo == "day":

        inicio_local = datetime.combine(
            fecha,
            time.min,
            tzinfo=TIMEZONE
        )

        fin_local = inicio_local + timedelta(days=1)

    elif periodo == "week":

        inicio_semana = fecha - timedelta(
            days=fecha.weekday()
        )

        inicio_local = datetime.combine(
            inicio_semana,
            time.min,
            tzinfo=TIMEZONE
        )

        fin_local = inicio_local + timedelta(days=7)

    elif periodo == "month":

        inicio_local = datetime(
            fecha.year,
            fecha.month,
            1,
            tzinfo=TIMEZONE
        )

        if fecha.month == 12:
            fin_local = datetime(
                fecha.year + 1,
                1,
                1,
                tzinfo=TIMEZONE
            )
        else:
            fin_local = datetime(
                fecha.year,
                fecha.month + 1,
                1,
                tzinfo=TIMEZONE
            )

    else:
        raise ValueError(
            "Periodo de agenda no soportado."
        )

    inicio_utc = inicio_local.astimezone(timezone.utc)
    fin_utc = fin_local.astimezone(timezone.utc)

    return inicio_utc, fin_utc


def _aplicar_filtro_temporal(query, filtros):
    """
    Aplica el rango temporal cuando se especifica
    un periodo de consulta.
    """

    periodo = filtros.get("period")
    fecha = filtros.get("date")

    if periodo and fecha:
        inicio, fin = _obtener_rango_periodo(
            periodo,
            fecha
        )

        query = query.filter(
            Agenda.starts_at >= inicio,
            Agenda.starts_at < fin
        )

    return query


# =========================================================
# CONSULTAR COMPROMISOS
# =========================================================

def obtener_compromisos(
    collaborator_id,
    filtros=None
):
    """
    Consulta los compromisos pertenecientes al colaborador.

    Filtros disponibles:
        period
        date
        event_type
        status

    Por defecto excluye los compromisos cancelados.
    """

    filtros = filtros or {}

    query = (
        Agenda.query
        .options(
            joinedload(Agenda.expediente),
            joinedload(Agenda.client)
        )
        .filter(
            Agenda.collaborator_id == collaborator_id
        )
    )

    # Filtro temporal
    query = _aplicar_filtro_temporal(
        query,
        filtros
    )

    # Tipo de compromiso
    event_type = filtros.get("event_type")

    if event_type:
        query = query.filter(
            Agenda.event_type == event_type
        )

    # Estado
    status = filtros.get("status")

    if status:
        query = query.filter(
            Agenda.status == status
        )
    else:
        query = query.filter(
            Agenda.status != "CANCELADO"
        )

    return (
        query
        .order_by(Agenda.starts_at.asc())
        .all()
    )


# =========================================================
# CONSULTAR COMPROMISO POR ID
# =========================================================

def obtener_compromiso(
    compromiso_id,
    collaborator_id
):
    """
    Consulta un compromiso específico verificando
    que pertenezca al colaborador.
    """

    return (
        Agenda.query
        .options(
            joinedload(Agenda.expediente),
            joinedload(Agenda.client)
        )
        .filter(
            Agenda.id == compromiso_id,
            Agenda.collaborator_id == collaborator_id
        )
        .first()
    )


# =========================================================
# RESUMEN DE AGENDA
# =========================================================
def obtener_resumen_agenda(
    collaborator_id,
    filtros=None
):
    """
    Obtiene los indicadores de agenda del colaborador.

    Permite consultar por día, semana o mes.
    Sin periodo, devuelve el histórico completo.

    Excluye compromisos cancelados.
    """

    filtros = filtros or {}

    query = (
        Agenda.query
        .with_entities(
            func.count(Agenda.id).label("total"),

            func.sum(
                case(
                    (Agenda.status == "PENDIENTE", 1),
                    else_=0
                )
            ).label("pending"),

            func.sum(
                case(
                    (Agenda.status == "COMPLETADO", 1),
                    else_=0
                )
            ).label("completed"),

            func.sum(
                case(
                    (Agenda.event_type == "AUDIENCIA", 1),
                    else_=0
                )
            ).label("hearings")
        )
        .filter(
            Agenda.collaborator_id == collaborator_id,
            Agenda.status != "CANCELADO"
        )
    )

    # Mismo filtro temporal que utiliza el listado
    query = _aplicar_filtro_temporal(
        query,
        filtros
    )

    resultados = query.first()
    datos = resultados._mapping

    return {
        "total": datos["total"] or 0,
        "pending": datos["pending"] or 0,
        "completed": datos["completed"] or 0,
        "hearings": datos["hearings"] or 0
    }

# =========================================================
# CONSULTAR PRÓXIMOS COMPROMISOS
# =========================================================

def obtener_proximos_compromisos(
    collaborator_id,
    limite=5
):
    """
    Obtiene los próximos compromisos pendientes
    del colaborador.
    """

    ahora = datetime.now(TIMEZONE)

    return (
        Agenda.query
        .options(
            joinedload(Agenda.expediente),
            joinedload(Agenda.client)
        )
        .filter(
            Agenda.collaborator_id == collaborator_id,
            Agenda.status == "PENDIENTE",
            Agenda.starts_at >= ahora
        )
        .order_by(
            Agenda.starts_at.asc()
        )
        .limit(limite)
        .all()
    )
