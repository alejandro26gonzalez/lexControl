from flask import Blueprint

docs_bp = Blueprint(
    "client_docs",
    __name__,
    url_prefix="/docs"
)

from app.routes.client.docs import routes