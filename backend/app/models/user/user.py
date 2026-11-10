from datetime import datetime, timezone

from app import db
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    __tablename__ = "users"
    
    id = db.Column(
        db.Integer, 
        primary_key=True
    )
    
    email = db.Column(
        db.String(120),
        unique=True,
        nullable=False,
        index=True
    )
    
    password_hash = db.Column(
        db.String(255),
        nullable=False
    )
    
    is_active = db.Column(
        db.Boolean,
        default=True,
        nullable=False
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
    
    profile = db.relationship(
        "UserProfile",
        backref="user",
        uselist=False,
        cascade="all, delete-orphan"
    )
    
    identification_type = db.Column(
        db.String(50),
        nullable=False
    )
        
    identification_number = db.Column(
        db.String(50),
        nullable=False,
    )
    
    auth_identities = db.relationship(
        "AuthIdentity",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    __table_args__ = (
        db.UniqueConstraint(
            "identification_type",
            "identification_number",
            name="uq_user_identification"
        ),
    )
    
    user_roles = db.relationship(
        "UserRole",
        back_populates="user",
        cascade="all, delete-orphan"
    )
    
    client_expedientes = db.relationship(
        "Expediente",
        foreign_keys="Expediente.client_id",
        back_populates="client"
    )

    collaborator_expedientes = db.relationship(
        "Expediente",
        foreign_keys="Expediente.collaborator_id",
        back_populates="collaborator"
    )
    actuaciones_registradas = db.relationship(
        "Actuacion",
        back_populates="created_by"
    )
    
    documentos_cargados = db.relationship(
        "Documento",
        back_populates="uploaded_by",
        foreign_keys="Documento.uploaded_by_id"
    )
    
    agenda_como_cliente = db.relationship(
        "Agenda",
        foreign_keys="Agenda.client_id",
        back_populates="client"
    )

    agenda_como_colaborador = db.relationship(
        "Agenda",
        foreign_keys="Agenda.collaborator_id",
        back_populates="collaborator"
    )

    agenda_solicitada = db.relationship(
        "Agenda",
        foreign_keys="Agenda.requested_by_id",
        back_populates="requested_by"
    )
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash(
            self.password_hash,
            password
        )
        
    activation_tokens = db.relationship(
        "ActivationToken",
        back_populates="user",
        cascade="all, delete-orphan"
    )