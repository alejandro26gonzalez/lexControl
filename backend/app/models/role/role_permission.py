from app import db


class RolePermission(db.Model):
    __tablename__ = "role_permissions"

    role_id = db.Column(
        db.Integer,
        db.ForeignKey(
            "roles.id",
            ondelete="CASCADE"
        ),
        primary_key=True
    )

    permission_id = db.Column(
        db.Integer,
        db.ForeignKey(
            "permissions.id",
            ondelete="CASCADE"
        ),
        primary_key=True
    )
    role = db.relationship(
        "Role",
        back_populates="role_permissions"
    )

    permission = db.relationship(
        "Permission",
        back_populates="role_permissions"
    )