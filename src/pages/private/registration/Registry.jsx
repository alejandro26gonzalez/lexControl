import RegisterImpact from "../../../components/auth/registration/RegisterImpact";
import RegisterForm from '../../../components/auth//registration/RegisterForm';

import {
    RegistryContainer,
    RegistryImpact,
    RegistryContent,
} from '../../../styles/auth/registration/registry.styles';

const Registry = () => {
    return (
        <RegistryContainer>

            <RegistryImpact>
                <RegisterImpact />
            </RegistryImpact>

            <RegistryContent>
                <RegisterForm />
            </RegistryContent>

        </RegistryContainer>
    );
};

export default Registry;