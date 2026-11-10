from app.models.shared.expediente import Expediente
from app.exceptions import ResourceNotFoundError


# =========================================
# GET - Obtener expedientes del cliente
# =========================================

def get_client_expedientes(client_id, filters=None):

    query = Expediente.query.filter_by(
        client_id=client_id
    )

    filters = filters or {}

    if "status" in filters:
        query = query.filter(
            Expediente.status == filters["status"]
        )

    if "radicado" in filters:
        query = query.filter(
            Expediente.radicado.ilike(
                f"%{filters['radicado']}%"
            )
        )

    return query.order_by(
        Expediente.created_at.desc()
    ).all()


# =========================================
# GET - Obtener expediente por ID
# =========================================

def get_client_expediente_by_id(client_id, expediente_id):

    expediente = Expediente.query.filter_by(
        id=expediente_id,
        client_id=client_id
    ).first()

    if not expediente:
        raise ResourceNotFoundError(
            "El expediente no existe o no tienes acceso a él."
        )

    return expediente