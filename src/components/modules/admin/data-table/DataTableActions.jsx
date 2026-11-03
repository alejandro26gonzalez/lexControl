
import { MoreHorizontal, Lock, LockOpen } from "lucide-react";

import {
    ActionsContainer,
    ActionButton,
} from "../../../../styles/components/modules/admin/datatable.styles";

function DataTableActions({
    actions = [],
    row,
    handlers = {},
}) {
    return (
        <ActionsContainer>
            {actions.map((action) => {
                const isStatusAction = action.key === "toggle-status";

                const Icon = isStatusAction
                    ? row.is_active ? Lock : LockOpen
                    : action.icon;

                const label = isStatusAction
                    ? row.is_active ? "Inhabilitar usuario" : "Habilitar usuario"
                    : action.label;

                const variant = isStatusAction
                    ? row.is_active ? "danger" : "success"
                    : action.variant;

                const handler = handlers[action.handler];

                if (typeof handler !== "function") {
                    return null;
                }

                return (
                    <ActionButton
                        key={action.key}
                        type="button"
                        $variant={variant}
                        title={label}
                        aria-label={label}
                        onClick={() => handler(row, action.payload)}
                    >
                        {Icon ? (
                            <Icon size={17} strokeWidth={1.8} />
                        ) : (
                            <MoreHorizontal size={17} />
                        )}
                    </ActionButton>
                );
            })}
        </ActionsContainer>
    );
}

export default DataTableActions;
