
import { Search, X, UserPlus } from "lucide-react";
import { useState } from "react";

import CreateUserModal from "./CreateUserModal";

import {
    FiltersContainer,
    SearchContainer,
    SearchIcon,
    SearchInput,
    ClearSearchButton,
    CreateUserButton
} from "../../../../styles/components/modules/admin/datatable.styles";

function DataTableFilters({
    search,
    onSearchChange,
    onUserCreated,
    placeholder = "Buscar registros..."
}) {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    
    return (
        <>
        <FiltersContainer>

            <CreateUserButton
                type="button"
                onClick={() => setIsCreateModalOpen(true)}
            >
                <UserPlus size={18} />
                Crear usuario
            </CreateUserButton>

            <SearchContainer>
                <SearchIcon>
                    <Search size={18} />
                </SearchIcon>

                <SearchInput
                    id="search-records"
                    name="search-records"
                    type="search"
                    value={search}
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                    placeholder={placeholder}
                    aria-label={placeholder}
                />

                {search && (
                    <ClearSearchButton
                        type="button"
                        onClick={() => onSearchChange("")}
                        aria-label="Limpiar búsqueda"
                    >
                        <X size={16} />
                    </ClearSearchButton>
                )}
            </SearchContainer>
        </FiltersContainer>

        {
            isCreateModalOpen && (
                <CreateUserModal 
                onClose={() => setIsCreateModalOpen(false)}
                onSuccess={(response) => {
                    setIsCreateModalOpen(false);
                    onUserCreated(response);
                }}
                />
            )
        }
        </>
    );
}

export default DataTableFilters;
