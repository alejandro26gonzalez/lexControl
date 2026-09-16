from app import create_app
from app.models import User
from app.helpers.password_reset import create_password_reset_otp

app = create_app()

with app.app_context():

    user = User.query.filter_by(
        email="client@lexcontrol.local"
    ).first()

    if not user:
        raise RuntimeError("Usuario de prueba no encontrado.")

    otp, record = create_password_reset_otp(user.id)

    print("Usuario:", user.id)
    print("OTP:", otp)
    print("OTP ID:", record.id)