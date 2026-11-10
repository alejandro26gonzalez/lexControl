from flask import Blueprint

professionals_bp = Blueprint(
    "admin_professionals",
    __name__,
    url_prefix="/professionals"
)

from app.routes.admin.catalog.professionals import routes
