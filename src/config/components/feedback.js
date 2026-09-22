import {
    FiInfo,
    FiCheckCircle,
    FiAlertTriangle,
    FiXCircle,
} from "react-icons/fi";

export const FEEDBACK_ALERT_CONFIG = {
    otpValidated: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Código verificado correctamente",
        description:
            "Puedes continuar con el cambio de contraseña.",
    },

    otpExpired: {
        variant: "error",
        // icon: FiXCircle,
        title: "Código de verificación expirado",
        description:
            "El código ingresado ya no es válido. Solicita un nuevo código para continuar.",
    },

    forgotPasswordRequested: {
        variant: "info",
        icon: FiInfo,
        title: "Código de recuperación solicitado",
        description:
            "Si el correo está registrado, recibirás un código de recuperación. Revisa tu bandeja de entrada.",
    },

    passwordResetError: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible actualizar la contraseña",
        description:
            "Verifica los datos ingresados e inténtalo nuevamente.",
    },

    otpAttemptsWarning: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Código incorrecto",
        description:
            "El código ingresado no es correcto. Te quedan intentos disponibles.",
    },

    otpMaxAttempts: {
        variant: "error",
        icon: FiXCircle,
        title: "Máximo de intentos alcanzado",
        description:
            "Has alcanzado el límite de intentos. Solicita un nuevo código para continuar.",
    },

    otpResent: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Nuevo código enviado",
        description:
            "Hemos generado un nuevo código de verificación.",
    },

    recoverySessionBlocked: {
        variant: "error",
        icon: FiXCircle,
        title: "Recuperación temporalmente bloqueada",
        description:
            "Se alcanzó el límite de códigos de verificación incorrectos para esta sesión. Inicia nuevamente el proceso de recuperación.",
    },

    otpValidationError: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible validar el código",
        description:
            "Ocurrió un error al validar el código de recuperación.",
    },

    otpRequestLimitReached: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Límite de códigos alcanzado",
        description:
            "Se alcanzó el número máximo de códigos de recuperación permitidos para esta sesión. Inicia nuevamente el proceso de recuperación.",
    },

    loginSuccess: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Inicio de sesión exitoso",
        description:
            "Has iniciado sesión correctamente.",
    },

    loginError: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible iniciar sesión",
        description:
            "El correo electrónico o la contraseña no son correctos.",
    },

    registerBasicError: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible iniciar el registro",
        description:
            "Verifica los datos ingresados e inténtalo nuevamente.",
    },

    registerPasswordMismatch: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Las contraseñas no coinciden",
        description:
            "La contraseña y su confirmación deben ser iguales.",
    },

    registerProfileError: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible guardar la información",
        description:
            "Verifica los datos del perfil e inténtalo nuevamente.",
    },

    registerOtpInvalid: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Código incorrecto",
        description:
            "El código ingresado no es correcto. Verifica el código e inténtalo nuevamente.",
    },

    registerOtpMaxAttempts: {
        variant: "error",
        icon: FiXCircle,
        title: "Máximo de intentos alcanzado",
        description:
            "Has alcanzado el límite de intentos. Solicita un nuevo código para continuar.",
    },

    registerOtpResent: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Nuevo código enviado",
        description:
            "Hemos generado un nuevo código de verificación.",
    },

    registerOtpRequestLimitReached: {
        variant: "warning",
        icon: FiAlertTriangle,
        title: "Límite de códigos alcanzado",
        description:
            "Has alcanzado el número máximo de códigos permitidos para esta sesión. Inicia nuevamente el registro.",
    },

    registerOtpValidationError: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible validar el código",
        description:
            "Ocurrió un error al validar el código de registro.",
    },

    registerCompleteError: {
        variant: "error",
        icon: FiXCircle,
        title: "No fue posible crear la cuenta",
        description:
            "No fue posible completar el registro. Inténtalo nuevamente.",
    },

    registerSuccess: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Código OTP verificado correctamente.",
        description:
            "Tu cuenta ha sido creada. Ya puedes iniciar sesión.",
    },

    registerBasicDataSuccess: {
        variant: "success",
        icon: FiCheckCircle,
        title: "Información básica guardada correctamente",
        description:
            "Ingresa tus datos de perfil profesional aquí.",
    },

};