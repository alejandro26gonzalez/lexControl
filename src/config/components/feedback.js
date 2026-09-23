import {
    FiAlertTriangle,
    FiCheckCircle,
    FiInfo,
    FiXCircle
} from "react-icons/fi";

export const FEEDBACK_ALERT_CONFIG = {

    // ==========================================
    // AUTHENTICATION
    // ==========================================

    AUTH_LOGIN_SUCCESS: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Inicio de sesión exitoso",
        description: "Has iniciado sesión correctamente."
    },

    AUTH_INVALID_CREDENTIALS: {
        variant: "error",
        icon: FiXCircle,
        title: "Credenciales incorrectas",
        description: "El correo electrónico o la contraseña no son correctos."
    },

    AUTH_USER_INACTIVE: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Usuario inactivo",
        description: "Tu cuenta no se encuentra activa."
    },

    AUTH_LOGOUT_SUCCESS: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente."
    },


    // ==========================================
    // RECOVERY
    // ==========================================

    RECOVERY_REQUESTED: {
        variant: "info",
        icon: FiInfo,
        title: "Código de recuperación solicitado",
        description:
            "Si el correo está registrado, recibirás un código de recuperación. Revisa tu bandeja de entrada."
    },

    RECOVERY_SESSION_INVALID: {
        variant: "error",
        icon: FiXCircle,
        title: "Sesión de recuperación inválida",
        description:
            "La sesión de recuperación no es válida o ha expirado. Inicia nuevamente el proceso."
    },

    RECOVERY_SESSION_BLOCKED: {
        variant: "error",
        icon: FiXCircle,
        title: "Recuperación bloqueada",
        description:
            "La sesión de recuperación ha sido bloqueada. Inicia nuevamente el proceso."
    },

    RECOVERY_INVALID_REQUEST: {
        variant: "error",
        icon: FiXCircle,
        title: "Solicitud inválida",
        description:
            "No fue posible procesar la solicitud de recuperación."
    },

    RECOVERY_REQUEST_FAILED: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible iniciar la recuperación",
        description:
            "Ocurrió un error al procesar la solicitud. Inténtalo nuevamente."
    },


    // ==========================================
    // OTP
    // ==========================================

    OTP_REQUIRED: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Código requerido",
        description:
            "Ingresa el código de verificación para continuar."
    },

    OTP_INVALID: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Código incorrecto",
        description:
            "El código ingresado no es correcto. Verifica e inténtalo nuevamente."
    },

    OTP_VERIFIED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Código verificado",
        description:
            "El código de verificación fue validado correctamente."
    },

    OTP_MAX_ATTEMPTS: {
        variant: "error",
        icon: FiXCircle,
        title: "Máximo de intentos alcanzado",
        description:
            "Has alcanzado el límite de intentos para este código. Solicita uno nuevo."
    },

    OTP_ALREADY_VERIFIED: {
        variant: "info",
        icon: FiInfo,
        title: "Código ya verificado",
        description:
            "Este código ya fue validado anteriormente."
    },

    OTP_REQUEST_LIMIT_REACHED: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Límite de códigos alcanzado",
        description:
            "Se alcanzó el número máximo de códigos permitidos para esta sesión."
    },

    OTP_RESENT: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Nuevo código enviado",
        description:
            "Se generó y envió un nuevo código de verificación."
    },

    OTP_NOT_VERIFIED: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible validar el código",
        description:
            "Ocurrió un error durante la validación del código."
    },

    OTP_NOT_RESENT: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible enviar el código",
        description:
            "No fue posible generar un nuevo código. Inténtalo nuevamente."
    },


    // ==========================================
    // PASSWORD
    // ==========================================

    PASSWORD_MISMATCH: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Las contraseñas no coinciden",
        description:
            "La contraseña y su confirmación deben ser iguales."
    },

    PASSWORD_POLICY_INVALID: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Contraseña no válida",
        description:
            "La contraseña no cumple con los requisitos de seguridad."
    },

    PASSWORD_RESET_SUCCESS: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Contraseña actualizada",
        description:
            "Tu contraseña fue actualizada correctamente."
    },

    OTP_VERIFICATION_REQUIRED: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Verificación requerida",
        description:
            "Debes validar el código de recuperación antes de cambiar la contraseña."
    },


    // ==========================================
    // REGISTRATION
    // ==========================================

    REGISTRATION_STARTED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Registro iniciado",
        description:
            "Continúa con la información de tu perfil."
    },

    REGISTRATION_IN_PROGRESS: {
        variant: "info",
        icon: FiInfo,
        title: "Registro en curso",
        description:
            "Ya existe un proceso de registro activo para este correo electrónico."
    },

    EMAIL_ALREADY_REGISTERED: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Correo ya registrado",
        description:
            "El correo electrónico proporcionado ya está registrado."
    },

    REGISTRATION_SESSION_INVALID: {
        variant: "error",
        icon: FiXCircle,
        title: "Sesión de registro inválida",
        description:
            "La sesión de registro no es válida o ha expirado."
    },

    REGISTRATION_SESSION_BLOCKED: {
        variant: "error",
        icon: FiXCircle,
        title: "Registro bloqueado",
        description:
            "La sesión de registro ha sido bloqueada."
    },

    REGISTRATION_SESSION_EXPIRED: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Sesión de registro expirada",
        description:
            "La sesión de registro ha expirado. Inicia nuevamente el proceso."
    },

    REGISTRATION_ALREADY_COMPLETED: {
        variant: "info",
        icon: FiInfo,
        title: "Registro ya completado",
        description:
            "Esta cuenta ya fue creada anteriormente."
    },

    REGISTRATION_PROFILE_SAVED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Perfil guardado",
        description:
            "La información del perfil fue guardada correctamente."
    },

    REGISTRATION_COMPLETED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Cuenta creada",
        description:
            "Tu cuenta fue creada correctamente."
    },

    REGISTRATION_START_FAILED: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible iniciar el registro",
        description:
            "Ocurrió un error al iniciar el proceso de registro."
    },

    REGISTRATION_COMPLETE_FAILED: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible completar el registro",
        description:
            "Ocurrió un error al crear tu cuenta."
    },

    PROFILE_VALIDATION_FAILED: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible guardar el perfil",
        description:
            "Ocurrió un error al guardar la información del perfil."
    },


    // ==========================================
    // FALLBACK
    // ==========================================

    UNKNOWN_ERROR: {
        variant: "error",
        icon: FiXCircle,
        title: "Ocurrió un error",
        description:
            "No fue posible completar la operación. Inténtalo nuevamente."
    }
};