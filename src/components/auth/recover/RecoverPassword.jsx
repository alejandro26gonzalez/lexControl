import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import {
    Form,
    Field,
    Label,
    Input,
    PasswordContainer,
    EyeButton,
    SubmitButton,
    LoginRedirect,
} from '../../../styles/auth/recover/recoverPass.styles';
import {
    VerificationContainer,
    VerificationInput,
    VerificationHelp,
    VerificationLabel,
    FormTitle as Title,
    FormDescription as Description,
    StepActions,
    SecondaryButton,
    RegisterButton as RecoverButton,
    RegisterFormElement,
    ResendButton,
    SuccessContainer,
    SuccessIcon,
    SuccessTitle,
    SuccessDescription
} from "../../../styles/auth/registration/registrationForm.styles"


const RecoverPassword = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const getTitle = () => {
        switch (currentStep) {
            case 1:
                return 'Recuperar contraseña';

            case 2:
                return 'Verifica tu identidad';

            case 3:
                return 'Crea una nueva contraseña';

            default:
                return '';
        }
    };

    const getDescription = () => {
        switch (currentStep) {
            case 1:
                return 'Ingresa el correo asociado a tu cuenta y te enviaremos un código de verificación seguro.';

            case 2:
                return `Hemos enviado un código de 6 dígitos a ${email}.`;

            case 3:
                return 'Ingresa una nueva contraseña para proteger tu cuenta.';

            default:
                return '';
        }
    };

    const handleEmailSubmit = (event) => {
        event.preventDefault();

        // Posteriormente:
        // enviar email al backend
        // generar código
        // enviar código al correo

        setCurrentStep(2);
    };

    const handleCodeSubmit = (event) => {
        event.preventDefault();

        // Posteriormente:
        // validar código contra backend

        setCurrentStep(3);
    };

    const handlePasswordSubmit = (event) => {
        event.preventDefault();

        // Posteriormente:
        // validar contraseña
        // actualizar contraseña en backend

        setCurrentStep(4);
    };

    const handleBackToLogin = () => {
        setCurrentStep(1);
    };

    return (
        <>

            {currentStep !== 4 && (
                <>
                    <>
                        <Title>
                            {getTitle()}
                        </Title>

                        <Description>
                            {getDescription()}
                        </Description>
                    </>

                    {/* formulario correspondiente */}
                </>
            )}

            {currentStep === 1 && (
                <Form onSubmit={handleEmailSubmit}>

                    <Field>
                        <Label htmlFor="recover-email">
                            Correo electrónico
                        </Label>

                        <Input
                            id="recover-email"
                            type="email"
                            placeholder="tu@correo.com"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />
                    </Field>

                    <SubmitButton type="submit">
                        Enviar código
                    </SubmitButton>

                    <LoginRedirect>
                        <span>
                            ¿Recordaste tu contraseña?
                        </span>

                        <NavLink to="/portal/login">
                            Inicia sesión
                        </NavLink>
                    </LoginRedirect>

                </Form>
            )}

            {currentStep === 2 && (
                <RegisterFormElement
                    onSubmit={handleCodeSubmit}
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
                            onClick={handleBackToLogin}
                        >
                            Atrás
                        </SecondaryButton>

                        <RecoverButton type="submit">
                            Confirmar código
                        </RecoverButton>
                    </StepActions>
                </RegisterFormElement>
            )}

            {currentStep === 3 && (
                <Form onSubmit={handlePasswordSubmit}>

                    <Field>
                        <Label htmlFor="new-password">
                            Nueva contraseña
                        </Label>

                        <PasswordContainer>
                            <Input
                                id="new-password"
                                type={
                                    showPassword
                                        ? 'text'
                                        : 'password'
                                }
                                placeholder="Crea una nueva contraseña..."
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                required
                            />

                            <EyeButton
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        (previous) => !previous
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
                            </EyeButton>
                        </PasswordContainer>
                    </Field>

                    <Field>
                        <Label htmlFor="confirm-password">
                            Confirmar contraseña
                        </Label>

                        <PasswordContainer>
                            <Input
                                id="confirm-password"
                                type={
                                    showConfirmPassword
                                        ? 'text'
                                        : 'password'
                                }
                                placeholder="Repite tu contraseña..."
                                value={confirmPassword}
                                onChange={(event) =>
                                    setConfirmPassword(
                                        event.target.value
                                    )
                                }
                                required
                            />

                            <EyeButton
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        (previous) => !previous
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
                            </EyeButton>
                        </PasswordContainer>
                    </Field>

                    <SubmitButton type="submit">
                        Cambiar contraseña
                    </SubmitButton>

                </Form>
            )}

            {currentStep === 4 && (
                <SuccessContainer>
                    <SuccessIcon>
                        ✓
                    </SuccessIcon>

                    <SuccessTitle>
                        Contraseña recuperada satisfactoriamente
                    </SuccessTitle>

                    <SuccessDescription>
                        Tu contraseña fue recuperada con éxito para
                        ingresar a LexControl. Navega a inicio para
                        iniciar sesión con tus nuevas credenciales.
                    </SuccessDescription>

                    <RecoverButton
                        as={NavLink}
                        to="/portal/login"
                    >
                        Iniciar sesión
                    </RecoverButton>
                </SuccessContainer>
            )}
        </>
    );
};

export default RecoverPassword;