import { apiRequest } from "./api";

export async function login(email, password) {   
    return apiRequest("/auth/login",{
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
    });
}

export async function getCurrentUser() {
    return apiRequest("/auth/me",{
        method: "GET",
    });
}

export async function logout() {
    return apiRequest("/auth/logout",{
        method: "POST",
    });
}