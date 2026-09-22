from datetime import datetime, timezone, timedelta
import hashlib
import secrets

from app import db
from app.models import RegistrationSession

from app.services.users import create_user_account


REGISTRATION_SESSION_EXPIRATION_MINUTES = 10


def _generate_registration_token():
    return secrets.token_urlsafe(32)

def _hash_registration_token(token):
    return hashlib.sha256(
        token.encode("utf-8")
    ).hexdigest()

def _invalidate_previous_registration_sessions(email):
    now = datetime.now(timezone.utc)

    active_sessions = RegistrationSession.query.filter(
        RegistrationSession.email == email,
        RegistrationSession.completed_at.is_(None),
        RegistrationSession.revoked_at.is_(None),
        RegistrationSession.blocked_at.is_(None),
        RegistrationSession.expires_at > now
    ).all()

    for registration_session in active_sessions:
        registration_session.revoked_at = now

def get_active_registration_session_by_email(email):
    email = email.strip().lower()
    now = datetime.now(timezone.utc)

    return (
        RegistrationSession.query.filter(
            RegistrationSession.email == email,
            RegistrationSession.expires_at > now,
            RegistrationSession.completed_at.is_(None),
            RegistrationSession.revoked_at.is_(None),
            RegistrationSession.blocked_at.is_(None)
        ).first()
    )

def create_registration_session(email, password_hash, name, last_name):
    email = email.strip().lower()

    _invalidate_previous_registration_sessions(email)

    token = _generate_registration_token()
    token_hash = _hash_registration_token(token)

    now = datetime.now(timezone.utc)

    registration_session = RegistrationSession(
        email=email,
        password_hash=password_hash,
        name=name,
        last_name=last_name,
        token_hash=token_hash,
        created_at=now,
        expires_at=now + timedelta(
            minutes=REGISTRATION_SESSION_EXPIRATION_MINUTES
        ),
        otp_requests_count=0,
        failed_otp_count=0,
        blocked_at=None,
        otp_verified_at=None,
        completed_at=None,
        revoked_at=None
    )

    db.session.add(registration_session)
    db.session.flush()

    return token, registration_session

def get_active_registration_session(token):

    token_hash = _hash_registration_token(
        token
    )

    now = datetime.now(timezone.utc)

    return (
        RegistrationSession.query.filter(
            RegistrationSession.token_hash == token_hash,
            RegistrationSession.expires_at > now,
            RegistrationSession.completed_at.is_(None),
            RegistrationSession.revoked_at.is_(None),
            RegistrationSession.blocked_at.is_(None)
        ).first()
    )

def get_registration_session_by_token(token):

    token_hash = _hash_registration_token(
        token
    )

    return (
        RegistrationSession.query.filter(
            RegistrationSession.token_hash == token_hash
        ).first()
    )

def revoke_registration_session(
    registration_session
):
    registration_session.revoked_at = (
        datetime.now(timezone.utc)
    )

def complete_registration_session(
    registration_session
):
    registration_session.completed_at = (
        datetime.now(timezone.utc)
    )

def update_registration_profile(
    registration_session,
    phone=None,
    city=None,
    position=None,
    specialty=None,
    professional_card=None
):
    registration_session.phone = phone
    registration_session.city = city
    registration_session.position = position
    registration_session.specialty = specialty
    registration_session.professional_card = (
        professional_card
    )

    return registration_session

def finalize_registration(
    registration_session
):
    """
    Convierte una sesión de registro verificada
    en una cuenta CLIENT completa.

    No realiza commit. La transacción es controlada
    por la ruta que invoque este servicio.
    """

    if registration_session is None:
        raise ValueError(
            "La sesión de registro no existe."
        )

    if registration_session.completed_at is not None:
        raise ValueError(
            "La sesión de registro ya fue completada."
        )

    if registration_session.revoked_at is not None:
        raise ValueError(
            "La sesión de registro fue revocada."
        )

    if registration_session.blocked_at is not None:
        raise ValueError(
            "La sesión de registro está bloqueada."
        )

    if registration_session.expires_at <= datetime.now(
        timezone.utc
    ):
        raise ValueError(
            "La sesión de registro ha expirado."
        )

    if registration_session.otp_verified_at is None:
        raise ValueError(
            "El correo electrónico aún no ha sido verificado."
        )

    profile_data = {
        "name": registration_session.name,
        "last_name": registration_session.last_name,
        "phone": registration_session.phone,
        "city": registration_session.city,
        "position": registration_session.position,
        "specialty": registration_session.specialty,
        "professional_card": (
            registration_session.professional_card
        )
    }

    user, profile, user_role = create_user_account(
        email=registration_session.email,
        password_hash=registration_session.password_hash,
        profile_data=profile_data,
        role_name="CLIENT",
        is_active=True
    )

    complete_registration_session(
        registration_session
    )

    return user, profile, user_role