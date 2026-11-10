from app.exceptions import ValidationError


def validate_location_payload(payload, entity="site", partial=False):

    if not isinstance(payload, dict):
        raise ValidationError({
            "body": "Se esperaba un objeto JSON."
        })

    limits = {
        "site": {
            "name": 120,
            "city": 100,
            "address": 200
        },
        "court": {
            "name": 150,
            "city": 100,
            "address": 200
        }
    }

    if entity not in limits:
        raise ValueError("Tipo de entidad no válido.")

    errors = {}
    data = {}

    for field, max_length in limits[entity].items():

        value = payload.get(field)

        if value is None:
            if not partial:
                errors[field] = "Este campo es obligatorio."
            continue

        if not isinstance(value, str):
            errors[field] = "Debe ser un texto."
            continue

        value = value.strip()

        if not value:
            errors[field] = "Este campo no puede estar vacío."
            continue

        if len(value) > max_length:
            errors[field] = (
                f"No puede superar los {max_length} caracteres."
            )
            continue

        data[field] = value

    if errors:
        raise ValidationError(errors)

    if partial and not data:
        raise ValidationError({
            "body": "Debes proporcionar al menos un campo para actualizar."
        })

    return data