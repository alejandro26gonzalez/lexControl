from flask import Blueprint

users_bp = Blueprint(
    "admin_users",
    __name__,
    url_prefix="/users"
)

from app.routes.admin.users import routes
from app.routes.admin.users.serializers import (
    serialize_user,
    serialize_users
)