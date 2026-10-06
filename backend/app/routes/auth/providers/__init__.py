from flask import Blueprint

providers_bp = Blueprint(
    "providers",
    __name__,
    url_prefix="/provider"
)

from app.routes.auth.providers.google import (
    google_login,
    google_callback
)
