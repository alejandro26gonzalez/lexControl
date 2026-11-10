import {
    FiTrash2,
    FiXCircle,
    FiAlertTriangle,
    FiCheckCircle
} from "react-icons/fi";

export const getConfirmationConfig = (action, payload, handler) => {
    const config = CONFIRMATION_CONFIG[action];

    if (!config || typeof handler !== "function") {
        console.warn(
            `No existe configuración para la acción ${action}`
        );

        return null;
    }

    return {
        ...config,
        action,
        payload,
        handler
    };
}

export const CONFIRMATION_CONFIG = {

    // ==========================================
    // AGENDA
    // ==========================================

    APPOINTMENT_CANCEL: {
        title: "Cancelar compromiso",
        description: "¿Estás seguro de que deseas cancelar este compromiso?",
        confirmText: "Sí, cancelar",
        cancelText: "Volver",
        loadingText: "Cancelando...",
        variant: "danger",
        icon: FiXCircle
    },

    APPOINTMENT_RESCHEDULE: {
        title: "Reprogramar compromiso",
        description: "¿Estás seguro de que deseas reprogramar este compromiso?",
        confirmText: "Sí, reprogramar",
        cancelText: "Volver",
        loadingText: "Reprogramando...",
        variant: "danger",
        icon: FiXCircle
    },

    // ==========================================
    // USUARIOS
    // ==========================================

    USER_DELETE: {
        title: "Eliminar usuario",
        description: "Esta acción es permanente y no se podrá deshacer.",
        confirmText: "Sí, eliminar",
        cancelText: "Volver",
        loadingText: "Eliminando...",
        variant: "danger",
        icon: FiTrash2
    },

    USER_TOGGLE_STATUS: {
        title: "Cambiar estado del usuario",
        description: "¿Deseas modificar el estado de este usuario?",
        confirmText: "Confirmar",
        cancelText: "Volver",
        loadingText: "Actualizando...",
        variant: "warning",
        icon: FiAlertTriangle
    }

};