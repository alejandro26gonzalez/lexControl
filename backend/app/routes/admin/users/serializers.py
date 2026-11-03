
def serialize_user(user):
    """
    Transforma un usuario y sus relaciones en un diccionario JSON.
    """

    profile = user.profile

    return {
        "id": user.id,

        # Información de identificación
        "identification_type": user.identification_type,
        "identification_number": user.identification_number,

        # Información de acceso
        "email": user.email,
        "is_active": user.is_active,

        # Información del perfil
        "name": profile.name if profile else None,
        "last_name": profile.last_name if profile else None,
        "phone": profile.phone if profile else None,
        "city": profile.city if profile else None,
        "position": profile.position if profile else None,
        "specialty": profile.specialty if profile else None,
        "professional_card": (
            profile.professional_card if profile else None
        ),

        # Roles asociados
        "roles": [
            user_role.role.name
            for user_role in user.user_roles
            if user_role.role
        ],

        # Fechas
        "created_at": (
            user.created_at.isoformat()
            if user.created_at else None
        ),
        "updated_at": (
            user.updated_at.isoformat()
            if user.updated_at else None
        )
    }


def serialize_users(users):
    """
    Transforma una colección de usuarios en una lista de diccionarios.
    """

    return [
        serialize_user(user)
        for user in users
    ]
