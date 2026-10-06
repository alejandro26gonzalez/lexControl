from flask import Blueprint

health_bp = Blueprint(
    "/health",
    __name__,
    url_prefix="/api"
)

from app.routes.health.health import (
    health_check,
    database_health_check
)