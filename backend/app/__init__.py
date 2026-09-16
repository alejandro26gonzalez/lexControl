from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from app.config import Config


db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    
    app.config.from_object(Config)
    
    CORS(
        app,
        origins=[
            "http://localhost:5173"
        ],
        supports_credentials=True
    )
    
    db.init_app(app)
    migrate.init_app(app, db)
    
    from app.models import (
        User,
        UserRole,
        Role,
        Session,
        PasswordResetOTP,
        PasswordResetSession
    )
    
    from app.routes.auth import auth_bp
    from app.routes.dashboard import dashboard_bp
    from app.routes.health import health_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(dashboard_bp)
    app.register_blueprint(health_bp)

    return app