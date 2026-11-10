from datetime import datetime, timezone

from app import db


class Professional(db.Model):
    __tablename__ = "professionals"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    # Información personal
    name = db.Column(
        db.String(120),
        nullable=False
    )

    last_name = db.Column(
        db.String(120),
        nullable=False
    )

    # Información profesional
    position = db.Column(
        db.String(120),
        nullable=True
    )

    specialty = db.Column(
        db.String(150),
        nullable=True
    )

    profile_image_url = db.Column(
        db.String(500),
        nullable=True
    )

    linkedin_url = db.Column(
        db.String(500),
        nullable=True
    )

    profile = db.Column(
        db.Text,
        nullable=True
    )

    experience = db.Column(
        db.Text,
        nullable=True
    )

    # Colecciones dinámicas
    practice_areas = db.Column(
        db.JSON,
        nullable=False,
        default=list,
        server_default="[]"
    )

    education = db.Column(
        db.JSON,
        nullable=False,
        default=list,
        server_default="[]"
    )

    # Control del registro
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
        return (
            f"<Professional {self.id}: "
            f"{self.name} {self.last_name}>"
        )