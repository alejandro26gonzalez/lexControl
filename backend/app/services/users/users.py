from app import db
from app.models import User, UserProfile

from app.services.users.roles import assign_role


def normalize_email(email):
    return email.strip().lower()


def get_user_by_email(email):
    email = normalize_email(email)

    return User.query.filter_by(
        email=email
    ).first()


def create_user(
    email,
    password_hash,
    is_active=True
):
    email = normalize_email(email)

    existing_user = get_user_by_email(email)

    if existing_user:
        raise ValueError(
            "El correo electrónico ya está registrado."
        )

    user = User(
        email=email,
        password_hash=password_hash,
        is_active=is_active
    )

    db.session.add(user)

    db.session.flush()

    return user


def create_user_profile(
    user,
    name,
    last_name,
    phone=None,
    city=None,
    position=None,
    specialty=None,
    professional_card=None
):
    profile = UserProfile(
        user_id=user.id,
        name=name,
        last_name=last_name,
        phone=phone,
        city=city,
        position=position,
        specialty=specialty,
        professional_card=professional_card
    )

    db.session.add(profile)

    return profile


def create_user_account(
    email,
    password_hash,
    profile_data,
    role_name,
    is_active=True
):
    user = create_user(
        email=email,
        password_hash=password_hash,
        is_active=is_active
    )

    profile = create_user_profile(
        user=user,
        name=profile_data["name"],
        last_name=profile_data["last_name"],
        phone=profile_data.get("phone"),
        city=profile_data.get("city"),
        position=profile_data.get("position"),
        specialty=profile_data.get("specialty"),
        professional_card=profile_data.get(
            "professional_card"
        )
    )

    user_role = assign_role(
        user=user,
        role_name=role_name
    )

    return user, profile, user_role