from flask import Blueprint, jsonify

from app.helpers.auth import role_required

dashboard_bp = Blueprint(
    "dashboard",
    __name__,
    url_prefix = "/dashboard"
)

@dashboard_bp.route("/client", methods=["GET"])
@role_required("CLIENT")
def client_dashboard():
    return jsonify({
        "message": "Bienvenido al Dashboard de Cliente",
        "dashboard": "CLIENT"
    }), 200
    
@dashboard_bp.route("/collaborator", methods=["GET"])
@role_required("COLLABORATOR")
def collaborator_dashboard():
    return jsonify({
        "message": "Bienvenido al Dashboard de Collaborator",
        "dashboard": "COLLABORATOR"
    }), 200
    
@dashboard_bp.route("/admin", methods=["GET"])
@role_required("ADMIN")
def admin_dashboard():
    return jsonify({
        "message": "Bienvenido al Dashboard de Administración",
        "dashboard": "ADMIN"
    }), 200
    