from datetime import datetime, timezone

from flask import session

from app import db
from app.helpers.alertCodes import auth_success
from app.routes.auth import auth_bp
from app.services.auth.auth import revoke_current_session



@auth_bp.route("/logout", methods=["POST"])
def logout():
        
    revoke_current_session()
    
    return auth_success(
        "Sesión cerrada correctamente",
        "AUTH_LOGOUT_SUCCESS"
    )