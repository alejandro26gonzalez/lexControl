
import {
FiArrowRight,
FiCalendar,
FiCheckCircle,
FiFileText,
FiFolder,
FiLock,
FiMessageCircle,
FiShield,
FiTrendingUp,
} from "react-icons/fi";

import { FaRegClock as FiClock } from "react-icons/fa";
import { FaBalanceScale as FiScale } from "react-icons/fa";


import * as S from "../../../../styles/components/modules/client/home.styles";

const CASES = [
  {
    id: 1,
    title: "Responsabilidad civil contractual",
    number: "11001-31-03-001-2025-00124",
    court: "Juzgado Primero Civil del Circuito",
    stage: "Etapa probatoria",
    progress: 58,
    status: "En curso",
    updated: "Actualizado recientemente",
  },
  {
    id: 2,
    title: "Proceso de familia",
    number: "11001-31-10-002-2025-00087",
    court: "Juzgado Segundo de Familia",
    stage: "Notificación",
    progress: 28,
    status: "En curso",
    updated: "En seguimiento",
  },
];

const APPOINTMENTS = [
  {
    id: 1,
    title: "Audiencia de práctica de pruebas",
    date: "2026-11-05",
    time: "08:30",
    type: "Audiencia judicial",
    modality: "Virtual",
    case: "Responsabilidad civil contractual",
  },
  {
    id: 2,
    title: "Reunión de seguimiento",
    date: "2026-11-07",
    time: "10:00",
    type: "Reunión con abogado",
    modality: "Virtual",
    case: "Proceso de familia",
  },
];

const DOCUMENTS = [
  {
    id: 1,
    name: "Auto admisorio.pdf",
    type: "Auto del juzgado",
    date: "02 nov. 2026",
    size: "1.1 MB",
  },
  {
    id: 2,
    name: "Documento de identidad.pdf",
    type: "Soporte del cliente",
    date: "01 nov. 2026",
    size: "850 KB",
  },
  {
    id: 3,
    name: "Memorial de solicitud.pdf",
    type: "Memorial",
    date: "30 oct. 2026",
    size: "420 KB",
  },
];

const formatDate = (value) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

