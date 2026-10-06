import os

from app.services.email.resend_adapter import ResendEmailService

def get_email_service():
    
    api_key = os.getenv("RESEND_API_KEY")
    
    if not api_key:
        raise RuntimeError(
            "RESEND_API_KEY no está configurada."
        )
    return ResendEmailService(api_key)