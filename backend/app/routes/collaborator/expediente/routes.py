from flask import Blueprint, request, jsonify


from app.routes.collaborator.expediente.services import (
    serialize_expedientes,
    validar_filtros_expedientes,
    obtener_expedientes_usuario
)


from app.services.auth.auth import (
    get_current_user, 
    role_required
)

from app.routes.collaborator.expediente import expediente_bp




@expediente_bp.route("", methods=["GET"])
@role_required("COLLABORATOR")
def listar_expedientes():
    
    try:
        
        user = get_current_user()
        
        if not user:
            return jsonify({
                "success": False,
                "message": "No se pudo identificar al usuario autenticado."
            }), 401

        filtros = validar_filtros_expedientes(
            request.args
        )

        expedientes = obtener_expedientes_usuario(
            user_id=user.id,
            filtros=filtros
        )

        return jsonify({
            "success": True,
            "data": serialize_expedientes(expedientes)
        }), 200

    except ValueError as error:
        return jsonify({
            "success": False,
            "message": str(error)
        }), 400

    except Exception as error:
        import traceback
        traceback.print_exc()

        return jsonify({
            "success": False,
            "message": "No fue posible consultar los expedientes.",
            "debug": str(error)
        }), 500