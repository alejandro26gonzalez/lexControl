import hashlib
import secrets 
from datetime import datetime, timezone, timedelta

from app import db
from app.models import PasswordRecoverySession

RECOVERY_SESSION_EXPIRATION_MINUTES = 10
MAX_OTP_REQUESTS_PER_SESSION = 5
MAX_FAILED_OTPS_PER_SESSION = 5

def _generate_recovery_token():
    return secrets.token_urlsafe(32)

def _hash_recovery_token(token):
    return hashlib.sha256(
        token.encode("utf-8")
    ).hexdigest()
    
def _invalidate_previous_recovery_sessions(user_id):
    now = datetime.now(timezone.utc)
    
    active_sessions = PasswordRecoverySession.query.filter(
        PasswordRecoverySession.user_id == user_id,
        PasswordRecoverySession.used_at.is_(None),
        PasswordRecoverySession.revoked_at.is_(None),
        PasswordRecoverySession.expires_at > now
    ).all()
    
    for recovery_session in active_sessions:
        recovery_session.revoked_at = now
        
def create_recovery_session_record(user_id):
    _invalidate_previous_recovery_sessions(user_id)
    
    token = _generate_recovery_token()
    token_hash = _hash_recovery_token(token)
    
    now = datetime.now(timezone.utc)
    
    recovery_session = PasswordRecoverySession(
        user_id=user_id,
        token_hash=token_hash,
        created_at=now,
        expires_at=now + timedelta(
            minutes=RECOVERY_SESSION_EXPIRATION_MINUTES
        ),
        otp_requests_count=1,
        failed_otp_count=0,
        blocked_at=None,
        used_at=None,
        revoked_at=None
    )
    
    db.session.add(recovery_session)
    
    return token, recovery_session

def get_active_recovery_session(token):
    
    token_hash = _hash_recovery_token(token)
    now = datetime.now(timezone.utc)
    
    return (
        PasswordRecoverySession.query.filter(
            PasswordRecoverySession.token_hash == token_hash,
            PasswordRecoverySession.expires_at > now,
            PasswordRecoverySession.used_at.is_(None),
            PasswordRecoverySession.revoked_at.is_(None),
            PasswordRecoverySession.blocked_at.is_(None)
        ).first()
    )
    
def consume_recovery_session_record(recovery_session):
    recovery_session.used_at = datetime.now(timezone.utc)
    
def get_recovery_session_by_token(token):
    token_hash = _hash_recovery_token(token)
    
    return PasswordRecoverySession.query.filter(
        PasswordRecoverySession.token_hash == token_hash
    ).first()