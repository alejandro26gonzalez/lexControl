def validar_filtros_expedientes(params):
    filtros = {}

    status = params.get("status")

    if status:
        status = status.strip().upper()

        if len(status) > 30:
            raise ValueError("El estado no es válido.")

        filtros["status"] = status

    search = params.get("search")

    if search:
        search = search.strip()

        if len(search) > 100:
            raise ValueError("El término de búsqueda es demasiado largo.")

        filtros["search"] = search

    return filtros