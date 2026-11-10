from flask import Blueprint

repo_bp = Blueprint(
    "collaborator_repo",
    __name__,
    url_prefix="/repo"
)

from app.routes.collaborator.repo import routes