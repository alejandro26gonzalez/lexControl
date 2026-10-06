from flask import Blueprint, jsonify
from sqlalchemy import text

from app import db

from app.routes.health import health_bp

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