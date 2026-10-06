from flask import current_app, session
from authlib.integrations.flask_client import OAuth

from app.services.providers.base import BaseProvider

class GoogleProvider(BaseProvider):
    
    PROVIDER_NAME = "google"
    
    def __init__(self, oauth):
        self.oauth = oauth
        self.client = self.oauth.create_client(
            self.PROVIDER_NAME
        )
        
    def get_authorization_url(self, state, nonce):
        redirect_uri = current_app.config["GOOGLE_REDIRECT_URI"]
        
        result = self.client.create_authorization_url(
                redirect_uri=redirect_uri,
                state=state,
                nonce=nonce
            )
        
        return result["url"]
    
    def exchange_code(self, code, nonce):
        
        redirect_uri = current_app.config[
            "GOOGLE_REDIRECT_URI"
        ]

        token = self.client.fetch_access_token(
            code=code,
            redirect_uri=redirect_uri
        )

        userinfo = self.client.parse_id_token(
            token,
            nonce=nonce
        )

        token["userinfo"] = userinfo

        return token
    
    def get_identity(self, token):
        userinfo = token.get("userinfo")
        
        if not userinfo:
            raise ValueError(
                "Google no proporcionó información de identidad."
            )
            
        provider_user_id = userinfo.get("sub")
        email = userinfo.get("email")
        
        if not provider_user_id:
            raise ValueError(
                "Google no proporcionó un identificador de usuario."
            )
            
        if not email:
            raise ValueError(
                "Google no proporcionó correo electrónico."
            )
        return {
            "provider": self.PROVIDER_NAME,
            "provider_user_id": provider_user_id,
            "email": email.strip().lower(),
            "email_verified": userinfo.get(
                "email_verified",
                False
            ),
            "name": userinfo.get("given_name"),
            "last_name": userinfo.get("family_name"),
            "picture": userinfo.get("picture")
        }