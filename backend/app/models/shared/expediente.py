from app import db


class Expediente(db.Model):
    __tablename__ = "expedientes"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    client_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    collaborator_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    title = db.Column(
        db.String(180),
        nullable=False
    )

    radicado = db.Column(
        db.String(100),
        unique=True,
        nullable=False,
        index=True
    )

    client = db.relationship(
        "User",
        foreign_keys=[client_id],
        back_populates="client_expedientes"
    )

    collaborator = db.relationship(
        "User",
        foreign_keys=[collaborator_id],
        back_populates="collaborator_expedientes"
    )
    
    documentos = db.relationship(
        "Documento",
        back_populates="expediente",
        cascade="all, delete-orphan",
        order_by="Documento.created_at.desc()"
    )
    
    eventos_agenda = db.relationship(
        "Agenda",
        back_populates="expediente",
        order_by="Agenda.starts_at.asc()"
    )
    
    actuaciones = db.relationship(
        "Actuacion",
        back_populates="expediente",
        cascade="all, delete-orphan"
    )
    
    status = db.Column(
        db.String(30),
        nullable=False,
        default="EN_CURSO",
        server_default="EN_CURSO"
    )
    
    updated_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        server_default=db.func.now(),
        onupdate=db.func.now()
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        server_default=db.func.now()
    )