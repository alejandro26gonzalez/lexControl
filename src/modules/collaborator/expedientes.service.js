
import { apiRequest } from "../../services/api";

const BASE_URL = "/collaborator/expediente";

// =====================================================
// CONSULTAR EXPEDIENTES
// =====================================================

/**
 * Obtiene los expedientes asociados al usuario autenticado.
 *
 * Sin parámetros: listado completo.
 * Con parámetros: listado filtrado.
 *
 * @param {Object} params
 * @param {string} params.status - Estado del expediente.
 * @param {string} params.search - Búsqueda por título o radicado.
 */
export async function getExpedientes(params = {}) {
    const queryParams = new URLSearchParams();

    if (params.status) {
        queryParams.append("status", params.status);
    }

    if (params.search) {
        queryParams.append("search", params.search);
    }

    const query = queryParams.toString();

    return await apiRequest(
        query ? `${BASE_URL}?${query}` : BASE_URL,
        {
            method: "GET"
        }
    );
}
