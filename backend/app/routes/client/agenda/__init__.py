from flask import Blueprint

agenda_bp = Blueprint(
    "client_agenda",
    __name__,
    url_prefix="/agenda"
)

from app.routes.client.agenda import routes