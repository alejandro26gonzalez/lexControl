
import { useNavigate } from "react-router-dom";
import {
    FiFolder,
    FiClock,
    FiCalendar,
    FiFileText,
    FiArrowUpRight,
    FiArrowRight,
    FiBriefcase,
    FiMapPin,
    FiCheckCircle,
} from "react-icons/fi";

import {
    Container,
    WelcomePanel,
    WelcomeContent,
    WelcomeEyebrow,
    WelcomeTitle,
    WelcomeDescription,
    WelcomeDate,
    WelcomeDecoration,
    SectionHeader,
    SectionTitle,
    SectionDescription,
    MetricsGrid,
    MetricCard,
    MetricIcon,
    MetricLabel,
    MetricValue,
    MetricFooter,
    MainGrid,
    MainColumn,
    SideColumn,
    ContentCard,
    CardHeader,
    ViewAll,
    CaseList,
    CaseItem,
    CaseInfo,
    CaseNumber,
    CaseName,
    CaseMeta,
    CaseStatus,
    AppointmentList,
    AppointmentItem,
    AppointmentDate,
    AppointmentInfo,
    AppointmentTitle,
    AppointmentMeta,
    QuickAccessGrid,
    QuickAccessCard,
    QuickAccessIcon,
    QuickAccessTitle,
    QuickAccessDescription,
    QuickAccessArrow,
} from "../../../../styles/components/modules/collaborator/home.styles";

