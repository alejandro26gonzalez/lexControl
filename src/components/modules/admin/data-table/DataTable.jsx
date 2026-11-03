
import { useMemo, useState } from "react";

import DataTableFilters from "./DataTableFilters";
import DataTableActions from "./DataTableActions";
import DataTablePagination from "./DataTablePagination";

import {
    Lock,
    LockOpen,
    X,
    Trash2
} from "lucide-react";

import EditUserModal from "./EditUserModal";

import {
    TableContainer,
    TableHeader,
    TableTitle,
    TableDescription,
    TableWrapper,
    TableElement,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableMessage,

    ConfirmOverlay,
    ConfirmContainer,
    ConfirmHeader,
    ConfirmIcon,
    ConfirmTitle,
    ConfirmDescription,
    ConfirmClose,
    ConfirmActions,
    ConfirmButton,
    CancelConfirmButton
} from "../../../../styles/components/modules/admin/datatable.styles";

function formatCell(value, format) {
    if (value === null || value === undefined || value === "") {
        return "—";
    }

    switch (format) {
        case "roles":
            return Array.isArray(value)
                ? value.join(", ")
                : value;

        case "status":
            return (
                <span className={`badge ${value ? "bg-success" : "bg-danger"}`}>
                    {value ? "Activo" : "Inactivo"}
                </span>
            );

        case "date":
            return new Date(value).toLocaleDateString("es-CO");

        default:
            return String(value);
    }
}

