from app import create_app, db
from datetime import datetime, timezone
from app.models import User
from app.helpers.password_reset import (
    create_password_reset_session,
    get_active_password_reset_session,
    validate_password_reset_session,
    consume_password_reset_session
)

app = create_app()


with app.app_context():



    user = User.query.filter_by(
        email="client@lexcontrol.local"
    ).first()

    if not user:
        raise RuntimeError("Usuario de prueba no encontrado.")

    print("\n--- CREACIÓN DE AUTORIZACIÓN ---")

    token, reset_session = create_password_reset_session(user.id)

    print("Token:", token)
    print("ID:", reset_session.id)
    print("Creado:", reset_session.created_at)
    print("Expira:", reset_session.expires_at)

    print("\n--- CONSUMO DE AUTORIZACIÓN ---")

    consumed, record, message = consume_password_reset_session(
        token
    )

    print("Resultado:", consumed)
    print("Mensaje:", message)
    print("Used at:", record.used_at if record else None)

    print("\n--- VALIDACIÓN DESPUÉS DEL CONSUMO ---")

    valid, record, message = validate_password_reset_session(
        token
    )

    print("Resultado:", valid)
    print("Mensaje:", message)

    print("\n--- INTENTO DE CONSUMIR NUEVAMENTE ---")

    consumed, record, message = consume_password_reset_session(
        token
    )

    print("Resultado:", consumed)
    print("Mensaje:", message)

    # print("\n--- CONSULTA DIRECTA ---")

    # active = get_active_password_reset_session(token)

    # if active:
    #     print("Autorización encontrada:", active.id)
    # else:
    #     print("No se encontró autorización.")

    # print("\n--- VALIDACIÓN ---")

    # valid, record, message = validate_password_reset_session(token)

    # print("Resultado:", valid)
    # print("Mensaje:", message)

    # if record:
    #     print("ID:", record.id)
    #     print("Used at:", record.used_at)
    #     print("Revoked at:", record.revoked_at)

    # print("\n--- VALIDACIÓN CON TOKEN INCORRECTO ---")

    # invalid_token = "token-completamente-falso"

    # valid, record, message = validate_password_reset_session(invalid_token)

    # print("Resultado:", valid)
    # print("Mensaje:", message)

    # print("\n--- PRUEBA DE EXPIRACIÓN ---")

    # reset_session.expires_at = datetime.now(timezone.utc)
    # db.session.commit()

    # valid, record, message = validate_password_reset_session(token)

    # print("Resultado:", valid)
    # print("Mensaje:", message)

    # print("\n--- CONSUMO DE AUTORIZACIÓN ---")

    # reset_session.used_at = datetime.now(timezone.utc)
    # db.session.commit()

    # print("Used at:", reset_session.used_at)

    # print("\n--- VALIDACIÓN DESPUÉS DE SER UTILIZADA ---")

    # valid, record, message = validate_password_reset_session(token)

    # print("Resultado:", valid)
    # print("Mensaje:", message)