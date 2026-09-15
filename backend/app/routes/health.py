from flask import Blueprint, jsonify
from sqlalchemy import text

from app import db

health_bp = Blueprint(
    "/health",
    __name__,
    url_prefix="/api"
)

@health_bp.route("/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "ok",
        "service": "LEXCONTROL"
    }), 200
    
@health_bp.route("/health/db", methods=["GET"])
def database_health_check():
    try:
        db.session.execute(text("SELECT 1"))
        
        return jsonify({
            "status": "ok",
            "database": "connected"
        }), 200
        
    except Exception:
        return jsonify({
            "status": "error",
            "database": "unavailable"
        }), 503