import IMAGES from "../../assets/images/images";

export const footerConfig = {
    logos:{
        light: IMAGES.logoWhite,
        dark: IMAGES.logoBlack
    },
    company: "LexControl",
    links: [
        {
            id: 'home',
            label: 'Inicio',
            path: '/',
        },
        {
            id: 'about',
            label: 'Nosotros',
            path: '/about',
        },
        {
            id: 'specialties',
            label: 'Áreas de práctica',
            path: '/specialties',
        },
        {
            id: 'resources',
            label: 'Recursos',
            path: '/resources',
        },
        {
            id: 'contact',
            label: 'Contacto',
            path: '/contact',
        },
    ],
    social: {
        linkedin: '#',
        instagram: '#',
        email: 'contacto@lexcontrol.com',
    },
    message: "Tu tranquilidad también es nuestro caso.",
    copyright: '© 2026 LexControl Firma de abogados. Todos los derechos reservados.',
    legalLinks: [
        {
            id: 'legal',
            label: 'Aviso legal',
            path: '/aviso-legal',
        },
        {
            id: 'privacy',
            label: 'Política de privacidad',
            path: '/politica-privacidad',
        },
        {
            id: 'terms',
            label: 'Términos y condiciones',
            path: '/terminos-y-condiciones',
        },
    ],
}