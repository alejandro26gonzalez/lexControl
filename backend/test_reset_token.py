from app import create_app
from app.helpers.password_reset import (
    validate_password_reset_session,
)

app = create_app()

with app.app_context():

    print("\n--- VERIFICACIÓN DE RESET TOKEN ---")

    token = input("Introduce el reset_token: ").strip()

    valid, reset_session, message = (
        validate_password_reset_session(token)
    )

    print("\nResultado:", valid)
    print("Mensaje:", message)

    if reset_session:
        print("ID:", reset_session.id)
        print("User ID:", reset_session.user_id)
        print("Creado:", reset_session.created_at)
        print("Expira:", reset_session.expires_at)
        print("Used at:", reset_session.used_at)
        print("Revoked at:", reset_session.revoked_at)