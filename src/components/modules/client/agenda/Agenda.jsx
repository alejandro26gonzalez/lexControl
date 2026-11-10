
import { useMemo, useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiVideo,
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiFolder,
  FiInfo,
} from "react-icons/fi";

import { FaRegClock as FiClock } from "react-icons/fa";
import { FaBalanceScale as FiScale } from "react-icons/fa";

import * as S from "../../../../styles/components/modules/client/agenda.styles";

const INITIAL_EVENTS = [
  {
    id: 1,
    title: "Audiencia de práctica de pruebas",
    type: "hearing",
    date: "2026-11-05",
    startTime: "08:30",
    endTime: "10:00",
    modality: "virtual",
    location: "https://meet.google.com/audiencia-demo",
    caseName: "Responsabilidad civil contractual",
    caseNumber: "11001-31-03-001-2025-00124",
    description:
      "Audiencia judicial programada por el despacho para la práctica de las pruebas decretadas.",
  },
  {
    id: 2,
    title: "Reunión de seguimiento",
    type: "meeting",
    date: "2026-11-07",
    startTime: "10:00",
    endTime: "10:45",
    modality: "virtual",
    location: "https://meet.google.com/reunion-demo",
    caseName: "Proceso de familia",
    caseNumber: "11001-31-10-002-2025-00087",
    description:
      "Reunión con el equipo jurídico para revisar los avances y resolver inquietudes.",
  },
  {
    id: 3,
    title: "Audiencia inicial",
    type: "hearing",
    date: "2026-11-12",
    startTime: "09:00",
    endTime: "10:30",
    modality: "in_person",
    location: "Juzgado Primero Civil del Circuito, Bogotá",
    caseName: "Responsabilidad civil contractual",
    caseNumber: "11001-31-03-001-2025-00124",
    description:
      "Audiencia inicial señalada por el juzgado correspondiente.",
  },
  {
    id: 4,
    title: "Reunión de revisión documental",
    type: "meeting",
    date: "2026-11-18",
    startTime: "14:00",
    endTime: "15:00",
    modality: "in_person",
    location: "Oficina principal de la firma",
    caseName: "Proceso de familia",
    caseNumber: "11001-31-10-002-2025-00087",
    description:
      "Revisión de documentos y soportes relacionados con el proceso.",
  },
];

