
import { useNavigate } from "react-router-dom";
import {
    FiUsers,
    FiMapPin,
    FiBookOpen,
    FiActivity,
    FiArrowUpRight,
    FiArrowRight,
    FiShield,
    FiUserPlus,
    FiBriefcase,
    FiCalendar,
} from "react-icons/fi";

import {
    Container,
    WelcomePanel,
    WelcomeContent,
    WelcomeEyebrow,
    WelcomeTitle,
    WelcomeDescription,
    WelcomeActions,
    WelcomeButton,
    WelcomeDecoration,
    SectionHeader,
    SectionTitle,
    SectionDescription,
    MetricsGrid,
    MetricCard,
    MetricTop,
    MetricIcon,
    MetricLabel,
    MetricValue,
    MetricFooter,
    DashboardGrid,
    MainColumn,
    SideColumn,
    ModuleGrid,
    ModuleCard,
    ModuleIcon,
    ModuleTitle,
    ModuleDescription,
    ModuleLink,
    ActivityCard,
    ActivityHeader,
    ActivityList,
    ActivityItem,
    ActivityIcon,
    ActivityContent,
    ActivityTitle,
    ActivityDescription,
    ActivityTime,
    SystemCard,
    SystemStatus,
    SystemStatusDot,
    SystemInfo,
    SystemInfoItem,
    QuickAccessCard,
    QuickAccessItem,
} from "../../../../styles/components/modules/admin/home.styles";

