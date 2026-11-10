
import { useMemo, useState } from "react";
import {
  FiSearch,
  FiFolder,
  FiCheckCircle,
  FiChevronRight,
  FiChevronDown,
  FiCalendar,
  FiMapPin,
  FiFileText,
  FiActivity,
  FiArrowLeft,
} from "react-icons/fi";

import { FaRegClock as FiClock } from "react-icons/fa";
import { FaBalanceScale as FiScale } from "react-icons/fa";

import * as S from "../../../../styles/components/modules/client/expedientes.styles";

const INITIAL_CASES = [
  {
    id: 1,
    name: "Responsabilidad civil contractual",
    number: "11001-31-03-001-2025-00124",
    court: "Juzgado Primero Civil del Circuito",
    city: "Bogotá D.C.",
    type: "Proceso civil",
    status: "active",
    stage: "Etapa probatoria",
    updatedAt: "2026-11-02",
    description:
      "Proceso relacionado con el incumplimiento de obligaciones contractuales y la reclamación de perjuicios.",
    history: [
      {
        id: 1,
        title: "Admisión de la demanda",
        description:
          "El juzgado admite la demanda y dispone continuar con el trámite procesal correspondiente.",
        date: "2025-08-12",
        category: "judicial",
        completed: true,
      },
      {
        id: 2,
        title: "Notificación a la parte demandada",
        description:
          "Se realiza la notificación de la demanda a la parte demandada.",
        date: "2025-09-03",
        category: "judicial",
        completed: true,
      },
      {
        id: 3,
        title: "Contestación de la demanda",
        description:
          "Se incorpora al expediente la contestación presentada por la parte demandada.",
        date: "2025-10-15",
        category: "filing",
        completed: true,
      },
      {
        id: 4,
        title: "Inicio de etapa probatoria",
        description:
          "El despacho dispone el desarrollo de la etapa probatoria dentro del proceso.",
        date: "2026-02-18",
        category: "judicial",
        completed: true,
      },
      {
        id: 5,
        title: "Audiencia de práctica de pruebas",
        description:
          "Se programa y desarrolla la audiencia para la práctica de las pruebas decretadas.",
        date: "2026-11-05",
        category: "hearing",
        completed: false,
        upcoming: true,
      },
    ],
  },
  {
    id: 2,
    name: "Proceso de familia",
    number: "11001-31-10-002-2025-00087",
    court: "Juzgado Segundo de Familia",
    city: "Bogotá D.C.",
    type: "Proceso de familia",
    status: "active",
    stage: "Notificación",
    updatedAt: "2026-10-29",
    description:
      "Proceso judicial de familia actualmente en etapa de notificación a las partes.",
    history: [
      {
        id: 1,
        title: "Presentación de la demanda",
        description:
          "Se radica la demanda ante el despacho judicial competente.",
        date: "2026-07-08",
        category: "filing",
        completed: true,
      },
      {
        id: 2,
        title: "Revisión de requisitos",
        description:
          "El despacho realiza la revisión inicial de los requisitos de la demanda.",
        date: "2026-07-22",
        category: "judicial",
        completed: true,
      },
      {
        id: 3,
        title: "Notificación a las partes",
        description:
          "Se encuentra en curso el procedimiento de notificación correspondiente.",
        date: "2026-10-29",
        category: "judicial",
        completed: false,
        upcoming: true,
      },
    ],
  },
  {
    id: 3,
    name: "Proceso ejecutivo",
    number: "11001-31-03-005-2024-00214",
    court: "Juzgado Quinto Civil del Circuito",
    city: "Bogotá D.C.",
    type: "Proceso ejecutivo",
    status: "closed",
    stage: "Finalizado",
    updatedAt: "2026-09-16",
    description:
      "Proceso ejecutivo finalizado conforme a las actuaciones registradas en el expediente.",
    history: [
      {
        id: 1,
        title: "Presentación de la demanda ejecutiva",
        description: "Se presenta la demanda ante el despacho judicial.",
        date: "2024-03-14",
        category: "filing",
        completed: true,
      },
      {
        id: 2,
        title: "Mandamiento de pago",
        description: "El juzgado libra mandamiento de pago.",
        date: "2024-04-09",
        category: "judicial",
        completed: true,
      },
      {
        id: 3,
        title: "Liquidación del crédito",
        description: "Se incorpora la liquidación del crédito al proceso.",
        date: "2025-05-21",
        category: "filing",
        completed: true,
      },
      {
        id: 4,
        title: "Terminación del proceso",
        description:
          "El despacho registra la terminación del proceso y ordena las actuaciones correspondientes.",
        date: "2026-09-16",
        category: "judicial",
        completed: true,
      },
    ],
  },
];

