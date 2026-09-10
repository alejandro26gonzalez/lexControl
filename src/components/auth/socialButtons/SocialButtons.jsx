import {
    FcGoogle,
} from "react-icons/fc";
import {
    FaApple,
} from "react-icons/fa";
import {
    BsMicrosoft, 
} from "react-icons/bs";

import {
    SocialContainer,
    SocialButton,
    GoogleIcon,
    MicrosoftIcon,
    AppleIcon,
} from "../../../styles/auth/socialLogin.styles";

const SocialButtons = ({
    textGoogle,
    textMicrosoft,
    textApple,
    handleGoogleAction,
    handleMicrosoftAction,
    handleAppleAction
}) => {

    return (
        <SocialContainer>
            <SocialButton
                type="button"
                onClick={handleGoogleAction}
                $provider="google"
            >
                <GoogleIcon>
                <FcGoogle />
                </GoogleIcon>

                <span>{textGoogle}</span>
            </SocialButton>

            <SocialButton
                type="button"
                onClick={handleMicrosoftAction}
                $provider="microsoft"
            >
                <MicrosoftIcon>
                <BsMicrosoft />
                </MicrosoftIcon>

                <span>{textMicrosoft}</span>
            </SocialButton>

            <SocialButton
                type="button"
                onClick={handleAppleAction}
                $provider="apple"
            >
                <AppleIcon>
                <FaApple />
                </AppleIcon>

                <span>{textApple}</span>
            </SocialButton>
        </SocialContainer>
    );
};

export default SocialButtons;