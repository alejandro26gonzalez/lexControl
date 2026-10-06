from flask import jsonify, redirect, request, session

from app.helpers.alertCodes import auth_error
from app.routes.auth.providers import providers_bp
from authlib.common.security import generate_token
from app import oauth
from app.services.providers.google import GoogleProvider

from app.services.auth_identity import authenticate_external_identity
from flask import current_app

google_provider = GoogleProvider(oauth)

@providers_bp.route("/google", methods=["GET"])
def google_login():
    
    state = generate_token()
    nonce = generate_token()
    
    session["google_oauth_state"] = state
    session["google_oauth_nonce"] = nonce
    
    print(
        "GOOGLE REDIRECT URI:",
        current_app.config["GOOGLE_REDIRECT_URI"]
    )
    
    authorization_url = (
        google_provider.get_authorization_url(
            state=state,
            nonce=nonce
        )
    )
    
    return redirect(authorization_url)

@providers_bp.route("/google/callback", methods=["GET"])
def google_callback():
    
    state = request.args.get("state")
    code = request.args.get("code")
    
    expected_state = session.pop(
        "google_oauth_state",
        None
    )
    
    nonce = session.pop(
        "google_oauth_nonce",
        None
    )
    
    if not state or state != expected_state:
        return auth_error(
            "Estado OAuth inválido.",
            "GOOGLE_OAUTH_STATE_INVALID",
            400
        )
        
    if not code:
        return auth_error(
            "Google no proporcionó un código de autorización",
            "GOOGLE_AUTH_CODE_MISSING",
            400
        )
        
    if not nonce:
        return auth_error(
            "No se encontró el nonce de autenticación",
            "GOOGLE_OAUTH_NONCE_MISSING",
            400
        )
        
    try: 
        token = google_provider.exchange_code(code=code, nonce=nonce)
        
        identity = google_provider.get_identity(token)
        
        result = authenticate_external_identity(
            provider=identity["provider"],
            provider_user_id=identity["provider_user_id"]
        )
        
        return jsonify({
            "message": "Autenticación de Google exitosa.",
            "status": result["status"],
            "user": result["user"],
        })
        
    except Exception as e:
        print("GOOGLE AUTH ERROR:", repr(e))
        
        return auth_error(
            "No fue posible autenticar con Google",
            "GOOGLE_AUTH_FAILED",
            400
        )