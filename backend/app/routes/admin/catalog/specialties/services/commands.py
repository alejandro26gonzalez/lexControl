from sqlalchemy import func
from sqlalchemy.exc import IntegrityError, SQLAlchemyError

from app import db
from app.models.catalogs.specialties import Specialty
from app.exceptions import ResourceNotFoundError, ValidationError

from app.routes.admin.catalog.specialties.validators import (
    validate_specialty_payload
)


def get_all_specialties():
    return Specialty.query.order_by(
        Specialty.created_at.desc()
    ).all()



def create_specialty(payload):

    data = validate_specialty_payload(payload)

    existing = Specialty.query.filter(
        func.lower(Specialty.name) == data["name"].lower()
    ).first()

    if existing:
        raise ValidationError(
            "Ya existe una especialidad con ese nombre."
        )

    specialty = Specialty(**data)

    try:
        db.session.add(specialty)
        db.session.commit()

        return specialty

    except IntegrityError:
        db.session.rollback()
        raise ValidationError(
            "Ya existe una especialidad con ese nombre."
        )

    except SQLAlchemyError:
        db.session.rollback()
        raise


def update_specialty(specialty_id, payload):

    data = validate_specialty_payload(
        payload,
        partial=True
    )

    specialty = Specialty.query.filter_by(
        id=specialty_id
    ).with_for_update().first()

    if not specialty:
        raise ResourceNotFoundError("La especialidad no existe.")

    if "name" in data:

        existing = Specialty.query.filter(
            func.lower(Specialty.name) == data["name"].lower(),
            Specialty.id != specialty_id
        ).first()

        if existing:
            raise ValidationError(
                "Ya existe otra especialidad con ese nombre."
            )

    try:
        for field, value in data.items():
            setattr(specialty, field, value)

        db.session.commit()

        return specialty

    except IntegrityError:
        db.session.rollback()
        raise ValidationError(
            "Ya existe una especialidad con ese nombre."
        )

    except SQLAlchemyError:
        db.session.rollback()
        raise


def toggle_specialty_status(specialty_id, is_active):

    if not isinstance(is_active, bool):
        raise ValidationError(
            "El estado debe ser un valor booleano."
        )

    specialty = Specialty.query.filter_by(
        id=specialty_id
    ).with_for_update().first()

    if not specialty:
        raise ResourceNotFoundError("La especialidad no existe.")

    try:
        specialty.is_active = is_active

        db.session.commit()

        return specialty

    except SQLAlchemyError:
        db.session.rollback()
        raise