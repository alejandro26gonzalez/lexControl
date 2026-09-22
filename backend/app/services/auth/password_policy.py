import re

MIN_PASSWORD_LENGTH = 10
MAX_PASSWORD_LENGTH = 20

ALLOWED_SPECIAL_CHARACTERS = r"#$%&/¡!?¿*+\-_.:"

def _has_numeric_sequence(password, sequence_length=4):
    numeric_groups = re.findall(r"\d+", password)

    for group in numeric_groups:
        if len(group) < sequence_length:
            continue

        for i in range(len(group) - sequence_length + 1):
            sequence = group[i:i + sequence_length]

            ascending = all(
                int(sequence[j]) + 1 == int(sequence[j + 1])
                for j in range(len(sequence) - 1)
            )

            descending = all(
                int(sequence[j]) - 1 == int(sequence[j + 1])
                for j in range(len(sequence) - 1)
            )

            repeated = all(
                sequence[j] == sequence[j + 1]
                for j in range(len(sequence) - 1)
            )

            if ascending or descending or repeated:
                return True

    return False

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
    if _has_numeric_sequence(password):
        errors.append(
            "La contraseña no puede contener secuencias numéricas predecibles."
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