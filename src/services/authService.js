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
    return apiRequest("/auth/forgot-password/verify-otp", {
        method: "POST",
        body: JSON.stringify({
            otp,
        }),
    });
}

export async function resendOTP() {
    return  apiRequest("/auth/forgot-password/resend-otp", {
        method: "POST",
    })
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

export async function register(
    name,
    lastName,
    email,
    password,
    confirmPassword
){
    return apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify({
            name,
            last_name: lastName,
            email,
            password,
            confirm_password: confirmPassword
        })
    })
}

export async function registerProfile(
    phone,
    city,
    position,
    specialty,
    professionalCard
) {
    return apiRequest("/auth/register/profile", {
        method: "POST",
        body: JSON.stringify({
            phone,
            city,
            position,
            specialty,
            professional_card: professionalCard
        })
    })
}

export async function verifyRegistrationOTP(otp) {
    return apiRequest("/auth/register/verify-otp", {
        method: "POST",
        body: JSON.stringify({
            otp
        })
    })
}

export async function resendRegistrationOTP() {
    return apiRequest("/auth/register/resend-otp",{
        method: "POST",
    })
}

export async function completeRegistration(){
    return apiRequest("/auth/register/complete", {
        method: "POST",
    })
}