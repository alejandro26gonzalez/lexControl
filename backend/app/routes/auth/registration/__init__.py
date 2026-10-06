from flask import Blueprint

register_bp = Blueprint(
    "register",
    __name__,
    url_prefix="/register"
)

from app.routes.auth.registration.register import register
from app.routes.auth.registration.profile import register_profile
from app.routes.auth.registration.verifyotp import validate_registration_otp
from app.routes.auth.registration.resendotp import resend_registration_otp
from app.routes.auth.registration.completion import complete_registration