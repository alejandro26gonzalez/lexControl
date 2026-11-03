import { useCallback, useState, useEffect } from "react";
import { FEEDBACK_ALERT_CONFIG } from "../config/components/feedback";

const useFeedbackAlert = (duration = 4000) => {
    const [feedbackAlert, setFeedbackAlert] = useState(null);

    const showFeedback = useCallback((code) => {
        const config = FEEDBACK_ALERT_CONFIG[code];

        if (!config) {
            console.warn(
                `FeedbackAlert config "${code}" no existe.`
            );

            setFeedbackAlert(FEEDBACK_ALERT_CONFIG.UNKNOWN_ERROR);
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

    useEffect(() => {
        if (!feedbackAlert) return;

        const timeoutId = setTimeout(() => {
            setFeedbackAlert(null);
        }, duration);

        return () => clearTimeout(timeoutId);
    }, [feedbackAlert, duration]);

    return {
        feedbackAlert,
        showFeedback,
        showCustomFeedback,
        clearFeedback,
    };
};

export default useFeedbackAlert;