import IMAGES from "../../assets/images/images";
import { FaComment } from "react-icons/fa6";
import {
    FiMessageCircle,
    FiFileText,
    FiUsers,
    FiCheck,
} from 'react-icons/fi';
import { FaBuilding } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiFile, PiGavel, PiShieldCheckBold } from "react-icons/pi";

export const specialtiesConfig = {
    hero:{
        type: "standard",
        variant: "dark",
        background: IMAGES.specialties.hero,
        eyebrow: "NUESTRAS ÁREAS DE PRÁCTICA",
        title: "Nuestro enfoque es la especialización estratégica respaldada por precisión operativa",
        description: "En LexControl articulamos el criterio de nuestras áreas de práctica con un seguimiento en tiempo real. Brindamos representación técnica y asesoría continua tanto a personas naturales en sus causas individuales como a empresas con sus propios departamentos jurídicos, asegurando siempre un control riguroso de términos y la ausencia total de conflictos de interés.",
        actions: []
    },
    banner: {
        icon: FaComment,
        variant: 'dark',
        eyebrow: "¿TIENES DUDAS?",
        title: "Revisa nuestras preguntas frecuentes.",

        description: 
        'Encuentra respuestas a las consultas más comunes en nuestra sección de recursos.',

        action: {
            label: "Ver preguntas frecuentes",
            path: "/resources",
            variant: "primary"
        }
    },
    timeline: {
        eyebrow: "NUESTRO PROCESO",
        title: "Gestión ágil y transparente desde el primer día",
        description: "Acompañamos cada etapa de tu proceso jurídico combinando criterio técnico con visibilidad total. Desde la apertura del expediente hasta la resolución final, nuestro sistema te permite monitorear cada avance sin incertidumbres.",
        steps: [
            {
                id: "opening",
                number: "1.",
                title: "Apertura y diagnóstico",
                description: "Evaluamos tu situación, filtramos posibles conflicors de interés de forma preventiva y recopilamos la información clave.",
                icon: FiMessageCircle,
            },
            {
                id: "strategy",
                number: "2.",
                title: "Estrategia y asignación",
                description: "Definimos el plan de acción legal y asignamos un Abogado Responsable especializado en tu materia.",
                icon: FiFileText,
            },
            {
                id: "monitoring",
                number: "3.",
                title: "Seguimiento y control de términos",
                description: "Ejecutamos las actuaciones judiciales garantizando el cumplimiento estricto de plazos con trazabilidad en tu portal.",
                icon: FiUsers,
            },
            {
                id: "resolution",
                number: "4.",
                title: "Resolución y protección de activos",
                description: "Obtenemos resultados efectivos orientados a salvaguardar los intereses de nuestras personas y clientes corporativos.",
                icon: FiCheck,
            }
        ]
    },
    grid:{
        eyebrow: 'NUESTRAS ESPECIALIDADES',
        title: 'Soluciones jurídicas para cada desafío',

        specialties: [
            {
                id: 'corporate',
                title: 'Derecho Corporativo y Empresarial',
                description: 'Estructuración de contratos, gobierno corporativo y asesoría continua para empresas y departamentos jurídicos internos.',
                image: IMAGES.specialties.corporate,
                icon: FaBuilding,
                subcategories: [
                    {
                        id: 'corp-contracts',
                        title: 'Contratación Mercantil y Comercial',
                        description: 'Diseño, negociación y revisión de acuerdos comerciales, contratos marco de suministro y convenios con proveedores.'
                    },
                    {
                        id: 'corp-governance',
                        title: 'Gobierno Corporativo y Sociedades',
                        description: 'Constitución de sociedades, reformas estatutarias, acuerdos de accionistas y formalización de actas de asamblea.'
                    },
                    {
                        id: 'corp-compliance',
                        title: 'Compliance y Matriz de Riesgos Legales',
                        description: 'Implementación de políticas preventivas, cumplimiento regulatorio y auditorías legales internas.'
                    },
                    {
                        id: 'corp-in-house',
                        title: 'Acompañamiento a Departamentos Jurídicos',
                        description: 'Soporte especializado en la gestión y desahogo de carga operativa para equipos legales corporativos internos.'
                    }
                ]
            },
            {
                id: 'civile',
                title: 'Derecho Civil y Contratos',
                description: 'Protección patrimonial, responsabilidad contractual y estructuración de negocios jurídicos.',
                image: IMAGES.specialties.civile,
                icon: FiUsers,
                subcategories: [
                    {
                        id: 'civil-real-estate',
                        title: 'Derecho Inmobiliario y Propiedad',
                        description: 'Estudios de títulos, contratos de compraventa, arrendamientos comerciales y saneamiento de inmuebles.'
                    },
                    {
                        id: 'civil-liability',
                        title: 'Responsabilidad Civil y Daños',
                        description: 'Reclamaciones por responsabilidad contractual y extracontractual, reparación de perjuicios e indemnizaciones.'
                    },
                    {
                        id: 'civil-obligations',
                        title: 'Gestión de Obligaciones y Cobro Cartera',
                        description: 'Recuperación judicial y prejudicial de cartera, títulos valores y ejecución de garantías.'
                    },
                    {
                        id: 'civil-estate-planning',
                        title: 'Protección y Planificación Patrimonial',
                        description: 'Estructuración de esquemas de protección de activos para personas naturales y familias.'
                    }
                ]
            },
            {
                id: 'work',
                title: 'Derecho Laboral y Seguridad Social',
                description: 'Gestión de relaciones laborales, prevención de riesgos patronales y representación ante autoridades.',
                image: IMAGES.specialties.job,
                icon: IoBriefcaseOutline,
                subcategories: [
                    {
                        id: 'work-employer',
                        title: 'Auditoría y Gestión Patronal Preventiva',
                        description: 'Elaboración de contratos de trabajo, reglamentos internos, políticas sancionatorias y terminaciones laborales.'
                    },
                    {
                        id: 'work-litigation',
                        title: 'Litigios y Procesos Laborales',
                        description: 'Representación en demandas individuales o colectivas ante juzgados del trabajo y tribunales.'
                    },
                    {
                        id: 'work-social-security',
                        title: 'Seguridad Social y Pensiones',
                        description: 'Atención de requerimientos, controversias sobre cotizaciones y reclamaciones pensionales ante entidades estatales.'
                    },
                    {
                        id: 'work-ugpp',
                        title: 'Atención de Requerimientos y Fiscalización',
                        description: 'Defensa técnica frente a auditorías, pliegos de cargos y procesos sancionatorios de autoridades de control.'
                    }
                ]
            },
            {
                id: 'state',
                title: 'Derecho Administrativo y Público',
                description: 'Defensa ante entidades del Estado, contratación pública y atención a requerimientos regulatorios.',
                image: IMAGES.specialties.state,
                icon: PiFile,
                subcategories: [
                    {
                        id: 'state-procurement',
                        title: 'Contratación Estatal y Licitaciones',
                        description: 'Acompañamiento en pliegos de condiciones, estructuración de ofertas y recursos en licitaciones públicas.'
                    },
                    {
                        id: 'state-sanctioning',
                        title: 'Sancionatorio Administrativo y Disciplinario',
                        description: 'Defensa técnica frente a investigaciones de superintendencias, ministerios y organismos de control.'
                    },
                    {
                        id: 'state-litigation',
                        title: 'Medios de Control y Litigio Contencioso',
                        description: 'Demandas de nulidad y restablecimiento del derecho, reparación directa y controversias contractuales.'
                    },
                    {
                        id: 'state-regulations',
                        title: 'Trámites Regulatorios y Permisos',
                        description: 'Gestión de licencias, recursos de reposición y apelación ante decisiones administrativas.'
                    }
                ]
            },
            {
                id: 'crimes',
                title: 'Derecho Litigioso y Mecanismos Alternativos',
                description: 'Representación judicial y arbitral con seguimiento en tiempo real y control estricto de términos legales.',
                image: IMAGES.specialties.legal,
                icon: PiGavel,
                subcategories: [
                    {
                        id: 'lit-judicial',
                        title: 'Litigio Judicial Complejo',
                        description: 'Representación en procesos judiciales civiles, comerciales y administrativos con motor de vigilancia de vencimientos.'
                    },
                    {
                        id: 'lit-arbitration',
                        title: 'Arbitraje Comercial y Conciliaciones',
                        description: 'Defensa ante tribunales arbitrales y conducción de audiencias de conciliación para resolución de conflictos.'
                    },
                    {
                        id: 'lit-constitutional',
                        title: 'Acciones Constitucionales y de Tutela',
                        description: 'Protección inmediata de derechos fundamentales mediante tutelas, acciones populares y de grupo.'
                    },
                    {
                        id: 'lit-appeals',
                        title: 'Recursos Extraordinarios y Apelaciones',
                        description: 'Sustentación técnica de recursos de apelación, anulación y casación ante altas cortes.'
                    }
                ]
            },
            {
                id: 'family',
                title: 'Derecho de Familia y Sucesiones',
                description: 'Planeación sucesorial, acuerdos de familia y resolución de conflictos patrimoniales con estricta confidencialidad.',
                image: IMAGES.specialties.family,
                icon: PiShieldCheckBold,
                subcategories: [
                    {
                        id: 'fam-successions',
                        title: 'Sucesiones y Liquidación Patrimonial',
                        description: 'Trámite de juicios sucesorales notariales o judiciales, adjudicación de bienes y partición de herencias.'
                    },
                    {
                        id: 'fam-protocols',
                        title: 'Protocolos de Familia y Acuerdos',
                        description: 'Estructuración de convenios patrimoniales para empresas familiares y separación de bienes.'
                    },
                    {
                        id: 'fam-marital',
                        title: 'Procesos de Divorcio y Sociedad Conyugal',
                        description: 'Disolución y liquidación de sociedad conyugal o patrimonial por vía de mutuo acuerdo o contenciosa.'
                    },
                    {
                        id: 'fam-protection',
                        title: 'Protección de Personas e Incapacidades',
                        description: 'Adopción de medidas de apoyo formal, curadurías y salvaguarda de derechos patrimoniales.'
                    }
                ]
            }
        ]  
    }
};