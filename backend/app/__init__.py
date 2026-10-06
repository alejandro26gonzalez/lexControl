import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from authlib.integrations.flask_client import OAuth

from app.config import Config


db = SQLAlchemy()
migrate = Migrate()
oauth = OAuth()


def create_app():
    app = Flask(__name__)
    
    app.config.from_object(Config)
    app.config["EMAIL_LOGO_URL"] = os.getenv("EMAIL_LOGO_URL")
    
    CORS(
        app,
        origins=[
            "http://localhost:5173"
        ],
        supports_credentials=True
    )
    
    db.init_app(app)
    migrate.init_app(app, db)
    oauth.init_app(app)
    
    oauth.register(
        name="google",
        server_metadata_url=(
            "https://accounts.google.com/"
            ".well-known/openid-configuration"
        ),
        client_kwargs={
            "scope": "openid profile email"
        }
    )
    
    from app.models import (
        User,
        UserRole,
        Role,
        Session,
        PasswordResetOTP,
        PasswordRecoverySession
    )
    
    from app.routes import register_routes

    register_routes(app)

    return app