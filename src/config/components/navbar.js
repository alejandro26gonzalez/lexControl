import IMAGES from "../../assets/images/images";

export const navbarConfig = {
    logo: IMAGES.logoWhite,
    company: "LexControl",
    links: [
        {
            id: "home",
            label: "Home",
            path: "/"
        },
        {
            id: "about",
            label: "Nosotros",
            path: "/about"
        },
        {
            id: "practices",
            label: "Áreas de practica",
            path: "/specialties"
        },
        {
            id: "team",
            label: "Nuestro equipo",
            path: "/team"
        },
        {
            id: "resources",
            label: "Recursos",
            path: "/resources"
        },
        {
            id: "contact",
            label: "Contacto",
            path: "/contact"
        }
    ],
    login: {
        label: "Iniciar sesión",
        path: "/portal/login"
    }
}