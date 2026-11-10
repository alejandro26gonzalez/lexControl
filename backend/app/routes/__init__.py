from app.routes.auth import auth_bp
from app.routes.dashboards import dashboard_bp
from app.routes.health import health_bp
from app.routes.admin import admin_bp
from app.routes.client import client_bp
from app.routes.collaborator import collaborator_bp

BLUEPRINTS = (
    auth_bp,
    dashboard_bp,
    health_bp,
    admin_bp,
    client_bp,
    collaborator_bp
)

def register_routes(app):
    
    for blueprint in BLUEPRINTS:
        app.register_blueprint(blueprint)
        