const AdminHome = () => {
    const navigate = useNavigate();

    // Datos demostrativos. Se conectarán posteriormente con el backend.
    const metrics = [
        {
            label: "Usuarios registrados",
            value: "128",
            detail: "Cuentas en la plataforma",
            icon: <FiUsers />,
            color: "gold",
            route: "/portal/admin/users",
        },
        {
            label: "Profesionales",
            value: "24",
            detail: "Perfiles profesionales",
            icon: <FiBriefcase />,
            color: "cyan",
            route: "/portal/admin/catalogs",
        },
        {
            label: "Especialidades",
            value: "12",
            detail: "Áreas jurídicas disponibles",
            icon: <FiBookOpen />,
            color: "purple",
            route: "/portal/admin/catalogs",
        },
        {
            label: "Sedes registradas",
            value: "5",
            detail: "Ubicaciones configuradas",
            icon: <FiMapPin />,
            color: "green",
            route: "/portal/admin/sites",
        },
    ];

    const modules = [
        {
            title: "Gestión de usuarios",
            description:
                "Administra cuentas, roles, permisos y estados de acceso.",
            icon: <FiUsers />,
            route: "/portal/admin/users",
            label: "Administrar usuarios",
        },
        {
            title: "Sedes y juzgados",
            description:
                "Gestiona las sedes y los juzgados predefinidos del sistema.",
            icon: <FiMapPin />,
            route: "/portal/admin/sites",
            label: "Gestionar ubicaciones",
        },
        {
            title: "Catálogo jurídico",
            description:
                "Administra profesionales, especialidades y áreas de práctica.",
            icon: <FiBookOpen />,
            route: "/portal/admin/catalogs",
            label: "Gestionar catálogo",
        },
    ];

    const activities = [
        {
            title: "Módulo de usuarios",
            description: "Gestión de cuentas y permisos disponible.",
            time: "Módulo operativo",
            icon: <FiUsers />,
            color: "cyan",
        },
        {
            title: "Catálogo jurídico",
            description: "Gestión de profesionales y especialidades.",
            time: "Módulo operativo",
            icon: <FiBookOpen />,
            color: "gold",
        },
        {
            title: "Configuración de sedes",
            description: "Administración de ubicaciones y juzgados.",
            time: "Módulo operativo",
            icon: <FiMapPin />,
            color: "green",
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
                        <FiShield />
                        CENTRO DE CONTROL · LEXCONTROL
                    </WelcomeEyebrow>

                    <WelcomeTitle>
                        Administración <span>centralizada.</span>
                    </WelcomeTitle>

                    <WelcomeDescription>
                        Gestiona los recursos, usuarios y parámetros
                        estructurales de la plataforma desde un único lugar.
                    </WelcomeDescription>

                    <WelcomeActions>
                        <WelcomeButton
                            onClick={() => navigate("/portal/admin/users")}
                        >
                            <FiUsers />
                            Gestionar usuarios
                            <FiArrowUpRight />
                        </WelcomeButton>
                    </WelcomeActions>

                    <WelcomeEyebrow $date>
                        <FiCalendar />
                        {currentDate}
                    </WelcomeEyebrow>
                </WelcomeContent>

                <WelcomeDecoration>
                    <div className="decoration-circle circle-one" />
                    <div className="decoration-circle circle-two" />
                    <div className="decoration-center">
                        <FiShield />
                    </div>
                    <span className="decoration-caption">
                        CONTROL · SEGURIDAD · GESTIÓN
                    </span>
                </WelcomeDecoration>
            </WelcomePanel>

            <section>
                <SectionHeader>
                    <div>
                        <SectionTitle>Resumen general</SectionTitle>
                        <SectionDescription>
                            Indicadores principales de la plataforma.
                        </SectionDescription>
                    </div>
                    <span className="section-caption">
                        <FiActivity />
                        VISTA ADMINISTRATIVA
                    </span>
                </SectionHeader>

                <MetricsGrid>
                    {metrics.map((metric) => (
                        <MetricCard
                            key={metric.label}
                            onClick={() => navigate(metric.route)}
                            role="button"
                            tabIndex={0}
                        >
                            <MetricTop>
                                <MetricIcon $color={metric.color}>
                                    {metric.icon}
                                </MetricIcon>
                                <FiArrowUpRight className="metric-arrow" />
                            </MetricTop>

                            <MetricLabel>{metric.label}</MetricLabel>
                            <MetricValue>{metric.value}</MetricValue>

                            <MetricFooter>{metric.detail}</MetricFooter>
                        </MetricCard>
                    ))}
                </MetricsGrid>
            </section>

            <DashboardGrid>
                <MainColumn>
                    <section>
                        <SectionHeader>
                            <div>
                                <SectionTitle>
                                    Herramientas administrativas
                                </SectionTitle>
                                <SectionDescription>
                                    Accesos directos a los módulos de gestión.
                                </SectionDescription>
                            </div>
                        </SectionHeader>

                        <ModuleGrid>
                            {modules.map((module) => (
                                <ModuleCard
                                    key={module.title}
                                    onClick={() => navigate(module.route)}
                                >
                                    <ModuleIcon>{module.icon}</ModuleIcon>

                                    <ModuleTitle>
                                        {module.title}
                                    </ModuleTitle>

                                    <ModuleDescription>
                                        {module.description}
                                    </ModuleDescription>

                                    <ModuleLink>
                                        {module.label}
                                        <FiArrowRight />
                                    </ModuleLink>
                                </ModuleCard>
                            ))}
                        </ModuleGrid>
                    </section>

                    <ActivityCard>
                        <ActivityHeader>
                            <div>
                                <SectionTitle>
                                    Actividad de la plataforma
                                </SectionTitle>
                                <SectionDescription>
                                    Estado de los módulos administrativos.
                                </SectionDescription>
                            </div>
                            <FiActivity />
                        </ActivityHeader>

                        <ActivityList>
                            {activities.map((activity, index) => (
                                <ActivityItem key={index}>
                                    <ActivityIcon $color={activity.color}>
                                        {activity.icon}
                                    </ActivityIcon>

                                    <ActivityContent>
                                        <ActivityTitle>
                                            {activity.title}
                                        </ActivityTitle>
                                        <ActivityDescription>
                                            {activity.description}
                                        </ActivityDescription>
                                    </ActivityContent>

                                    <ActivityTime>
                                        {activity.time}
                                    </ActivityTime>
                                </ActivityItem>
                            ))}
                        </ActivityList>
                    </ActivityCard>
                </MainColumn>

                <SideColumn>
                    <SystemCard>
                        <div className="system-heading">
                            <div>
                                <SectionTitle>
                                    Estado del sistema
                                </SectionTitle>
                                <SectionDescription>
                                    Indicadores de disponibilidad.
                                </SectionDescription>
                            </div>
                            <FiActivity />
                        </div>

                        <SystemStatus>
                            <SystemStatusDot />
                            Entorno de administración
                        </SystemStatus>

                        <SystemInfo>
                            <SystemInfoItem>
                                <span>Plataforma</span>
                                <strong>LexControl</strong>
                            </SystemInfoItem>

                            <SystemInfoItem>
                                <span>Versión</span>
                                <strong>En desarrollo</strong>
                            </SystemInfoItem>

                            <SystemInfoItem>
                                <span>Acceso</span>
                                <strong>Restringido</strong>
                            </SystemInfoItem>
                        </SystemInfo>

                        <div className="system-security">
                            <FiShield />
                            Acceso administrativo protegido
                        </div>
                    </SystemCard>

                    <QuickAccessCard>
                        <SectionTitle>Accesos rápidos</SectionTitle>
                        <SectionDescription>
                            Otras tareas de administración.
                        </SectionDescription>

                        <QuickAccessItem
                            onClick={() => navigate("/portal/admin/users")}
                        >
                            <FiUserPlus />
                            Crear usuario
                            <FiArrowUpRight />
                        </QuickAccessItem>

                        <QuickAccessItem
                            onClick={() => navigate("/portal/admin/sites")}
                        >
                            <FiMapPin />
                            Registrar sede
                            <FiArrowUpRight />
                        </QuickAccessItem>

                        <QuickAccessItem
                            onClick={() => navigate("/portal/admin/catalogs")}
                        >
                            <FiBookOpen />
                            Añadir especialidad
                            <FiArrowUpRight />
                        </QuickAccessItem>
                    </QuickAccessCard>
                </SideColumn>
            </DashboardGrid>
        </Container>
    );
};

export default AdminHome;
