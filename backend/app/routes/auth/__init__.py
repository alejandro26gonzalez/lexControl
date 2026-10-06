from flask import Blueprint

auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/auth"
)

from app.routes.auth.login import login
from app.routes.auth.getMe import get_me
from app.routes.auth.logout import logout
from app.routes.auth.recovery import recovery_bp
from app.routes.auth.registration import register_bp
from app.routes.auth.providers import providers_bp


SUB_BLUEPRINTS = (
    recovery_bp,
    register_bp,
    providers_bp
)

for blueprints in SUB_BLUEPRINTS:
    auth_bp.register_blueprint(blueprints)
