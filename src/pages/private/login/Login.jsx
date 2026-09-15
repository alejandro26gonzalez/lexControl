import LoginForm from "../../../components/auth/login/LoginForm";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
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

const Login = () => {

    const {login} = useAuth();

    return (
        <PageContainer>
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