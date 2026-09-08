import IMAGES from "../../assets/images/images";

export const resourcesConfig = {
    hero: {
        type: "standard",
        variant: "dark",
        background: IMAGES.resources.hero,
        eyebrow: "RECURSOS",
        title: "Conocimiento legal para tomar mejores decisiones.",
        description: "Artículos, guías y novedades jurídicas en un solo lugar. Información confiable, actualizada y pensada para ti.",
        actions: []
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
