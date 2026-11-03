import resend
import os

from app.services.email.email_service import EmailService


class ResendEmailService(EmailService):

    def __init__(self, api_key: str):
        resend.api_key = api_key

    def send_email(
        self,
        to: str,
        subject: str,
        html: str,
        text: str | None = None
    ):
        mail_from = os.getenv("MAIL_FROM", "no-reply@aleksevgonzalez.com")
        mail_from_name = os.getenv("MAIL_FROM_NAME", "LEXCONTROL")
        params = {
            "from": f"{mail_from_name} <{mail_from}>",
            "to": [to],
            "subject": subject,
            "html": html,
        }

        if text:
            params["text"] = text
        
        print(f"Remitente configurado: {mail_from}")
        print(f"Nombre del remitente: {mail_from_name}")

        return resend.Emails.send(params)