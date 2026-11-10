from app.exceptions import ValidationError


def validate_expediente_filters(params):

    allowed_fields = {
        "status",
        "radicado"
    }

    errors = {}
    data = {}

    for field, value in params.items():

        if field not in allowed_fields:
            errors[field] = "El parámetro no está permitido."
            continue

        if not isinstance(value, str):
            errors[field] = "El parámetro debe ser una cadena de texto."
            continue

        value = value.strip()

        if not value:
            continue

        if field == "status":

            allowed_statuses = {
                "EN_CURSO",
                "FINALIZADO",
                "SUSPENDIDO"
            }

            value = value.upper()

            if value not in allowed_statuses:
                errors[field] = "El estado del expediente no es válido."
                continue

        elif field == "radicado":

            if len(value) > 100:
                errors[field] = (
                    "El radicado no puede superar los 100 caracteres."
                )
                continue

        data[field] = value

    if errors:
        raise ValidationError(errors)

    return data