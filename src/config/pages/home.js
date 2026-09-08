import IMAGES from "../../assets/images/images";
import { FaRegMessage } from "react-icons/fa6";
import { PiGavel, PiBuilding, PiFile, PiShieldCheck, PiClockAfternoon, PiCalendarCheck} from "react-icons/pi";
import { IoPeopleOutline as FaUsers, IoBriefcaseOutline as FaBriefcase} from "react-icons/io5";

export const homeConfig = {
    hero: {
        type: "standard",
        variant: "dark",
        background: IMAGES.home.hero,
        eyebrow: "ESTRATEGIA LEGAL • RESULTADOS REALES",
        title: "Más que abogados, somos control en cada paso.",
        description: "En LexControl acompañamos a personas y empresas en la prevención y solución de sus desafíos legales, con un enfoque estratégico, organizado y transparente.",
        actions: [
            {
                label: 'Agenda una consulta',
                path: '/contact',
                variant: 'primary',
            },
            {
                label: 'Inicia sesión si ya estás registrado',
                path: '/portal/login',
                variant: 'secondary',
            },
        ]
    },
    specialties: {
        eyebrow: 'ÁREAS DE PRÁCTICA',

        title: 'Soluciones legales para cada etapa de tu vida o negocio.',

        description:
            'Contamos con un equipo especializado en diferentes áreas del derecho para ofrecerte un acompañamiento integral y estratégico.',

        action: {
            label: 'Ver todas las áreas',
            path: '/specialties',
        },

        areas: [
            {
                id: 'corporate',
                title: 'Derecho corporativo',
                description:
                    'Centraliza la información de tus clientes y contactos en un solo lugar.',
                icon: PiBuilding,
            },
            {
                id: 'civil',
                title: 'Derecho civil',
                description:
                    'Protegemos tus intereses en contratos, responsabilidad y más.',
                icon: FaUsers,
            },
            {
                id: 'labor',
                title: 'Derecho laboral',
                description:
                    'Asesoría para empleadores y trabajadores.',
                icon: FaBriefcase,
            },
            {
                id: 'administrative',
                title: 'Derecho administrativo',
                description:
                    'Te representamos frente a entidades del Estado.',
                icon: PiFile,
            },
            {
                id: 'litigation',
                title: 'Derecho litigioso',
                description:
                    'Estrategia y representación en procesos judiciales.',
                icon: PiGavel,
            },
            {
                id: 'family',
                title: 'Derecho de familia',
                description:
                    'Acompañamiento en los momentos más importantes.',
                icon: PiShieldCheck,
            },
        ],
    },
    enfoque: {
        image: IMAGES.home.focus,
        imageAlt: "Espacio de trabajo jurídico",
        quote: "Disciplina legal para un mejor mañana.",
        eyebrow: "NUESTRO ENFOQUE",
        title: "Gestión legal con orden, estrategia y resultados.",
        description: "Aplicamos un modelo de trabajo respaldado por herramientas tecnológicas y procesos internos que garantizan un seguimiento riguroso de cada caso.",
        action: {
            label: "Conoce más de nosotros",
            path: "/about"
        },
        features: [
            {
                id: 'seguimiento',
                title: 'Seguimiento continuo',
                description:
                    'Te mantenemos informado en cada etapa.',
                icon: PiCalendarCheck,
            },
            {
                id: 'terminos',
                title: 'Control de términos',
                description:
                    'Nos anticipamos para proteger tus intereses.',
                icon: PiClockAfternoon,
            }
            ,
            {
                id: 'seguridad',
                title: 'Gestión documental segura',
                description:
                    'Tu información siempre protegida.',
                icon: PiFile,
            }
            ,
            {
                id: 'comunicacion',
                title: 'Comunicación clara',
                description:
                    'Hablamos en un lenguaje sencillo y directo.',
                icon: FaRegMessage,
            }
        ]
    },
    portal: {
        eyebrow: "TU PORTAL DEL CLIENTE",
        title: "Transparencia en cada paso",
        paragraphs: ["Consulta el estado de tus casos, revisa documentos, agenda tus citas y mantente informado desde nuestro portal de clientes."],
        action: {
            label: "Regístrate",
            path: "/portal/register",
            variant: "primary"
        },
        image: IMAGES.home.portal,
        imageAlt: 'Portal de clientes LexControl',
        imagePosition: 'left',
    },
    teamSection:{
        eyebrow: "CONFIANZA QUE RESPALDA",
        title: "Un equipo comprometido con tus objetivos.",
        paragraphs: ["Somos un equipo de abogados con experiencia, ética y vocación de servicio, enfocados en brindar soluciones jurídicas efectivas y duraderas."],
        action: {
            label: "Conoce nuestro equipo",
            path: "/team",
            variant: "textArrow"
        },
        image: IMAGES.home.team,
        imageAlt: 'Equipo jurídico de LexControl',

        imagePosition: 'right',
        badge: {
            text: 'La buena práctica del derecho no solo resuelve problemas, también genera confianza.',
            logo: 'LEXCONTROL',
        },
    },
    banner: {
        variant: 'dark',
        eyebrow: "HABLEMOS DE TU CASO",
        title: "Estamos listos para escucharte.",

        action: {
            label: "Agenda una consulta",
            path: "/contact",
            variant: "primary"
        }
    }
};