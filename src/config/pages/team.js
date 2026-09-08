import IMAGES from "../../assets/images/images";

export const teamConfig = {
    hero:{
        type: "quote",
        variant: "dark",
        background: IMAGES.team.hero,
        eyebrow: "NUESTRO EQUIPO",
        title: "Respaldo profesional impulsado por infraestructura propia.",
        description: "Contamos con un equipo de profesionales comprometidos, con experiencia, ética y vocación de servicio, enfocados en brindar soluciones legales efectivas y personalizadas.",
        actions: [],
        quote: "La excelencia legal se construye con personas extraordinarias."
    },
    banner: {
        variant: 'dark',
        eyebrow: "TRABAJA CON NOSOTROS",
        title: "¿Te gustaría hacer parte de nuestro equipo?",

        action: {
            label: "Envíanos tu información",
            path: "/contact",
            variant: "primary"
        }
    },

    members: {
        eyebrow: "NUESTRO EQUIPO",
        title: "Profesionales que respaldan tus decisiones",
        searchPlaceholder: "Buscar por nombre, especialidad",
        filters: [
            'Todos',
            'Derecho Corporativo y Empresarial',
            'Derecho Civil y Contratos',
            'Derecho Laboral y Seguridad Social',
            'Derecho Administrativo y Público',
        ],
        action: {
            label: "Buscar",
            path: "/search",
            variant: "primary"
        },
        people: [
            {
                id: "1",
                name: "Andrés Rodríguez 1",
                role: "Socio Director",
                description: 
                "Más de 15 años de experiencia en derecho corporativo y estrategia legal para empresas.",
                image: IMAGES.team.person1,
                specialty: "Derecho Corporativo y Empresarial",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "2",
                name: "Laura Martínez 2",
                role: "Socia",
                description: 
                "Especialista en derecho civil y resolución de conflictos, con enfoque en soluciones prácticas y eficientes.",
                image: IMAGES.team.person2,
                specialty: "Derecho Civil y Contratos",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "3",
                name: "Daniel Herrera 3",
                role: "Abogado Senior",
                description: 
                "Experto en derecho laboral y asesoría a empresas, con amplia trayectoria en el sector energético.",
                image: IMAGES.team.person3,
                specialty: "Derecho Laboral y Seguridad Social",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "4",
                name: "Valentina Gómez 4",
                role: "Abogada Senior",
                description: 
                "Especialista en derecho de familia con enfoque humanizado y acompañamiento en cada etapa.",
                image: IMAGES.team.person4,
                specialty: "Derecho de Familia y Conciliaciones",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "5",
                name: "Alexandra Gutiérrez 5",
                role: "Abogada Senior",
                description: 
                "Especialista en derecho de familia con enfoque humanizado y acompañamiento en cada etapa.",
                image: IMAGES.team.person4,
                specialty: "Derecho de Familia y Conciliaciones",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "6",
                name: "Andrés Rodríguez 6",
                role: "Socio Director",
                description: 
                "Más de 15 años de experiencia en derecho corporativo y estrategia legal para empresas.",
                image: IMAGES.team.person1,
                specialty: "Derecho Corporativo y Empresarial",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "7",
                name: "Laura Martínez 7",
                role: "Socia",
                description: 
                "Especialista en derecho civil y resolución de conflictos, con enfoque en soluciones prácticas y eficientes.",
                image: IMAGES.team.person2,
                specialty: "Derecho Civil y Contratos",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "8",
                name: "Daniel Herrera 8",
                role: "Abogado Senior",
                description: 
                "Experto en derecho laboral y asesoría a empresas, con amplia trayectoria en el sector energético.",
                image: IMAGES.team.person3,
                specialty: "Derecho Laboral y Seguridad Social",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "9",
                name: "Valentina Gómez 9",
                role: "Abogada Senior",
                description: 
                "Especialista en derecho de familia con enfoque humanizado y acompañamiento en cada etapa.",
                image: IMAGES.team.person4,
                specialty: "Derecho de Familia y Conciliaciones",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "10",
                name: "Alexandra Gutiérrez 10",
                role: "Abogada Senior",
                description: 
                "Especialista en derecho de familia con enfoque humanizado y acompañamiento en cada etapa.",
                image: IMAGES.team.person4,
                specialty: "Derecho de Familia y Conciliaciones",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "11",
                name: "Andrés Rodríguez 11",
                role: "Socio Director",
                description: 
                "Más de 15 años de experiencia en derecho corporativo y estrategia legal para empresas.",
                image: IMAGES.team.person1,
                specialty: "Derecho Corporativo y Empresarial",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "12",
                name: "Laura Martínez 12",
                role: "Socia",
                description: 
                "Especialista en derecho civil y resolución de conflictos, con enfoque en soluciones prácticas y eficientes.",
                image: IMAGES.team.person2,
                specialty: "Derecho Civil y Contratos",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "13",
                name: "Daniel Herrera 13",
                role: "Abogado Senior",
                description: 
                "Experto en derecho laboral y asesoría a empresas, con amplia trayectoria en el sector energético.",
                image: IMAGES.team.person3,
                specialty: "Derecho Laboral y Seguridad Social",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "14",
                name: "Valentina Gómez 14",
                role: "Abogada Senior",
                description: 
                "Especialista en derecho de familia con enfoque humanizado y acompañamiento en cada etapa.",
                image: IMAGES.team.person4,
                specialty: "Derecho de Familia y Conciliaciones",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "15",
                name: "Alexandra Gutiérrez 15",
                role: "Abogada Senior",
                description: 
                "Especialista en derecho de familia con enfoque humanizado y acompañamiento en cada etapa.",
                image: IMAGES.team.person4,
                specialty: "Derecho de Familia y Conciliaciones",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "16",
                name: "Andrés Rodríguez 16",
                role: "Socio Director",
                description: 
                "Más de 15 años de experiencia en derecho corporativo y estrategia legal para empresas.",
                image: IMAGES.team.person1,
                specialty: "Derecho Corporativo y Empresarial",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "17",
                name: "Laura Martínez 17",
                role: "Socia",
                description: 
                "Especialista en derecho civil y resolución de conflictos, con enfoque en soluciones prácticas y eficientes.",
                image: IMAGES.team.person2,
                specialty: "Derecho Civil y Contratos",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "18",
                name: "Daniel Herrera 18",
                role: "Abogado Senior",
                description: 
                "Experto en derecho laboral y asesoría a empresas, con amplia trayectoria en el sector energético.",
                image: IMAGES.team.person3,
                specialty: "Derecho Laboral y Seguridad Social",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "19",
                name: "Valentina Gómez 19",
                role: "Abogada Senior",
                description: 
                "Especialista en derecho de familia con enfoque humanizado y acompañamiento en cada etapa.",
                image: IMAGES.team.person4,
                specialty: "Derecho de Familia y Conciliaciones",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            },
            {
                id: "20",
                name: "Alexandra Gutiérrez 20",
                role: "Abogada Senior",
                description: 
                "Especialista en derecho de familia con enfoque humanizado y acompañamiento en cada etapa.",
                image: IMAGES.team.person4,
                specialty: "Derecho de Familia y Conciliaciones",
                linkedin: "https://www.linkedin.com/",
                profile:
                    'Abogado con experiencia en asesoría jurídica empresarial y acompañamiento estratégico a organizaciones en la toma de decisiones de alto impacto.',
                experience:
                    'Más de 10 años de experiencia en asesoría jurídica empresarial, contratación y estructuración de negocios.',
                practiceAreas: [
                    'Derecho Corporativo',
                    'Contratación Empresarial',
                    'Gobierno Corporativo',
                    'Fusiones y Adquisiciones'
                ],
                education: [
                    {
                        id: 'andres-law',
                        degree: 'Abogado',
                        institution: 'Universidad EAN'
                    },
                    {
                        id: 'andres-specialization',
                        degree: 'Especialización en Derecho Empresarial',
                        institution: 'Universidad de los Andes'
                    }
                ]
            }
        ]
    }
};