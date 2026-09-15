const API_URL = import.meta.env.VITE_API_URL;

console.log("API URL:", API_URL);


export async function apiRequest(endpoint, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    const contentType = response.headers.get("content-type");

    const data = contentType?.includes("application/json")
        ? await response.json()
        : null;

    if (!response.ok) {
        throw {
            status: response.status,
            data,
        };
    }

    return data;
}