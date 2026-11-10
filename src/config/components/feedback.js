import {
    FiAlertTriangle,
    FiCheckCircle,
    FiInfo,
    FiXCircle
} from "react-icons/fi";

export const FEEDBACK_ALERT_CONFIG = {

    // ==========================================
    // AGENDA
    // ==========================================

    //CONSULTA
    APPOINTMENT_SEARCH: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Consulta de agenda",
        description: "La agenda ha sido consultad correctamente."
    },

    APPOINTMENT_SEARCH_ERROR: {
        variant: "danger",
        icon: FiAlertTriangle,
        title: "Consulta de agenda incorrecta",
        description: "Hubo un error consultando la agenda disponible."
    },

    AGENDA_ERROR: {
        variant: "danger",
        icon: FiAlertTriangle,
        title: "Consulta de agenda incorrecta",
        description: "Hubo un error consultando la agenda disponible."
    },

    APPOINTMENT_SEARCH_GENERIC: {
        variant: "danger",
        icon: FiAlertTriangle,
        title: "Error",
        description: "No fue posible consultar la agenda."
    },
    

    // CREACIÓN
    APPOINTMENT_CREATED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Compromiso creado",
        description: "El compromiso se ha registrado correctamente y está disponible en la agenda."
    },

    APPOINTMENT_CONFLICT: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Conflicto de horario",
        description: "El horario seleccionado presenta un conflicto con otro compromiso."
    },

    APPOINTMENT_CREATE_ERROR: {
        variant: "error",
        icon: FiXCircle,
        title: "Error al crear compromiso",
        description: "No fue posible registrar el compromiso. Inténtalo nuevamente."
    },

    // CANCELACIÓN
    APPOINTMENT_CANCELLED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Compromiso cancelado",
        description: "El compromiso ha sido cancelado correctamente."
    },

    APPOINTMENT_CANCEL_ERROR: {
        variant: "error",
        icon: FiXCircle,
        title: "Error al cancelar",
        description: "No fue posible cancelar el compromiso."
    },

    // REPROGRAMACIÓN
    APPOINTMENT_RESCHEDULED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Compromiso reprogramado",
        description: "La fecha y el horario del compromiso se actualizaron correctamente."
    },

    APPOINTMENT_RESCHEDULE_ERROR: {
        variant: "error",
        icon: FiXCircle,
        title: "Error al reprogramar",
        description: "No fue posible modificar el horario del compromiso."
    },

    // CONSULTAS
    APPOINTMENT_LOAD_ERROR: {
        variant: "error",
        icon: FiXCircle,
        title: "Error al cargar agenda",
        description: "No fue posible recuperar los compromisos programados."
    },

    APPOINTMENT_CASES_LOAD_ERROR: {
        variant: "error",
        icon: FiXCircle,
        title: "Error al cargar expedientes",
        description: "No fue posible recuperar los expedientes disponibles."
    },

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
    // ACTIVATION
    // ==========================================

    INVALID_ACTIVATION_TOKEN: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Token de activación inválido",
        description:
            "Ha ocurrido un error durante la activación. El token de activación ha expirado."
    },

    ACCOUNT_ACTIVATED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Cuenta activada",
        description:
            "Tu cuenta ha sido activada con éxito, ya puedes iniciar sesión."
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
            "Ya existe un proceso de registro activo para este correo electrónico, continúa donde quedaste."
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

    EMAIL_ALREADY_VERIFIED: {
        variant: "info",
        icon: FiInfo,
        title: "Correo ya verificado",
        description:
            "El correo electrónico asociado a este registro ya fue verificado."
    },

    REGISTRATION_COMPLETION: {
        variant: "info",
        icon: FiInfo,
        title: "Recuperamos tu registro en el último paso",
        description:
            "Tu código ya fue verificado, confirma para que la cuenta sea creada."
    },

    // ==========================================
    // ADMIN CREATE USERS
    // ==========================================

    USER_CREATED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Usuario creado",
        description:
            "El usuario fue creado con éxito."
    },

    USER_CREATED_EMAIL_FAILED: {
        variant: "error",
        icon: FiXCircle,
        title: "Ocurrió un error",
        description:
            "No fue posible crear este usuario. Inténtalo nuevamente."
    },

    USER_UPDATED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Usuario modificado",
        description:
            "El usuario fue modificado con éxito."
    },

    USER_DISABLED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Usuario inhabilitado",
        description: "Usuario inhabilitado correctamente. Sus sesiones activas fueron revocadas."
    },

    USER_ENABLED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Usuario habilitado",
        description: "Usuario habilitado correctamente. Ya puede iniciar sesión."
    },

    USER_STATUS_ERROR: {
        variant: "error",
        icon: FiXCircle,
        title: "Ocurrió un error",
        description:
            "No fue posible cambiar el estado del usuario."
    },
    
    USER_DELETED: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Usuario eliminado",
        description: "El usuario fue eliminado correctamente de LexControl."
    },

    USER_DELETE_ERROR: {
        variant: "error",
        icon: FiXCircle,
        title: "Error al eliminar",
        description: "No fue posible eliminar el usuario."
    },

    USER_DELETE_CONFLICT: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Eliminación no permitida",
        description: "El usuario tiene registros asociados que impiden su eliminación."
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
    },

    SESSION_EXPIRING_SOON: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Sesión próxima a expirar",
        description:
            "Tu sesión expirará en 10 minutos. Guarda tu trabajo antes de que finalice."
    },

    SESSION_EXPIRING_CRITICAL: {
        variant: "error",
        icon: FiAlertTriangle,
        title: "Sesión a punto de expirar",
        description:
            "Tu sesión expirará en 1 minuto. Guarda tu trabajo inmediatamente."
    },

    SESSION_EXPIRED: {
        variant: "error",
        icon: FiXCircle,
        title: "Sesión expirada",
        description:
            "Tu sesión ha expirado. Inicia sesión nuevamente para continuar."
    },
};