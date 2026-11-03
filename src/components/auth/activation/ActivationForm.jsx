import { useState } from "react";
import { FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import { NavLink, useSearchParams, useNavigate } from 'react-router-dom';

import FeedbackAlert from "../../feedbackAlert/FeedbackAlert";
import useFeedbackAlert from "../../../hooks/useFeedbackAlert.js";

import { activateAccount } from "../../../services/authService.js";

import {
    FormContainer,
    BackLink,
    LoginRedirect,
    LoginText,
    LoginLink,
    RegisterButton
} from "../../../styles/auth/registration/registrationForm.styles.js";

import { 
    ActivationHeader,
    ActivationTitle,
    ActivationDescription,
    ActivationFormElement,
    ActivationFieldGroup,
    ActivationFieldLabel,
    ActivationFieldInput,
    ActivationPasswordWrapper,
    ActivationPasswordToggle
} from "../../../styles/auth/activation/activationForm.styles.js";

const ActivationForm = () => {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    const {
        feedbackAlert,
        showFeedback,
        clearFeedback
    } = useFeedbackAlert();

    const handleSubmit = async (event) => {
        event.preventDefault();

        clearFeedback();

        if (!token) {
            showFeedback("INVALID_ACTIVATION_TOKEN");
            return;
        }

        if (password !== confirmPassword) {
            showFeedback("PASSWORD_MISMATCH");
            return;
        }

        setIsLoading(true);

        try {
            const response = await activateAccount(
                token,
                password,
                confirmPassword
            );

            if (response.code === "ACCOUNT_ACTIVATED") {
                setIsActivated(true);
                showFeedback(response.code);

                navigate("/portal/login", {
                    replace: true,
                    state: {
                        accountActivated: true
                    }
                })
            }

        } catch (error) {
            showFeedback(error?.data?.code || "ACTIVATION_FAILED");

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormContainer>

            {
                feedbackAlert && (
                    <FeedbackAlert 
                    config={feedbackAlert}
                    onClose={clearFeedback}
                    />
                )
            }
            {/* boton ir a inicio */}
            <BackLink as={NavLink} to="/portal/login">
                <FiArrowLeft />
                <span>Volver</span>
            </BackLink>

            {!isActivated ? (
                <>
                    <ActivationHeader>
                        <ActivationTitle>
                            Establece tu contraseña
                        </ActivationTitle>

                        <ActivationDescription>
                            Configura una contraseña segura para activar
                            tu cuenta de LexControl.
                        </ActivationDescription>
                    </ActivationHeader>

                    <ActivationFormElement onSubmit={handleSubmit}>

                        <ActivationFieldGroup>
                            <ActivationFieldLabel htmlFor="new-password">
                                Nueva contraseña
                            </ActivationFieldLabel>

                            <ActivationPasswordWrapper>
                                <ActivationFieldInput
                                    id="new-password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    placeholder="Ingresa tu nueva contraseña"
                                    autoComplete="new-password"
                                    required
                                />

                                <ActivationPasswordToggle
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(previous => !previous)
                                    }
                                    aria-label={
                                        showPassword
                                            ? "Ocultar contraseña"
                                            : "Mostrar contraseña"
                                    }
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </ActivationPasswordToggle>
                            </ActivationPasswordWrapper>
                        </ActivationFieldGroup>

                        <ActivationFieldGroup>
                            <ActivationFieldLabel htmlFor="confirm-password">
                                Confirmar contraseña
                            </ActivationFieldLabel>

                            <ActivationPasswordWrapper>
                                <ActivationFieldInput
                                    id="confirm-password"
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setConfirmPassword(event.target.value)
                                    }
                                    placeholder="Confirma tu nueva contraseña"
                                    autoComplete="new-password"
                                    required
                                />

                                <ActivationPasswordToggle
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            previous => !previous
                                        )
                                    }
                                    aria-label={
                                        showConfirmPassword
                                            ? "Ocultar contraseña"
                                            : "Mostrar contraseña"
                                    }
                                >
                                    {showConfirmPassword
                                        ? <FiEyeOff />
                                        : <FiEye />}
                                </ActivationPasswordToggle>
                            </ActivationPasswordWrapper>
                        </ActivationFieldGroup>

                        <RegisterButton
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading
                                ? "Activando cuenta..."
                                : "Establecer contraseña"}
                        </RegisterButton>

                    </ActivationFormElement>
                </>
            ) : (
                <ActivationHeader>
                    <ActivationTitle>
                        ¡Cuenta activada!
                    </ActivationTitle>

                    <ActivationDescription>
                        Tu cuenta de LexControl está lista.
                        Ya puedes iniciar sesión.
                    </ActivationDescription>

                    <LoginLink as={NavLink} to="/portal/login">
                        Ir al inicio de sesión
                    </LoginLink>
                </ActivationHeader>
            )}

            {!isActivated && (
                <LoginRedirect>
                    <LoginText>
                        ¿Ya tienes una cuenta?
                    </LoginText>

                    <LoginLink as={NavLink} to="/portal/login">
                        Inicia sesión
                    </LoginLink>
                </LoginRedirect>
            )}
            
        </FormContainer>
    )
}
export default ActivationForm;
