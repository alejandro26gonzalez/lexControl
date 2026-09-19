import re

MIN_PASSWORD_LENGTH = 10
MAX_PASSWORD_LENGTH = 20

ALLOWED_SPECIAL_CHARACTERS = r"#$%&/¡!?¿*+\-_.:"


def validate_password(password, user_email=None):
    """
    Valida una contraseña según la política de seguridad
    definida para LEXCONTROL.

    Retorna:
        (True, [])
        o
        (False, [lista de errores])
    """

    errors = []

    if not password:
        return False, ["La contraseña es obligatoria."]

    # Longitud
    if len(password) < MIN_PASSWORD_LENGTH:
        errors.append(
            f"La contraseña debe tener al menos "
            f"{MIN_PASSWORD_LENGTH} caracteres."
        )

    if len(password) > MAX_PASSWORD_LENGTH:
        errors.append(
            f"La contraseña no puede superar "
            f"{MAX_PASSWORD_LENGTH} caracteres."
        )

    # Mayúscula
    if not re.search(r"[A-Z]", password):
        errors.append(
            "Debe contener al menos una letra mayúscula."
        )

    # Minúscula
    if not re.search(r"[a-z]", password):
        errors.append(
            "Debe contener al menos una letra minúscula."
        )

    # Número
    if not re.search(r"[0-9]", password):
        errors.append(
            "Debe contener al menos un número."
        )

    # Símbolo especial
    if not re.search(
        rf"[{ALLOWED_SPECIAL_CHARACTERS}]",
        password
    ):
        errors.append(
            "Debe contener al menos un símbolo especial."
        )

    # Caracteres permitidos
    if not re.fullmatch(
        rf"[A-Za-z0-9{ALLOWED_SPECIAL_CHARACTERS}]+",
        password
    ):
        errors.append(
            "La contraseña contiene caracteres no permitidos."
        )

    # Máximo de 3 números consecutivos
    if re.search(r"\d{4,}", password):
        errors.append(
            "No puede contener más de 3 números consecutivos."
        )

    # No contener identificador del usuario
    if user_email:
        username = user_email.split("@", 1)[0].lower()

        if username and username in password.lower():
            errors.append(
                "La contraseña no puede contener "
                "el identificador del usuario."
            )

    return len(errors) == 0, errors