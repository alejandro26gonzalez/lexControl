from sqlalchemy.exc import SQLAlchemyError

from app import db
from app.models.catalogs.professional import Professional
from app.exceptions import ResourceNotFoundError, ValidationError

from app.routes.admin.catalog.professionals.validators import (
    validate_professional_payload
)


def get_all_professionals():
    return Professional.query.order_by(
        Professional.created_at.desc()
    ).all()


def create_professional(payload):

    data = validate_professional_payload(payload)

    professional = Professional(**data)

    try:
        db.session.add(professional)
        db.session.commit()

        return professional

    except SQLAlchemyError:
        db.session.rollback()
        raise


def update_professional(professional_id, payload):

    data = validate_professional_payload(
        payload,
        partial=True
    )

    professional = Professional.query.filter_by(
        id=professional_id
    ).with_for_update().first()

    if not professional:
        raise ResourceNotFoundError("El profesional no existe.")

    try:
        for field, value in data.items():
            setattr(professional, field, value)

        db.session.commit()

        return professional

    except SQLAlchemyError:
        db.session.rollback()
        raise


def toggle_professional_status(professional_id, is_active):

    if not isinstance(is_active, bool):
        raise ValidationError("El estado debe ser un valor booleano.")

    professional = Professional.query.filter_by(
        id=professional_id
    ).with_for_update().first()

    if not professional:
        raise ResourceNotFoundError("El profesional no existe.")

    try:
        professional.is_active = is_active

        db.session.commit()

        return professional

    except SQLAlchemyError:
        db.session.rollback()
        raise