const WEEK_DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const toLocalDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const formatDate = (value) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const formatTime = (value) => {
  const [hours, minutes] = value.split(":");
  const date = new Date();
  date.setHours(Number(hours), Number(minutes), 0, 0);

  return date.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const Agenda = () => {
  const today = toLocalDate(new Date());

  const [events] = useState(INITIAL_EVENTS);
  const [selectedDate, setSelectedDate] = useState(today);
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const date = new Date();
    return { year: date.getFullYear(), month: date.getMonth() };
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("all");

  const upcomingEvents = useMemo(
    () =>
      events
        .filter((event) => event.date >= today)
        .filter((event) => filter === "all" || event.type === filter)
        .sort((a, b) =>
          `${a.date}${a.startTime}`.localeCompare(
            `${b.date}${b.startTime}`
          )
        ),
    [events, today, filter]
  );

  const selectedDateEvents = useMemo(
    () =>
      events
        .filter((event) => event.date === selectedDate)
        .sort((a, b) => a.startTime.localeCompare(b.startTime)),
    [events, selectedDate]
  );

  const monthEvents = useMemo(
    () =>
      events.filter((event) => {
        const [year, month] = event.date.split("-").map(Number);

        return (
          year === visibleMonth.year &&
          month - 1 === visibleMonth.month
        );
      }),
    [events, visibleMonth]
  );

  const stats = useMemo(
    () => ({
      total: upcomingEvents.length,
      hearings: upcomingEvents.filter((event) => event.type === "hearing").length,
      meetings: upcomingEvents.filter((event) => event.type === "meeting").length,
    }),
    [upcomingEvents]
  );

  const calendarDays = useMemo(() => {
    const firstDay = new Date(
      visibleMonth.year,
      visibleMonth.month,
      1
    );

    const lastDay = new Date(
      visibleMonth.year,
      visibleMonth.month + 1,
      0
    );

    const offset = (firstDay.getDay() + 6) % 7;
    const totalDays = Math.ceil((offset + lastDay.getDate()) / 7) * 7;

    return Array.from({ length: totalDays }, (_, index) => {
      const day = index - offset + 1;

      if (day < 1 || day > lastDay.getDate()) return null;

      const date = new Date(
        visibleMonth.year,
        visibleMonth.month,
        day
      );

      const dateString = toLocalDate(date);
      const dayEvents = monthEvents.filter(
        (event) => event.date === dateString
      );

      return {
        day,
        date: dateString,
        events: dayEvents,
      };
    });
  }, [visibleMonth, monthEvents]);

  const changeMonth = (direction) => {
    setVisibleMonth((previous) => {
      const date = new Date(
        previous.year,
        previous.month + direction,
        1
      );

      return {
        year: date.getFullYear(),
        month: date.getMonth(),
      };
    });
  };

  const goToToday = () => {
    setSelectedDate(today);

    const date = new Date();
    setVisibleMonth({
      year: date.getFullYear(),
      month: date.getMonth(),
    });
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setSelectedEvent(null);
  };

  return (
    <S.Page>
      <S.Header>
        <div>
          <S.Eyebrow>ORGANIZACIÓN PERSONAL</S.Eyebrow>
          <S.Title>Mi agenda</S.Title>
          <S.Description>
            Consulta las reuniones y audiencias programadas por tu equipo jurídico.
          </S.Description>
        </div>

        <S.ReadOnlyBadge>
          <FiCalendar />
          Agenda de consulta
        </S.ReadOnlyBadge>
      </S.Header>

      <S.StatsGrid>
        <S.StatCard>
          <S.StatIcon $color="blue"><FiCalendar /></S.StatIcon>
          <div>
            <S.StatValue>{stats.total}</S.StatValue>
            <S.StatLabel>Próximos compromisos</S.StatLabel>
          </div>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="gold"><FiScale /></S.StatIcon>
          <div>
            <S.StatValue>{stats.hearings}</S.StatValue>
            <S.StatLabel>Audiencias judiciales</S.StatLabel>
          </div>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="green"><FiUsers /></S.StatIcon>
          <div>
            <S.StatValue>{stats.meetings}</S.StatValue>
            <S.StatLabel>Reuniones con la firma</S.StatLabel>
          </div>
        </S.StatCard>
      </S.StatsGrid>

      <S.MainGrid>
        <S.ContentCard>
          <S.CalendarHeader>
            <div>
              <S.SectionTitle>Calendario de compromisos</S.SectionTitle>
              <S.SectionDescription>
                Selecciona una fecha para consultar sus eventos.
              </S.SectionDescription>
            </div>

            <S.CalendarControls>
              <S.IconButton
                aria-label="Mes anterior"
                onClick={() => changeMonth(-1)}
              >
                <FiChevronLeft />
              </S.IconButton>

              <S.MonthLabel>
                {MONTHS[visibleMonth.month]} {visibleMonth.year}
              </S.MonthLabel>

              <S.IconButton
                aria-label="Mes siguiente"
                onClick={() => changeMonth(1)}
              >
                <FiChevronRight />
              </S.IconButton>

              <S.TodayButton onClick={goToToday}>Hoy</S.TodayButton>
            </S.CalendarControls>
          </S.CalendarHeader>

          <S.CalendarGrid>
            {WEEK_DAYS.map((day) => (
              <S.WeekDay key={day}>{day}</S.WeekDay>
            ))}

            {calendarDays.map((item, index) =>
              item ? (
                <S.DayCell
                  key={item.date}
                  $selected={selectedDate === item.date}
                  $today={today === item.date}
                  $hasEvents={item.events.length > 0}
                  onClick={() => handleSelectDate(item.date)}
                >
                  <S.DayNumber>{item.day}</S.DayNumber>

                  {item.events.length > 0 && (
                    <S.EventIndicators>
                      {item.events.slice(0, 3).map((event) => (
                        <S.EventDot
                          key={event.id}
                          $type={event.type}
                        />
                      ))}
                    </S.EventIndicators>
                  )}

                  {item.events.length > 0 && (
                    <S.DayEventCount>
                      {item.events.length} {item.events.length === 1 ? "evento" : "eventos"}
                    </S.DayEventCount>
                  )}
                </S.DayCell>
              ) : (
                <S.EmptyDay key={`empty-${index}`} />
              )
            )}
          </S.CalendarGrid>

          <S.CalendarLegend>
            <span><S.EventDot $type="hearing" /> Audiencia judicial</span>
            <span><S.EventDot $type="meeting" /> Reunión con la firma</span>
          </S.CalendarLegend>

          <S.SelectedDateSection>
            <S.SectionTitle>
              Compromisos del {formatDate(selectedDate)}
            </S.SectionTitle>

            {selectedDateEvents.length === 0 ? (
              <S.EmptyState>
                <FiCalendar />
                <strong>No tienes compromisos para esta fecha</strong>
                <span>Selecciona otra fecha para consultar tu agenda.</span>
              </S.EmptyState>
            ) : (
              <S.SelectedEventList>
                {selectedDateEvents.map((event) => (
                  <S.SelectedEvent
                    key={event.id}
                    $type={event.type}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <S.EventTypeIcon $type={event.type}>
                      {event.type === "hearing" ? <FiScale /> : <FiUsers />}
                    </S.EventTypeIcon>

                    <div>
                      <S.EventTitle>{event.title}</S.EventTitle>
                      <S.EventTime>
                        <FiClock />
                        {formatTime(event.startTime)} – {formatTime(event.endTime)}
                      </S.EventTime>
                    </div>

                    <FiChevronRight />
                  </S.SelectedEvent>
                ))}
              </S.SelectedEventList>
            )}
          </S.SelectedDateSection>
        </S.ContentCard>

        <S.SideColumn>
          <S.ContentCard>
            <S.CardHeader>
              <div>
                <S.SectionTitle>Próximos eventos</S.SectionTitle>
                <S.SectionDescription>
                  Tus siguientes compromisos programados.
                </S.SectionDescription>
              </div>
            </S.CardHeader>

            <S.FilterBar>
              {[
                { value: "all", label: "Todos" },
                { value: "hearing", label: "Audiencias" },
                { value: "meeting", label: "Reuniones" },
              ].map((item) => (
                <S.FilterButton
                  key={item.value}
                  $active={filter === item.value}
                  onClick={() => setFilter(item.value)}
                >
                  {item.label}
                </S.FilterButton>
              ))}
            </S.FilterBar>

            <S.UpcomingList>
              {upcomingEvents.length === 0 ? (
                <S.EmptyState>
                  <FiCalendar />
                  <strong>No hay eventos próximos</strong>
                  <span>No tienes compromisos pendientes de consulta.</span>
                </S.EmptyState>
              ) : (
                upcomingEvents.map((event) => (
                  <S.UpcomingItem
                    key={event.id}
                    onClick={() => {
                      setSelectedDate(event.date);
                      setSelectedEvent(event);
                      const [year, month] = event.date.split("-").map(Number);
                      setVisibleMonth({ year, month: month - 1 });
                    }}
                  >
                    <S.UpcomingDate $type={event.type}>
                      <strong>
                        {new Date(`${event.date}T12:00:00`).getDate()}
                      </strong>
                      <span>
                        {new Date(`${event.date}T12:00:00`)
                          .toLocaleDateString("es-CO", { month: "short" })
                          .replace(".", "")}
                      </span>
                    </S.UpcomingDate>

                    <div>
                      <S.UpcomingTitle>{event.title}</S.UpcomingTitle>
                      <S.UpcomingMeta>
                        <FiClock /> {formatTime(event.startTime)}
                      </S.UpcomingMeta>
                      <S.UpcomingType $type={event.type}>
                        {event.type === "hearing"
                          ? "Audiencia judicial"
                          : "Reunión con la firma"}
                      </S.UpcomingType>
                    </div>
                  </S.UpcomingItem>
                ))
              )}
            </S.UpcomingList>
          </S.ContentCard>

          <S.InfoCard>
            <S.InfoIcon><FiInfo /></S.InfoIcon>
            <strong>Información de tu agenda</strong>
            <span>
              Las fechas y horarios publicados corresponden a la programación
              comunicada por tu equipo jurídico. Si necesitas aclaraciones,
              contacta a tu abogado responsable.
            </span>
          </S.InfoCard>
        </S.SideColumn>
      </S.MainGrid>

      {selectedEvent && (
        <S.ModalOverlay onClick={() => setSelectedEvent(null)}>
          <S.Modal onClick={(event) => event.stopPropagation()}>
            <S.ModalHeader>
              <div>
                <S.Eyebrow>DETALLE DEL COMPROMISO</S.Eyebrow>
                <S.ModalTitle>{selectedEvent.title}</S.ModalTitle>
              </div>

              <S.CloseButton onClick={() => setSelectedEvent(null)}>
                ×
              </S.CloseButton>
            </S.ModalHeader>

            <S.EventTypeBadge $type={selectedEvent.type}>
              {selectedEvent.type === "hearing"
                ? "Audiencia judicial"
                : "Reunión con la firma"}
            </S.EventTypeBadge>

            <S.DetailList>
              <S.DetailItem>
                <FiCalendar />
                <div>
                  <span>Fecha</span>
                  <strong>{formatDate(selectedEvent.date)}</strong>
                </div>
              </S.DetailItem>

              <S.DetailItem>
                <FiClock />
                <div>
                  <span>Horario</span>
                  <strong>
                    {formatTime(selectedEvent.startTime)} – {formatTime(selectedEvent.endTime)}
                  </strong>
                </div>
              </S.DetailItem>

              <S.DetailItem>
                {selectedEvent.modality === "virtual" ? <FiVideo /> : <FiMapPin />}
                <div>
                  <span>Modalidad y ubicación</span>
                  <strong>
                    {selectedEvent.modality === "virtual"
                      ? "Virtual"
                      : "Presencial"}
                    {" · "}
                    {selectedEvent.location}
                  </strong>
                </div>
              </S.DetailItem>

              <S.DetailItem>
                <FiFolder />
                <div>
                  <span>Expediente asociado</span>
                  <strong>{selectedEvent.caseName}</strong>
                  <small>{selectedEvent.caseNumber}</small>
                </div>
              </S.DetailItem>
            </S.DetailList>

            <S.EventDescription>
              {selectedEvent.description}
            </S.EventDescription>

            {selectedEvent.modality === "virtual" && (
              <S.MeetingLink
                href={selectedEvent.location}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiVideo /> Acceder a la reunión
              </S.MeetingLink>
            )}

            <S.ModalFooter>
              <S.CloseAction onClick={() => setSelectedEvent(null)}>
                Cerrar
              </S.CloseAction>
            </S.ModalFooter>
          </S.Modal>
        </S.ModalOverlay>
      )}
    </S.Page>
  );
};

export default Agenda;
