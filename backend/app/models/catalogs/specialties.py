from datetime import datetime, timezone

from app import db


class Specialty(db.Model):
    __tablename__ = "specialties"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String(120),
        nullable=False,
        unique=True,
        index=True
    )

    description = db.Column(
        db.String(500),
        nullable=True
    )

    # Colección dinámica de áreas
    areas = db.Column(
        db.JSON,
        nullable=False,
        default=list,
        server_default="[]"
    )

    is_active = db.Column(
        db.Boolean,
        nullable=False,
        default=True,
        server_default=db.true()
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime.now(timezone.utc),
        server_default=db.func.now()
    )

    updated_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        server_default=db.func.now()
    )

    def __repr__(self):
        return f"<Specialty {self.id}: {self.name}>"