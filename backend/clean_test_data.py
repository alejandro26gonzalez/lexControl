from app import create_app, db
from app.models import Session, PasswordResetOTP, PasswordResetSession

app = create_app()

with app.app_context():

    print("\n--- LIMPIEZA DE DATOS DE PRUEBA ---")

    sessions_deleted = Session.query.delete(
        synchronize_session=False
    )

    otps_deleted = PasswordResetOTP.query.delete(
        synchronize_session=False
    )

    reset_sessions_deleted = PasswordResetSession.query.delete(
        synchronize_session=False
    )

    db.session.commit()

    print(f"Sesiones eliminadas: {sessions_deleted}")
    print(f"OTPs eliminados: {otps_deleted}")
    print(
        f"Autorizaciones de recuperación eliminadas: "
        f"{reset_sessions_deleted}"
    )

    print("\nLimpieza completada correctamente.")