from app.services.auth_identity.identity import get_identity
from app.services import create_user_session
from app.services.users import get_user_by_id
from app.services import get_user_roles

def authenticate_external_identity(
    provider,
    provider_user_id
):
    
    identity = get_identity(
        provider=provider,
        provider_user_id=provider_user_id
    )
    
    if not identity:
        return {
            "authenticated": False,
            "status": "identity_not_found"
        }
    
    user = get_user_by_id(identity.user_id)
    
    if not user:
        return {
            "authenticated": False,
            "status": "user_inactive"
        }
        
    new_session = create_user_session(
        user_id=user.id
    )
    
    roles = get_user_roles(user.id)
    
    return {
        "authenticated": True,
        "status": "authenticated",
        "user": {
            "id": user.id,
            "email": user.email,
            "roles": roles
        },
        "session": new_session
    }