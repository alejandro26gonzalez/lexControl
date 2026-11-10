from sqlalchemy.orm import joinedload

from app.models.shared.expediente import Expediente
from app.models.user.user import User


def obtener_expedientes_usuario(user_id, filtros=None):

    filtros = filtros or {}

    query = Expediente.query.options(
        joinedload(Expediente.client).joinedload(User.profile),
        joinedload(Expediente.collaborator).joinedload(User.profile)
    ).filter(
        Expediente.collaborator_id == user_id
    )

    if filtros.get("status"):
        query = query.filter(
            Expediente.status == filtros["status"]
        )

    if filtros.get("search"):
        term = f"%{filtros['search']}%"

        query = query.filter(
            Expediente.title.ilike(term) |
            Expediente.radicado.ilike(term)
        )

    return query.order_by(
        Expediente.updated_at.desc()
    ).all()