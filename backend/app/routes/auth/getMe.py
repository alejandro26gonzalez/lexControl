from flask import jsonify, session

from app.helpers.alertCodes import auth_error
from app.models.user.user import User
from app.services.auth.auth import get_current_session, get_user_roles

from app.routes.auth import auth_bp

from app import db

@auth_bp.route("/me", methods=["GET"])
def get_me():
    
    current_session = get_current_session()
    
    if not current_session:
        return auth_error(
            "No hay una sesión autenticada.",
            "AUTH_SESSION_INVALID",
            401,
            authenticated=False
        )
    
    user = db.session.get(
        User,
        current_session.user_id
    )
    
    if not user or not user.is_active:
        session.clear()
        
        return auth_error(
            "No hay una sesión autenticada.",
            "AUTH_SESSION_INVALID",
            401,
            authenticated=False
        )
        
    roles = get_user_roles(user.id)
    
    return jsonify({
        "message": "Sesión autenticada correctamente.",
        "authenticated": True,
        "expires_at": current_session.expires_at.isoformat()
    })
