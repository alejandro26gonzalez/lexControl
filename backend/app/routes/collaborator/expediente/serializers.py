def serialize_expediente(expediente):
    return {
        "id": expediente.id,
        "title": expediente.title,
        "radicado": expediente.radicado,
        "status": expediente.status,

        "client": {
            "id": expediente.client.id,
            "name": expediente.client.profile.name,
            "last_name": expediente.client.profile.last_name,
            "email": expediente.client.email,
            "phone": expediente.client.profile.phone
        } if expediente.client and expediente.client.profile else None,

        "collaborator": {
            "id": expediente.collaborator.id,
            "name": expediente.collaborator.profile.name,
            "last_name": expediente.collaborator.profile.last_name,
            "email": expediente.collaborator.email,
            "position": expediente.collaborator.profile.position,
            "professional_card": expediente.collaborator.profile.professional_card
        } if expediente.collaborator and expediente.collaborator.profile else None,

        "created_at": (
            expediente.created_at.isoformat()
            if expediente.created_at else None
        ),

        "updated_at": (
            expediente.updated_at.isoformat()
            if expediente.updated_at else None
        )
    }


def serialize_expedientes(expedientes):
    return [
        serialize_expediente(expediente)
        for expediente in expedientes
    ]