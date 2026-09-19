from datetime import datetime, timezone, timedelta

from app import db
from app.models import PasswordResetOTP

from app.helpers import (
    generate_otp,
    generate_salt,
    hash_otp,
    verify_otp
)

OTP_EXPIRATION_MINUTES = 5
MAX_OTP_ATTEMPTS = 5

"""
Invalidador de todos los OTP activos anteriores del usuario.
"""
def _invalidate_previous_otps(user_id):
    
    now = datetime.now(timezone.utc)
    
    active_otps = PasswordResetOTP.query.filter(
        PasswordResetOTP.user_id == user_id,
        PasswordResetOTP.used_at.is_(None),
        PasswordResetOTP.expires_at > now,
        PasswordResetOTP.attempts < MAX_OTP_ATTEMPTS
    ).all()
    
    for otp_record in active_otps:
        otp_record.expires_at = now

"""
Crea un nuevo OTP y prepara su registro en la sesión de SQLAlchemy sin realizar commit.
"""
def create_password_reset_otp_record(user_id):
    
    _invalidate_previous_otps(user_id)
    
    otp = generate_otp()
    salt = generate_salt()
    otp_hash = hash_otp(otp, salt)
    
    now = datetime.now(timezone.utc)
    
    otp_record = PasswordResetOTP(
        user_id=user_id,
        otp_hash=otp_hash,
        salt=salt,
        attempts=0,
        created_at=now,
        expires_at=now + timedelta(minutes=OTP_EXPIRATION_MINUTES),
        used_at=None
    )
    
    db.session.add(otp_record)
    
    return otp, otp_record

"""
Obtiene el OTP activo más reciente del usuario.
"""
def get_active_password_reset_otp(user_id):
    
    now = datetime.now(timezone.utc)
    
    return (
        PasswordResetOTP.query.filter(
            PasswordResetOTP.user_id == user_id,
            PasswordResetOTP.used_at.is_(None),
            PasswordResetOTP.expires_at > now,
            PasswordResetOTP.attempts < MAX_OTP_ATTEMPTS
        )
        .order_by(PasswordResetOTP.created_at.desc())
        .first()
    )

"""
Valida el OTP proporcionado contra el registro almacenado.
"""
def validate_password_reset_otp_record(user_id, otp):
    
    otp_record = get_active_password_reset_otp(user_id)
    
    if not otp_record:
        return (
            False, 
            None, 
            "OTP inválido o expirado."
            )
    
    if not verify_otp(
        otp, 
        otp_record.salt,
        otp_record.otp_hash
    ): 
        otp_record.attempts += 1
        
        if otp_record.attempts >= MAX_OTP_ATTEMPTS:
            return (
                False, 
                otp_record, 
                "Número máximo de intentos alcanzados"
                )
        
        return (
            False, 
            otp_record, 
            "OTP incorrecto."
            )
    
    return (
        True, 
        otp_record, 
        "OTP validado correctamente."
        )