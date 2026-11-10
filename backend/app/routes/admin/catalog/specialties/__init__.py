from flask import Blueprint

specialties_bp = Blueprint(
    "admin_specialties",
    __name__,
    url_prefix="/specialties"
)

from app.routes.admin.catalog.specialties import routes

