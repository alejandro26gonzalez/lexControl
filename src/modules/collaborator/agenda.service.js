
import { apiRequest } from "../../services/api";

const BASE_URL = "/collaborator/agenda";

// =====================================================
// CONSULTAR AGENDA
// =====================================================

export async function getAgenda(params = {}) {
    const queryParams = new URLSearchParams();

    if (params.period) {
        queryParams.append("period", params.period);
    }

    if (params.date) {
        queryParams.append("date", params.date);
    }

    if (params.event_type) {
        queryParams.append("event_type", params.event_type);
    }

    if (params.status) {
        queryParams.append("status", params.status);
    }

    const query = queryParams.toString();

    return await apiRequest(
        query ? `${BASE_URL}?${query}` : BASE_URL,
        { method: "GET" }
    );
}


// =====================================================
// RESUMEN DE AGENDA
// =====================================================

export async function getAgendaSummary(params = {}) {
    const queryParams = new URLSearchParams();

    if (params.period) {
        queryParams.append("period", params.period);
    }

    if (params.date) {
        queryParams.append("date", params.date);
    }

    const query = queryParams.toString();

    return await apiRequest(
        query
            ? `${BASE_URL}/summary?${query}`
            : `${BASE_URL}/summary`,
        { method: "GET" }
    );
}


// =====================================================
// CREAR COMPROMISO
// =====================================================

export async function createAppointment(data) {
    return await apiRequest(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });
}


// =====================================================
// REPROGRAMAR COMPROMISO
// =====================================================

export async function rescheduleAppointment(appointmentId, data) {
    return await apiRequest(
        `${BASE_URL}/${appointmentId}/reschedule`,
        {
            method: "PATCH",
            body: JSON.stringify(data)
        }
    );
}


// =====================================================
// CANCELAR COMPROMISO
// =====================================================

export async function cancelAppointment(appointmentId) {
    return await apiRequest(
        `${BASE_URL}/${appointmentId}/cancel`,
        { method: "PATCH" }
    );
}
