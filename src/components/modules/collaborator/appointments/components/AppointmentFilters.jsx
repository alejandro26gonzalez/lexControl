import { FiFilter } from "react-icons/fi";

import {
    FilterBar,
    FilterLabel,
    FilterButton
} from "../../../../../styles/components/modules/collaborator/appointments.styles";

const FILTER_OPTIONS = [
    { value: "all", label: "Todos" },
    { value: "meeting", label: "Reuniones" },
    { value: "hearing", label: "Audiencias" },
];

const AppointmentFilters = ({ filter, onFilterChange}) => {

    

    return (
        <FilterBar>
            <FilterLabel>
                <FiFilter /> Filtrar:
            </FilterLabel>

            {
                FILTER_OPTIONS.map((item) => (
                    <FilterButton
                        key={item.value}
                        type="button"
                        $active={filter === item.value}
                        onClick={() => onFilterChange(item.value)}
                    >
                        {item.label}
                    </FilterButton>
                ))
            }
        </FilterBar>
    )
}
export default AppointmentFilters;