from flask import Blueprint

admin_bp = Blueprint(
    "admin",
    __name__,
    url_prefix="/admin"
)

from app.routes.admin.users import users_bp
from app.routes.admin.locations import locations_bp
from app.routes.admin.catalog import catalog_bp

admin_bp.register_blueprint(users_bp)
admin_bp.register_blueprint(locations_bp)
admin_bp.register_blueprint(catalog_bp)