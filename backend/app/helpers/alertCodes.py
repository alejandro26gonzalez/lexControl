
from flask import jsonify

# helpers para normalizar erroes y exitos

def auth_error(message, code, status=400, **extra):
    return jsonify({
        "error": message,
        "code": code,
        **extra
    }), status
    
def auth_success(message, code, status=200, **extra):
    return jsonify({
        "message": message,
        "code": code,
        **extra
    }), status