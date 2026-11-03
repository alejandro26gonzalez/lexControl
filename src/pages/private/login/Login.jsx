import LoginForm from "../../../components/auth/login/LoginForm";
import { FiArrowLeft } from "react-icons/fi";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";
import {
    PageContainer,
    BackLink,
    ImageSection,
    FormSection,
    LoginContent,
    Title,
    Description,
} from "../../../styles/auth/login/login.styles"; 

import { useAuth } from "../../../context/AuthContext";
import FeedbackAlert from "../../../components/feedbackAlert/FeedbackAlert";
import useFeedbackAlert from "../../../hooks/useFeedbackAlert";

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {
        feedbackAlert,
        showFeedback,
        clearFeedback
    } = useFeedbackAlert();

    const {login} = useAuth();

    useEffect(() => {
        const state = location.state;

        if (state?.accountActivated) {
            showFeedback("ACCOUNT_ACTIVATED");
        } else if (state?.loggedOut) {
            showFeedback("AUTH_LOGOUT_SUCCESS");
        } else {
            return;
        }

        // Limpiar el estado para evitar repetir la alerta.
        navigate(location.pathname, {
            replace: true,
            state: null
        });

    }, [location, navigate, showFeedback]);

    return (
        <PageContainer>

            {
                feedbackAlert && (
                    <FeedbackAlert 
                    config={feedbackAlert}
                    onClose={clearFeedback}
                    />
                )
            }
            <ImageSection />

            <FormSection>

                <LoginContent>

                    <BackLink as={NavLink} to="/">
                        <FiArrowLeft />
                        <span>Volver al inicio</span>
                    </BackLink>

                    <Title>
                        Acceso seguro <br/>
                        a tu gestión jurídica
                    </Title>

                    <Description>
                        Ingresa a tu espacio de control para monitorear expedientes, consultar actuaciones y hacer seguimiento a tus procesos en tiempo real.
                    </Description>

                    <LoginForm 
                    login={login}
                    />

                </LoginContent>
            </FormSection>
        </PageContainer>
    );
};

export default Login;