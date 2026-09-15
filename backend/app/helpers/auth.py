from functools import wraps
from datetime import datetime, timezone
import hashlib
import secrets

from flask import jsonify, session

from app import db
from app.models import User, Session, UserRole, Role

SESSION_DURATION_HOURS = 8

#genera un token criptográfico seguro para la sesión del user
def generate_session_token():
    return secrets.token_urlsafe(32)

#generador del hash sha256 del token, el original nunca se almacena
def hash_session_token(token):
    return hashlib.sha256(
        token.encode("utf-8")
    ).hexdigest()
    
#obtenedor de la sesion activa asociada al token almacenado en la cookie
def get_current_session():
    
    token = session.get("session_token")
    
    if not token:
        return None
    
    token_hash = hash_session_token(token)
    
    current_session = Session.query.filter_by(
        session_token_hash = token_hash
    ).first()
    
    if not current_session:
        session.clear()
        return None
    
    now = datetime.now(timezone.utc)
    
    if current_session.revoked_at is not None:
        session.clear()
        return None
    
    if current_session.expires_at <= now:
        session.clear()
        return None
    
    return current_session


#obtenedor del usuario asociado a la sesión actual
def get_current_user():
    current_session = get_current_session()
    
    if not current_session:
        return None
    
    user = db.session.get(
        User, current_session.user_id
    )
    
    if not user:
        session.clear()
        return None
    
    if not user.is_active:
        session.clear()
        return None
    
    return user

#obtenedor de todos los roles asociados a un usuario
def get_user_roles(user_id):
    roles = (
        db.session.query(Role.name)
        .join(
            UserRole,
            UserRole.role_id == Role.id
        )
        .filter(
            UserRole.user_id == user_id
        )
        .all()
    )   
    
    return [
        role_name
        for (role_name,) in roles
    ]
    

#protege una ruta que requiere autenticacion
def login_required(function):
    @wraps(function)
    def decorated_function(*args, **kwargs):
        
        user = get_current_user()
        
        if not user:
            return jsonify({
                "error": "Autenticación requerida"
            }), 401
            
        return function(*args, **kwargs)
    
    return decorated_function

#protector de una ruta segun los roles actuales almacenados en la BD
def role_required(*allowed_roles):
    def decorator(function):
        @wraps(function)
        def decorated_function(*args, **kwargs):
            
            user = get_current_user()
            
            if not user:
                return jsonify({
                    "error": "Autenticación requerida"
                }), 401
                
            user_roles = get_user_roles(user.id)
            
            has_permission = any(
                role in allowed_roles
                for role in user_roles
            )
            
            if not has_permission:
                return jsonify({
                    "error": "No tienes permisos para acceder a este recurso"
                }), 403
                
            return function(*args, **kwargs)
        
        return decorated_function
    
    return decorator