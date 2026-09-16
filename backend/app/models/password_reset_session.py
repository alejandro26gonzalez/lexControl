from datetime import datetime, timezone

from app import db

class PasswordResetSession(db.Model):
    __tablename__ = "password_reset_sessions"

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

    token_hash = db.Column(
        db.String(255),
        unique=True,
        nullable=False,
        index=True
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

    revoked_at = db.Column(
        db.DateTime(timezone=True),
        nullable=True
    )
