from flask import Blueprint

dashboard_bp = Blueprint(
    "dashboard",
    __name__,
    url_prefix = "/dashboard"
)

from app.routes.dashboards.dashboard import (
    client_dashboard,
    collaborator_dashboard,
    admin_dashboard
)