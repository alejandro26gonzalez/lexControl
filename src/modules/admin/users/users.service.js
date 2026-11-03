
import { apiRequest } from "../../../services/api";

/**
 * Obtiene el listado de usuarios.
 */
export async function getUsers() {
    return apiRequest("/admin/users/", {
        method: "GET",
    });
}

export async function updateUser(userId, payload) {
    return apiRequest(`/admin/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
    });
}

export async function toggleUserStatus(userId, isActive) {
    return apiRequest(`/admin/users/${userId}/status`, {
        method: "PATCH",
        body: JSON.stringify({
            is_active: isActive
        }),
    });
}

export async function deleteUser(userId) {
    return apiRequest(`/admin/users/${userId}`, {
        method: "DELETE",
    });
}

export async function createUser(payload) {
    return apiRequest("/admin/users/", {
        method: "POST",
        body: JSON.stringify(payload)
    })
}

export async function getUserStats() {
    return apiRequest("/admin/users/stats", {
        method: "GET",
    });
}