
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
    X,
    UserRound,
    Mail,
    CreditCard,
    ShieldCheck,
    ChevronDown,
    Save,
    Info,
} from "lucide-react";

import { updateUser } from "../../../../modules/admin/users/users.service";

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
    ErrorMessage,
} from "../../../../styles/components/modules/admin/editUserModal.styles";

const EDITABLE_FIELDS = [
    "email",
    "identification_type",
    "identification_number",
    "name",
    "last_name",
    "phone",
    "city",
    "position",
    "specialty",
    "professional_card",
    "role",
];

function getInitialForm(user) {
    return {
        email: user.email ?? "",
        identification_type: user.identification_type ?? "CC",
        identification_number: user.identification_number ?? "",
        name: user.name ?? "",
        last_name: user.last_name ?? "",
        phone: user.phone ?? "",
        city: user.city ?? "",
        position: user.position ?? "",
        specialty: user.specialty ?? "",
        professional_card: user.professional_card ?? "",
        role: user.role ?? (
            Array.isArray(user.roles)
                ? user.roles[0]?.name ?? user.roles[0] ?? "CLIENT"
                : "CLIENT"
        ),
    };
}

function EditUserModal({ user, onClose, onSuccess }) {
    const [formData, setFormData] = useState(() => getInitialForm(user));
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape" && !isSubmitting) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [onClose, isSubmitting]);

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

        const payload = {};

        EDITABLE_FIELDS.forEach((field) => {
            const originalValue = formData[field];
            const initialValue = getInitialForm(user)[field];

            const normalizedValue =
                typeof originalValue === "string"
                    ? originalValue.trim()
                    : originalValue;

            if (normalizedValue !== initialValue) {
                payload[field] =
                    normalizedValue === "" &&
                    ["last_name", "phone", "city", "position",
                     "specialty", "professional_card"].includes(field)
                        ? null
                        : normalizedValue;
            }
        });

        if (Object.keys(payload).length === 0) {
            setFormError("No se detectaron cambios para guardar.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await updateUser(user.id, payload);

            if (response.code === "USER_UPDATED") {
                onSuccess(response);
                return;
            }

            setFormError("No fue posible actualizar el usuario.");

        } catch (error) {
            const response = error.data;

            if (response?.errors && typeof response.errors === "object") {
                setFieldErrors(response.errors);
            } else {
                setFormError(
                    response?.error ||
                    response?.message ||
                    error.message ||
                    "Ocurrió un error al actualizar el usuario."
                );
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const modal = (
        <ModalOverlay
            onMouseDown={(event) => {
                if (
                    event.target === event.currentTarget &&
                    !isSubmitting
                ) {
                    onClose();
                }
            }}
        >
            <ModalContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby="edit-user-title"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <ModalHeader>
                    <HeaderIcon>
                        <UserRound size={22} />
                    </HeaderIcon>

                    <HeaderText>
                        <ModalTitle id="edit-user-title">
                            Editar usuario
                        </ModalTitle>

                        <ModalDescription>
                            Modifica la información y los permisos del usuario.
                        </ModalDescription>
                    </HeaderText>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        disabled={isSubmitting}
                        aria-label="Cerrar modal"
                    >
                        <X size={20} />
                    </CloseButton>
                </ModalHeader>

                <ModalBody>
                    <form id="edit-user-form" onSubmit={handleSubmit}>
                        {formError && (
                            <ErrorMessage>
                                <Info size={17} />
                                <span>{formError}</span>
                            </ErrorMessage>
                        )}

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
                                    >
                                        <option value="CC">Cédula de ciudadanía</option>
                                        <option value="CE">Cédula de extranjería</option>
                                        <option value="NIT">NIT</option>
                                        <option value="PASSPORT">Pasaporte</option>
                                    </FieldSelect>
                                    <ChevronDown size={16} />
                                </SelectWrapper>

                                {fieldErrors.identification_type && (
                                    <FieldHint>{fieldErrors.identification_type}</FieldHint>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="identification_number">
                                    Número de identificación
                                </FieldLabel>

                                <FieldInput
                                    id="identification_number"
                                    name="identification_number"
                                    value={formData.identification_number}
                                    onChange={handleChange}
                                    maxLength={50}
                                />

                                {fieldErrors.identification_number && (
                                    <FieldHint>{fieldErrors.identification_number}</FieldHint>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="name">Nombres</FieldLabel>

                                <FieldInput
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    maxLength={150}
                                    required
                                />

                                {fieldErrors.name && (
                                    <FieldHint>{fieldErrors.name}</FieldHint>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="last_name">Apellidos</FieldLabel>

                                <FieldInput
                                    id="last_name"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    maxLength={150}
                                />

                                {fieldErrors.last_name && (
                                    <FieldHint>{fieldErrors.last_name}</FieldHint>
                                )}
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
                                        maxLength={120}
                                        required
                                    />
                                </InputWrapper>

                                {fieldErrors.email && (
                                    <FieldHint>{fieldErrors.email}</FieldHint>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="phone">Teléfono</FieldLabel>

                                <FieldInput
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    maxLength={50}
                                />

                                {fieldErrors.phone && (
                                    <FieldHint>{fieldErrors.phone}</FieldHint>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="city">Ciudad</FieldLabel>

                                <FieldInput
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    maxLength={100}
                                />

                                {fieldErrors.city && (
                                    <FieldHint>{fieldErrors.city}</FieldHint>
                                )}
                            </FormGroup>
                        </FormGrid>

                        <SectionDivider />

                        <SectionHeading>
                            Información profesional
                        </SectionHeading>

                        <FormGrid>
                            <FormGroup>
                                <FieldLabel htmlFor="position">Cargo</FieldLabel>

                                <FieldInput
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    maxLength={150}
                                />
                            </FormGroup>

                            <FormGroup>
                                <FieldLabel htmlFor="specialty">Especialidad</FieldLabel>

                                <FieldInput
                                    id="specialty"
                                    name="specialty"
                                    value={formData.specialty}
                                    onChange={handleChange}
                                    maxLength={150}
                                />
                            </FormGroup>

                            <FormGroup $fullWidth>
                                <FieldLabel htmlFor="professional_card">
                                    Tarjeta profesional
                                </FieldLabel>

                                <FieldInput
                                    id="professional_card"
                                    name="professional_card"
                                    value={formData.professional_card}
                                    onChange={handleChange}
                                    maxLength={100}
                                />
                            </FormGroup>
                        </FormGrid>

                        <SectionDivider />

                        <SectionHeading>
                            <ShieldCheck size={17} />
                            Configuración de acceso
                        </SectionHeading>

                        <FormGroup>
                            <FieldLabel htmlFor="role">Rol del usuario</FieldLabel>

                            <SelectWrapper>
                                <FieldSelect
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                >
                                    <option value="CLIENT">Cliente</option>
                                    <option value="COLLABORATOR">Colaborador</option>
                                    <option value="ADMIN">Administrador</option>
                                </FieldSelect>
                                <ChevronDown size={16} />
                            </SelectWrapper>

                            {fieldErrors.role && (
                                <FieldHint>{fieldErrors.role}</FieldHint>
                            )}
                        </FormGroup>

                        <RoleNotice>
                            <Info size={17} />
                            Los cambios de rol modifican los permisos y módulos
                            disponibles para este usuario.
                        </RoleNotice>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <CancelButton
                        type="button"
                        onClick={onClose}
                        disabled={isSubmitting}
                    >
                        Cancelar
                    </CancelButton>

                    <SubmitButton
                        type="submit"
                        form="edit-user-form"
                        disabled={isSubmitting}
                    >
                        <Save size={17} />
                        {isSubmitting ? "Guardando cambios..." : "Guardar cambios"}
                    </SubmitButton>
                </ModalFooter>
            </ModalContainer>
        </ModalOverlay>
    );

    return createPortal(modal, document.body);
}

export default EditUserModal;
