from app.routes.auth import auth_bp
from app.routes.dashboards import dashboard_bp
from app.routes.health import health_bp

BLUEPRINTS = (
    auth_bp,
    dashboard_bp,
    health_bp
)

def register_routes(app):
    
    for blueprint in BLUEPRINTS:
        app.register_blueprint(blueprint)
        