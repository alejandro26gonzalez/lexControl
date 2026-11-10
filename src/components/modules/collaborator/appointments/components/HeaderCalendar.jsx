
import {
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";

import {
    CalendarHeader,
    SectionTitle,
    DateText,
    CalendarControls,
    IconButton,
    SecondaryButton,
    DateInput,
    FilterButton
} from "../../../../../styles/components/modules/collaborator/appointments.styles";

// ==========================================
// CONFIGURACIÓN
// ==========================================

const PERIOD_OPTIONS = [
    { value: "day", label: "Día" },
    { value: "week", label: "Semana" },
    { value: "month", label: "Mes" }
];

const PERIOD_TITLES = {
    day: "Agenda diaria",
    week: "Agenda semanal",
    month: "Agenda mensual"
};

// ==========================================
// UTILIDADES
// ==========================================

const parseDate = (date) => {
    return new Date(`${date}T12:00:00`);
};

const serializeDate = (date) => {
    return [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0")
    ].join("-");
};

const formatDate = (date) => {
    return date.toLocaleDateString("es-CO", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
};

const getToday = () => {
    const date = new Date();
    const offset = date.getTimezoneOffset();

    return new Date(date.getTime() - offset * 60000)
        .toISOString()
        .split("T")[0];
};

const getWeekRange = (selectedDate) => {
    const start = parseDate(selectedDate);

    // Lunes como primer día de la semana
    const day = start.getDay();
    const difference = day === 0 ? -6 : 1 - day;

    start.setDate(start.getDate() + difference);

    const end = new Date(start);
    end.setDate(end.getDate() + 6);

    const sameMonth = start.getMonth() === end.getMonth();
    const sameYear = start.getFullYear() === end.getFullYear();

    if (sameMonth) {
        return `${start.getDate()} – ${end.getDate()} de ${end.toLocaleDateString("es-CO", {
            month: "long",
            year: "numeric"
        })}`;
    }

    if (sameYear) {
        return `${start.getDate()} ${start.toLocaleDateString("es-CO", {
            month: "short"
        })} – ${end.getDate()} ${end.toLocaleDateString("es-CO", {
            month: "short",
            year: "numeric"
        })}`;
    }

    return `${formatDate(start)} – ${formatDate(end)}`;
};

const formatPeriodDate = (period, selectedDate) => {
    const date = parseDate(selectedDate);

    if (period === "day") {
        return formatDate(date);
    }

    if (period === "week") {
        return getWeekRange(selectedDate);
    }

    return date.toLocaleDateString("es-CO", {
        month: "long",
        year: "numeric"
    });
};

// ==========================================
// COMPONENTE
// ==========================================

const HeaderCalendar = ({
    selectedDate,
    onDateChange,
    period,
    onPeriodChange
}) => {

    const changeDate = (direction) => {
        const date = parseDate(selectedDate);

        if (period === "day") {
            date.setDate(date.getDate() + direction);
        }

        if (period === "week") {
            date.setDate(date.getDate() + (direction * 7));
        }

        if (period === "month") {
            const currentDay = date.getDate();

            // Evita desbordamientos entre meses
            date.setDate(1);
            date.setMonth(date.getMonth() + direction);

            const lastDay = new Date(
                date.getFullYear(),
                date.getMonth() + 1,
                0
            ).getDate();

            date.setDate(Math.min(currentDay, lastDay));
        }

        onDateChange(serializeDate(date));
    };

    return (
        <CalendarHeader>

            <div>
                <SectionTitle>
                    {PERIOD_TITLES[period]}
                </SectionTitle>

                <DateText>
                    {formatPeriodDate(period, selectedDate)}
                </DateText>
            </div>

            <CalendarControls>

                {PERIOD_OPTIONS.map((option) => (
                    <FilterButton
                        key={option.value}
                        type="button"
                        $active={period === option.value}
                        onClick={() => onPeriodChange(option.value)}
                    >
                        {option.label}
                    </FilterButton>
                ))}

                <IconButton
                    type="button"
                    aria-label="Periodo anterior"
                    onClick={() => changeDate(-1)}
                >
                    <FiChevronLeft />
                </IconButton>

                <SecondaryButton
                    type="button"
                    onClick={() => onDateChange(getToday())}
                >
                    Hoy
                </SecondaryButton>

                <IconButton
                    type="button"
                    aria-label="Periodo siguiente"
                    onClick={() => changeDate(1)}
                >
                    <FiChevronRight />
                </IconButton>

                <DateInput
                    type="date"
                    value={selectedDate}
                    onChange={(event) => {
                        if (event.target.value) {
                            onDateChange(event.target.value);
                        }
                    }}
                />

            </CalendarControls>

        </CalendarHeader>
    );
};

export default HeaderCalendar;
