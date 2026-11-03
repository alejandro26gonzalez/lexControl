
import re
from urllib.parse import ParseResult


ALLOWED_IDENTIFICATION_TYPES = {
    "CC",
    "CE",
    "NIT",
    "PASSPORT"
}

ALLOWED_ROLES = {
    "CLIENT",
    "COLLABORATOR",
    "ADMIN"
}

REQUIRED_FIELDS = (
    "email",
    "identification_type",
    "identification_number",
    "name",
    "last_name",
    "role"
)


def validate_create_user(payload):
    """
    Valida los datos recibidos para crear un usuario.

    Retorna un diccionario normalizado si es válido.
    Lanza ValueError si encuentra errores.
    """

    if not isinstance(payload, dict):
        raise ValueError("El cuerpo de la solicitud debe ser un objeto JSON.")

    errors = {}

    # 1. Validar campos obligatorios
    for field in REQUIRED_FIELDS:
        value = payload.get(field)

        if not isinstance(value, str) or not value.strip():
            errors[field] = "Este campo es obligatorio."

    if errors:
        raise ValueError(errors)

    # 2. Normalizar valores
    data = {
        key: value.strip() if isinstance(value, str) else value
        for key, value in payload.items()
    }

    data["email"] = data["email"].lower()
    data["identification_type"] = data["identification_type"].upper()
    data["identification_number"] = data["identification_number"].strip()
    data["role"] = data["role"].upper()

    # 3. Validar correo
    email_pattern = r"^[^@\s]+@[^@\s]+\.[^@\s]+$"

    if not re.fullmatch(email_pattern, data["email"]):
        errors["email"] = "El correo electrónico no tiene un formato válido."

    if len(data["email"]) > 120:
        errors["email"] = "El correo supera la longitud permitida."

    # 4. Validar tipo de identificación
    if data["identification_type"] not in ALLOWED_IDENTIFICATION_TYPES:
        errors["identification_type"] = "El tipo de identificación no es válido."

    # 5. Validar número de identificación
    if len(data["identification_number"]) > 50:
        errors["identification_number"] = "El número de identificación es demasiado largo."

    if not re.fullmatch(r"[A-Za-z0-9.-]+", data["identification_number"]):
        errors["identification_number"] = "El número de identificación contiene caracteres no permitidos."

    # 6. Validar nombres
    for field in ("name", "last_name"):
        if len(data[field]) > 100:
            errors[field] = "El campo supera la longitud permitida."

    # 7. Validar rol
    if data["role"] not in ALLOWED_ROLES:
        errors["role"] = "El rol seleccionado no es válido."

    # 8. Validar campos opcionales
    optional_fields = {
        "phone": 30,
        "city": 100,
        "position": 100,
        "specialty": 150,
        "professional_card": 100
    }

    for field, max_length in optional_fields.items():
        value = data.get(field)

        if value is not None:
            if not isinstance(value, str):
                errors[field] = "El valor debe ser texto."
            else:
                data[field] = value.strip() or None

                if data[field] and len(data[field]) > max_length:
                    errors[field] = "El campo supera la longitud permitida."

    if errors:
        raise ValueError(errors)

    return data


def validate_update_user(payload):

    if not isinstance(payload, dict):
        raise ValueError({
            "general": "El cuerpo debe ser un objeto JSON."
        })

    if not payload:
        raise ValueError({
            "general": "Debes proporcionar al menos un campo para actualizar."
        })

    allowed_fields = {
        "email",
        "identification_type",
        "identification_number",
        "name",
        "last_name",
        "phone",
        "city",
        "position",
        "specialty",
        "professional_card",
        "role"
    }

    errors = {}

    for field in payload:
        if field not in allowed_fields:
            errors[field] = "Este campo no puede modificarse."

    if errors:
        raise ValueError(errors)

    data = {}

    optional_fields = {
        "last_name": 150,
        "phone": 50,
        "city": 100,
        "position": 150,
        "specialty": 150,
        "professional_card": 100
    }

    field_limits = {
        "email": 120,
        "identification_type": 50,
        "identification_number": 50,
        "name": 150,
        "role": 20,
        **optional_fields
    }

    for field, value in payload.items():

        if value is None:
            if field in optional_fields:
                data[field] = None
            else:
                errors[field] = "Este campo no puede ser nulo."
            continue

        if not isinstance(value, str):
            errors[field] = "El valor debe ser texto."
            continue

        value = value.strip()

        if not value:
            if field in optional_fields:
                data[field] = None
                continue

            errors[field] = "Este campo no puede estar vacío."
            continue

        if len(value) > field_limits[field]:
            errors[field] = "El campo supera la longitud permitida."
            continue

        data[field] = value

    if errors:
        raise ValueError(errors)

    if "email" in data:
        data["email"] = data["email"].lower()

        if not re.fullmatch(
            r"^[^@\s]+@[^@\s]+\.[^@\s]+$",
            data["email"]
        ):
            errors["email"] = "El correo electrónico no es válido."

    if "identification_type" in data:
        data["identification_type"] = data["identification_type"].upper()

        if data["identification_type"] not in ALLOWED_IDENTIFICATION_TYPES:
            errors["identification_type"] = "Tipo de identificación no válido."

    if "identification_number" in data:
        if not re.fullmatch(
            r"[A-Za-z0-9.-]+",
            data["identification_number"]
        ):
            errors["identification_number"] = (
                "El número de identificación contiene caracteres no permitidos."
            )

    if "role" in data:
        data["role"] = data["role"].upper()

        if data["role"] not in ALLOWED_ROLES:
            errors["role"] = "El rol seleccionado no es válido."

    if errors:
        raise ValueError(errors)

    return data


