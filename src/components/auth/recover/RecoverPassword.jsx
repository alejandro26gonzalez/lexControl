import { useState, useEffect } from 'react';
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
} from "../../../styles/auth/registration/registrationForm.styles";

import FeedbackAlert from "../../feedbackAlert/FeedbackAlert";
import useFeedbackAlert from '../../../hooks/useFeedbackAlert';

import { 
    forgotPassword,
    verifyOTP,
    resetPassword,
    resendOTP
} from '../../../services/authService';

const RecoverPassword = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [otpTimeRemaining, setOtpTimeRemaining] = useState(300);
    const [resendTimeRemaining, setResendTimeRemaining] = useState(60);

    const {
        showFeedback,
        clearFeedback,
        feedbackAlert
    } = useFeedbackAlert();

    // importante: generar el back para el contador de reenviar el codigo nuevamente

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
                return `Hemos enviado un código de 8 caracteres a ${email}.`;

            case 3:
                return 'Ingresa una nueva contraseña para proteger tu cuenta.';

            default:
                return '';
        }
    };

    const handleEmailSubmit = async (event) => {
        event.preventDefault();

        clearFeedback();

        try {
            const response = await forgotPassword(email);

            showFeedback(response.code);

            setVerificationCode("");
            setOtpTimeRemaining(300);
            setResendTimeRemaining(60);
            setCurrentStep(2);

        } catch (error) {
            console.error(
                "Error solicitando recuperación:",
                error
            );

            showFeedback(error?.data?.code || "UNKNOWN_ERROR");
        }
    };

    const handleCodeSubmit = async (event) => {
        event.preventDefault();

        clearFeedback();

        try {
            const response = await verifyOTP(verificationCode);

            showFeedback(response.code);

            setCurrentStep(3);

        } catch (error) {
            console.error(
                "Error validando OTP:",
                error
            );

            const data = error?.data;

            const code = data?.code;

            if (!code) {
                showFeedback("UNKNOWN_ERROR");
                return;
            }

            showFeedback(code);
        }
    };

    const handlePasswordSubmit = async (event) => {
        event.preventDefault();

        clearFeedback();

        try {
            const response = await resetPassword(
                password,
                confirmPassword
            );

            showFeedback(response.code);

            setCurrentStep(4);

        } catch (error) {
            console.error(
                "Error actualizando la contraseña:",
                error
            );

            showFeedback(error?.data?.code || "UNKNOWN_ERROR");
        }
    };

    const handleBackToLogin = () => {
        setCurrentStep(1);
    };

    const handleResendOTP = async () => {
        if (resendTimeRemaining > 0) return;

        clearFeedback();

        try {
            const response = await resendOTP();

            setVerificationCode("");
            setOtpTimeRemaining(300);
            setResendTimeRemaining(60);

            showFeedback(response.code);

        } catch (error) {
            console.error(
                "Error al reenviar OTP:",
                error
            );

            showFeedback(error?.data?.code || "UNKNOWN_ERROR");
        }
    };

    useEffect(() => {
        if (currentStep !== 2) {
            return;
        };

        if (otpTimeRemaining <= 0) {
            return;
        }

        const timer = setInterval(() => {
            setOtpTimeRemaining((previous) => {
                if (previous <= 1) {
                    clearInterval(timer);
                    return 0;
                }

                return previous - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentStep, otpTimeRemaining]);

    useEffect(() => {
        if (resendTimeRemaining <= 0) return;

        const timer = setInterval(() => {
            setResendTimeRemaining((previous) => {
                if (previous <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return previous - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [resendTimeRemaining]);


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <>
            {feedbackAlert && (
                <FeedbackAlert
                    config={feedbackAlert}
                    onClose={clearFeedback}
                />
            )}

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
                            id="verification-code"
                            type="text"
                            inputMode="text"
                            maxLength={8}
                            placeholder="00000000"
                            value={verificationCode}
                            onChange={(event) =>
                                setVerificationCode(
                                    event.target.value.slice(0 , 8)
                                )
                            }
                            autoComplete='one-time-code'
                            required
                        />

                        <VerificationHelp>
                            Ingresa el código OTP de 8 caracteres que
                            enviamos a tu correo electrónico.
                        </VerificationHelp>

                        {otpTimeRemaining > 0 ? (
                            <VerificationHelp>
                                Código válido durante: {formatTime(otpTimeRemaining)}
                            </VerificationHelp>
                        ) : (
                            <VerificationHelp>
                                El código ha expirado. Solicita un nuevo código.
                            </VerificationHelp>
                        )}

                        <ResendButton 
                        type="button"
                        onClick={handleResendOTP}
                        disabled={resendTimeRemaining > 0}
                        >
                            {resendTimeRemaining > 0
                            ? `Reenviar código (${resendTimeRemaining}s)`
                            : "Reenviar código"
                            }
                        </ResendButton>

                    </VerificationContainer>

                    <StepActions>
                        <SecondaryButton
                            type="button"
                            onClick={() => {
                                handleBackToLogin(1);
                                setVerificationCode("");
                            }}
                        >
                            Atrás
                        </SecondaryButton>

                        <RecoverButton 
                        type="submit"
                        >
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