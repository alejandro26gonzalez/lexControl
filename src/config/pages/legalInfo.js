import { BiCheckShield } from "react-icons/bi";
import IMAGES from "../../assets/images/images";
import { FcLock, FcDocument, FcBusinessman, FcApproval } from "react-icons/fc";

export const legalInfoConfig = {
    features: [
        {
            id: 1,
            icon: FcApproval,
            title: "Uso responsable",
            text: "Un entorno seguro."
        },
        {
            id: 2,
            icon: FcDocument,
            title: "Información clara",
            text: "Condiciones accesibles y transparentes."
        },
        {
            id: 3,
            icon: FcBusinessman,
            title: "Tu confianza",
            text: "Nuestra mayor prioridad."
        },
        {
            id: 4,
            icon: FcLock,
            title: "Compromiso legal",
            text: "En cumplimiento de la normativa vigente."
        }
    ],
    hero: {
        type: "standard",
        variandt: "dark",
        background: IMAGES.resources.hero,
        eyebrow: "LEGAL",
        title: "Términos y Condiciones de Uso",
        description: "Conoce las condiciones que regulan el uso de nuestra plataforma y la relación entre LexControl y sus usuarios."
    },
    sections: [
        {
            id: "terms",
            title: "Términos y Condiciones",
            shortTitle: "Términos y Condiciones",
            updatedAt: "10 de septiembre de 2025",

            intro:
                "Los presentes Términos y Condiciones regulan el acceso y uso de la plataforma digital y portal web de LEXCONTROL, estableciendo los derechos y obligaciones de la firma y de sus usuarios.",
            
            content: [
                {
                    number: "1",
                    eyebrow: "SECCIÓN 1",
                    title: "Identificación y Aceptación",
                    paragraphs: [
                        "Los presentes Términos y Condiciones regulan el acceso y uso de la plataforma digital y portal web de LEXCONTROL (en adelante \"La Plataforma\"), de propiedad de la firma de abogados LEXCONTROL S.A.S.",
                        "El acceso, navegación o uso del portal del cliente y sistemas asociados atribuye la condición de Usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones aquí incluidas."
                    ]
                },

                {
                    number: "2",
                    eyebrow: "SECCIÓN 2",
                    title: "Alcance Operativo y Delimitación del Servicio",

                    paragraphs: [
                        "La Plataforma está destinada de manera exclusiva a la gestión, consulta y operación de información jurídica referente a procesos legalmente encomendados a LEXCONTROL por personas naturales, empresas o departamentos jurídicos corporativos.",
                    ],

                    highlights: [
                        {
                            icon: BiCheckShield,
                            title: "Exclusión de Áreas Administrativas/Financieras",
                            text:
                                "La Plataforma no gestiona nómina, facturación, contabilidad general ni operaciones administrativas financieras ajenas al seguimiento del proceso legal."
                        },
                        {
                            icon: BiCheckShield,
                            title: "Verificación de Conflictos de Interés",
                            text:
                                "LEXCONTROL aplica controles automatizados y manuales de comprobación de no conflicto de intereses antes de la apertura de cualquier expediente."
                        }
                    ]
                },

                {
                    number: "3",
                    eyebrow: "SECCIÓN 3",
                    title: "Cuentas de Usuario y Seguridad de Credenciales",

                    paragraphs: [
                        "El acceso a las funciones avanzadas y al Portal del Cliente está restringido a usuarios registrados con un caso o asunto activo."
                    ],

                    list: [
                        "El Usuario es el único responsable de la custodia, confidencialidad y uso de sus credenciales de acceso (correo electrónico y contraseña).",
                        "Toda actuación realizada a través de las credenciales del Usuario se presumirá efectuada por este.",
                        "En caso de sospecha de vulneración, el Usuario deberá notificar inmediatamente al administrador de la Plataforma."
                    ]
                },

                {
                    number: "4",
                    eyebrow: "SECCIÓN 4",
                    title: "Propiedad Intelectual y Secreto Profesional",

                    paragraphs: [
                        "Todos los derechos de propiedad intelectual sobre los desarrollos de software, marcas, interfaces, código fuente y diseños de LEXCONTROL pertenecen exclusivamente a la firma. La información contenida en las piezas procesales, actuaciones y documentos cargados en el expediente digital está amparada bajo el secreto profesional y la reserva legal del abogado, de conformidad con las leyes vigentes."
                    ]
                },

                {
                    number: "5",
                    eyebrow: "SECCIÓN 5",
                    title: "Limitación de Responsabilidad Operativa",

                    paragraphs: [
                        "LEXCONTROL realiza esfuerzos razonables de vigilancia sobre los términos procesales y notificaciones judiciales; sin embargo, no responderá por fallas, caídas o interrupciones en los servicios de portales gubernamentales, plataformas de la Rama Judicial o entes administrativos ajenos a nuestro control directo. "
                    ]
                }
            ]
        },

        {
            id: "privacy",
            title: "Política de Privacidad",
            shortTitle: "Política de Privacidad",
            updatedAt: "10 de septiembre de 2025",

            intro:
                "Esta política establece los lineamientos aplicables a la recopilación, uso, almacenamiento y protección de la información de los usuarios.",

            content: [
                {
                    number: "1",
                    eyebrow: "SECCIÓN 1",
                    title: "Información recopilada",
                    paragraphs: [
                        "LEXCONTROL recolecta únicamente la información estrictamente necesaria para la prestación de sus servicios jurídicos y la operatividad técnica de La Plataforma: "
                    ],
                    list: [
                        "Datos Identificativos y de Contacto: Nombres, apellidos, número de identificación (cédula, pasaporte, NIT), dirección de correo electrónico, teléfono y dirección física. ",
                        "Datos de Expedientes: Piezas procesales, decisiones del juzgado, documentos de soporte y estados del caso autorizados para visualización. ",
                        "Datos Técnicos de Navegación: Direcciones IP, registros de acceso (logs), sistema operativo y datos de cookies necesarias para la sesión. "
                    ]
                },

                {
                    number: "2",
                    eyebrow: "SECCIÓN 2",
                    title: "Finalidad del Tratamiento de Información",
                    paragraphs: [
                        "La información recopilada será utilizada exclusivamente para las finalidades informadas al usuario y aquellas necesarias para la prestación del servicio."
                    ],
                    list: [
                        "Gestionar el registro y la autenticación del usuario en La Plataforma. ",
                        "Proveer seguimiento en tiempo real de actuaciones judiciales y términos legales. ",
                        "Notificar de manera inmediata sobre cambios de estado, citaciones o requerimientos documentales pendientes. ",
                        "Validar la ausencia de conflictos de interés previa a la aceptación de un expediente.",
                        "Cumplir con obligaciones legales, requerimientos judiciales y de fiscalización. "
                    ]
                },
                {
                    number: "3",
                    eyebrow: "Sección 3",
                    title: "Seguridad de la Información y Almacenamiento",
                    paragraphs: [
                        "LEXCONTROL implementa medidas de seguridad técnicas, administrativas y físicas que incluyen:"
                    ],
                    list: [
                        "Encriptación de Datos: Uso de protocolos SSL/TLS para el tránsito seguro de información.",
                        "Control de Accesos Basado en Roles (RBAC): Restricción de visibilidad de documentos confidenciales únicamente a las partes y abogados asignados. ",
                        "Conservación e Historial Protegido: En caso de que la cuenta de un cliente sea desactivada o el proceso finalice, la información procesal y los documentos asociados permanecerán en un historial protegido para posterior consulta o solicitud expresa por el titular, garantizando la trazabilidad histórica. "
                    ]
                },
                {
                    number: "4",
                    eyebrow: "SECCIÓN 4",
                    title: "Transferencia a Terceros",
                    paragraphs:[
                        "LEXCONTROL no comercializará ni transferirá datos a terceros no autorizados. Solo transmitirá información a proveedores de infraestructura de almacenamiento en la nube (servidores seguros) con los que mantenga acuerdos de confidencialidad y a las autoridades judiciales u organismos del Estado en cumplimiento de mandatos legales. "
                    ]
                }
            ]
        },

        {
            id: "data",
            title: "Política y autorización de tratamiento de datos personales (HABEAS DATA)",
            shortTitle: "Tratamiento de Datos",
            updatedAt: "10 de septiembre de 2025",

            intro:
                "LEXCONTROL establece los lineamientos para el tratamiento responsable de los datos personales de sus usuarios.",

            content: [
                {
                    number: "1",
                    eyebrow: "SECCIÓN 1",
                    title: "Identificación del Responsable del Tratamiento",
                    paragraphs: [
                        "LEXCONTROL será responsable del tratamiento de los datos personales de acuerdo con las finalidades informadas y la normativa aplicable."
                    ],
                    list: [
                        "Razón Social: LEXCONTROL S.A.S.",
                        "NIT: 123456789",
                        "Domicilio Principal: Carrera 11 #15 - 25 Chapinero - Bogotá D.C.0",
                        "Correo de Contacto de Protección de Datos: protecciondedatos@lexcontrol.com",
                        "Sitio Web: (https://www.lexcontrol.com)"
                    ]
                },

                {
                    number: "2",
                    eyebrow: "SECCIÓN 2",
                    title: "Tratamiento de Datos Sensibles",
                    paragraphs: [
                        "LEXCONTROL, en el ejercicio de su función letrada, podrá solicitar o recibir datos de carácter sensible (información de salud, procesos de familia, antecedentes judiciales, etc.) o datos de niños, niñas y adolescentes exclusivamente cuando sea necesario para la defensa o representación legal en un proceso determinado. El titular otorgará su consentimiento explícito para dicho tratamiento, el cual será gestionado con rigurosa confidencialidad y bajo reserva profesional. "
                    ]
                },

                {
                    number: "3",
                    eyebrow: "SECCIÓN 3",
                    title: "Derechos de los titulares",
                    paragraphs: [
                        "De conformidad con las leyes de protección de datos personales, los usuarios/titulares de los datos tienen derecho a:"
                    ],
                    list: [
                        "Conocer, actualizar y rectificar sus datos personales frente a LEXCONTROL. ",
                        "Solicitar prueba de la autorización otorgada para el tratamiento.",
                        "Ser informados sobre el uso que se le ha dado a sus datos personales.",
                        "Revocar la autorización o solicitar la supresión de sus datos cuando no exista un deber legal o contractual de permanecer en la base de datos (se exceptúan los expedientes sometidos a conservación legal de litigios en curso). ",
                        "Acceder gratuitamente a sus datos personales objeto de tratamiento."
                    ]
                },

                {
                    number: "4",
                    eyebrow: "SECCIÓN 4",
                    title: "Procedimiento para la Atención de Consultas, Peticiones y Reclamos",
                    paragraphs: [
                        "Para ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), el Titular deberá enviar un correo electrónico formal a protecciondedatos@lexcontrol.com adjuntando:"
                    ],
                    list: [
                        "Nombre completo, copia del documento de identidad y calidad en la que actúa.",
                        "Descripción clara y precisa de los hechos que dan lugar a la consulta o reclamo.",
                        "Documentos soporte que desee hacer valer.",
                        "💡 Tiempos de Respuesta: Las Consultas serán atendidas en un término máximo de diez (10) días hábiles contados a partir de su recepción. Los Reclamos serán resueltos en un término máximo de quince (15) días hábiles."
                    ],
                }
            ]

        }
    ]

}