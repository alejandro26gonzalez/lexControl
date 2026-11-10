import {apiRequest} from "../../../services/api";

const BASE_URL = "/admin/catalogs/professionals";

// Obtener todos los profesionales
export async function getProfessionals() {
    return await apiRequest(BASE_URL, {
        method: "GET"
    });
}

// Crear un profesional
export async function createProfessional(data) {
    return await apiRequest(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });
}

// Actualizar información de un profesional
export async function updateProfessional(professionalId, data) {
    return await apiRequest(`${BASE_URL}/${professionalId}`, {
        method: "PATCH",
        body: JSON.stringify(data)
    });
}

// Cambiar estado de un profesional
export async function toggleProfessionalStatus(professionalId, isActive) {
    return await apiRequest(`${BASE_URL}/${professionalId}/status`, {
        method: "PATCH",
        body: JSON.stringify({
            is_active: isActive
        })
    });
}