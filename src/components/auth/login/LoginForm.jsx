import { useState } from "react";
import SocialButtons from "../socialButtons/SocialButtons";
import FeedbackAlert from "../../feedbackAlert/FeedbackAlert";
import { FEEDBACK_ALERT_CONFIG } from "../../../config/components/feedback";

import {
    Form,
    Field,
    Label,
    Input,
    PasswordContainer,
    EyeButton,
    RegisterRow,
    RegisterLink,
    OptionsRow,
    Remember,
    ForgotLink,
    SubmitButton,
    Divider,
} from "../../../styles/auth/login/loginForm.styles";

const LoginForm = ({ login }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);
        setFeedback(null);

        try {
            const response = await login(email, password);

            console.log("LOGIN FORM → login exitoso:", response);

        } catch (error) {
            console.error("LOGIN FORM → error:", error);
            setFeedback(FEEDBACK_ALERT_CONFIG.loginError);

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Field>
                <Label htmlFor="email">Email</Label>

                <Input
                id="email"
                type="text"
                placeholder="Ingresa tu email..."
                autoComplete="username"
                value={email}
                onChange={
                    (event) => setEmail(event.target.value)
                }
                />
            </Field>

            <Field>
                <Label htmlFor="password">Contraseña</Label>

                <PasswordContainer>
                <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="***********"
                    autoComplete="current-password"
                    value={password}
                    onChange={
                        (event) => setPassword(event.target.value)
                    }
                />

                <EyeButton
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                        showPassword
                            ? "Ocultar contraseña"
                            : "Mostrar contraseña"
                    }
                >
                    {showPassword ? "◉" : "◌"}
                </EyeButton>
                </PasswordContainer>
            </Field>

            {feedback && (
                <FeedbackAlert 
                config={feedback}
                onClose={() => setFeedback(null)}
                />
            )}

            <RegisterRow>
                <span>¿No tienes cuenta?</span>
                <RegisterLink href="/portal/register">
                Regístrate
                </RegisterLink>
            </RegisterRow>

            <OptionsRow>
                <Remember>
                <input type="checkbox" />
                <span>Recuérdame</span>
                </Remember>

                <ForgotLink href="/portal/forgot-password">
                Olvidé mi contraseña
                </ForgotLink>
            </OptionsRow>

            <SubmitButton 
            type="submit"
            disabled={isLoading}
            >
                {isLoading
                    ? "Iniciando sesión..."
                    : "Iniciar sesión"
                }
            </SubmitButton>

            <Divider>
                <span />
                <strong>o</strong>
                <span />
            </Divider>

            <SocialButtons 
            textGoogle="Iniciar sesión con Google"
            textMicrosoft="Iniciar sesión con Microsoft"
            textApple="Iniciar sesión con Apple"
            />
        </Form>
    );
};

export default LoginForm;