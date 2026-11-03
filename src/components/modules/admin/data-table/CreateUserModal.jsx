
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
    X,
    UserPlus,
    UserRound,
    Mail,
    CreditCard,
    ShieldCheck,
    ChevronDown,
    Info,
} from "lucide-react";

import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    HeaderIcon,
    HeaderText,
    ModalTitle,
    ModalDescription,
    CloseButton,
    ModalBody,
    FormGrid,
    FormGroup,
    FieldLabel,
    InputWrapper,
    FieldInput,
    FieldSelect,
    SelectWrapper,
    FieldHint,
    SectionHeading,
    SectionDivider,
    RoleNotice,
    ModalFooter,
    CancelButton,
    SubmitButton,
} from "../../../../styles/components/modules/admin/newUserModal.styles";

import { createUser } from "../../../../modules/admin/users/users.service";

const initialForm = {
    identification_type: "CC",
    identification_number: "",
    name: "",
    last_name: "",
    email: "",
    role: "CLIENT",
};

function CreateUserModal({ onClose, onSuccess }) {
    const [formData, setFormData] = useState(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setFieldErrors((previous) => ({
            ...previous,
            [name]: "",
        }));

        setFormError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);
        setFormError("");
        setFieldErrors({});

        try {
            const response = await createUser(formData);

            if (response.code === "USER_CREATED") {
                onSuccess(response);
                onClose();
                return;
            }

        } catch (error) {
            const response = error.data;

            if (response?.errors && typeof response.errors === "object") {
                setFieldErrors(response.errors);
            } else {
                setFormError(
                    response?.error ||
                    response?.message ||
                    error.message ||
                    "No fue posible crear el usuario."
                );
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    const modal = (
        <ModalOverlay onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
                onClose();
            }
        }}>
            <ModalContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby="create-user-title"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <ModalHeader>
                    <HeaderIcon>
                        <UserPlus size={22} />
                    </HeaderIcon>

                    <HeaderText>
                        <ModalTitle id="create-user-title">
                            Crear usuario
                        </ModalTitle>

                        <ModalDescription>
                            Registra un nuevo usuario y configura su acceso a LexControl.
                        </ModalDescription>
                    </HeaderText>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar modal"
                    >
                        <X size={20} />
                    </CloseButton>
                </ModalHeader>

                {formError && (
                    <RoleNotice>
                        <Info size={17}/>
                        <span>{formError}</span>
                    </RoleNotice>
                )}

                <ModalBody>
                    <form id="create-user-form" onSubmit={handleSubmit}>
                        <SectionHeading>
                            <UserRound size={17} />
                            Información personal
                        </SectionHeading>

                        <FormGrid>
                            <FormGroup>
                                <FieldLabel htmlFor="identification_type">
                                    Tipo de identificación
                                </FieldLabel>

                                <SelectWrapper>
                                    <FieldSelect
                                        id="identification_type"
                                        name="identification_type"
                                        value={formData.identification_type}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="CC">Cédula de ciudadanía</option>
                                        <option value="CE">Cédula de extranjería</option>
                                        <option value="NIT">NIT</option>
                                        <option value="PASSPORT">Pasaporte</option>
                                    </FieldSelect>
                                    <ChevronDown size={16} />
                                </SelectWrapper>
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="identification_number">
                                    Número de identificación
                                </FieldLabel>

                                <InputWrapper>
                                    <CreditCard size={17} />
                                    <FieldInput
                                        id="identification_number"
                                        name="identification_number"
                                        value={formData.identification_number}
                                        onChange={handleChange}
                                        placeholder="Ej. 1020304050"
                                        maxLength={50}
                                        required
                                    />
                                </InputWrapper>

                                {fieldErrors.email && (
                                    <FieldHint>{fieldErrors.email}</FieldHint>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="name">
                                    Nombres
                                </FieldLabel>

                                <FieldInput
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nombre del usuario"
                                    maxLength={100}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="last_name">
                                    Apellidos
                                </FieldLabel>

                                <FieldInput
                                    id="last_name"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    placeholder="Apellidos del usuario"
                                    maxLength={100}
                                    required
                                />
                            </FormGroup>

                            <FormGroup $fullWidth>
                                <FieldLabel htmlFor="email">
                                    Correo electrónico
                                </FieldLabel>

                                <InputWrapper>
                                    <Mail size={17} />
                                    <FieldInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="usuario@empresa.com"
                                        maxLength={120}
                                        required
                                    />
                                </InputWrapper>
                                {fieldErrors.email && (
                                    <FieldHint>{fieldErrors.email}</FieldHint>
                                )}
                            </FormGroup>
                        </FormGrid>

                        <SectionDivider />

                        <SectionHeading>
                            <ShieldCheck size={17} />
                            Configuración de acceso
                        </SectionHeading>

                        <FormGroup>
                            <FieldLabel htmlFor="role">
                                Rol del usuario
                            </FieldLabel>

                            <SelectWrapper>
                                <FieldSelect
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="CLIENT">Cliente</option>
                                    <option value="COLLABORATOR">Colaborador</option>
                                    <option value="ADMIN">Administrador</option>
                                </FieldSelect>
                                <ChevronDown size={16} />
                            </SelectWrapper>

                            <FieldHint>
                                El rol determina los módulos y permisos disponibles.
                            </FieldHint>
                        </FormGroup>

                        <RoleNotice>
                            <Info size={17} />
                            <span>
                                El usuario recibirá un correo electrónico para activar
                                su cuenta y establecer su contraseña. No tendrá acceso
                                hasta completar este proceso.
                            </span>
                        </RoleNotice>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <CancelButton
                        type="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </CancelButton>

                    <SubmitButton
                        type="submit"
                        form="create-user-form"
                        disabled={isSubmitting}
                    >
                        <UserPlus size={17} />
                        {isSubmitting ? "Creando usuario..." : "Crear usuario"}
                    </SubmitButton>
                </ModalFooter>
            </ModalContainer>
        </ModalOverlay>
    );

    return createPortal(modal, document.body);
}

export default CreateUserModal;
