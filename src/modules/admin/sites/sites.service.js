import { apiRequest } from "../../../services/api";


const BASE_URL = "/admin/locations/sites";

/**
 * Obtener todas las sedes.
 */
export async function getSites() {
    return await apiRequest(BASE_URL, {
        method: "GET"
    });
}

/**
 * Crear una nueva sede.
 */
export async function createSite(data) {
    return await apiRequest(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });
}

/**
 * Actualizar información de una sede.
 */
export async function updateSite(siteId, data) {
    return await apiRequest(`${BASE_URL}/${siteId}`, {
        method: "PATCH",
        body: JSON.stringify(data)
    });
}

/**
 * Habilitar o inhabilitar una sede.
 */
export async function toggleSiteStatus(siteId, isActive) {
    return await apiRequest(`${BASE_URL}/${siteId}/status`, {
        method: "PATCH",
        body: JSON.stringify({
            is_active: isActive
        })
    });
}