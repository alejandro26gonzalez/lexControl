import hashlib
import secrets
import string
from datetime import datetime, timezone, timedelta

from app import db
from app.models import PasswordResetOTP
from app.models import PasswordResetSession

OTP_LENGTH = 8

OTP_ALPHABET = (
    string.ascii_uppercase.replace("O", "").replace("I", "")
    + string.ascii_lowercase.replace("o", "").replace("i", "").replace("l", "")
    + string.digits.replace("0", "").replace("1", "")
)

OTP_EXPIRATION_MINUTES = 5
MAX_OTP_ATTEMPTS = 5
RESET_SESSION_EXPIRATION_MINUTES = 5

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
        PasswordResetOTP.attempts > MAX_OTP_ATTEMPTS
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
            PasswordResetOTP.attempts < MAX_OTP_ATTEMPTS
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
        
        if otp_record.attempts >= MAX_OTP_ATTEMPTS:
            return False, otp_record, "Número máximo de intentos alcanzados"
        
        return False, otp_record, "OTP incorrecto."
    
    otp_record.used_at = datetime.now(timezone.utc)
    
    db.session.commit()
    
    return True, otp_record, "OTP validado correctamente."

def generate_reset_token():
    return secrets.token_urlsafe(32)

def hash_reset_token(token):
    return hashlib.sha256(
        token.encode("utf-8")
    ).hexdigest()

def create_password_reset_session(user_id):

    token = generate_reset_token()
    token_hash = hash_reset_token(token)

    now = datetime.now(timezone.utc)

    reset_session = PasswordResetSession(
        user_id=user_id,
        token_hash=token_hash,
        created_at=now,
        expires_at=now + timedelta(
            minutes=RESET_SESSION_EXPIRATION_MINUTES
        )
    )

    db.session.add(reset_session)
    db.session.commit()

    return token, reset_session

def get_active_password_reset_session(token):

    token_hash = hash_reset_token(token)

    now = datetime.now(timezone.utc)

    return (
        PasswordResetSession.query
        .filter(
            PasswordResetSession.token_hash == token_hash,
            PasswordResetSession.expires_at > now,
            PasswordResetSession.used_at.is_(None),
            PasswordResetSession.revoked_at.is_(None)
        ).first()
    )

def validate_password_reset_session(token):

    reset_session = get_active_password_reset_session(token)

    if not reset_session:
        return False, None, "Autorización inválida o expirada"

    return True, reset_session, "Autorización válida."

def consume_password_reset_session(token):

    reset_session = get_active_password_reset_session(token)

    if not reset_session:
        return(
            False,
            None,
            "Autorización no válida o expirada."
        )

    reset_session.used_at = datetime.now(timezone.utc)

    db.session.commit()

    return (
        True,
        reset_session,
        "Autorización consumida exitosamente."
    )
