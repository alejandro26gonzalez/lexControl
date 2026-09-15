import hashlib
import secrets
import string
from datetime import datetime, timezone, timedelta

from app import db
from app.models import PasswordResetOTP

OTP_LENGTH = 8

OTP_ALPHABET = (
    string.ascii_uppercase.replace("O", "").replace("I", "")
    + string.ascii_lowercase.replace("o", "").replace("i", "").replace("l", "")
    + string.digits.replace("0", "").replace("1", "")
)

OTP_EXPIRATION_MINUTES = 5
MAX_OTP_ATTEMPS = 5

def generate_otp():
    return "".join(
        secrets.choice(OTP_ALPHABET)
        for _ in range(OTP_LENGTH)
    )
    
def generate_salt():
    
    return secrets.token_hex(16)

def hash_otp(otp, salt):
    
    value = f"{salt}{otp}".encode("utf-8")
    
    return hashlib.sha256(value).hexdigest()

def verify_otp(otp, salt, expected_hash):
    
    calculated_hash = hash_otp(otp, salt)
    
    return secrets.compare_digest(
        calculated_hash,
        expected_hash
    )
    
def invalidate_previous_otps(user_id):
    
    now = datetime.now(timezone.utc)
    
    active_otps = PasswordResetOTP.query.filter(
        PasswordResetOTP.user_id == user_id,
        PasswordResetOTP.used_at.is_(None),
        PasswordResetOTP.expires_at > now,
        PasswordResetOTP.attempts > MAX_OTP_ATTEMPS
    ).all()
    
    for otp_record in active_otps:
        otp_record.expires_at = now
    
def create_password_reset_otp(user_id):
    
    invalidate_previous_otps(user_id)
    
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
    db.session.commit()
    
    return otp, otp_record

def get_active_password_reset_otp(user_id):
    
    now = datetime.now(timezone.utc)
    
    return (
        PasswordResetOTP.query.filter(
            PasswordResetOTP.user_id == user_id,
            PasswordResetOTP.used_at.is_(None),
            PasswordResetOTP.expires_at > now,
            PasswordResetOTP.attempts < MAX_OTP_ATTEMPS
        )
        .order_by(PasswordResetOTP.created_at.desc())
        .first()
    )
    
def validate_password_reset_otp(user_id, otp):
    
    otp_record = get_active_password_reset_otp(user_id)
    
    if not otp_record:
        return False, None, "OTP inválido o expirado."
    
    if not verify_otp(
        otp, 
        otp_record.salt,
        otp_record.otp_hash
    ): 
        otp_record.attempts += 1
        db.session.commit()
        
        if otp_record.attempts >= MAX_OTP_ATTEMPS:
            return False, otp_record, "Número máximo de intentos alcanzado-"
        
        return False, otp_record, "OTP incorrecto."
    
    otp_record.used_At = datetime.now(timezone.utc)
    
    db.session.commit()
    
    return True, otp_record, "OTP validado correctamente."