from flask import Blueprint

admin_bp = Blueprint(
    "admin",
    __name__,
    url_prefix="/admin"
)

from app.routes.admin.users import users_bp

admin_bp.register_blueprint(users_bp)
