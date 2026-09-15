import os

from dotenv import load_dotenv

load_dotenv()

class Config:
    ENVIRONMENT = os.getenv(
        "ENVIRONMENT",
        "development"
    )
    
    SECRET_KEY = os.getenv(
        "SECRET_KEY"
    )
    
    DATABASE_URL=os.getenv(
        "DATABASE_URL"
    )
    
    if not SECRET_KEY:
        raise RuntimeError(
            "SECRET_KEY no está configurada."
        )
    
    if not DATABASE_URL:
        raise RuntimeError(
            "DATABASE_URL no está configurada."
        )    
        
    SQLALCHEMY_DATABASE_URI = DATABASE_URL
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = "Lax"
    SESSION_COOKIE_SECURE = False