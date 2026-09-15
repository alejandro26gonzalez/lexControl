from app import create_app
from app.models import User
from app.helpers.password_reset import (
    create_password_reset_otp,
    get_active_password_reset_otp,
    validate_password_reset_otp,
)


app = create_app()


with app.app_context():

    user = User.query.filter_by(
        email="client@lexcontrol.local"
    ).first()

    if not user:
        raise RuntimeError("Usuario de prueba no encontrado.")

    print("\n--- CREACIÓN DEL OTP ---")

    otp, record = create_password_reset_otp(user.id)

    print("OTP:", otp)
    print("ID:", record.id)
    print("Creado:", record.created_at)
    print("Expira:", record.expires_at)

    print("\n--- CONSULTA DEL OTP ACTIVO ---")

    active = get_active_password_reset_otp(user.id)

    if active:
        print("OTP activo encontrado:", active.id)
    else:
        print("No se encontró OTP activo.")

    print("\n--- VALIDACIÓN CORRECTA ---")

    valid, record, message = validate_password_reset_otp(
        user.id,
        otp
    )

    print("Resultado:", valid)
    print("Mensaje:", message)
    print("Used at:", record.used_at)

    print("\n--- INTENTO DE REUTILIZACIÓN ---")

    valid, record, message = validate_password_reset_otp(
        user.id,
        otp
    )

    print("Resultado:", valid)
    print("Mensaje:", message)