from datetime import datetime, timedelta, timezone

from app import db
from app.models import RegistrationOTP

from app.helpers.otp import (
    generate_salt,
    generate_otp,
    hash_otp,
    verify_otp
)

OTP_EXPIRATION_MINUTES = 5

MAX_OTP_ATTEMPTS = 3
MAX_FAILED_OTPS_PER_SESSION = 5

def _invalidate_previous_otps(registration_session_id):
    now = datetime.now(timezone.utc)
    
    active_otps = RegistrationOTP.query.filter(
        RegistrationOTP.registration_session_id == registration_session_id,
        RegistrationOTP.used_at.is_(None),
        RegistrationOTP.expires_at > now,
        RegistrationOTP.attempts < MAX_OTP_ATTEMPTS
    ).all()
    
    for otp_record in active_otps:
        otp_record.expires_at = now
        
def create_registration_otp(registration_session_id):
    _invalidate_previous_otps(registration_session_id)
    
    otp = generate_otp()
    salt = generate_salt()
    
    otp_hash = hash_otp(
        otp,
        salt
    )
    
    now = datetime.now(timezone.utc)
    
    otp_record = RegistrationOTP(
        registration_session_id=registration_session_id,
        otp_hash=otp_hash,
        salt=salt,
        attempts=0,
        created_at=now,
        expires_at= now + timedelta(
            minutes=OTP_EXPIRATION_MINUTES
        ),
        used_at=None
    )
    
    db.session.add(otp_record)
    
    return otp, otp_record

def get_active_registration_otp(registration_session_id):
    
    now = datetime.now(timezone.utc)
    
    return(
        RegistrationOTP.query.filter(
            RegistrationOTP.registration_session_id == registration_session_id,
            RegistrationOTP.used_at.is_(None),
            RegistrationOTP.expires_at > now,
            RegistrationOTP.attempts < MAX_OTP_ATTEMPTS
        )
        .order_by(RegistrationOTP.created_at.desc())
        .first()
    )
    
def validate_registration_otp(registration_session, otp):
    otp_record = get_active_registration_otp(registration_session.id)
    
    if not otp_record:
        return (
            False,
            None,
            0,
            False,
            False,
            "OTP inválido o expirado."
        )
    if not verify_otp(
        otp,
        otp_record.salt,
        otp_record.otp_hash
    ):
        otp_record.attempts += 1
        
        remaining_attempts = (
            MAX_OTP_ATTEMPTS - otp_record.attempts
        )
        
        if otp_record.attempts >= MAX_OTP_ATTEMPTS:
            
            registration_session.failed_otp_count += 1
            
            if (
                registration_session.failed_otp_count >= MAX_FAILED_OTPS_PER_SESSION
            ):
                registration_session.blocked_at = datetime.now(timezone.utc)
                
                return (
                    False,
                    otp_record,
                    0,
                    True,
                    True,
                    "Se alcanzó el límite de códigos incorrectos para esta sesión."
                )
            return (
                False,
                otp_record,
                0,
                True,
                False,
                "Número máximo de intentos alcanzados."
            )
        return (
            False,
            otp_record,
            remaining_attempts,
            False,
            False,
            "OTP incorrecto."
        )
    
    now = datetime.now(timezone.utc)
    
    otp_record.used_at = now
    
    registration_session.otp_verified_at = now
    
    return (
        True,
        otp_record,
        MAX_OTP_ATTEMPTS - otp_record.attempts,
        False,
        False,
        "OTP validado correctamente."
    )