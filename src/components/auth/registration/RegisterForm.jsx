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
} from '../../../styles/auth/registration/registrationForm.styles';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <FormContainer>
            <BackLink as={NavLink} to="/">
                <FiArrowLeft />
                <span>Volver al inicio</span>
            </BackLink>

            <FormHeader>
                <FormTitle>
                    Crea tu cuenta en LexControl
                </FormTitle>

                <FormDescription>
                    Comienza hoy y sé parte de una nueva forma de
                    gestionar el derecho.
                </FormDescription>
            </FormHeader>

            <Steps>
                <Step $active>
                    <StepNumber $active>1</StepNumber>

                    <StepContent>
                        <StepLabel $active>
                            Información básica
                        </StepLabel>
                    </StepContent>
                </Step>

                <StepLine />

                <Step>
                    <StepNumber>2</StepNumber>

                    <StepContent>
                        <StepLabel>Perfil</StepLabel>
                    </StepContent>
                </Step>

                <StepLine />

                <Step>
                    <StepNumber>3</StepNumber>

                    <StepContent>
                        <StepLabel>Confirmación</StepLabel>
                    </StepContent>
                </Step>
            </Steps>

            <RegisterFormElement>
                <FieldsGrid>
                    <FieldGroup>
                        <FieldLabel htmlFor="register-name">
                            Nombre completo
                        </FieldLabel>

                        <FieldInput
                            id="register-name"
                            type="text"
                            placeholder="Ingresa tu nombre completo..."
                        />
                    </FieldGroup>

                    <FieldGroup>
                        <FieldLabel htmlFor="register-email">
                            Email
                        </FieldLabel>

                        <FieldInput
                            id="register-email"
                            type="email"
                            placeholder="tu@correo.com"
                        />
                    </FieldGroup>

                    <FieldGroup>
                        <FieldLabel htmlFor="register-password">
                            Contraseña
                        </FieldLabel>

                        <PasswordWrapper>
                            <FieldInput
                                id="register-password"
                                type={
                                    showPassword
                                        ? 'text'
                                        : 'password'
                                }
                                placeholder="Crea una contraseña..."
                            />

                            <PasswordToggle
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
                                type={
                                    showConfirmPassword
                                        ? 'text'
                                        : 'password'
                                }
                                placeholder="Repite tu contraseña..."
                            />

                            <PasswordToggle
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
                    Crear cuenta
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
            textMicrosoft="Regístrate con Microsoft"            />

            <LoginRedirect>
                <LoginText>
                    ¿Ya tienes una cuenta?
                </LoginText>

                <LoginLink as={NavLink} to="/portal/login">
                    Inicia sesión
                </LoginLink>
            </LoginRedirect>
        </FormContainer>
    );
};

export default RegisterForm;