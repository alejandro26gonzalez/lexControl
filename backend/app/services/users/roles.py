from app import db
from app.models import Role, UserRole


def get_role_by_name(role_name):
    return Role.query.filter_by(
        name=role_name
    ).first()


def assign_role(user, role_name):
    role = get_role_by_name(role_name)

    if not role:
        raise ValueError(
            f"El rol '{role_name}' no existe."
        )

    existing_assignment = UserRole.query.filter_by(
        user_id=user.id,
        role_id=role.id
    ).first()

    if existing_assignment:
        return existing_assignment

    user_role = UserRole(
        user_id=user.id,
        role_id=role.id
    )

    db.session.add(user_role)

    return user_role


def remove_role(user, role_name):
    role = get_role_by_name(role_name)

    if not role:
        raise ValueError(
            f"El rol '{role_name}' no existe."
        )

    user_role = UserRole.query.filter_by(
        user_id=user.id,
        role_id=role.id
    ).first()

    if user_role:
        db.session.delete(user_role)

    return user_role