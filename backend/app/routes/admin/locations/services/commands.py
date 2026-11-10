from app.services.auth.auth import get_current_user, get_user_roles

from app import db

from app.models.sites.site import Site
from app.models.sites.court import Court

from app.routes.admin.locations.validators import (
    validate_location_payload
)

from app.exceptions import ResourceNotFoundError

def get_all_sites():
    
    query = Site.query
    
    current_user = get_current_user()
    
    if current_user:
        
        roles = get_user_roles(current_user.id)
        
        if 'COLLABORATOR' in roles:
            query = query.filter(
                Site.is_active.is_(True)
            )

    return query.order_by(
        Site.created_at.desc()
    ).all()


def get_all_courts():

    query = Court.query
        
    current_user = get_current_user()
    
    if current_user:
        
        roles = get_user_roles(current_user.id)
        
        if 'COLLABORATOR' in roles:
            query = query.filter(
                Court.is_active.is_(True)
            )

    return query.order_by(
        Court.created_at.desc()
    ).all()
    
    
def create_site(payload):

    data = validate_location_payload(
        payload,
        entity="site"
    )

    try:
        site = Site(**data)

        db.session.add(site)
        db.session.commit()

        return site

    except Exception:
        db.session.rollback()
        raise


def create_court(payload):

    data = validate_location_payload(
        payload,
        entity="court"
    )

    try:
        court = Court(**data)

        db.session.add(court)
        db.session.commit()

        return court

    except Exception:
        db.session.rollback()
        raise

def update_site(site_id, payload):

    data = validate_location_payload(
        payload,
        entity="site",
        partial=True
    )

    try:
        site = Site.query.filter_by(
            id=site_id
        ).with_for_update().first()

        if not site:
            raise ResourceNotFoundError(
                "La sede solicitada no existe."
            )

        for field, value in data.items():
            setattr(site, field, value)

        db.session.commit()

        return site

    except Exception:
        db.session.rollback()
        raise


def update_court(court_id, payload):

    data = validate_location_payload(
        payload,
        entity="court",
        partial=True
    )

    try:
        court = Court.query.filter_by(
            id=court_id
        ).with_for_update().first()

        if not court:
            raise ResourceNotFoundError(
                "El juzgado solicitado no existe."
            )

        for field, value in data.items():
            setattr(court, field, value)

        db.session.commit()

        return court

    except Exception:
        db.session.rollback()
        raise
    
def toggle_site_status(site_id, is_active):

    return toggle_location_status(
        Site,
        site_id,
        is_active,
        "La sede solicitada no existe."
    )


def toggle_court_status(court_id, is_active):

    return toggle_location_status(
        Court,
        court_id,
        is_active,
        "El juzgado solicitado no existe."
    )


def toggle_location_status(model, location_id, is_active, error_message):

    if not isinstance(is_active, bool):
        raise ValueError("El estado debe ser booleano.")

    try:
        location = model.query.filter_by(
            id=location_id
        ).with_for_update().first()

        if not location:
            raise ResourceNotFoundError(error_message)

        location.is_active = is_active

        db.session.commit()

        return location

    except Exception:
        db.session.rollback()
        raise