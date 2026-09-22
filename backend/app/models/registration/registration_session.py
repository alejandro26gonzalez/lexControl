from datetime import datetime, timezone

from app import db


class RegistrationSession(db.Model):
    __tablename__ = "registration_sessions"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    email = db.Column(
        db.String(120),
        nullable=False,
        index=True
    )

    password_hash = db.Column(
        db.String(255),
        nullable=False
    )

    name = db.Column(
        db.String(150),
        nullable=False
    )
    
    last_name = db.Column(
        db.String(150),
        nullable=True
    )

    phone = db.Column(
        db.String(50),
        nullable=True
    )

    city = db.Column(
        db.String(100),
        nullable=True
    )

    position = db.Column(
        db.String(150),
        nullable=True
    )

    specialty = db.Column(
        db.String(150),
        nullable=True
    )

    professional_card = db.Column(
        db.String(100),
        nullable=True
    )

    token_hash = db.Column(
        db.String(255),
        unique=True,
        nullable=False,
        index=True
    )

    otp_requests_count = db.Column(
        db.Integer,
        nullable=False,
        default=1
    )

    failed_otp_count = db.Column(
        db.Integer,
        nullable=False,
        default=0
    )

    blocked_at = db.Column(
        db.DateTime(timezone=True),
        nullable=True
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime.now(timezone.utc)
    )

    expires_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        index=True
    )

    otp_verified_at = db.Column(
        db.DateTime(timezone=True),
        nullable=True
    )

    completed_at = db.Column(
        db.DateTime(timezone=True),
        nullable=True
    )

    revoked_at = db.Column(
        db.DateTime(timezone=True),
        nullable=True
    )
    
    otp_records = db.relationship(
        "RegistrationOTP",
        backref="registration_session",
        cascade="all, delete-orphan"
    )