def serialize_expediente(expediente):

    return {
        "id": expediente.id,
        "title": expediente.title,
        "radicado": expediente.radicado,
        "court": expediente.court,
        "city": expediente.city,
        "process_type": expediente.process_type,

        "start_date": (
            expediente.start_date.isoformat()
            if expediente.start_date else None
        ),

        "status": expediente.status,
        "current_stage": expediente.current_stage,

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