
import {
    PaginationContainer,
    PaginationInfo,
    PaginationControls,
    PaginationButton,
    PageSizeSelect,
} from "../../../../styles/components/modules/admin/datatable.styles";

function DataTablePagination({
    page,
    pageSize,
    totalItems,
    totalPages,
    onPageChange,
    onPageSizeChange,
}) {
    const start = totalItems === 0
        ? 0
        : (page - 1) * pageSize + 1;

    const end = Math.min(page * pageSize, totalItems);

    return (
        <PaginationContainer>
            <PaginationInfo>
                Mostrando {start}–{end} de {totalItems}
            </PaginationInfo>

            <PaginationControls>
                <PageSizeSelect
                    id="records-per-page"
                    name="records-per-page"
                    value={pageSize}
                    onChange={(event) =>
                        onPageSizeChange(event.target.value)
                    }
                    aria-label="Registros por página"
                >
                    <option value={10}>10 por página</option>
                    <option value={25}>25 por página</option>
                    <option value={50}>50 por página</option>
                </PageSizeSelect>

                <PaginationButton
                    type="button"
                    disabled={page <= 1}
                    onClick={() => onPageChange(page - 1)}
                    aria-label="Página anterior"
                >
                    Anterior
                </PaginationButton>

                <span>
                    {page} / {totalPages}
                </span>

                <PaginationButton
                    type="button"
                    disabled={page >= totalPages}
                    onClick={() => onPageChange(page + 1)}
                    aria-label="Página siguiente"
                >
                    Siguiente
                </PaginationButton>
            </PaginationControls>
        </PaginationContainer>
    );
}

export default DataTablePagination;
