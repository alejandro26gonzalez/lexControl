
from datetime import datetime
from time import timezone
from zoneinfo import ZoneInfo
from urllib.parse import urlparse

from app.exceptions import ValidationError


# =========================================================
# CONFIGURACIÓN
# =========================================================

TIMEZONE = ZoneInfo("America/Bogota")

TIPOS_COMPROMISO = {
    "REUNION",
    "AUDIENCIA"
}

MODALIDADES = {
    "VIRTUAL",
    "PRESENCIAL"
}

ESTADOS = {
    "PENDIENTE",
    "COMPLETADO",
    "CANCELADO"
}

PERIODOS_AGENDA = {
    "day",
    "week",
    "month"
}

FILTROS_PERMITIDOS = {
    "date",
    "period",
    "event_type",
    "status"
}


# =========================================================
# VALIDACIONES GENERALES
# =========================================================

def validar_texto(valor, campo, max_length, obligatorio=True):

    if valor is None:
        valor = ""

    if not isinstance(valor, str):
        raise ValidationError(
            f"El campo {campo} debe ser texto."
        )

    valor = valor.strip()

    if obligatorio and not valor:
        raise ValidationError(
            f"El campo {campo} es obligatorio."
        )

    if len(valor) > max_length:
        raise ValidationError(
            f"El campo {campo} supera el límite permitido."
        )

    return valor or None


def validar_id(valor, campo):

    try:
        identificador = int(valor)
    except (TypeError, ValueError):
        raise ValidationError(
            f"El campo {campo} debe ser un identificador válido."
        )

    if identificador <= 0:
        raise ValidationError(
            f"El campo {campo} debe ser mayor que cero."
        )

    return identificador


# =========================================================
# FECHAS Y HORARIOS
# =========================================================

def validar_fecha_hora(fecha, hora, campo):

    try:
        valor = datetime.strptime(
            f"{fecha} {hora}",
            "%Y-%m-%d %H:%M"
        )

        return valor.replace(tzinfo=TIMEZONE)

    except (TypeError, ValueError):
        raise ValidationError(
            f"La fecha u hora de {campo} no tiene un formato válido."
        )


def validar_horario(starts_at, ends_at):

    if ends_at <= starts_at:
        raise ValidationError(
            "La hora de finalización debe ser posterior "
            "a la hora de inicio."
        )


# =========================================================
# MODALIDAD Y ENLACES
# =========================================================

def validar_modalidad(modality):

    modality = validar_texto(
        modality,
        "modalidad",
        30
    ).upper()

    if modality not in MODALIDADES:
        raise ValidationError(
            "La modalidad debe ser VIRTUAL o PRESENCIAL."
        )

    return modality


def validar_enlace(url):

    url = validar_texto(
        url,
        "enlace de reunión",
        500,
        obligatorio=False
    )

    if url:
        parsed = urlparse(url)

        if parsed.scheme != "https" or not parsed.netloc:
            raise ValidationError(
                "El enlace debe ser una URL HTTPS válida."
            )

    return url


# =========================================================
# VALIDACIÓN DE CREACIÓN
# =========================================================

