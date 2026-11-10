from app.exceptions import ValidationError


def validate_specialty_payload(payload, partial=False):

    if not isinstance(payload, dict):
        raise ValidationError("Los datos enviados no son válidos.")

    field_limits = {
        "name": 120,
        "description": 500,
    }

    allowed_fields = {
        "name",
        "description",
        "areas",
    }

    errors = {}
    data = {}

    if partial and not any(field in payload for field in allowed_fields):
        raise ValidationError("Debes proporcionar al menos un campo.")

    for field, value in payload.items():

        if field not in allowed_fields:
            errors[field] = "El campo no está permitido."
            continue

        if field in {"name", "description"}:

            if value is None:
                if field == "name":
                    errors[field] = "El nombre es obligatorio."
                else:
                    data[field] = None
                continue

            if not isinstance(value, str):
                errors[field] = "El campo debe ser una cadena de texto."
                continue

            value = value.strip()

            if field == "name" and not value:
                errors[field] = "El nombre es obligatorio."
                continue

            if len(value) > field_limits[field]:
                errors[field] = (
                    f"El máximo permitido es {field_limits[field]} caracteres."
                )
                continue

            data[field] = value

        elif field == "areas":

            if not isinstance(value, list):
                errors[field] = "Las áreas deben enviarse como una lista."
                continue

            validated_areas = []

            for index, area in enumerate(value):

                if not isinstance(area, dict):
                    errors[field] = (
                        f"El área {index + 1} debe ser un objeto."
                    )
                    break

                name = area.get("name")
                description = area.get("description")

                if not isinstance(name, str) or not name.strip():
                    errors[field] = (
                        f"El nombre del área {index + 1} es obligatorio."
                    )
                    break

                if not isinstance(description, str) or not description.strip():
                    errors[field] = (
                        f"La descripción del área {index + 1} es obligatoria."
                    )
                    break

                validated_areas.append({
                    "name": name.strip(),
                    "description": description.strip()
                })

            else:
                data[field] = validated_areas

    if not partial and "name" not in data:
        errors["name"] = "El nombre es obligatorio."

    if errors:
        raise ValidationError(errors)

    return data