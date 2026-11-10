from urllib.parse import urlparse

from app.exceptions import ValidationError


def validate_professional_payload(payload, partial=False):

    if not isinstance(payload, dict):
        raise ValidationError("Los datos enviados no son válidos.")

    field_limits = {
        "name": 120,
        "last_name": 120,
        "position": 120,
        "specialty": 150,
        "profile_image_url": 500,
        "linkedin_url": 500,
    }

    text_fields = {
        "name",
        "last_name",
        "position",
        "specialty",
        "profile_image_url",
        "linkedin_url",
        "profile",
        "experience",
    }

    json_fields = {
        "practice_areas",
        "education",
    }

    allowed_fields = text_fields | json_fields

    errors = {}

    if partial and not any(field in payload for field in allowed_fields):
        raise ValidationError("Debes proporcionar al menos un campo.")

    data = {}

    for field, value in payload.items():

        if field not in allowed_fields:
            errors[field] = "El campo no está permitido."
            continue

        # Validación de campos de texto
        if field in text_fields:

            if value is None:
                if field in {"name", "last_name"}:
                    errors[field] = "Este campo es obligatorio."
                else:
                    data[field] = None
                continue

            if not isinstance(value, str):
                errors[field] = "El campo debe ser una cadena de texto."
                continue

            value = value.strip()

            if field in {"name", "last_name"} and not value:
                errors[field] = "Este campo es obligatorio."
                continue

            if field in field_limits and len(value) > field_limits[field]:
                errors[field] = (
                    f"El máximo permitido es {field_limits[field]} caracteres."
                )
                continue

            if field in {"profile_image_url", "linkedin_url"} and value:
                parsed = urlparse(value)

                if parsed.scheme not in ("http", "https") or not parsed.netloc:
                    errors[field] = "La URL proporcionada no es válida."
                    continue

            data[field] = value

        # Validación de colecciones JSON
        elif field == "practice_areas":

            if not isinstance(value, list):
                errors[field] = "Debe ser una lista."
                continue

            if not all(
                isinstance(item, str) and item.strip()
                for item in value
            ):
                errors[field] = "Todas las áreas deben ser textos válidos."
                continue

            data[field] = [
                item.strip()
                for item in value
            ]

        elif field == "education":

            if not isinstance(value, list):
                errors[field] = "Debe ser una lista."
                continue

            validated_education = []

            for index, item in enumerate(value):

                if not isinstance(item, dict):
                    errors[field] = (
                        f"El elemento {index + 1} debe ser un objeto."
                    )
                    break

                degree = item.get("degree")
                institution = item.get("institution")

                if not isinstance(degree, str) or not degree.strip():
                    errors[field] = (
                        f"El título académico del elemento {index + 1} es obligatorio."
                    )
                    break

                if not isinstance(institution, str) or not institution.strip():
                    errors[field] = (
                        f"La institución del elemento {index + 1} es obligatoria."
                    )
                    break

                validated_education.append({
                    "degree": degree.strip(),
                    "institution": institution.strip()
                })

            else:
                data[field] = validated_education

    if not partial:
        for field in ("name", "last_name"):
            if field not in data:
                errors[field] = "Este campo es obligatorio."

    if errors:
        raise ValidationError(errors)

    return data