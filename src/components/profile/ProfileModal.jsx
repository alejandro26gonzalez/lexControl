
import { useEffect, useState } from "react";
import {
    UserRound,
    SlidersHorizontal,
    ShieldCheck,
    X,
    Save,
    Eye,
    EyeOff,
    LockKeyhole,
    Bell,
    Monitor,
    Check
} from "lucide-react";

import {
    Overlay,
    ModalContainer,
    ModalHeader,
    HeaderInfo,
    HeaderIcon,
    HeaderTitle,
    CloseButton,
    ModalBody,
    Sidebar,
    TabButton,
    Content,
    SectionHeader,
    SectionTitle,
    SectionDescription,
    FormGrid,
    FormGroup,
    FormLabel,
    FormInput,
    FormSelect,
    ActionFooter,
    PrimaryButton,
    SecondaryButton,
    PreferenceCard,
    PreferenceInfo,
    PreferenceIcon,
    Toggle,
    PasswordWrapper,
    PasswordInput,
    PasswordToggle,
    Divider,
    RoleBadge
} from "../../styles/components/profile/profile.styles";

const tabs = [
    { id: "profile", label: "Mi perfil", icon: UserRound },
    { id: "preferences", label: "Preferencias", icon: SlidersHorizontal },
    { id: "security", label: "Seguridad", icon: ShieldCheck }
];

