
import {
    FiCheck,
    FiMapPin,
    FiVideo,
    FiUser,
    FiBriefcase,
    FiCalendar
} from "react-icons/fi";

import { FaBalanceScale as FiScale } from "react-icons/fa";

import {
    AppointmentRow,
    TimeColumn,
    AppointmentCard as Card,
    AppointmentTop,
    AppointmentTitle,
    StatusBadge,
    AppointmentMeta,
    AppointmentDescription,
    AppointmentFooter,
    TypeLabel,
    SharedLabel,
    SecondaryButton
} from "../../../../../styles/components/modules/collaborator/appointments.styles";


const formatTime = (time) => {
    if (!time) return "";

    const [hours, minutes] = time.split(":");

    const date = new Date();

    date.setHours(Number(hours), Number(minutes), 0);

    return date.toLocaleTimeString("es-CO", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};


const formatAppointmentDate = (dateString) => {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-").map(Number);

    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString("es-CO", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
};


const STATUS_LABELS = {
    scheduled: "Pendiente",
    completed: "Completado",
    cancelled: "Cancelado",
};


const AppointmentCard = ({
    appointment,
    onReschedule,
    onCancel
}) => {

    const {
        type,
        title,
        date,
        startTime,
        endTime,
        client,
        caseNumber,
        court,
        modality,
        location,
        status,
        description
    } = appointment;

    return (
        <AppointmentRow>

            <TimeColumn>
                <strong>{formatTime(startTime)}</strong>
                <span>{formatTime(endTime)}</span>
            </TimeColumn>

            <Card $type={type}>

                <AppointmentTop>

                    <AppointmentTitle>
                        {type === "hearing" ? <FiScale /> : <FiUser />}
                        {title}
                    </AppointmentTitle>

                    <StatusBadge $status={status}>
                        {STATUS_LABELS[status] || "Pendiente"}
                    </StatusBadge>

                </AppointmentTop>

                <AppointmentMeta>

                    <span>
                        <FiCalendar />
                        {formatAppointmentDate(date)}
                    </span>

                    <span>
                        <FiUser /> {client}
                    </span>

                    <span>
                        <FiBriefcase /> Radicado: {caseNumber}
                    </span>

                    {type === "hearing" && court && (
                        <span>
                            <FiScale /> {court}
                        </span>
                    )}

                    <span>
                        {modality === "virtual" ? <FiVideo /> : <FiMapPin />}

                        {modality === "virtual" ? "Virtual" : "Presencial"}

                        {location ? ` · ${location}` : ""}
                    </span>

                </AppointmentMeta>

                {description && (
                    <AppointmentDescription>
                        {description}
                    </AppointmentDescription>
                )}

                <AppointmentFooter>

                    <TypeLabel $type={type}>
                        {type === "hearing"
                            ? "Audiencia judicial · Notificación del juzgado"
                            : "Reunión · Programada por la compañía"}
                    </TypeLabel>

                    <SharedLabel>
                        <FiCheck /> Compartido con el cliente
                    </SharedLabel>

                    {status === "scheduled" && (
                        <>
                            <SecondaryButton
                                type="button"
                                onClick={() => onReschedule(appointment)}
                            >
                                Reprogramar
                            </SecondaryButton>

                            <SecondaryButton
                                type="button"
                                onClick={() => onCancel(appointment)}
                            >
                                Cancelar compromiso
                            </SecondaryButton>
                        </>
                    )}

                </AppointmentFooter>

            </Card>

        </AppointmentRow>
    );
};

export default AppointmentCard;
