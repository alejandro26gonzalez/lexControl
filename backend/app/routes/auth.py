from flask import Blueprint, jsonify, request, session
from datetime import datetime, timezone, timedelta

from app import db
from app.models import User, Session

from app.helpers.auth import (
    generate_session_token,
    hash_session_token,
    get_current_session,
    get_current_user,
    get_user_roles,
    SESSION_DURATION_HOURS
)

auth_bp = Blueprint(
    "auth", 
    __name__, 
    url_prefix="/auth"
)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    
    email = data.get("email")
    password = data.get("password")
    
    if not data:
        return jsonify({
            "error": "Datos de autenticación requeridos"
        }), 400
    
    if not email or not password:
        return jsonify({
            "error": "Email y contraseña son obligatorios",
        }), 400
        
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({
            "error": "Credenciales inválidas"
        }), 400
        
    if not user.is_active:
        return jsonify({
            "error": "Usuario inactivo"
        }), 400
        
    if not user.check_password(password):
        return jsonify({
            "error": "Credenciales inválidas"
        }), 400
        
    session.clear()
    
    raw_token = generate_session_token()
    token_hash = hash_session_token(raw_token)
    
    now = datetime.now(timezone.utc)
    
    new_session = Session(
        user_id = user.id,
        session_token_hash = token_hash,
        created_at = now,
        expires_at = now + timedelta(
            hours=SESSION_DURATION_HOURS
        )
    )
    
    db.session.add(new_session)
    db.session.commit()
    
    session["session_token"] = raw_token
    
    roles = get_user_roles(user.id)
    
    return jsonify({
        "message": "Autenticación exitosa",
        "user": {
            "id": user.id,
            "email": user.email,
            "roles": roles
        }
    }), 200
    
    
@auth_bp.route("/me", methods=["GET"])
def get_me():
    user = get_current_user()
    
    if not user:
        return jsonify({
            "authenticated": False
        }), 401
        
    roles = get_user_roles(user.id)
        
    return jsonify({
        "authenticated": True,
        "user": {
            "id": user.id,
            "email": user.email,
            "roles": roles
        }
    }), 200
    
    
@auth_bp.route("/logout", methods=["POST"])
def logout():
    
    current_session = get_current_session()
    
    if current_session:
        
        current_session.revoked_at = datetime.now(
            timezone.utc
        )
        
        db.session.commit()
    
    session.clear()
    
    return jsonify({
        "message": "Sesión cerrada correctamente"
    }), 200