const ProfileModal = ({
    isOpen,
    onClose,
    user = {},
    onSaveProfile,
    onSavePreferences,
    onChangePassword
}) => {
    const profile = user?.profile || {};

    const [activeTab, setActiveTab] = useState("profile");
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const [profileData, setProfileData] = useState({
        name: profile.name || user.name || "",
        last_name: profile.last_name || user.last_name || "",
        email: user.email || "",
        phone: profile.phone || "",
        city: profile.city || "",
        position: profile.position || "",
        specialty: profile.specialty || "",
        professional_card: profile.professional_card || ""
    });

    const [preferences, setPreferences] = useState({
        notifications: true,
        emailNotifications: true,
        darkMode: false
    });

    const [passwordData, setPasswordData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: ""
    });

    useEffect(() => {
        if (isOpen) {
            setActiveTab("profile");
            setProfileData({
                name: profile.name || user.name || "",
                last_name: profile.last_name || user.last_name || "",
                email: user.email || "",
                phone: profile.phone || "",
                city: profile.city || "",
                position: profile.position || "",
                specialty: profile.specialty || "",
                professional_card: profile.professional_card || ""
            });
        }
    }, [isOpen, user]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") onClose?.();
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleProfileChange = (event) => {
        const { name, value } = event.target;

        setProfileData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handlePreferenceChange = (key) => {
        setPreferences((previous) => ({
            ...previous,
            [key]: !previous[key]
        }));
    };

    const handlePasswordChange = (event) => {
        const { name, value } = event.target;

        setPasswordData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSaveProfile = async (event) => {
        event.preventDefault();
        await onSaveProfile?.(profileData);
    };

    const handleSavePreferences = async () => {
        await onSavePreferences?.(preferences);
    };

    const handleChangePassword = async (event) => {
        event.preventDefault();

        if (passwordData.new_password !== passwordData.confirm_password) {
            return;
        }

        await onChangePassword?.(passwordData);

        setPasswordData({
            current_password: "",
            new_password: "",
            confirm_password: ""
        });
    };

    const roleLabel = {
        ADMIN: "Administrador",
        COLLABORATOR: "Colaborador",
        CLIENT: "Cliente"
    };

    return (
        <Overlay onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose?.();
        }}>
            <ModalContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby="profile-modal-title"
            >
                <ModalHeader>
                    <HeaderInfo>
                        <HeaderIcon>
                            <UserRound size={21} />
                        </HeaderIcon>

                        <div>
                            <HeaderTitle id="profile-modal-title">
                                Mi cuenta
                            </HeaderTitle>
                            <p>Administra tu información y configuración personal.</p>
                        </div>
                    </HeaderInfo>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar modal"
                    >
                        <X size={20} />
                    </CloseButton>
                </ModalHeader>

                <ModalBody>
                    <Sidebar>
                        <div className="user-summary">
                            <div className="user-avatar">
                                {(profileData.name?.[0] || "U").toUpperCase()}
                            </div>

                            <strong>
                                {profileData.name} {profileData.last_name}
                            </strong>

                            <span>{profileData.email}</span>

                            <RoleBadge>
                                {roleLabel[user.role] || user.role || "Usuario"}
                            </RoleBadge>
                        </div>

                        <nav aria-label="Opciones de cuenta">
                            {tabs.map(({ id, label, icon: Icon }) => (
                                <TabButton
                                    key={id}
                                    type="button"
                                    $active={activeTab === id}
                                    onClick={() => setActiveTab(id)}
                                >
                                    <Icon size={18} />
                                    <span>{label}</span>
                                </TabButton>
                            ))}
                        </nav>
                    </Sidebar>

                    <Content>
                        {activeTab === "profile" && (
                            <form onSubmit={handleSaveProfile}>
                                <SectionHeader>
                                    <SectionTitle>Información personal</SectionTitle>
                                    <SectionDescription>
                                        Consulta y actualiza los datos asociados a tu cuenta.
                                    </SectionDescription>
                                </SectionHeader>

                                <FormGrid>
                                    <FormGroup>
                                        <FormLabel>Nombre</FormLabel>
                                        <FormInput
                                            name="name"
                                            value={profileData.name}
                                            onChange={handleProfileChange}
                                            placeholder="Nombre"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <FormLabel>Apellido</FormLabel>
                                        <FormInput
                                            name="last_name"
                                            value={profileData.last_name}
                                            onChange={handleProfileChange}
                                            placeholder="Apellido"
                                        />
                                    </FormGroup>

                                    <FormGroup $full>
                                        <FormLabel>Correo electrónico</FormLabel>
                                        <FormInput
                                            type="email"
                                            value={profileData.email}
                                            disabled
                                        />
                                        <small>
                                            El correo está asociado a tu identidad de acceso.
                                        </small>
                                    </FormGroup>

                                    <FormGroup>
                                        <FormLabel>Teléfono</FormLabel>
                                        <FormInput
                                            name="phone"
                                            value={profileData.phone}
                                            onChange={handleProfileChange}
                                            placeholder="Número de contacto"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <FormLabel>Ciudad</FormLabel>
                                        <FormInput
                                            name="city"
                                            value={profileData.city}
                                            onChange={handleProfileChange}
                                            placeholder="Ciudad"
                                        />
                                    </FormGroup>

                                    <FormGroup $full>
                                        <FormLabel>Cargo</FormLabel>
                                        <FormInput
                                            name="position"
                                            value={profileData.position}
                                            onChange={handleProfileChange}
                                            placeholder="Cargo o función"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <FormLabel>Especialidad</FormLabel>
                                        <FormInput
                                            name="specialty"
                                            value={profileData.specialty}
                                            onChange={handleProfileChange}
                                            placeholder="Especialidad"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <FormLabel>Tarjeta profesional</FormLabel>
                                        <FormInput
                                            name="professional_card"
                                            value={profileData.professional_card}
                                            onChange={handleProfileChange}
                                            placeholder="Número de tarjeta"
                                        />
                                    </FormGroup>
                                </FormGrid>

                                <ActionFooter>
                                    <SecondaryButton type="button" onClick={onClose}>
                                        Cancelar
                                    </SecondaryButton>
                                    <PrimaryButton type="submit">
                                        <Save size={16} />
                                        Guardar cambios
                                    </PrimaryButton>
                                </ActionFooter>
                            </form>
                        )}

                        {activeTab === "preferences" && (
                            <>
                                <SectionHeader>
                                    <SectionTitle>Preferencias</SectionTitle>
                                    <SectionDescription>
                                        Personaliza la experiencia de uso de LexControl.
                                    </SectionDescription>
                                </SectionHeader>

                                <PreferenceCard>
                                    <PreferenceIcon>
                                        <Bell size={19} />
                                    </PreferenceIcon>
                                    <PreferenceInfo>
                                        <strong>Notificaciones</strong>
                                        <span>Permitir notificaciones dentro de la plataforma.</span>
                                    </PreferenceInfo>
                                    <Toggle
                                        type="checkbox"
                                        checked={preferences.notifications}
                                        onChange={() => handlePreferenceChange("notifications")}
                                    />
                                </PreferenceCard>

                                <PreferenceCard>
                                    <PreferenceIcon>
                                        <Bell size={19} />
                                    </PreferenceIcon>
                                    <PreferenceInfo>
                                        <strong>Notificaciones por correo</strong>
                                        <span>Recibir avisos y actualizaciones por email.</span>
                                    </PreferenceInfo>
                                    <Toggle
                                        type="checkbox"
                                        checked={preferences.emailNotifications}
                                        onChange={() => handlePreferenceChange("emailNotifications")}
                                    />
                                </PreferenceCard>

                                <PreferenceCard>
                                    <PreferenceIcon>
                                        <Monitor size={19} />
                                    </PreferenceIcon>
                                    <PreferenceInfo>
                                        <strong>Modo oscuro</strong>
                                        <span>Utilizar una apariencia oscura en la plataforma.</span>
                                    </PreferenceInfo>
                                    <Toggle
                                        type="checkbox"
                                        checked={preferences.darkMode}
                                        onChange={() => handlePreferenceChange("darkMode")}
                                    />
                                </PreferenceCard>

                                <ActionFooter>
                                    <SecondaryButton type="button" onClick={onClose}>
                                        Cerrar
                                    </SecondaryButton>
                                    <PrimaryButton
                                        type="button"
                                        onClick={handleSavePreferences}
                                    >
                                        <Save size={16} />
                                        Guardar preferencias
                                    </PrimaryButton>
                                </ActionFooter>
                            </>
                        )}

                        {activeTab === "security" && (
                            <form onSubmit={handleChangePassword}>
                                <SectionHeader>
                                    <SectionTitle>Seguridad de la cuenta</SectionTitle>
                                    <SectionDescription>
                                        Actualiza tus credenciales de acceso.
                                    </SectionDescription>
                                </SectionHeader>

                                <FormGroup $full>
                                    <FormLabel>Contraseña actual</FormLabel>
                                    <PasswordWrapper>
                                        <PasswordInput
                                            type={showPassword ? "text" : "password"}
                                            name="current_password"
                                            value={passwordData.current_password}
                                            onChange={handlePasswordChange}
                                            placeholder="Ingresa tu contraseña actual"
                                            required
                                        />
                                        <PasswordToggle
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                                        </PasswordToggle>
                                    </PasswordWrapper>
                                </FormGroup>

                                <FormGroup $full>
                                    <FormLabel>Nueva contraseña</FormLabel>
                                    <PasswordWrapper>
                                        <PasswordInput
                                            type={showNewPassword ? "text" : "password"}
                                            name="new_password"
                                            value={passwordData.new_password}
                                            onChange={handlePasswordChange}
                                            placeholder="Ingresa una nueva contraseña"
                                            minLength={8}
                                            required
                                        />
                                        <PasswordToggle
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                                        </PasswordToggle>
                                    </PasswordWrapper>
                                </FormGroup>

                                <FormGroup $full>
                                    <FormLabel>Confirmar nueva contraseña</FormLabel>
                                    <FormInput
                                        type="password"
                                        name="confirm_password"
                                        value={passwordData.confirm_password}
                                        onChange={handlePasswordChange}
                                        placeholder="Confirma tu nueva contraseña"
                                        minLength={8}
                                        required
                                    />
                                    {passwordData.confirm_password &&
                                        passwordData.new_password !== passwordData.confirm_password && (
                                            <small className="error">
                                                Las contraseñas no coinciden.
                                            </small>
                                        )}
                                </FormGroup>

                                <Divider />

                                <PreferenceCard>
                                    <PreferenceIcon>
                                        <LockKeyhole size={19} />
                                    </PreferenceIcon>
                                    <PreferenceInfo>
                                        <strong>Sesión protegida</strong>
                                        <span>
                                            Tu cuenta utiliza autenticación mediante sesión segura.
                                        </span>
                                    </PreferenceInfo>
                                    <Check size={18} color="#3C8C6A" />
                                </PreferenceCard>

                                <ActionFooter>
                                    <SecondaryButton type="button" onClick={onClose}>
                                        Cancelar
                                    </SecondaryButton>
                                    <PrimaryButton
                                        type="submit"
                                        disabled={
                                            !passwordData.current_password ||
                                            !passwordData.new_password ||
                                            passwordData.new_password !== passwordData.confirm_password
                                        }
                                    >
                                        <ShieldCheck size={16} />
                                        Actualizar contraseña
                                    </PrimaryButton>
                                </ActionFooter>
                            </form>
                        )}
                    </Content>
                </ModalBody>
            </ModalContainer>
        </Overlay>
    );
};

export default ProfileModal;
