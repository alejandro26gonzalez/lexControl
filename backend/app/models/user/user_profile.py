from datetime import datetime, timezone

from app import db


class UserProfile(db.Model):
    __tablename__ = "user_profiles"

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
        unique=True,
        nullable=False,
        index=True
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

    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False
    )

    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False
    )