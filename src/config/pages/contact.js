import IMAGES from "../../assets/images/images";
import { FaComment } from "react-icons/fa";
import { PiUser, PiShieldBold, PiClock, PiTrophy } from "react-icons/pi";
import {
    FiClock,
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiPhone,
    FiYoutube,
} from 'react-icons/fi';

export const contactConfig = {
    hero:{
        type: "quote",
        variant: "dark",
        background: IMAGES.contact.hero,
        eyebrow: "CONTACTO",
        title: "Hablemos de tu caso.",
        description: "Estamos aquí para escucharte y ofrecerte la mejor orientación legal. Completa el formulario o contáctanos por nuestros canales de atención.",
        actions: [],
        quote: "Tu tranquilidad también es nuestro caso."
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
    location: {
        image: IMAGES.contact.office,
        eyebrow: "VISÍTANOS",
        title: "Nuestra oficina",
        description: "Te recibimos en nuestras instalaciones para una atención personalizada. Agenda tu cita y conversemos cobre cómo podemos ayudarte",
        action:{
            label: "Agendar una cita",
            path: "/login",
            variant: "textArrow"
        },
        mapDetails: {
            address: "Ac 63 #59A - 06, Chapinero, Bogotá, Colombia",
            latitude: 4.645817780312798,
            longitude: -74.06209793379365,
            mapsUrl: "www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7507.0222158630395!2d-74.0679207702955!3d4.646342636947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a388bf0c3a5%3A0x581ee2531e5cd0a3!2sParque%20de%20los%20Hippies!5e0!3m2!1ses-419!2sco!4v1788834502240!5m2!1ses-419!2sco"
        },
        features: [
            {
                id: 'personalized-attention',
                icon: PiUser,
                title: 'Atención personalizada',
                description: 'Escuchamos tus necesidades.',
            },
            {
                id: 'confidentiality',
                icon: PiShieldBold ,
                title: 'Confidencialidad',
                description: 'Tu información está segura.',
            },
            {
                id: 'timely-response',
                icon: PiClock ,
                title: 'Respuesta oportuna',
                description: 'Nos comprometemos con tu tiempo.',
            },
            {
                id: 'commitment',
                icon: PiTrophy ,
                title: 'Compromiso',
                description: 'Tu tranquilidad es nuestra prioridad.',
            },
        ]
    },
    form: {
        eyebrow: 'CONTÁCTANOS',

        title: 'Envíanos un mensaje',

        description:
            'Cuéntanos brevemente tu consulta y nuestro equipo se pondrá en contacto contigo lo antes posible.',

        fields: {
            name: {
                label: 'Nombre completo',
                placeholder: 'Tu nombre',
            },

            email: {
                label: 'Correo electrónico',
                placeholder: 'tu@correo.com',
            },

            phone: {
                label: 'Teléfono',
                placeholder: 'Tu número de contacto',
            },

            consultationType: {
                label: 'Tipo de consulta',
                placeholder: 'Selecciona una opción',
            },

            message: {
                label: 'Mensaje',
                placeholder:
                    'Escribe aquí los detalles de tu consulta...',
                maxLength: 500,
            },
        },

        consultationTypes: [
            'Consulta general',
            'Derecho Corporativo y Empresarial',
            'Derecho Administrativo y Público',
            'Derecho Laboral',
            'Derecho Civil y Comercial',
            'Contratación Estatal',
            'Otro',
        ],

        action: {
            label: 'Enviar mensaje',
            variant: 'primary',
        },

        privacy: {
            text: 'Al enviar este formulario aceptas nuestra',
            label: 'política de privacidad',
            path: '/privacy',
        },
    },
    channels: {
        eyebrow: 'ATENCIÓN',

        title: 'Nuestros canales de atención',

        description:
            'También puedes comunicarte con nosotros a través de los siguientes medios:',

        items: [
            {
                id: 'phone',
                icon: FiPhone,
                title: 'Teléfono',
                value: '+57 300 123 4567',
                description: 'Lunes a viernes de 8:00 a.m. a 6:00 p.m.',
                href: 'tel:+573001234567',
            },
            {
                id: 'email',
                icon: FiMail,
                title: 'Correo electrónico',
                value: 'contacto@lexcontrol.com',
                description:
                    'Te responderemos en un plazo máximo de 24 horas.',
                href: 'mailto:contacto@lexcontrol.com',
            },
            {
                id: 'address',
                icon: FiMapPin,
                title: 'Dirección',
                value: 'Cra. 15 #93-60, Oficina 401',
                description: 'Bogotá, Colombia',
                href: 'https://maps.google.com/',
            },
            {
                id: 'schedule',
                icon: FiClock,
                title: 'Horario de atención',
                value: 'Lunes a viernes: 8:00 a.m. – 6:00 p.m.',
                description:
                    'Sábados: 9:00 a.m. – 12:00 p.m.\n(Domicilio con cita previa)',
            },
        ],

        socialTitle: 'Síguenos en nuestras redes',

        social: [
            {
                id: 'linkedin',
                icon: FiLinkedin,
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/',
            },
            {
                id: 'instagram',
                icon: FiInstagram,
                label: 'Instagram',
                href: 'https://www.instagram.com/',
            },
            {
                id: 'youtube',
                icon: FiYoutube,
                label: 'YouTube',
                href: 'https://www.youtube.com/',
            },
        ],
    },
};