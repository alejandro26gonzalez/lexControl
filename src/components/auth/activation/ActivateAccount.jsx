import RegisterImpact from "../registration/RegisterImpact";
import ActivationForm from "./ActivationForm";

import {
    RegistryContainer,
    RegistryImpact,
    RegistryContent
} from "../../../styles/auth/registration/registry.styles";

const ActivateAccount = () => {

    return (
        <RegistryContainer>

            <RegistryImpact>
                <RegisterImpact />
            </RegistryImpact>

            <RegistryContent>
                <ActivationForm />
            </RegistryContent>
            
        </RegistryContainer>
    )
}
export default ActivateAccount;