const formatDate = (value, options = {}) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  });

const formatShortDate = (value) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const Expedientes = () => {
  const [cases] = useState(INITIAL_CASES);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCase, setSelectedCase] = useState(null);

  const stats = useMemo(
    () => ({
      total: cases.length,
      active: cases.filter((item) => item.status === "active").length,
      closed: cases.filter((item) => item.status === "closed").length,
    }),
    [cases]
  );

  const filteredCases = useMemo(() => {
    const term = search.trim().toLowerCase();

    return cases.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(term) ||
        item.number.toLowerCase().includes(term) ||
        item.court.toLowerCase().includes(term);

      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [cases, search, statusFilter]);

  const openCase = (item) => {
    setSelectedCase(item);
  };

  const getHistoryIcon = (category) => {
    switch (category) {
      case "hearing":
        return <FiCalendar />;
      case "filing":
        return <FiFileText />;
      default:
        return <FiScale />;
    }
  };

  if (selectedCase) {
    const completedEvents = selectedCase.history.filter(
      (event) => event.completed
    ).length;

    return (
      <S.Page>
        <S.BackButton onClick={() => setSelectedCase(null)}>
          <FiArrowLeft /> Volver a mis expedientes
        </S.BackButton>

        <S.DetailHeader>
          <S.DetailHeaderContent>
            <S.Eyebrow>CONSULTA DE EXPEDIENTE</S.Eyebrow>
            <S.DetailTitle>{selectedCase.name}</S.DetailTitle>
            <S.DetailNumber>{selectedCase.number}</S.DetailNumber>
          </S.DetailHeaderContent>

          <S.StatusBadge $status={selectedCase.status}>
            {selectedCase.status === "active" ? (
              <><FiActivity /> En curso</>
            ) : (
              <><FiCheckCircle /> Finalizado</>
            )}
          </S.StatusBadge>
        </S.DetailHeader>

        <S.DetailGrid>
          <S.MainColumn>
            <S.ContentCard>
              <S.CardHeader>
                <div>
                  <S.SectionTitle>Historial de actuaciones</S.SectionTitle>
                  <S.SectionDescription>
                    Registro cronológico de los movimientos de tu proceso.
                  </S.SectionDescription>
                </div>
                <S.HistoryCount>
                  {selectedCase.history.length} actuaciones
                </S.HistoryCount>
              </S.CardHeader>

              <S.Timeline>
                {selectedCase.history.map((event, index) => (
                  <S.TimelineItem
                    key={event.id}
                    $completed={event.completed}
                    $last={index === selectedCase.history.length - 1}
                  >
                    <S.TimelineMarker
                      $completed={event.completed}
                      $upcoming={event.upcoming}
                    >
                      {getHistoryIcon(event.category)}
                    </S.TimelineMarker>

                    <S.TimelineContent>
                      <S.TimelineTop>
                        <S.TimelineTitle>{event.title}</S.TimelineTitle>

                        {event.upcoming && (
                          <S.UpcomingBadge>Próxima actuación</S.UpcomingBadge>
                        )}
                      </S.TimelineTop>

                      <S.TimelineDate>
                        <FiCalendar />
                        {formatDate(event.date)}
                      </S.TimelineDate>

                      <S.TimelineDescription>
                        {event.description}
                      </S.TimelineDescription>

                      {event.completed && (
                        <S.CompletedLabel>
                          <FiCheckCircle /> Actuación registrada
                        </S.CompletedLabel>
                      )}
                    </S.TimelineContent>
                  </S.TimelineItem>
                ))}
              </S.Timeline>
            </S.ContentCard>
          </S.MainColumn>

          <S.SideColumn>
            <S.ContentCard>
              <S.SectionTitle>Estado actual</S.SectionTitle>

              <S.CurrentStage>
                <S.StageIcon><FiScale /></S.StageIcon>
                <span>Etapa procesal</span>
                <strong>{selectedCase.stage}</strong>
              </S.CurrentStage>

              <S.ProgressSummary>
                <div>
                  <span>Actuaciones registradas</span>
                  <strong>
                    {completedEvents} de {selectedCase.history.length}
                  </strong>
                </div>
                <S.ProgressTrack>
                  <S.ProgressBar
                    $progress={
                      (completedEvents / selectedCase.history.length) * 100
                    }
                  />
                </S.ProgressTrack>
              </S.ProgressSummary>
            </S.ContentCard>

            <S.ContentCard>
              <S.SectionTitle>Información del proceso</S.SectionTitle>

              <S.InformationList>
                <S.InformationItem>
                  <FiScale />
                  <div>
                    <span>Tipo de proceso</span>
                    <strong>{selectedCase.type}</strong>
                  </div>
                </S.InformationItem>

                <S.InformationItem>
                  <FiMapPin />
                  <div>
                    <span>Despacho judicial</span>
                    <strong>{selectedCase.court}</strong>
                  </div>
                </S.InformationItem>

                <S.InformationItem>
                  <FiMapPin />
                  <div>
                    <span>Ciudad</span>
                    <strong>{selectedCase.city}</strong>
                  </div>
                </S.InformationItem>

                <S.InformationItem>
                  <FiCalendar />
                  <div>
                    <span>Última actualización</span>
                    <strong>{formatShortDate(selectedCase.updatedAt)}</strong>
                  </div>
                </S.InformationItem>
              </S.InformationList>

              <S.CaseDescription>
                {selectedCase.description}
              </S.CaseDescription>
            </S.ContentCard>

            <S.InformationNotice>
              <FiCheckCircle />
              <div>
                <strong>Información de consulta</strong>
                <span>
                  El historial refleja las actuaciones registradas y publicadas
                  por tu equipo jurídico.
                </span>
              </div>
            </S.InformationNotice>
          </S.SideColumn>
        </S.DetailGrid>
      </S.Page>
    );
  }

  return (
    <S.Page>

      <S.StatsGrid>
        <S.StatCard>
          <S.StatIcon $color="blue"><FiFolder /></S.StatIcon>
          <div>
            <S.StatValue>{stats.total}</S.StatValue>
            <S.StatLabel>Expedientes registrados</S.StatLabel>
          </div>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="green"><FiActivity /></S.StatIcon>
          <div>
            <S.StatValue>{stats.active}</S.StatValue>
            <S.StatLabel>Procesos en curso</S.StatLabel>
          </div>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="gold"><FiCheckCircle /></S.StatIcon>
          <div>
            <S.StatValue>{stats.closed}</S.StatValue>
            <S.StatLabel>Procesos finalizados</S.StatLabel>
          </div>
        </S.StatCard>
      </S.StatsGrid>

      <S.ContentCard>
        <S.ListHeader>
          <div>
            <S.SectionTitle>Procesos asociados a tu cuenta</S.SectionTitle>
            <S.SectionDescription>
              Selecciona un expediente para consultar sus actuaciones.
            </S.SectionDescription>
          </div>
        </S.ListHeader>

        <S.Toolbar>
          <S.SearchBox>
            <FiSearch />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por proceso, radicado o juzgado..."
            />
          </S.SearchBox>

          <S.FilterSelect
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">Todos los estados</option>
            <option value="active">En curso</option>
            <option value="closed">Finalizados</option>
          </S.FilterSelect>
        </S.Toolbar>

        <S.CaseList>
          {filteredCases.length === 0 ? (
            <S.EmptyState>
              <FiFolder />
              <strong>No se encontraron expedientes</strong>
              <span>
                No hay procesos que coincidan con los criterios de búsqueda.
              </span>
            </S.EmptyState>
          ) : (
            filteredCases.map((item) => (
              <S.CaseCard
                key={item.id}
                onClick={() => openCase(item)}
              >
                <S.CaseCardIcon>
                  <FiScale />
                </S.CaseCardIcon>

                <S.CaseCardContent>
                  <S.CaseCardTop>
                    <S.CaseTitle>{item.name}</S.CaseTitle>
                    <S.StatusBadge $status={item.status}>
                      {item.status === "active" ? "En curso" : "Finalizado"}
                    </S.StatusBadge>
                  </S.CaseCardTop>

                  <S.CaseNumber>{item.number}</S.CaseNumber>

                  <S.CaseMetadata>
                    <span><FiMapPin /> {item.court}</span>
                    <span><FiClock /> Actualizado: {formatShortDate(item.updatedAt)}</span>
                  </S.CaseMetadata>

                  <S.StageInformation>
                    <span>Estado procesal actual</span>
                    <strong>{item.stage}</strong>
                  </S.StageInformation>
                </S.CaseCardContent>

                <S.CaseCardArrow>
                  <FiChevronRight />
                </S.CaseCardArrow>
              </S.CaseCard>
            ))
          )}
        </S.CaseList>

        <S.ListFooter>
          <span>{filteredCases.length} expedientes encontrados</span>
          <span>Información de tus procesos</span>
        </S.ListFooter>
      </S.ContentCard>
    </S.Page>
  );
};

export default Expedientes;