const ClientHome = ({ user }) => {
  const firstName =
    user?.profile?.name?.split(" ")[0] ||
    user?.name?.split(" ")[0] ||
    "Cliente";

  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <S.Page>
      {/* Welcome */}
      <S.WelcomeCard>
        <S.WelcomeContent>
          <S.WelcomeEyebrow>PORTAL DEL CLIENTE · LEXCONTROL</S.WelcomeEyebrow>

          <S.WelcomeTitle>
            Hola, {firstName}.
            <br />
            Tu tranquilidad también es parte del proceso.
          </S.WelcomeTitle>

          <S.WelcomeDescription>
            Consulta el avance de tus procesos jurídicos, revisa tus próximos
            compromisos y mantente al tanto de los documentos publicados por
            tu equipo legal.
          </S.WelcomeDescription>

          <S.WelcomeActions>
            <S.WelcomeButton onClick={() => goTo("/portal/client/files")}>
              Consultar mis expedientes <FiArrowRight />
            </S.WelcomeButton>
          </S.WelcomeActions>
        </S.WelcomeContent>

        <S.WelcomeDecoration>
          <S.DecorationCircle />
          <S.DecorationIcon>
            <FiScale />
          </S.DecorationIcon>
          <S.DecorationLabel>
            <FiShield />
            <span>Tu información, protegida</span>
          </S.DecorationLabel>
        </S.WelcomeDecoration>
      </S.WelcomeCard>

      {/* Summary */}
      <S.SectionHeader>
        <div>
          <S.SectionTitle>Resumen de tu actividad</S.SectionTitle>
          <S.SectionDescription>
            Una vista general de tus procesos y compromisos.
          </S.SectionDescription>
        </div>
      </S.SectionHeader>

      <S.StatsGrid>
        <S.StatCard>
          <S.StatIcon $color="blue"><FiFolder /></S.StatIcon>
          <S.StatInformation>
            <S.StatValue>02</S.StatValue>
            <S.StatLabel>Expedientes activos</S.StatLabel>
            <S.StatFootnote>Procesos en seguimiento</S.StatFootnote>
          </S.StatInformation>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="gold"><FiCalendar /></S.StatIcon>
          <S.StatInformation>
            <S.StatValue>02</S.StatValue>
            <S.StatLabel>Próximos compromisos</S.StatLabel>
            <S.StatFootnote>Reuniones y audiencias</S.StatFootnote>
          </S.StatInformation>
        </S.StatCard>

        <S.StatCard>
          <S.StatIcon $color="green"><FiFileText /></S.StatIcon>
          <S.StatInformation>
            <S.StatValue>03</S.StatValue>
            <S.StatLabel>Documentos disponibles</S.StatLabel>
            <S.StatFootnote>Publicados por tu equipo legal</S.StatFootnote>
          </S.StatInformation>
        </S.StatCard>
      </S.StatsGrid>

      {/* Main content */}
      <S.MainGrid>
        <S.MainColumn>
          <S.ContentCard>
            <S.CardHeader>
              <div>
                <S.SectionTitle>Mis expedientes</S.SectionTitle>
                <S.SectionDescription>
                  Consulta el estado actual de tus procesos.
                </S.SectionDescription>
              </div>

              <S.TextButton onClick={() => goTo("/portal/client/files")}>
                Ver todos <FiArrowRight />
              </S.TextButton>
            </S.CardHeader>

            <S.CaseList>
              {CASES.map((item) => (
                <S.CaseItem key={item.id}>
                  <S.CaseTop>
                    <S.CaseIcon><FiScale /></S.CaseIcon>
                    <S.CaseInformation>
                      <S.CaseTitle>{item.title}</S.CaseTitle>
                      <S.CaseNumber>{item.number}</S.CaseNumber>
                    </S.CaseInformation>
                    <S.CaseStatus>{item.status}</S.CaseStatus>
                  </S.CaseTop>

                  <S.CaseDetails>
                    <span>{item.court}</span>
                    <span>
                      <FiClock /> {item.updated}
                    </span>
                  </S.CaseDetails>

                  <S.ProgressHeader>
                    <span>Estado procesal</span>
                    <strong>{item.stage}</strong>
                  </S.ProgressHeader>

                  <S.ProgressTrack>
                    <S.ProgressBar $progress={item.progress} />
                  </S.ProgressTrack>
                </S.CaseItem>
              ))}
            </S.CaseList>
          </S.ContentCard>

          <S.ContentCard>
            <S.CardHeader>
              <div>
                <S.SectionTitle>Documentos recientes</S.SectionTitle>
                <S.SectionDescription>
                  Archivos publicados para tu consulta.
                </S.SectionDescription>
              </div>

              <S.TextButton onClick={() => goTo("/portal/client/repo")}>
                Ver repositorio <FiArrowRight />
              </S.TextButton>
            </S.CardHeader>

            <S.DocumentList>
              {DOCUMENTS.map((document) => (
                <S.DocumentItem key={document.id}>
                  <S.DocumentIcon><FiFileText /></S.DocumentIcon>

                  <S.DocumentInformation>
                    <S.DocumentName>{document.name}</S.DocumentName>
                    <S.DocumentMeta>
                      {document.type} · {document.date} · {document.size}
                    </S.DocumentMeta>
                  </S.DocumentInformation>

                  <S.PublicLabel>
                    <FiCheckCircle /> Disponible
                  </S.PublicLabel>
                </S.DocumentItem>
              ))}
            </S.DocumentList>
          </S.ContentCard>
        </S.MainColumn>

        <S.SideColumn>
          <S.ContentCard>
            <S.CardHeader>
              <div>
                <S.SectionTitle>Próximos compromisos</S.SectionTitle>
                <S.SectionDescription>
                  Fechas importantes de tu agenda.
                </S.SectionDescription>
              </div>
              <S.SmallIcon><FiCalendar /></S.SmallIcon>
            </S.CardHeader>

            <S.AppointmentList>
              {APPOINTMENTS.map((item) => (
                <S.AppointmentItem key={item.id}>
                  <S.AppointmentDate>
                    <strong>
                      {new Date(`${item.date}T12:00:00`).getDate()}
                    </strong>
                    <span>
                      {new Date(`${item.date}T12:00:00`)
                        .toLocaleDateString("es-CO", { month: "short" })
                        .replace(".", "")}
                    </span>
                  </S.AppointmentDate>

                  <S.AppointmentInformation>
                    <strong>{item.title}</strong>
                    <span>{item.type}</span>
                    <S.AppointmentTime>
                      <FiClock /> {item.time} · {item.modality}
                    </S.AppointmentTime>
                  </S.AppointmentInformation>
                </S.AppointmentItem>
              ))}
            </S.AppointmentList>

            <S.FullWidthButton
              onClick={() => goTo("/portal/client/appointments")}
            >
              Consultar mi agenda <FiArrowRight />
            </S.FullWidthButton>
          </S.ContentCard>

          <S.SupportCard>
            <S.SupportIcon><FiMessageCircle /></S.SupportIcon>
            <S.SupportTitle>¿Necesitas orientación?</S.SupportTitle>
            <S.SupportDescription>
              Tu equipo jurídico está disponible para resolver tus inquietudes
              relacionadas con los procesos.
            </S.SupportDescription>
            <S.SupportNote>
              <FiShield />
              Comunicación segura con tu equipo legal.
            </S.SupportNote>
          </S.SupportCard>

          <S.PrivacyCard>
            <S.PrivacyIcon><FiLock /></S.PrivacyIcon>
            <div>
              <strong>Espacio privado</strong>
              <span>
                Solo puedes consultar la información y los documentos
                habilitados para tu cuenta.
              </span>
            </div>
          </S.PrivacyCard>
        </S.SideColumn>
      </S.MainGrid>
    </S.Page>
  );
};

export default ClientHome;
