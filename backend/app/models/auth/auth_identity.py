from datetime import datetime, timezone

from app import db

class AuthIdentity(db.Model):
    
    __tablename__ = "auth_identities"
    
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(
            "users.id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    provider = db.Column(
        db.String(50),
        nullable=False
    )

    provider_user_id = db.Column(
        db.String(255),
        nullable=False
    )

    provider_email = db.Column(
        db.String(255),
        nullable=True
    )
    
    selected = db.Column(
        db.Boolean,
        nullable=False,
        default=False
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime.now(timezone.utc)
    )

    updated_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc)
    )

    user = db.relationship(
        "User",
        back_populates="auth_identities"
    )

    __table_args__ = (
        db.UniqueConstraint(
            "provider",
            "provider_user_id",
            name="uq_auth_identity_provider_user"
        ),
    )