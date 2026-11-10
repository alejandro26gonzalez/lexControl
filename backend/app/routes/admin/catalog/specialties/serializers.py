def serialize_specialty(specialty):

    return {
        "id": specialty.id,
        "name": specialty.name,
        "description": specialty.description,
        "areas": specialty.areas or [],

        "is_active": specialty.is_active,

        "created_at": (
            specialty.created_at.isoformat()
            if specialty.created_at else None
        ),

        "updated_at": (
            specialty.updated_at.isoformat()
            if specialty.updated_at else None
        )
    }


def serialize_specialties(specialties):

    return [
        serialize_specialty(specialty)
        for specialty in specialties
    ]