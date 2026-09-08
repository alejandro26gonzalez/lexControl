import IMAGES from "../../assets/images/images";
import { FaCheck } from "react-icons/fa6";
import { FiTarget, FiEye } from "react-icons/fi";
import { PiGavel, PiFile, PiBuildingApartment } from "react-icons/pi";
import { IoPeopleOutline, IoBriefcaseOutline } from "react-icons/io5";


export const aboutConfig = {
    hero:{
        type: "standard",
        variant: "dark",
        background: IMAGES.about.hero,
        eyebrow: "ACERCA DE NOSOTROS",
        title: "Elevamos la gestión jurídica a un nuevo estándar de claridad y precisión.",
        description: "En LexControl redefinimos la relación entre los clientes y el derecho. Combinamos un criterio legal de alto nivel con una plataforma tecnológica propia que elimina la incertidumbre de los procesos judiciales.",
        actions: [
            {
                label: "Explora el portal",
                path: "/login",
                variant: "primary",
            },
            {
                label: "Conoce nuestro equipo",
                path: "/team",
                variant: "secondary",
            }
        ]
    },
    diferencial: {
        image: IMAGES.about.books,
        eyebrow: "NUESTRO DIFERENCIAL",
        title: "El control total de tus procesos, al alcance de tu mano.",
        paragraphs: ["En LEXCONTROL no solo ofrecemos asesoría jurídica tradicional; transformamos la experiencia del cliente eliminando las barreras de comunicación y la falta de transparencia en los litigios. Unimos el criterio legal riguroso de nuestro equipo directivo con un ecosistema digital moderno que te otorga visibilidad completa sobre cada etapa procesal, tanto si eres una persona natural como un departamento corporativo."],
        features: [
            {
                id: 'transparency',
                label: 'Ecosistema Digital Transparente',
                icon: FaCheck,
            },
            {
                id: 'prevention',
                label: 'Garantía Preventiva de No Conflicto',
                icon: FaCheck,
            },
            {
                id: 'deadlines',
                label: 'Control Inteligente de Términos',
                icon: FaCheck,
            },
            {
                id: 'personalized',
                label: 'Acompañamiento Estratégico y Personalizado',
                icon: FaCheck,
            },
        ],
        imageAlt: 'Equipo jurídico de LexControl',
        imagePosition: 'right',
    },
    genesis: {
        eyebrow: 'GÉNESIS Y TRAYECTORIA',

        title: 'Del escritorio tradicional a la firma del futuro: Nuestra historia',

        paragraphs: [
            'LEXCONTROL no nació como una firma tradicional de abogados, sino como una respuesta directa a la opacidad histórica del sector jurídico. Fundada con la firme convicción de que la defensa técnica de alto nivel debe ir de la mano con la transparencia absoluta, transformamos la relación entre el cliente y el litigio. Desde nuestros inicios, integramos la experiencia legal de nuestro equipo directivo con una infraestructura tecnológica propia, posicionándonos en el mercado como el aliado estratégico pionero para personas naturales y departamentos corporativos que exigen control total sobre sus expedientes',

            'A lo largo de nuestra trayectoria, la excelencia operativa nos ha permitido respaldar más de 1,200 procesos judiciales y corporativos con un 94% de efectividad en la protección de activos e intereses. Hemos reducido en un 65% los tiempos de respuesta y consulta documental mediante nuestro portal transparente en tiempo real, garantizando cero hallazgos por conflictos de interés y una gestión con 100% de cumplimiento en términos procesales críticos. En LEXCONTROL, los resultados no son solo números: son la tranquilidad de nuestros clientes respaldada por rigor, ética y precisión',
        ],

        action: {
            label: 'Conoce nuestro equipo',
            path: '/team',
            variant: 'primary',
        },

        image: IMAGES.about.office,
        imageAlt: 'Oficinas de LexControl',

        imagePosition: 'right',
    },
    quoteBanner: {
        variant: 'dark',
        quote: 'Creemos en un ejercicio del derecho que combina estrategia y humanidad.',

        logo: IMAGES.about.quoteText,
        logoAlt: 'LexControl'
    },
    contactBanner:{
        variant: 'light',

        eyebrow: "HABLEMOS",
        title: "Conversemos sobre tu caso.",

        description: "Estamos aquí para escucharte y brindarte la orientación que necesitas.",

        action: {
            label: "Solicita una cita",
            path: "/contact",
            variant: "primary"
        }
    },
    misionVision: {
        variant: 'light',

        mission: {
            icon: FiTarget,
            eyebrow: 'NUESTRA MISIÓN',
            paragraphs: [
                'Transformar la gestión de servicios jurídicos mediante el equilibrio entre el rigor del derecho tradicional y la eficiencia tecnológica.',
                'Nos comprometemos a proteger los intereses de nuestras personas y clientes corporativos ofreciendo trazabilidad en tiempo real, transparencia operativa absoluta y una defensa estratégica de alto nivel, fundamentada en la ética, la confidencialidad y la ausencia de conflictos de interés.',
            ],
        },

        vision: {
            icon: FiEye,
            eyebrow: 'NUESTRA VISIÓN',
            paragraphs: [
                'Consolidarnos como la firma de abogados líder en innovación y transparencia operativa en el país, transformando la experiencia legal de nuestros clientes mediante la integración de criterios jurídicos de excelencia con una infraestructura digital intuitiva y moderna.',
            ],
        },
    },
    pillars: {
        eyebrow: "PRINCIPIOS Y VALORES INSTITUCIONALES",
        title: "Nuestros pilares de Actuación",
        pillars: [
            {
                icon: PiGavel,
                title: "Compromiso",
                description: "Asumimos cada caso como propio. Alineamos la estrategia jurídica con las prioridades de nuestros clientes, brindando un acompañamiento continuo desde la primera consulta hasta la resolución final del proceso."
            },
            {
                icon: IoPeopleOutline,
                title: "Confianza",
                description: "Eliminamos la incertidumbre procesal. A través de nuestra infraestructura digital, otorgamos visibilidad inmediata sobre cada actuación, auto judicial y vencimiento, construyendo relaciones basadas en la claridad y la verdad procesal."
            },
            {
                icon: IoBriefcaseOutline,
                title: "Excelencia",
                description: "La precisión es nuestra norma. Combinamos el criterio jurídico de nuestro equipo directivo con herramientas tecnológicas para la vigilancia estricta de términos legales, reduciendo márgenes de error y garantizando el cumplimiento en cada etapa."
            },
            {
                icon: PiFile,
                title: "Innovación",
                description: "Digitalizamos la gestión legal sin perder el toque humano. Desarrollamos flujos de trabajo eficientes que optimizan los tiempos de respuesta y facilitan la consulta de información tanto para personas naturales como para clientes corporativos."
            },
            {
                icon: PiBuildingApartment,
                title: "Ética",
                description: "Protegemos la confidencialidad de cada expediente bajo esquemas de seguridad técnica y aislamiento estricto de datos. Nuestra actuación preventiva garantiza la ausencia absoluta de conflictos de interés antes de asumir cualquier representación."
            }
        ]
    }
};