const CollabHome = () => {
    const navigate = useNavigate();

    // Información demostrativa: se conectará con el backend.
    const metrics = [
        {
            label: "Expedientes asignados",
            value: "18",
            detail: "Total bajo tu gestión",
            icon: <FiFolder />,
            color: "gold",
            route: "/portal/collaborator/expedientes",
        },
        {
            label: "Pendientes de atención",
            value: "06",
            detail: "Requieren seguimiento",
            icon: <FiClock />,
            color: "warning",
            route: "/portal/collaborator/expedientes",
        },
        {
            label: "Citas próximas",
            value: "03",
            detail: "Compromisos programados",
            icon: <FiCalendar />,
            color: "cyan",
            route: "/portal/collaborator/citas",
        },
        {
            label: "Documentos",
            value: "42",
            detail: "Archivos en el repositorio",
            icon: <FiFileText />,
            color: "green",
            route: "/portal/collaborator/repositorio",
        },
    ];

    const cases = [
        {
            id: "EXP-2026-0018",
            name: "Proceso de responsabilidad civil",
            client: "Cliente empresarial",
            status: "En revisión",
            variant: "review",
            date: "Actualizado recientemente",
        },
        {
            id: "EXP-2026-0015",
            name: "Proceso ejecutivo contractual",
            client: "Cliente particular",
            status: "En trámite",
            variant: "progress",
            date: "Actualizado recientemente",
        },
        {
            id: "EXP-2026-0012",
            name: "Proceso de derecho laboral",
            client: "Cliente empresarial",
            status: "Pendiente",
            variant: "pending",
            date: "Requiere seguimiento",
        },
    ];

    const appointments = [
        {
            id: 1,
            day: "05",
            month: "NOV",
            title: "Reunión de seguimiento",
            description: "Revisión de expediente",
            time: "09:00 a. m.",
            place: "Sala de reuniones",
        },
        {
            id: 2,
            day: "06",
            month: "NOV",
            title: "Consulta jurídica",
            description: "Asesoría con cliente",
            time: "11:30 a. m.",
            place: "Virtual",
        },
        {
            id: 3,
            day: "07",
            month: "NOV",
            title: "Revisión documental",
            description: "Validación de documentos",
            time: "02:00 p. m.",
            place: "Oficina principal",
        },
    ];

    const quickAccess = [
        {
            title: "Expedientes",
            description: "Consulta y realiza seguimiento a tus procesos jurídicos.",
            icon: <FiFolder />,
            route: "/portal/collaborator/expedientes",
        },
        {
            title: "Agenda de citas",
            description: "Organiza reuniones y compromisos profesionales.",
            icon: <FiCalendar />,
            route: "/portal/collaborator/citas",
        },
        {
            title: "Repositorio documental",
            description: "Accede a los documentos de tus expedientes.",
            icon: <FiFileText />,
            route: "/portal/collaborator/repositorio",
        },
    ];

    const currentDate = new Intl.DateTimeFormat("es-CO", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date());

    return (
        <Container>
            <WelcomePanel>
                <WelcomeContent>
                    <WelcomeEyebrow>
                        <FiBriefcase />
                        ESPACIO DE TRABAJO
                    </WelcomeEyebrow>

                    <WelcomeTitle>
                        Tu gestión jurídica,
                        <span> en un solo lugar.</span>
                    </WelcomeTitle>

                    <WelcomeDescription>
                        Consulta tus expedientes, organiza tu agenda y
                        mantén tus documentos disponibles desde tu
                        espacio profesional.
                    </WelcomeDescription>

                    <WelcomeDate>
                        <FiCalendar />
                        {currentDate}
                    </WelcomeDate>
                </WelcomeContent>

                <WelcomeDecoration>
                    <div className="decoration-circle circle-one" />
                    <div className="decoration-circle circle-two" />
                    <div className="decoration-center">
                        <FiBriefcase />
                    </div>
                </WelcomeDecoration>
            </WelcomePanel>

            <section>
                <SectionHeader>
                    <div>
                        <SectionTitle>Resumen de actividad</SectionTitle>
                        <SectionDescription>
                            Una vista general de tu trabajo actual.
                        </SectionDescription>
                    </div>
                </SectionHeader>

                <MetricsGrid>
                    {metrics.map((metric) => (
                        <MetricCard
                            key={metric.label}
                            onClick={() => navigate(metric.route)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="metric-top">
                                <MetricIcon $color={metric.color}>
                                    {metric.icon}
                                </MetricIcon>
                                <FiArrowUpRight className="metric-arrow" />
                            </div>

                            <MetricLabel>{metric.label}</MetricLabel>
                            <MetricValue>{metric.value}</MetricValue>
                            <MetricFooter>{metric.detail}</MetricFooter>
                        </MetricCard>
                    ))}
                </MetricsGrid>
            </section>

            <MainGrid>
                <MainColumn>
                    <ContentCard>
                        <CardHeader>
                            <div>
                                <SectionTitle>Expedientes recientes</SectionTitle>
                                <SectionDescription>
                                    Procesos que se encuentran bajo tu gestión.
                                </SectionDescription>
                            </div>

                            <ViewAll
                                onClick={() =>
                                    navigate("/portal/collaborator/expedientes")
                                }
                            >
                                Ver todos <FiArrowRight />
                            </ViewAll>
                        </CardHeader>

                        <CaseList>
                            {cases.map((item) => (
                                <CaseItem key={item.id}>
                                    <CaseInfo>
                                        <CaseNumber>{item.id}</CaseNumber>
                                        <CaseName>{item.name}</CaseName>
                                        <CaseMeta>{item.client}</CaseMeta>
                                    </CaseInfo>

                                    <div className="case-right">
                                        <CaseStatus $variant={item.variant}>
                                            {item.status}
                                        </CaseStatus>
                                        <span className="case-date">
                                            {item.date}
                                        </span>
                                    </div>
                                </CaseItem>
                            ))}
                        </CaseList>
                    </ContentCard>

                    <section>
                        <SectionHeader>
                            <div>
                                <SectionTitle>Accesos directos</SectionTitle>
                                <SectionDescription>
                                    Continúa trabajando desde tus módulos principales.
                                </SectionDescription>
                            </div>
                        </SectionHeader>

                        <QuickAccessGrid>
                            {quickAccess.map((item) => (
                                <QuickAccessCard
                                    key={item.title}
                                    onClick={() => navigate(item.route)}
                                >
                                    <QuickAccessIcon>
                                        {item.icon}
                                    </QuickAccessIcon>

                                    <QuickAccessTitle>
                                        {item.title}
                                    </QuickAccessTitle>

                                    <QuickAccessDescription>
                                        {item.description}
                                    </QuickAccessDescription>

                                    <QuickAccessArrow>
                                        Abrir módulo <FiArrowRight />
                                    </QuickAccessArrow>
                                </QuickAccessCard>
                            ))}
                        </QuickAccessGrid>
                    </section>
                </MainColumn>

                <SideColumn>
                    <ContentCard>
                        <CardHeader>
                            <div>
                                <SectionTitle>Próximas citas</SectionTitle>
                                <SectionDescription>
                                    Tus siguientes compromisos.
                                </SectionDescription>
                            </div>

                            <ViewAll
                                onClick={() =>
                                    navigate("/portal/collaborator/citas")
                                }
                            >
                                Ver agenda
                            </ViewAll>
                        </CardHeader>

                        <AppointmentList>
                            {appointments.map((item) => (
                                <AppointmentItem key={item.id}>
                                    <AppointmentDate>
                                        <strong>{item.day}</strong>
                                        <span>{item.month}</span>
                                    </AppointmentDate>

                                    <AppointmentInfo>
                                        <AppointmentTitle>
                                            {item.title}
                                        </AppointmentTitle>

                                        <AppointmentMeta>
                                            {item.description}
                                        </AppointmentMeta>

                                        <AppointmentMeta>
                                            <FiClock />
                                            {item.time}
                                        </AppointmentMeta>

                                        <AppointmentMeta>
                                            <FiMapPin />
                                            {item.place}
                                        </AppointmentMeta>
                                    </AppointmentInfo>
                                </AppointmentItem>
                            ))}
                        </AppointmentList>
                    </ContentCard>

                    <ContentCard className="workspace-card">
                        <div className="workspace-heading">
                            <FiCheckCircle />
                            <span>ORGANIZACIÓN PROFESIONAL</span>
                        </div>

                        <h3>Tu espacio de trabajo</h3>

                        <p>
                            Mantén tus expedientes y documentos organizados
                            para facilitar el seguimiento de cada proceso.
                        </p>

                        <button
                            onClick={() =>
                                navigate("/portal/collaborator/repositorio")
                            }
                        >
                            Ir al repositorio
                            <FiArrowRight />
                        </button>
                    </ContentCard>
                </SideColumn>
            </MainGrid>
        </Container>
    );
};

export default CollabHome;
