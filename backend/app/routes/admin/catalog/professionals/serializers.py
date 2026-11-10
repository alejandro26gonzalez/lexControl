def serialize_professional(professional):

    return {
        "id": professional.id,
        "name": professional.name,
        "last_name": professional.last_name,
        "full_name": f"{professional.name} {professional.last_name}",

        "position": professional.position,
        "specialty": professional.specialty,

        "profile_image_url": professional.profile_image_url,
        "linkedin_url": professional.linkedin_url,

        "profile": professional.profile,
        "experience": professional.experience,

        "practice_areas": professional.practice_areas or [],
        "education": professional.education or [],

        "is_active": professional.is_active,

        "created_at": (
            professional.created_at.isoformat()
            if professional.created_at else None
        ),

        "updated_at": (
            professional.updated_at.isoformat()
            if professional.updated_at else None
        )
    }


def serialize_professionals(professionals):

    return [
        serialize_professional(professional)
        for professional in professionals
    ]