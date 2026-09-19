from datetime import datetime, timezone

from app import db

class Session(db.Model):
    __tablename__= "sessions"
    
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
    
    session_token_hash = db.Column(
        db.String(255),
        unique=True,
        nullable=False,
        index=True
    )
    
    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False
    )
    
    expires_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        index=True
    )
    
    revoked_at = db.Column(
        db.DateTime(timezone=True),
        nullable=True
    )