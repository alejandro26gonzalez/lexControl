import { FiArrowLeft, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";
import { getDashboardRoute } from "../../../utils/getDashboardRoute";

import {
    PageContainer,
    Content,
    IconContainer,
    Code,
    Title,
    Description,
    BackButton,
} from "../../../styles/components/forbidden.styles";


const Forbidden = () => {

    const navigate = useNavigate();

    const { user } = useAuth();

    const dashboardRoute = getDashboardRoute(user);


    const handleBackToDashboard = () => {
        navigate(dashboardRoute);
    };


    return (
        <PageContainer>

            <Content>

                <IconContainer>
                    <FiShield />
                </IconContainer>

                <Code>
                    403
                </Code>

                <Title>
                    Acceso denegado
                </Title>

                <Description>
                    No tienes los permisos necesarios para
                    acceder a este recurso.
                </Description>

                <BackButton
                    type="button"
                    onClick={handleBackToDashboard}
                >
                    <FiArrowLeft />
                    <span>
                        Volver a mi dashboard
                    </span>
                </BackButton>

            </Content>

        </PageContainer>
    );
};


export default Forbidden;