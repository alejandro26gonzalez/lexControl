from flask import Blueprint

recovery_bp = Blueprint(
    "recovery",
    __name__,
    url_prefix="/forgot-password"
)

from app.routes.auth.recovery.verifyotp import verify_otp
from app.routes.auth.recovery.resetPassword import reset_password
from app.routes.auth.recovery.forgotPassword import forgot_password
from app.routes.auth.recovery.resendOtp import resend_otp