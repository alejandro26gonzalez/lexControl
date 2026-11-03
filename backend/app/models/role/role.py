from app import db

class Role(db.Model):
    __tablename__= "roles"
    
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    
    name = db.Column(
        db.String(30),
        unique=True,
        nullable=False,
        index=True
    )
    
    role_permissions = db.relationship(
        "RolePermission",
        back_populates="role",
        cascade="all, delete-orphan"
    )
    
    user_roles = db.relationship(
        "UserRole",
        back_populates="role"
    )
    
    