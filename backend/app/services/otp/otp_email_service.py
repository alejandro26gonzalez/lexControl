from flask import current_app
from app.services.email.template_renderer import render_email_template
from app.services.email.factory import get_email_service

OTP_EMAIL_CONFIG = {
    "registration": {
        "template": "otp_registration.html",
        "subjects": {
            "new": "Verificación de cuenta - LexControl",
            "resend": "Nuevo código de verificación - LexControl"
        },
        "messages": {
            "new": (
                "Tu código de verificación de LexControl es {otp}. "
                "Este código es válido durante 5 minutos."
            ),
            "resend": (
                "Tu nuevo código de verificación de LexControl es {otp}. "
                "Este código es válido durante 5 minutos."
            )
        }
    },
    "password_reset":{
        "template": "otp_password_reset.html",
        "subjects": {
            "new": "Recuperación de cuenta - LexControl",
            "resend": "Nuevo código de recuperación - LexControl"
        },
        "messages":{
            "new":(
                "Tu código para restablecer la contraseña de LexControl "
                "es {otp}. Este código es válido durante 5 minutos."
            ),
            "resend": (
                "Tu nuevo código para restablecer la contraseña de "
                "LexControl es {otp}. Este código es válido durante 5 minutos."
            )
        }
    }
}


def send_otp_email(
    email:str,
    name:str,
    otp:str,
    purpose: str,
    context: str = "new"
):
    
    purpose_config = OTP_EMAIL_CONFIG.get(purpose)
    
    if not purpose_config:
        raise ValueError(
            f"Propósito de OTP no soportado: {purpose}"
        )
            
    subject = purpose_config["subjects"].get(context)
    message_template = purpose_config["messages"].get(context)
    
    if not subject or not message_template:
        raise ValueError(
            f"Contexto de OTP no soportado: {context}"
        )
    
    html = render_email_template(
        purpose_config["template"],
        subject=subject,
        logo_url=current_app.config["EMAIL_LOGO_URL"],
        name=name,
        otp=otp,
        expiration_minutes=5,
        context=context
    )
    
    email_service = get_email_service()
        
    return email_service.send_email(
        to=email,
        subject=subject,
        html=html,
        text=message_template.format(otp=otp)
    )