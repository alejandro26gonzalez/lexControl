import { useState } from 'react';
import { FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import SocialButtons from '../socialButtons/SocialButtons';

import {
    FormContainer,
    BackLink,
    FormHeader,
    FormTitle,
    FormDescription,
    Steps,
    Step,
    StepNumber,
    StepContent,
    StepLabel,
    StepLine,
    StepActions,
    SecondaryButton,
    RegisterFormElement,
    FieldsGrid,
    FieldGroup,
    FieldLabel,
    FieldInput,
    PasswordWrapper,
    PasswordToggle,
    TermsContainer,
    TermsCheckbox,
    TermsText,
    TermsLink,
    RegisterButton,
    Divider,
    LoginRedirect,
    LoginText,
    LoginLink,
    VerificationContainer,
    VerificationLabel,
    VerificationInput,
    VerificationHelp,
    ResendButton,
    SuccessContainer,
    SuccessIcon,
    SuccessTitle,
    SuccessDescription
} from '../../../styles/auth/registration/registrationForm.styles';

const RegisterForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [basicData, setBasicData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [profileData, setProfileData] = useState({
        position: '',
        specialty: '',
        professionalCard: '',
        phone: '',
        city: '',
    });

    const [verificationCode, setVerificationCode] = useState('');

    const [isAccountCreated, setIsAccountCreated] = useState(false);

    const handleBasicChange = (event) => {
        const { name, value } = event.target;

        setBasicData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleProfileChange = (event) => {
        const { name, value } = event.target;

        setProfileData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleContinueToProfile = (event) => {
        event.preventDefault();

        // Por ahora solamente avanzamos.
        // Posteriormente aquí irá la validación del paso 1.

        setCurrentStep(2);
    };

    const handleContinueToConfirmation = (event) => {
        event.preventDefault();

        // Posteriormente:
        // 1. Enviar información al backend.
        // 2. Crear registro pendiente.
        // 3. Generar código.
        // 4. Enviar código al correo.

        setCurrentStep(3);
    };

    const handleConfirmAccount = (event) => {
        event.preventDefault();

        // Posteriormente:
        // Validar verificationCode contra backend.

        setIsAccountCreated(true);
    };

    const handleBackToBasic = () => {
        setCurrentStep(1);
    };

    const handleBackToProfile = () => {
        setCurrentStep(2);
    };

    return (
        <FormContainer>

            {/* boton ir a inicio */}
            <BackLink as={NavLink} to="/">
                <FiArrowLeft />
                <span>Volver al inicio</span>
            </BackLink>

            

            {!isAccountCreated ? (
                <>
                    <FormHeader>
                        <FormTitle>
                            {currentStep === 1 &&
                                'Crea tu cuenta en LexControl'}

                            {currentStep === 2 &&
                                'Completa tu perfil profesional'}

                            {currentStep === 3 &&
                                'Confirma tu cuenta'}
                        </FormTitle>

                        <FormDescription>
                            {currentStep === 1 &&
                                'Comienza hoy y sé parte de una nueva forma de gestionar el derecho.'}

                            {currentStep === 2 &&
                                'Completa la información necesaria para personalizar tu experiencia en LexControl.'}

                            {currentStep === 3 &&
                                `Hemos enviado un código de confirmación a ${basicData.email}.`}
                        </FormDescription>
                    </FormHeader>

                    <Steps>
                        <Step $active={currentStep === 1} $completed={currentStep > 1}>
                            <StepNumber
                                $active={currentStep === 1}
                                $completed={currentStep > 1}
                            >
                                {currentStep > 1 ? '✓' : '1'}
                            </StepNumber>

                            <StepContent>
                                <StepLabel $active={currentStep === 1}>
                                    Información básica
                                </StepLabel>
                            </StepContent>
                        </Step>

                        <StepLine />

                        <Step
                            $active={currentStep === 2}
                            $completed={currentStep > 2}
                        >
                            <StepNumber
                                $active={currentStep === 2}
                                $completed={currentStep > 2}
                            >
                                {currentStep > 2 ? '✓' : '2'}
                            </StepNumber>

                            <StepContent>
                                <StepLabel $active={currentStep === 2}>
                                    Perfil
                                </StepLabel>
                            </StepContent>
                        </Step>

                        <StepLine />

                        <Step $active={currentStep === 3}>
                            <StepNumber $active={currentStep === 3}>
                                3
                            </StepNumber>

                            <StepContent>
                                <StepLabel $active={currentStep === 3}>
                                    Confirmación
                                </StepLabel>
                            </StepContent>
                        </Step>
                    </Steps>

                    {currentStep === 1 && (
                        <>
                            <RegisterFormElement
                                onSubmit={handleContinueToProfile}
                            >
                                <FieldsGrid>
                                    <FieldGroup>
                                        <FieldLabel htmlFor="register-name">
                                            Nombre completo
                                        </FieldLabel>

                                        <FieldInput
                                            id="register-name"
                                            name="name"
                                            type="text"
                                            placeholder="Ingresa tu nombre completo..."
                                            value={basicData.name}
                                            onChange={handleBasicChange}
                                        />
                                    </FieldGroup>

                                    <FieldGroup>
                                        <FieldLabel htmlFor="register-email">
                                            Email
                                        </FieldLabel>

                                        <FieldInput
                                            id="register-email"
                                            name="email"
                                            type="email"
                                            placeholder="tu@correo.com"
                                            value={basicData.email}
                                            onChange={handleBasicChange}
                                        />
                                    </FieldGroup>

                                    <FieldGroup>
                                        <FieldLabel htmlFor="register-password">
                                            Contraseña
                                        </FieldLabel>

                                        <PasswordWrapper>
                                            <FieldInput
                                                id="register-password"
                                                name="password"
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder="Crea una contraseña..."
                                                value={basicData.password}
                                                onChange={handleBasicChange}
                                            />

                                            <PasswordToggle
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        (previous) =>
                                                            !previous
                                                    )
                                                }
                                                aria-label={
                                                    showPassword
                                                        ? 'Ocultar contraseña'
                                                        : 'Mostrar contraseña'
                                                }
                                            >
                                                {showPassword ? (
                                                    <FiEyeOff />
                                                ) : (
                                                    <FiEye />
                                                )}
                                            </PasswordToggle>
                                        </PasswordWrapper>
                                    </FieldGroup>

                                    <FieldGroup>
                                        <FieldLabel htmlFor="register-confirm-password">
                                            Confirmar contraseña
                                        </FieldLabel>

                                        <PasswordWrapper>
                                            <FieldInput
                                                id="register-confirm-password"
                                                name="confirmPassword"
                                                type={
                                                    showConfirmPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder="Repite tu contraseña..."
                                                value={
                                                    basicData.confirmPassword
                                                }
                                                onChange={handleBasicChange}
                                            />

                                            <PasswordToggle
                                                type="button"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        (previous) =>
                                                            !previous
                                                    )
                                                }
                                                aria-label={
                                                    showConfirmPassword
                                                        ? 'Ocultar contraseña'
                                                        : 'Mostrar contraseña'
                                                }
                                            >
                                                {showConfirmPassword ? (
                                                    <FiEyeOff />
                                                ) : (
                                                    <FiEye />
                                                )}
                                            </PasswordToggle>
                                        </PasswordWrapper>
                                    </FieldGroup>
                                </FieldsGrid>

                                <TermsContainer>
                                    <TermsCheckbox
                                        id="terms"
                                        type="checkbox"
                                    />

                                    <TermsText htmlFor="terms">
                                        Acepto los{' '}
                                        <TermsLink href="/terms">
                                            Términos y Condiciones
                                        </TermsLink>{' '}
                                        y la{' '}
                                        <TermsLink href="/privacy">
                                            Política de Privacidad
                                        </TermsLink>{' '}
                                        de LexControl.
                                    </TermsText>
                                </TermsContainer>

                                <RegisterButton type="submit">
                                    Continuar
                                </RegisterButton>
                            </RegisterFormElement>

                            <Divider>
                                <span />
                                <strong>o</strong>
                                <span />
                            </Divider>

                            <SocialButtons 
                            textApple="Regístrate con ICloud"
                            textGoogle="Regístrate con Google"
                            textMicrosoft="Regístrate con Microsoft"
                            />

                            <LoginRedirect>
                                <LoginText>
                                    ¿Ya tienes una cuenta?
                                </LoginText>

                                <LoginLink
                                    as={NavLink}
                                    to="/portal/login"
                                >
                                    Inicia sesión
                                </LoginLink>
                            </LoginRedirect>
                        </>
                    )}

                    {currentStep === 2 && (
                        <RegisterFormElement
                            onSubmit={handleContinueToConfirmation}
                        >
                            <FieldsGrid>
                                <FieldGroup>
                                    <FieldLabel htmlFor="position">
                                        Cargo
                                    </FieldLabel>

                                    <FieldInput
                                        id="position"
                                        name="position"
                                        type="text"
                                        placeholder="Ej. Abogado asociado"
                                        value={profileData.position}
                                        onChange={handleProfileChange}
                                    />
                                </FieldGroup>

                                <FieldGroup>
                                    <FieldLabel htmlFor="specialty">
                                        Especialidad
                                    </FieldLabel>

                                    <FieldInput
                                        id="specialty"
                                        name="specialty"
                                        type="text"
                                        placeholder="Ej. Derecho corporativo"
                                        value={profileData.specialty}
                                        onChange={handleProfileChange}
                                    />
                                </FieldGroup>

                                <FieldGroup>
                                    <FieldLabel htmlFor="professionalCard">
                                        Tarjeta profesional
                                    </FieldLabel>

                                    <FieldInput
                                        id="professionalCard"
                                        name="professionalCard"
                                        type="text"
                                        placeholder="Número de tarjeta"
                                        value={profileData.professionalCard}
                                        onChange={handleProfileChange}
                                    />
                                </FieldGroup>

                                <FieldGroup>
                                    <FieldLabel htmlFor="phone">
                                        Teléfono
                                    </FieldLabel>

                                    <FieldInput
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Número de contacto"
                                        value={profileData.phone}
                                        onChange={handleProfileChange}
                                    />
                                </FieldGroup>

                                <FieldGroup>
                                    <FieldLabel htmlFor="city">
                                        Ciudad
                                    </FieldLabel>

                                    <FieldInput
                                        id="city"
                                        name="city"
                                        type="text"
                                        placeholder="Ciudad de residencia"
                                        value={profileData.city}
                                        onChange={handleProfileChange}
                                    />
                                </FieldGroup>
                            </FieldsGrid>

                            <StepActions>
                                <SecondaryButton
                                    type="button"
                                    onClick={handleBackToBasic}
                                >
                                    Atrás
                                </SecondaryButton>

                                <RegisterButton type="submit">
                                    Continuar
                                </RegisterButton>
                            </StepActions>
                        </RegisterFormElement>
                    )}

                    {currentStep === 3 && (
                        <RegisterFormElement
                            onSubmit={handleConfirmAccount}
                        >
                            <VerificationContainer>
                                <VerificationLabel>
                                    Código de confirmación
                                </VerificationLabel>

                                <VerificationInput
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={6}
                                    placeholder="000000"
                                    value={verificationCode}
                                    onChange={(event) =>
                                        setVerificationCode(
                                            event.target.value.replace(
                                                /\D/g,
                                                ''
                                            )
                                        )
                                    }
                                />

                                <VerificationHelp>
                                    Ingresa el código de 6 dígitos que
                                    enviamos a tu correo electrónico.
                                </VerificationHelp>

                                <ResendButton type="button">
                                    Reenviar código
                                </ResendButton>
                            </VerificationContainer>

                            <StepActions>
                                <SecondaryButton
                                    type="button"
                                    onClick={handleBackToProfile}
                                >
                                    Atrás
                                </SecondaryButton>

                                <RegisterButton type="submit">
                                    Confirmar cuenta
                                </RegisterButton>
                            </StepActions>
                        </RegisterFormElement>
                    )}
                </>
            ) : (
                <SuccessContainer>
                    <SuccessIcon>✓</SuccessIcon>

                    <SuccessTitle>
                        Cuenta creada correctamente
                    </SuccessTitle>

                    <SuccessDescription>
                        Tu cuenta de LexControl ha sido confirmada.
                        Ya puedes ingresar a la plataforma.
                    </SuccessDescription>

                    <RegisterButton
                        as={NavLink}
                        to="/portal/login"
                    >
                        Iniciar sesión 
                    </RegisterButton>
                </SuccessContainer>
            )}
        </FormContainer>
    );
};

export default RegisterForm;