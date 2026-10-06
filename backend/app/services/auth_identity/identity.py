from app import db
from app.models import AuthIdentity


def get_identity(
    provider,
    provider_user_id
):
    return AuthIdentity.query.filter_by(
        provider=provider,
        provider_user_id=provider_user_id
    ).first()
    
def create_identity(
    user_id,
    provider,
    provider_user_id,
    provider_email=None,
    selected=False
):
    identity = AuthIdentity(
        user_id=user_id,
        provider=provider,
        provider_user_id=provider_user_id,
        provider_email=provider_email,
        selected=selected
    )
    
    db.session.add(identity)
    
    return identity

def get_user_identities(user_id):
    return AuthIdentity.query.filter_by(
        user_id=user_id
    ).all()

def get_selected_identity(user_id):
    return AuthIdentity.query.filter_by(
        user_id=user_id,
        selected=True
    ).first()
    
def select_identity(identity):
    AuthIdentity.query.filter_by(
        user_id=identity.user_id,
        selected=True
    ).update(
        {"selected": False},
        synchronize_session=False
    )
    
    identity.selected=True
    
    return identity