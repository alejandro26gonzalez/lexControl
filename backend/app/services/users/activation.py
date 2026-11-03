
import hashlib

from datetime import datetime, timezone

from app import db
from app.models.user.user import User
from app.models.user.activation_token import ActivationToken


class ActivationError(Exception):
    """Error controlado durante la activación de una cuenta."""


def activate_user_account(token: str, new_password: str):
    """
    Valida el token de activación y establece la contraseña
    definitiva del usuario.
    """

    if not token or not isinstance(token, str):
        raise ActivationError("El enlace de activación no es válido.")

    token_hash = hashlib.sha256(
        token.encode("utf-8")
    ).hexdigest()

    try:
        # Bloquear el registro para evitar consumos simultáneos.
        activation_record = (
            ActivationToken.query
            .filter_by(token_hash=token_hash)
            .with_for_update()
            .first()
        )

        if not activation_record:
            raise ActivationError(
                "El enlace de activación no es válido o ha expirado."
            )

        if activation_record.used_at is not None:
            raise ActivationError(
                "El enlace de activación ya fue utilizado."
            )

        now = datetime.now(timezone.utc)

        expires_at = activation_record.expires_at

        # Compatibilidad con fechas sin información de zona horaria.
        if expires_at.tzinfo is None:
            expires_at = expires_at.replace(tzinfo=timezone.utc)

        if expires_at <= now:
            raise ActivationError(
                "El enlace de activación ha expirado."
            )

        user = db.session.get(
            User,
            activation_record.user_id
        )

        if not user or user.is_active:
            raise ActivationError(
                "La cuenta no puede ser activada."
            )

        # Establecer contraseña definitiva.
        user.set_password(new_password)

        # Activar cuenta.
        user.is_active = True

        # Consumir token.
        activation_record.used_at = now

        db.session.commit()

        return user

    except ActivationError:
        db.session.rollback()
        raise

    except Exception:
        db.session.rollback()
        raise
