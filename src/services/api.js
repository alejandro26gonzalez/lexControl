const API_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(endpoint, options = {}) {

    const headers = {
        ...options.headers,
    };
    if (options.body && !headers["Content-Type"]) {
        headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        credentials: "include",
        headers
    });

    const contentType = response.headers.get("content-type");

    const data = contentType?.includes("application/json")
        ? await response.json()
        : null;

    if (!response.ok) {
        throw {
            status: response.status,
            data,
            message: data?.message || "Error en la solicitud."
        };
    }

    return data;
}