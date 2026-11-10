from app import db


class Documento(db.Model):
    __tablename__ = "documentos"

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

    uploaded_by_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    name = db.Column(
        db.String(200),
        nullable=False
    )

    description = db.Column(
        db.Text,
        nullable=True
    )

    category = db.Column(
        db.String(80),
        nullable=True
    )

    storage_key = db.Column(
        db.String(500),
        nullable=False
    )

    mime_type = db.Column(
        db.String(120),
        nullable=True
    )

    file_size = db.Column(
        db.BigInteger,
        nullable=True
    )

    visible_to_client = db.Column(
        db.Boolean,
        nullable=False,
        default=False,
        server_default=db.false()
    )

    downloadable_by_client = db.Column(
        db.Boolean,
        nullable=False,
        default=False,
        server_default=db.false()
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        server_default=db.func.now()
    )

    updated_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        server_default=db.func.now(),
        onupdate=db.func.now()
    )

    expediente = db.relationship(
        "Expediente",
        back_populates="documentos"
    )

    uploaded_by = db.relationship(
        "User",
        back_populates="documentos_cargados"
    )