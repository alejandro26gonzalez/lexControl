import {apiRequest} from "../../../services/api";

const BASE_URL = "/admin/catalogs/specialties";

// Obtener todas las especialidades
export async function getSpecialties() {
    return await apiRequest(BASE_URL, {
        method: "GET"
    });
}

// Crear una especialidad
export async function createSpecialty(data) {
    return await apiRequest(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });
}

// Actualizar una especialidad
export async function updateSpecialty(specialtyId, data) {
    return await apiRequest(`${BASE_URL}/${specialtyId}`, {
        method: "PATCH",
        body: JSON.stringify(data)
    });
}

// Cambiar estado de una especialidad
export async function toggleSpecialtyStatus(specialtyId, isActive) {
    return await apiRequest(`${BASE_URL}/${specialtyId}/status`, {
        method: "PATCH",
        body: JSON.stringify({
            is_active: isActive
        })
    });
}