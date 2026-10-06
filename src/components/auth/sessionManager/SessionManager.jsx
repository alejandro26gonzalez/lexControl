import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import FeedbackAlert from "../../feedbackAlert/FeedbackAlert";
import useFeedbackAlert from "../../../hooks/useFeedbackAlert";

const WARNING_TIME = 10 * 60 * 1000;
const CRITICAL_TIME = 1 * 60 * 1000;

const SessionManager = () => {
    const [expirationPending, setExpirationPending] = useState(false);

    const {
        isAuthenticated,
        expiresAt,
        clearAuthentication
    } = useAuth();

    const {
        feedbackAlert,
        showFeedback,
        clearFeedback
    } = useFeedbackAlert();

    useEffect(() => {
        /*
         * Si no existe una sesión activa,
         * no hay nada que administrar.
         */
        if (!isAuthenticated || !expiresAt) {
            setExpirationPending(false);
            return;
        }

        /*
         * Una nueva sesión comienza.
         * La expiración pendiente de una sesión
         * anterior ya no aplica.
         */
        setExpirationPending(false);

        const expirationTime = new Date(expiresAt).getTime();
        const now = Date.now();

        const remainingTime = expirationTime - now;

        /*
         * Si la sesión ya estaba expirada cuando
         * SessionManager recibió expiresAt.
         */
        if (remainingTime <= 0) {
            setExpirationPending(true);
            showFeedback("SESSION_EXPIRED");

            return;
        }

        /*
         * Si la sesión ya está dentro de alguno
         * de los períodos de advertencia al montar
         * el componente.
         */
        if (remainingTime <= CRITICAL_TIME) {
            showFeedback("SESSION_EXPIRING_CRITICAL");
        } else if (remainingTime <= WARNING_TIME) {
            showFeedback("SESSION_EXPIRING_SOON");
        }

        /*
         * Tiempo restante hasta cada evento.
         */
        const warningDelay = remainingTime - WARNING_TIME;
        const criticalDelay = remainingTime - CRITICAL_TIME;
        const expirationDelay = remainingTime;

        /*
         * Advertencia de 10 minutos.
         */
        const warningTimer =
            warningDelay > 0
                ? setTimeout(() => {
                    showFeedback("SESSION_EXPIRING_SOON");
                }, warningDelay)
                : null;

        /*
         * Advertencia crítica de 1 minuto.
         */
        const criticalTimer =
            criticalDelay > 0
                ? setTimeout(() => {
                    showFeedback("SESSION_EXPIRING_CRITICAL");
                }, criticalDelay)
                : null;

        /*
         * Expiración real.
         *
         * NO limpiamos inmediatamente la autenticación.
         * Primero mostramos el aviso y dejamos que
         * FeedbackAlert complete su ciclo.
         */
        const expirationTimer = setTimeout(() => {

            setExpirationPending(true);
            showFeedback("SESSION_EXPIRED");

        }, expirationDelay);

        /*
         * Limpieza de timers.
         */
        return () => {
            if (warningTimer) {
                clearTimeout(warningTimer);
            }

            if (criticalTimer) {
                clearTimeout(criticalTimer);
            }

            clearTimeout(expirationTimer);
        };

    }, [
        isAuthenticated,
        expiresAt,
        clearAuthentication,
        showFeedback
    ]);

    /*
     * Se ejecuta cuando FeedbackAlert desaparece
     * o cuando el usuario lo cierra manualmente.
     */
    const handleFeedbackClose = () => {
        clearFeedback();

        /*
         * Solamente SESSION_EXPIRED provoca
         * el cierre del estado de autenticación.
         */
        if (expirationPending) {
            setExpirationPending(false);
            clearAuthentication();
        }
    };

    return feedbackAlert ? (
        <FeedbackAlert
            config={feedbackAlert}
            onClose={handleFeedbackClose}
        />
    ) : null;
};

export default SessionManager;