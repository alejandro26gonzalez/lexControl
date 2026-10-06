import resend

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
        params = {
            "from": "onboarding@resend.dev",
            "to": [to],
            "subject": subject,
            "html": html,
        }

        if text:
            params["text"] = text

        return resend.Emails.send(params)