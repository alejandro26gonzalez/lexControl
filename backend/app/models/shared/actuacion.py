
from app import db


class Actuacion(db.Model):
    __tablename__ = "actuaciones"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    expediente_id = db.Column(
        db.Integer,
        db.ForeignKey("expedientes.id", ondelete="CASCADE"),
        nullable=False,
        index=True
    )

    created_by_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    type = db.Column(
        db.String(40),
        nullable=False
    )

    title = db.Column(
        db.String(180),
        nullable=False
    )

    description = db.Column(
        db.Text,
        nullable=True
    )

    previous_stage = db.Column(
        db.String(80),
        nullable=True
    )

    new_stage = db.Column(
        db.String(80),
        nullable=True
    )

    occurred_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        server_default=db.func.now()
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        server_default=db.func.now()
    )

    expediente = db.relationship(
        "Expediente",
        back_populates="actuaciones"
    )

    created_by = db.relationship(
        "User",
        back_populates="actuaciones_registradas"
    )
