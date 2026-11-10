from flask import Blueprint

catalog_bp = Blueprint(
    "admin_catalogs",
    __name__,
    url_prefix="/catalogs"
)

from app.routes.admin.catalog.specialties import specialties_bp
from app.routes.admin.catalog.professionals import professionals_bp

catalog_bp.register_blueprint(specialties_bp)
catalog_bp.register_blueprint(professionals_bp)