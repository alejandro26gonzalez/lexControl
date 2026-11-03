
import {
    Eye,
    Pencil,
    UserRoundCheck,
    Trash2,
} from "lucide-react";
export const usersTableConfig = {
    title: "Directorio de usuarios",
    description: "Consulta y administra las cuentas registradas.",

    rowKey: "id",

    columns: [
        {
            key: "id",
            label: "ID",
            width: "70px",
            editable: false,
        },
        {
            key: "name",
            label: "Nombre",
            editable: true,
            inputType: "text",
            required: true,
        },
        {
            key: "email",
            label: "Correo electrónico",
            editable: false,
            inputType: "email",
        },
        {
            key: "roles",
            label: "Rol",
            editable: false,
            format: "roles",
        },
        {
            key: "is_active",
            label: "Estado",
            editable: false,
            format: "status",
        },
        {
            key: "created_at",
            label: "Fecha de registro",
            editable: false,
            format: "date",
        },
    ],

    actions: [
        {
            key: "view",
            label: "Ver detalle",
            icon: Eye,
            handler: "onView",
        },
        {
            key: "edit",
            label: "Editar",
            icon: Pencil,
            handler: "onEdit",
        },
        {
            key: "toggleStatus",
            label: "Cambiar estado",
            icon: UserRoundCheck,
            handler: "onToggleStatus",
        },
        {
            key: "delete",
            label: "Eliminar",
            icon: Trash2,
            handler: "onDelete",
            variant: "danger",
        },
    ],
};
