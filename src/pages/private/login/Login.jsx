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

const Login = () => {
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
                        Tu estrategia legal, bajo
                        <br />
                        control absoluto.
                    </Title>

                    <Description>
                        Accede en tiempo real al estado de tus procesos,
                        decisiones judiciales y vencimientos sin barreras ni
                        incertidumbre.
                    </Description>

                    <LoginForm />

                </LoginContent>
            </FormSection>
        </PageContainer>
    );
};

export default Login;