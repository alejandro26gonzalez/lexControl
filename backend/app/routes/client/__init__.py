from flask import Blueprint

client_bp = Blueprint(
    "client",
    __name__,
    url_prefix="/client"
)

from app.routes.client.expedientes import expedientes_bp
from app.routes.client.docs import docs_bp
from app.routes.client.agenda import agenda_bp

client_bp.register_blueprint(expedientes_bp)
client_bp.register_blueprint(docs_bp)
client_bp.register_blueprint(agenda_bp)