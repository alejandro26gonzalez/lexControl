from flask import (
    request,
    session
)

from datetime import (
    datetime,
    timezone,
    timedelta
)

from app.helpers.alertCodes import (
    auth_error,
    auth_success
)

from app.models import (
    User, 
    Session
)

from app.services import (
    get_user_roles,
    create_user_session
)

from app import db

from app.routes.auth import auth_bp

# -----------------------------------------
# Configuración de sesiones
# -----------------------------------------

NORMAL_SESSION_DURATION = timedelta(hours=6)
REMEMBERED_SESSION_DURATION = timedelta(hours=48)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    
    if not data:
        return auth_error(
            "Datos de autenticación requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )
        
    email = data.get("email")
    password = data.get("password")
    remember_me = data.get("remember_me", False)
        
        
    if not email or not password:
        return auth_error(
            "Email y contraseña son obligatorios.",
            "AUTH_DATA_REQUIRED",
            400
        )
        
    user = User.query.filter_by(
        email=email
    ).first()
    
    if not user:
        return auth_error(
            "Credenciales inválidas.",
            "AUTH_INVALID_CREDENTIALS",
            400
        )
        
    if not user.is_active:
        return auth_error(
            "Usuario inactivo.",
            "AUTH_USER_INACTIVE",
            400
        )
        
    if not user.check_password(password):
        return auth_error(
            "Credenciales inválidas.",
            "AUTH_INVALID_CREDENTIALS",
            400
        )
    
    create_user_session(
        user.id,
        remember_me
    )
    
    roles = get_user_roles(user.id)
    
    return auth_success(
        "Autenticación exitosa.",
        "AUTH_LOGIN_SUCCESS",
        user={
            "id": user.id,
            "email": user.email,
            "roles": roles
        }
    )