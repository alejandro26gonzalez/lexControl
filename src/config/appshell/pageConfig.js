
export const pageConfig = {
    ADMIN: {
        "/portal/admin": {
            type: "home",
            description:
                "Aquí tienes un resumen de la actividad de LexControl.",
        },

        "/portal/admin/users": {
            title: "Gestión de usuarios",
            description:
                "Consulta, crea y administra los usuarios de LexControl.",
        },

        "/portal/admin/areas": {
            title: "Gestión de áreas",
            description:
                "Administra las áreas y su organización dentro de LexControl.",
        },

        "/portal/admin/catalogs": {
            title: "Catálogos",
            description:
                "Gestiona los catálogos y los datos de referencia del sistema.",
        },

        "/portal/admin/audit": {
            title: "Auditoría",
            description:
                "Consulta la trazabilidad y los registros de actividad del sistema.",
        },

        "/portal/admin/reports": {
            title: "Reportes",
            description:
                "Consulta los indicadores y reportes de LexControl.",
        },

        "/portal/admin/settings": {
            title: "Configuración",
            description:
                "Administra las preferencias y configuraciones de la plataforma.",
        },
    }
};

export const defaultPageConfig = {
    title: "LexControl",
    description: "Plataforma de gestión jurídica.",
};
