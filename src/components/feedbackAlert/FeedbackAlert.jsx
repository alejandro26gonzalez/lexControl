import { useEffect, useState } from "react";

import {
    FeedbackAlertContainer,
    FeedbackAlertContent,
    FeedbackAlertTitle,
    FeedbackAlertDescription,
    FeedbackAlertIcon
} from "../../styles/components/feedbackAlert.styles";

const ALERT_DURATION = 13000;
const EXIT_DURATION = 400;

const FeedbackAlert = ({ config, onClose }) => {
    const {
        variant,
        icon: Icon,
        title,
        description,
    } = config;

    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, ALERT_DURATION);

        return () => {
            clearTimeout(exitTimer);
        };
    }, []);

    useEffect(() => {
        if (!isExiting) return;

        const closeTimer = setTimeout(() => {
            onClose?.();
        }, EXIT_DURATION);

        return () => {
            clearTimeout(closeTimer);
        };
    }, [isExiting, onClose]);

    return (
        <FeedbackAlertContainer 
        $variant={variant}
        $isExiting={isExiting}
        >
            <FeedbackAlertIcon $variant={variant}>
                <Icon />
            </FeedbackAlertIcon>

            <FeedbackAlertContent>
                <FeedbackAlertTitle $variant={variant}>
                    {title}
                </FeedbackAlertTitle>

                <FeedbackAlertDescription $variant={variant}>
                    {description}
                </FeedbackAlertDescription>
            </FeedbackAlertContent>
        </FeedbackAlertContainer>
    );
};

export default FeedbackAlert;