function DataTable({
    config,
    data = [],
    loading = false,
    error = null,
    onRetry,
    onUserCreated,
    onUserUpdated,
    ...handlers
}) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedStatusUser, setSelectedStatusUser] = useState(null);
    const [isChangingStatus, setIsChangingStatus] = useState(false);
    const [statusError, setStatusError] = useState("");

    const [selectedDeleteUser, setSelectedDeleteUser] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState("");

    const handleOpenDeleteConfirm = (user) => {
        setSelectedDeleteUser(user);
        setDeleteError("");
    };

    const handleConfirmDelete = async () => {
        if (!selectedDeleteUser || isDeleting) return;

        setIsDeleting(true);
        setDeleteError("");

        try {
            const result = await handlers.onDelete(selectedDeleteUser);

            if (!result?.success) {
                setDeleteError(
                    result?.message || "No fue posible eliminar el usuario."
                );
                return;
            }

            setSelectedDeleteUser(null);

        } catch (error) {
            setDeleteError(
                error?.message || "Ocurrió un error al eliminar el usuario."
            );
        } finally {
            setIsDeleting(false);
        }
    };

    const handleOpenEdit = (user) => {
        setSelectedUser(user);
    };

    const columns = config.columns ?? [];

    const filteredData = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) return data;

        return data.filter((row) =>
            columns.some((column) => {
                const value = row[column.key];

                const searchableValue = Array.isArray(value)
                    ? value.join(" ")
                    : value;

                return String(searchableValue ?? "")
                    .toLowerCase()
                    .includes(query);
            })
        );
    }, [data, columns, search]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredData.length / pageSize)
    );

    const currentPage = Math.min(page, totalPages);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;

        return filteredData.slice(start, start + pageSize);
    }, [filteredData, currentPage, pageSize]);

    function handleSearch(value) {
        setSearch(value);
        setPage(1);
    }

    function handlePageSizeChange(value) {
        setPageSize(Number(value));
        setPage(1);
    }

    const handleOpenStatusConfirm = (user) => {
        setSelectedStatusUser(user);
        setStatusError("");
    };

    const handleConfirmStatus = async () => {
        if (!selectedStatusUser || isChangingStatus) return;

        setIsChangingStatus(true);
        setStatusError("");

        try {
            const result = await handlers.onToggleStatus(selectedStatusUser);

            if (!result?.success) {
                setStatusError(
                    result?.message || "No fue posible cambiar el estado."
                );
                return;
            }

            setSelectedStatusUser(null);

        } catch (error) {
            setStatusError(
                error?.message || "Ocurrió un error al cambiar el estado."
            );
        } finally {
            setIsChangingStatus(false);
        }
    };

    return (
        <>
        <TableContainer>
            <TableHeader>
                <div>
                    <TableTitle>{config.title}</TableTitle>

                    {config.description && (
                        <TableDescription>
                            {config.description}
                        </TableDescription>
                    )}
                </div>
            </TableHeader>

            <DataTableFilters
                search={search}
                onSearchChange={handleSearch}
                placeholder={
                    config.searchPlaceholder ??
                    "Buscar registros..."
                }
                onUserCreated={onUserCreated}
            />
            {selectedUser && (
                <EditUserModal
                    user={selectedUser}
                    onClose={() => setSelectedUser(null)}
                    onSuccess={async () => {
                        setSelectedUser(null);
                        await onUserUpdated();
                    }}
                />
            )}

            {loading ? (
                <TableMessage>
                    Cargando registros...
                </TableMessage>
            ) : error ? (
                <TableMessage role="alert">
                    <p>{error}</p>

                    {onRetry && (
                        <button type="button" onClick={onRetry}>
                            Reintentar
                        </button>
                    )}
                </TableMessage>
            ) : filteredData.length === 0 ? (
                <TableMessage>
                    {search
                        ? "No se encontraron coincidencias."
                        : config.emptyMessage ??
                        "No hay registros disponibles."}
                </TableMessage>
            ) : (
                <>
                    <TableWrapper>
                        <TableElement>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            as="th"
                                            key={column.key}
                                            style={{
                                                width: column.width,
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}

                                    {config.actions?.length > 0 && (
                                        <TableCell as="th">
                                            Acciones
                                        </TableCell>
                                    )}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {paginatedData.map((row) => (
                                    <TableRow key={row[config.rowKey]}>
                                        {columns.map((column) => (
                                            <TableCell key={column.key}>
                                                {formatCell(
                                                    row[column.key],
                                                    column.format
                                                )}
                                            </TableCell>
                                        ))}

                                        {config.actions?.length > 0 && (
                                            <TableCell>
                                                <DataTableActions
                                                    actions={config.actions}
                                                    row={row}
                                                    handlers={{
                                                        ...handlers,
                                                        onEdit: handleOpenEdit,
                                                        onToggleStatus: handleOpenStatusConfirm,
                                                        onDelete: handleOpenDeleteConfirm
                                                    }}
                                                />
                                            </TableCell>
                                        )}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </TableElement>
                    </TableWrapper>

                    <DataTablePagination
                        page={currentPage}
                        pageSize={pageSize}
                        totalItems={filteredData.length}
                        totalPages={totalPages}
                        onPageChange={setPage}
                        onPageSizeChange={handlePageSizeChange}
                    />
                </>
            )}
        </TableContainer>

        {selectedStatusUser && (() => {
            const isActive = selectedStatusUser.is_active;

            return (
                <ConfirmOverlay
                    onMouseDown={(event) => {
                        if (
                            event.target === event.currentTarget &&
                            !isChangingStatus
                        ) {
                            setSelectedStatusUser(null);
                        }
                    }}
                >
                    <ConfirmContainer>
                        <ConfirmHeader>
                            <ConfirmIcon $active={isActive}>
                                {isActive
                                    ? <Lock size={21} />
                                    : <LockOpen size={21} />
                                }
                            </ConfirmIcon>

                            <div style={{ flex: 1 }}>
                                <ConfirmTitle>
                                    {isActive
                                        ? "Inhabilitar usuario"
                                        : "Habilitar usuario"}
                                </ConfirmTitle>

                                <ConfirmDescription>
                                    ¿Estás seguro de que deseas{" "}
                                    <strong>
                                        {isActive ? "inhabilitar" : "habilitar"}
                                    </strong>{" "}
                                    a{" "}
                                    <strong>
                                        {selectedStatusUser.name}{" "}
                                        {selectedStatusUser.last_name}
                                    </strong>?

                                    {isActive
                                        ? " Se revocarán todas sus sesiones activas y no podrá acceder a LexControl."
                                        : " El usuario podrá iniciar sesión nuevamente con sus credenciales."
                                    }
                                </ConfirmDescription>
                            </div>

                            <ConfirmClose
                                type="button"
                                disabled={isChangingStatus}
                                onClick={() => setSelectedStatusUser(null)}
                                aria-label="Cerrar confirmación"
                            >
                                <X size={19} />
                            </ConfirmClose>
                        </ConfirmHeader>

                        {statusError && (
                            <ConfirmDescription role="alert">
                                <span style={{ color: "#B85454" }}>
                                    {statusError}
                                </span>
                            </ConfirmDescription>
                        )}

                        <ConfirmActions>
                            <CancelConfirmButton
                                type="button"
                                disabled={isChangingStatus}
                                onClick={() => setSelectedStatusUser(null)}
                            >
                                Cancelar
                            </CancelConfirmButton>

                            <ConfirmButton
                                type="button"
                                $active={isActive}
                                disabled={isChangingStatus}
                                onClick={handleConfirmStatus}
                            >
                                {isChangingStatus
                                    ? "Procesando..."
                                    : isActive
                                        ? "Sí, inhabilitar"
                                        : "Sí, habilitar"
                                }
                            </ConfirmButton>
                        </ConfirmActions>
                    </ConfirmContainer>
                </ConfirmOverlay>
            );
        })()}

        {selectedDeleteUser && (
                <ConfirmOverlay
                    onMouseDown={(event) => {
                        if (
                            event.target === event.currentTarget &&
                            !isDeleting
                        ) {
                            setSelectedDeleteUser(null);
                        }
                    }}
                >
                    <ConfirmContainer>
                        <ConfirmHeader>
                            <ConfirmIcon $active={true}>
                                <Trash2 size={21} />
                            </ConfirmIcon>

                            <div style={{ flex: 1 }}>
                                <ConfirmTitle>
                                    Eliminar usuario
                                </ConfirmTitle>

                                <ConfirmDescription>
                                    ¿Estás seguro de que deseas eliminar a{" "}
                                    <strong>
                                        {selectedDeleteUser.name}{" "}
                                        {selectedDeleteUser.last_name}
                                    </strong>?

                                    {" "}Esta acción es permanente y no se podrá deshacer.
                                </ConfirmDescription>
                            </div>

                            <ConfirmClose
                                type="button"
                                disabled={isDeleting}
                                onClick={() => setSelectedDeleteUser(null)}
                                aria-label="Cerrar confirmación"
                            >
                                <X size={19} />
                            </ConfirmClose>
                        </ConfirmHeader>

                        {deleteError && (
                            <ConfirmDescription role="alert">
                                <span style={{ color: "#B85454" }}>
                                    {deleteError}
                                </span>
                            </ConfirmDescription>
                        )}

                        <ConfirmActions>
                            <CancelConfirmButton
                                type="button"
                                disabled={isDeleting}
                                onClick={() => setSelectedDeleteUser(null)}
                            >
                                Cancelar
                            </CancelConfirmButton>

                            <ConfirmButton
                                type="button"
                                $active={true}
                                disabled={isDeleting}
                                onClick={handleConfirmDelete}
                            >
                                {isDeleting ? "Eliminando..." : "Sí, eliminar"}
                            </ConfirmButton>
                        </ConfirmActions>
                    </ConfirmContainer>
                </ConfirmOverlay>
            )}
        </>
    );
}

export default DataTable;
