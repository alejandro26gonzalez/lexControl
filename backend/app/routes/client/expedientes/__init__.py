from flask import Blueprint

expedientes_bp = Blueprint(
    "client_expedientes",
    __name__,
    url_prefix="/expedientes"
)

from app.routes.client.expedientes import routes