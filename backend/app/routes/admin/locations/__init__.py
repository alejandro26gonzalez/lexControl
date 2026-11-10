from flask import Blueprint

locations_bp = Blueprint(
    "admin_locations",
    __name__,
    url_prefix="/locations"
)

from app.routes.admin.locations import routes