def validar_creacion_agenda(data):

    if not isinstance(data, dict):
        raise ValidationError(
            "Los datos del compromiso no son válidos."
        )

    campos_permitidos = {
        "expediente_id",
        "title",
        "description",
        "event_type",
        "modality",
        "date",
        "start_time",
        "end_time",
        "location",
        "meeting_url",
        "court",
        "site_id",
        "court_id"
    }

    if set(data.keys()) - campos_permitidos:
        raise ValidationError(
            "Se enviaron campos no permitidos."
        )

    expediente_id = validar_id(
        data.get("expediente_id"),
        "expediente_id"
    )

    title = validar_texto(
        data.get("title"),
        "título",
        180
    )

    event_type = validar_texto(
        data.get("event_type"),
        "tipo de compromiso",
        40
    ).upper()

    if event_type not in TIPOS_COMPROMISO:
        raise ValidationError(
            "El tipo debe ser REUNION o AUDIENCIA."
        )

    modality = validar_modalidad(
        data.get("modality")
    )

    starts_at = validar_fecha_hora(
        data.get("date"),
        data.get("start_time"),
        "inicio"
    )

    ends_at = validar_fecha_hora(
        data.get("date"),
        data.get("end_time"),
        "finalización"
    )

    validar_horario(starts_at, ends_at)

    # Identificadores de sedes y juzgados
    site_id = (
        validar_id(data.get("site_id"), "site_id")
        if data.get("site_id") is not None
        else None
    )

    court_id = (
        validar_id(data.get("court_id"), "court_id")
        if data.get("court_id") is not None
        else None
    )

    # Validación de ubicación según tipo y modalidad
    if event_type == "REUNION" and modality == "PRESENCIAL":

        if not site_id:
            raise ValidationError(
                "Debes seleccionar una sede para la reunión presencial."
            )

        if court_id:
            raise ValidationError(
                "Una reunión no puede tener un juzgado asignado."
            )

    elif event_type == "AUDIENCIA":

        if not court_id:
            raise ValidationError(
                "Debes seleccionar un juzgado para la audiencia."
            )

        if site_id:
            raise ValidationError(
                "Una audiencia no puede tener una sede de la firma asignada."
            )

    else:
        if site_id or court_id:
            raise ValidationError(
                "Los eventos virtuales no deben tener una sede asignada."
            )

    # Los datos descriptivos se recuperan desde los catálogos
    court = None
    location = None

    meeting_url = validar_enlace(
        data.get("meeting_url")
    )

    if modality == "VIRTUAL" and not meeting_url:
        raise ValidationError(
            "Debes proporcionar un enlace para el evento virtual."
        )

    description = validar_texto(
        data.get("description"),
        "observaciones",
        5000,
        obligatorio=False
    )

    return {
        "expediente_id": expediente_id,
        "title": title,
        "description": description,
        "event_type": event_type,
        "modality": modality,
        "starts_at": starts_at,
        "ends_at": ends_at,
        "site_id": site_id,
        "court_id": court_id,
        "court": court,
        "location": location,
        "meeting_url": meeting_url
    }



# =========================================================
# VALIDACIÓN DE REPROGRAMACIÓN
# =========================================================

def validar_reprogramacion(data):

    if not isinstance(data, dict):
        raise ValidationError(
            "Los datos de reprogramación no son válidos."
        )

    campos_permitidos = {
        "date",
        "start_time",
        "end_time"
    }

    if set(data.keys()) != campos_permitidos:
        raise ValidationError(
            "Debes proporcionar fecha, hora inicial y hora final."
        )

    starts_at = validar_fecha_hora(
        data.get("date"),
        data.get("start_time"),
        "inicio"
    )

    ends_at = validar_fecha_hora(
        data.get("date"),
        data.get("end_time"),
        "finalización"
    )

    validar_horario(starts_at, ends_at)

    return {
        "starts_at": starts_at,
        "ends_at": ends_at
    }


# =========================================================
# VALIDACIÓN DE FILTROS GET
# =========================================================
def validar_filtros_agenda(params):

    if set(params.keys()) - FILTROS_PERMITIDOS:
        raise ValidationError(
            "Se enviaron filtros no permitidos."
        )

    filtros = {}

    # Periodo de consulta
    periodo = params.get("period")

    if periodo:
        if not isinstance(periodo, str):
            raise ValidationError(
                "El periodo de consulta no es válido."
            )

        periodo = periodo.strip().lower()

        if periodo not in PERIODOS_AGENDA:
            raise ValidationError(
                "El periodo debe ser day, week o month."
            )

        filtros["period"] = periodo

    # Fecha de referencia
    fecha = params.get("date")

    if fecha:
        if not isinstance(fecha, str):
            raise ValidationError(
                "La fecha debe tener formato YYYY-MM-DD."
            )

        try:
            filtros["date"] = datetime.strptime(
                fecha,
                "%Y-%m-%d"
            ).date()

        except ValueError:
            raise ValidationError(
                "La fecha debe tener formato YYYY-MM-DD."
            )

        # Compatibilidad con el filtro anterior
        if not periodo:
            filtros["period"] = "day"

    elif periodo:
        filtros["date"] = datetime.now(TIMEZONE).date()

    # Tipo de compromiso
    event_type = params.get("event_type")

    if event_type:
        if not isinstance(event_type, str):
            raise ValidationError(
                "El tipo de compromiso no es válido."
            )

        event_type = event_type.strip().upper()

        if event_type not in TIPOS_COMPROMISO:
            raise ValidationError(
                "El tipo de compromiso no es válido."
            )

        filtros["event_type"] = event_type

    # Estado
    status = params.get("status")

    if status:
        if not isinstance(status, str):
            raise ValidationError(
                "El estado del compromiso no es válido."
            )

        status = status.strip().upper()

        if status not in ESTADOS:
            raise ValidationError(
                "El estado del compromiso no es válido."
            )

        filtros["status"] = status

    return filtros