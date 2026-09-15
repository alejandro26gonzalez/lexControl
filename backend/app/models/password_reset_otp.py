from app import db
from datetime import datetime, timezone

class PasswordResetOTP(db.Model):
    __tablename__= "password_reset_otps"
    
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    
    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True
    )
    
    otp_hash = db.Column(
        db.String(255),
        nullable=False
    )
    
    salt = db.Column(
        db.String(255),
        nullable=False
    )
    
    attempts = db.Column(
        db.Integer,
        nullable=False,
        default=0
    )
    
    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime(timezone.utc)
    )
    
    expires_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        index=True
    )
    
    used_at = db.Column(
        db.DateTime(timezone=True),
        nullable=True
    )