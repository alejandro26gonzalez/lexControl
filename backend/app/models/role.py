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
    
    