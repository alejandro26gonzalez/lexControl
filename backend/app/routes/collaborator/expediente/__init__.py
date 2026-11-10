from flask import Blueprint

expediente_bp = Blueprint(
    "collaborator_expedientes",
    __name__,
    url_prefix="/expediente"
)

from app.routes.collaborator.expediente import routes