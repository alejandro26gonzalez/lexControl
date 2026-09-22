import { useCallback, useState } from "react";
import { FEEDBACK_ALERT_CONFIG } from "../config/components/feedback";

const useFeedbackAlert = () => {
    const [feedbackAlert, setFeedbackAlert] = useState(null);

    const showFeedback = useCallback((configKey) => {
        const config = FEEDBACK_ALERT_CONFIG[configKey];

        if (!config) {
            console.warn(
                `FeedbackAlert config "${configKey}" no existe.`
            );
            return;
        }

        setFeedbackAlert(config);
    }, []);

    const showCustomFeedback = useCallback((config) => {
        setFeedbackAlert(config);
    }, []);

    const clearFeedback = useCallback(() => {
        setFeedbackAlert(null);
    }, []);

    return {
        feedbackAlert,
        showFeedback,
        showCustomFeedback,
        clearFeedback,
    };
};

export default useFeedbackAlert;