import {
    FiClock,
    FiCalendar
} from "react-icons/fi";

import {
    AppointmentList as List,
    EmptyState
} from  "../../../../../styles/components/modules/collaborator/appointments.styles";

import AppointmentCard from "./AppointmentCard";


const AppointmentList = ({
    appointments,
    loading,
    onReschedule,
    onCancel
}) => {

    if (loading) {
        return (
            <List>
                <EmptyState>
                    <FiClock />
                    <strong>Cargando agenda...</strong>
                </EmptyState>
            </List>
        );
    }

    if (!appointments.length) {
        return (
            <List>
                <EmptyState>
                    <FiCalendar />
                    <strong>No hay compromisos programados</strong>

                    <span>
                        No existen citas para la fecha y el filtro seleccionados.
                    </span>
                </EmptyState>
            </List>
        );
    }

    return (
        <List>

            {appointments.map((item) => (
                <AppointmentCard
                    key={item.id}
                    appointment={item}
                    onReschedule={onReschedule}
                    onCancel={onCancel}
                />
            ))}

        </List>
    );
};

export default AppointmentList;