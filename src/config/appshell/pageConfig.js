
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

        "/portal/admin/sites": {
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
    },
    COLLABORATOR: {
        "/portal/collaborator": {
            type: "home",
            description:
                "Consulta tu actividad profesional y accede a las herramientas de gestión jurídica.",
        },

        "/portal/collaborator/files": {
            title: "Gestión de expedientes",
            description:
                "Consulta, administra y realiza seguimiento a los expedientes jurídicos asignados.",
        },

        "/portal/collaborator/appointments": {
            title: "Agenda de citas",
            description:
                "Organiza y consulta tus citas, reuniones y compromisos profesionales.",
        },

        "/portal/collaborator/repo": {
            title: "Repositorio documental",
            description:
                "Consulta, organiza y administra los documentos asociados a la gestión jurídica.",
        },
    },
    CLIENT: {
        "/portal/client": {
            type: "home",
            description:
                "Consulta el estado de tus procesos jurídicos y accede a la información y servicios asociados a tu representación legal.",
        },

        "/portal/client/files": {
            title: "Mis expedientes",
            description:
                "Consulta tus expedientes jurídicos, revisa su estado procesal y conoce los avances de cada proceso.",
        },

        "/portal/client/appointments": {
            title: "Mi agenda",
            description:
                "Consulta las reuniones con tu abogado y las audiencias judiciales programadas para tus procesos.",
        },

        "/portal/client/repo": {
            title: "Mis documentos",
            description:
                "Accede a los soportes, documentos y actuaciones judiciales publicados por tu equipo jurídico.",
        },
    },
};

export const defaultPageConfig = {
    title: "LexControl",
    description: "Plataforma de gestión jurídica.",
};
