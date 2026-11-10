def serialize_location(location):

    return {
        "id": location.id,
        "name": location.name,
        "city": location.city,
        "address": location.address,
        "is_active": location.is_active,
        "created_at": location.created_at.isoformat(),
        "updated_at": location.updated_at.isoformat()
    }


def serialize_locations(locations):

    return [
        serialize_location(location)
        for location in locations
    ]