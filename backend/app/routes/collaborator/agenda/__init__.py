from flask import Blueprint

agenda_bp = Blueprint(
    "collaborator_agenda",
    __name__,
    url_prefix="/agenda"
)

from app.routes.collaborator.agenda import routes