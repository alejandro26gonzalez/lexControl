import { FiArrowLeft } from "react-icons/fi";
import {NavLink} from "react-router-dom";
import {
    PageContainer,
    BackLink,
    ImageSection,
    FormSection,
    LoginContent as RecoverContent,
} from "../../../styles/auth/login/login.styles";

import RecoverPassword from "../../../components/auth/recover/RecoverPassword";

const Recover = () => {

    return (
        <PageContainer>
            <ImageSection />

            <FormSection>

                <RecoverContent>

                    <BackLink as={NavLink} to="/">

                        <FiArrowLeft />
                        <span>Volver al inicio</span>

                    </BackLink>

                    <RecoverPassword />

                </RecoverContent>
            </FormSection>
        </PageContainer>
    )
};

export default Recover;