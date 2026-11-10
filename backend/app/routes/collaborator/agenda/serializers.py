
def serialize_agenda(compromiso):
    """
    Serializa un compromiso de agenda.
    No expone información interna innecesaria.
    """

    return {
        "id": compromiso.id,
        "expediente_id": compromiso.expediente_id,
        "client_id": compromiso.client_id,
        "collaborator_id": compromiso.collaborator_id,
        "requested_by_id": compromiso.requested_by_id,

        "title": compromiso.title,
        "description": compromiso.description,
        "event_type": compromiso.event_type,
        "modality": compromiso.modality,

        "starts_at": (
            compromiso.starts_at.isoformat()
            if compromiso.starts_at else None
        ),
        "ends_at": (
            compromiso.ends_at.isoformat()
            if compromiso.ends_at else None
        ),

        "location": compromiso.location,
        "meeting_url": compromiso.meeting_url,
        "court": compromiso.court,
        "status": compromiso.status,

        "created_at": (
            compromiso.created_at.isoformat()
            if compromiso.created_at else None
        ),
        "updated_at": (
            compromiso.updated_at.isoformat()
            if compromiso.updated_at else None
        ),
        "site_id": compromiso.site_id,
        "court_id": compromiso.court_id,
    }


def serialize_agenda_list(compromisos):
    """
    Serializa una colección de compromisos.
    """

    return [
        serialize_agenda(compromiso)
        for compromiso in compromisos
    ]


def serialize_agenda_summary(compromisos):
    """
    Genera los indicadores de la agenda diaria.
    """

    return {
        "total": len(compromisos),

        "pending": sum(
            1 for item in compromisos
            if item.status == "PENDIENTE"
        ),

        "completed": sum(
            1 for item in compromisos
            if item.status == "COMPLETADO"
        ),

        "hearings": sum(
            1 for item in compromisos
            if item.event_type == "AUDIENCIA"
        )
    }
