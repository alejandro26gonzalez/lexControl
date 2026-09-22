from datetime import datetime, timezone

from app import db


class RegistrationOTP(db.Model):
    __tablename__ = "registration_otps"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    registration_session_id = db.Column(
        db.Integer,
        db.ForeignKey(
            "registration_sessions.id",
            ondelete="CASCADE"
        ),
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
        default=lambda: datetime.now(timezone.utc)
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