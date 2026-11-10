import { apiRequest } from "../../../services/api";


const BASE_URL = "/admin/locations/courts";

// Obtener todos los juzgados
export async function getCourts() {
    return await apiRequest(BASE_URL, {
        method: "GET"
    });
}

// Crear un juzgado
export async function createCourt(data) {
    return await apiRequest(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });
}

// Actualizar información de un juzgado
export async function updateCourt(courtId, data) {
    return await apiRequest(`${BASE_URL}/${courtId}`, {
        method: "PATCH",
        body: JSON.stringify(data)
    });
}

// Cambiar estado de un juzgado
export async function toggleCourtStatus(courtId, isActive) {
    return await apiRequest(`${BASE_URL}/${courtId}/status`, {
        method: "PATCH",
        body: JSON.stringify({
            is_active: isActive
        })
    });
}