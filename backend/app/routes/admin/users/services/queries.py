from sqlalchemy.orm import joinedload, selectinload

from app.models.user.user import User
from app.models.user.user_profile import UserProfile
from app.models.user.user_role import UserRole
from app.models.role.role import Role

from app import db


def get_all_users():
    """
    Obtiene todos los usuarios registrados,
    incluyendo sus perfiles y roles.
    """

    users = (
        User.query
        .options(
            selectinload(User.profile),
            selectinload(User.user_roles)
                .selectinload(UserRole.role)
        )
        .order_by(User.created_at.desc())
        .all()
    )

    return users
