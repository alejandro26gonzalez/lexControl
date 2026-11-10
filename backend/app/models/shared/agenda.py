from app import db


class Agenda(db.Model):
    __tablename__ = "agenda"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    expediente_id = db.Column(
        db.Integer,
        db.ForeignKey("expedientes.id", ondelete="SET NULL"),
        nullable=True,
        index=True
    )

    client_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=True
    )

    collaborator_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=True
    )

    requested_by_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
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

    event_type = db.Column(
        db.String(40),
        nullable=False
    )

    modality = db.Column(
        db.String(30),
        nullable=False
    )

    starts_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False
    )

    ends_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False
    )

    location = db.Column(
        db.String(250),
        nullable=True
    )

    meeting_url = db.Column(
        db.String(500),
        nullable=True
    )

    court = db.Column(
        db.String(180),
        nullable=True
    )

    status = db.Column(
        db.String(30),
        nullable=False,
        default="PENDIENTE",
        server_default="PENDIENTE"
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
        back_populates="eventos_agenda"
    )

    client = db.relationship(
        "User",
        foreign_keys=[client_id],
        back_populates="agenda_como_cliente"
    )

    collaborator = db.relationship(
        "User",
        foreign_keys=[collaborator_id],
        back_populates="agenda_como_colaborador"
    )

    requested_by = db.relationship(
        "User",
        foreign_keys=[requested_by_id],
        back_populates="agenda_solicitada"
    )
    
    site_id = db.Column(
        db.Integer,
        db.ForeignKey("sites.id"),
        nullable=True,
        index=True
    )
    

    court_id = db.Column(
        db.Integer,
        db.ForeignKey("courts.id"),
        nullable=True,
        index=True
    )
    
    site = db.relationship(
        "Site",
        foreign_keys=[site_id]
    )

    court_relation = db.relationship(
        "Court",
        foreign_keys=[court_id]
    )
    

    __table_args__ = (
        db.CheckConstraint(
            "ends_at > starts_at",
            name="ck_agenda_fecha_final_posterior"
        ),
    )