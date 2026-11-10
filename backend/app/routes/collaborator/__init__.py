from flask import Blueprint

collaborator_bp = Blueprint(
    "collaborator",
    __name__,
    url_prefix="/collaborator"
)

from app.routes.collaborator.expediente import expediente_bp
from app.routes.collaborator.repo import repo_bp
from app.routes.collaborator.agenda import agenda_bp

collaborator_bp.register_blueprint(expediente_bp)
collaborator_bp.register_blueprint(repo_bp)
collaborator_bp.register_blueprint(agenda_bp)