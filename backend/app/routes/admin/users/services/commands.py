import secrets
import hashlib
from sqlalchemy import func, distinct

from datetime import datetime, timedelta, timezone

from app import db
from app.models.user.user import User
from app.models.user.user_profile import UserProfile
from app.models.user.user_role import UserRole
from app.models.auth.session import Session
from app.models.role.role import Role
from app.models.user.activation_token import ActivationToken

from app.routes.admin.users.validators import (validate_create_user,validate_update_user)

from app.exceptions import (
    DuplicateResourceError,
    ResourceNotFoundError
)


ACTIVATION_TOKEN_EXPIRATION_HOURS = 24

def generate_activation_token():
    """
    Genera un token aleatorio y devuelve:
    - Token original para enviar por correo.
    - Hash para almacenar en la base de datos.
    """
    token = secrets.token_urlsafe(32)

    token_hash = hashlib.sha256(
        token.encode("utf-8")
    ).hexdigest()

    return token, token_hash

def create_user(payload):
    """
    Crea un usuario, su perfil, su rol y su token
    de activación dentro de una única transacción.
    """
    
    data = validate_create_user(payload)

    try:
        email = data["email"]
        identification_type = data["identification_type"]
        identification_number = data["identification_number"]
        role_name = data["role"]

        existing_email = User.query.filter_by(
            email=email
        ).first()

        if existing_email:
            raise ValueError("El correo electrónico ya está registrado.")

        existing_identification = User.query.filter_by(
            identification_type=identification_type,
            identification_number=identification_number
        ).first()

        if existing_identification:
            raise ValueError("La identificación ya está registrada.")

        role = Role.query.filter_by(
            name=role_name
        ).first()

        if not role:
            raise ValueError("El rol seleccionado no existe.")

        user = User(
            email=email,
            identification_type=identification_type,
            identification_number=identification_number,
            is_active=False
        )

        # La cuenta no tendrá contraseña utilizable hasta su activación.
        user.set_password(secrets.token_urlsafe(48))

        db.session.add(user)
        db.session.flush()

        profile = UserProfile(
            user_id=user.id,
            name=payload["name"].strip(),
            last_name=payload["last_name"].strip(),
            phone=payload.get("phone"),
            city=payload.get("city"),
            position=payload.get("position"),
            specialty=payload.get("specialty"),
            professional_card=payload.get("professional_card")
        )

        user_role = UserRole(
            user_id=user.id,
            role_id=role.id
        )

        token, token_hash = generate_activation_token()

        activation = ActivationToken(
            user_id=user.id,
            token_hash=token_hash,
            expires_at=datetime.now(timezone.utc) + timedelta(
                hours=ACTIVATION_TOKEN_EXPIRATION_HOURS
            )
        )

        db.session.add_all([
            profile,
            user_role,
            activation
        ])

        db.session.commit()

        return {
            "user": user,
            "activation_token": token
        }

    except Exception:
        db.session.rollback()
        raise
    

def update_user(user_id, payload):

    data = validate_update_user(payload)

    try:
        user = User.query.filter_by(id=user_id).with_for_update().first()

        if not user:
            raise ResourceNotFoundError(
                "El usuario solicitado no existe."
            )

        # Validar correo duplicado
        if "email" in data:
            existing_email = User.query.filter(
                User.email == data["email"],
                User.id != user.id
            ).first()

            if existing_email:
                raise DuplicateResourceError(
                    "El correo electrónico ya está registrado."
                )

        # Validar identificación duplicada
        identification_type = data.get(
            "identification_type",
            user.identification_type
        )

        identification_number = data.get(
            "identification_number",
            user.identification_number
        )

        if (
            "identification_type" in data
            or "identification_number" in data
        ):
            existing_identification = User.query.filter(
                User.identification_type == identification_type,
                User.identification_number == identification_number,
                User.id != user.id
            ).first()

            if existing_identification:
                raise DuplicateResourceError(
                    "La identificación ya está registrada."
                )

        # Actualizar información de User
        for field in (
            "email",
            "identification_type",
            "identification_number"
        ):
            if field in data:
                setattr(user, field, data[field])

        # Actualizar perfil
        profile_fields = (
            "name",
            "last_name",
            "phone",
            "city",
            "position",
            "specialty",
            "professional_card"
        )

        profile_data = {
            field: data[field]
            for field in profile_fields
            if field in data
        }

        if profile_data:
            if not user.profile:
                user.profile = UserProfile()

            for field, value in profile_data.items():
                setattr(user.profile, field, value)

        # Actualizar rol
        if "role" in data:

            role = Role.query.filter_by(
                name=data["role"]
            ).first()

            if not role:
                raise ResourceNotFoundError(
                    "El rol seleccionado no existe."
                )

            current_user_role = UserRole.query.filter_by(
                user_id=user.id
            ).first()

            if current_user_role:
                current_user_role.role = role
            else:
                db.session.add(
                    UserRole(
                        user_id=user.id,
                        role_id=role.id
                    )
                )

        db.session.commit()

        return user

    except Exception:
        db.session.rollback()
        raise
    

def toggle_user_status(user_id, is_active):

    if not isinstance(is_active, bool):
        raise ValueError({
            "is_active": "El estado debe ser booleano."
        })

    try:
        user = User.query.filter_by(
            id=user_id
        ).with_for_update().first()

        if not user:
            raise ResourceNotFoundError(
                "El usuario solicitado no existe."
            )

        user.is_active = is_active

        if not is_active:
            Session.query.filter(
                Session.user_id == user.id,
                Session.revoked_at.is_(None)
            ).update(
                {
                    Session.revoked_at: datetime.now(timezone.utc)
                },
                synchronize_session=False
            )

        db.session.commit()

        return user

    except Exception:
        db.session.rollback()
        raise


def delete_user(user_id):

    try:
        user = User.query.filter_by(
            id=user_id
        ).with_for_update().first()

        if not user:
            raise ResourceNotFoundError(
                "El usuario solicitado no existe."
            )

        # Eliminar las sesiones asociadas al usuario.
        Session.query.filter_by(
            user_id=user.id
        ).delete(synchronize_session=False)

        # Eliminar el usuario y sus relaciones dependientes.
        db.session.delete(user)

        db.session.commit()

        return user_id

    except Exception:
        db.session.rollback()
        raise


def get_user_stats():

    total = db.session.query(
        func.count(User.id)
    ).scalar() or 0

    active = db.session.query(
        func.count(User.id)
    ).filter(
        User.is_active.is_(True)
    ).scalar() or 0

    inactive = db.session.query(
        func.count(User.id)
    ).filter(
        User.is_active.is_(False)
    ).scalar() or 0

    administrators = db.session.query(
        func.count(distinct(User.id))
    ).join(
        UserRole,
        UserRole.user_id == User.id
    ).join(
        Role,
        Role.id == UserRole.role_id
    ).filter(
        Role.name == "ADMIN"
    ).scalar() or 0

    return {
        "total": total,
        "active": active,
        "inactive": inactive,
        "administrators": administrators
    }