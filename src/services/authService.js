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

export async function forgotPassword(email) {
    return apiRequest("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({
            email,
        })
    });
}

export async function verifyOTP(otp) {
    return apiRequest("/auth/verify-otp", {
        method: "POST",
        body: JSON.stringify({
            otp,
        }),
    });
}

export async function resetPassword(
    newPassword,
    confirmPassword
) {
    return apiRequest("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({
            new_password: newPassword,
            confirm_password: confirmPassword,
        }),
    })
}

