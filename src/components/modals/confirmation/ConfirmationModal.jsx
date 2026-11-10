import {
    FiAlertTriangle,
    FiCheckCircle,
    FiXCircle,
    FiX
} from "react-icons/fi";

import * as S from "./ConfirmationModal.styles";

const VARIANT_ICONS = {
    danger: FiAlertTriangle,
    warning: FiAlertTriangle,
    success: FiCheckCircle
};

const ConfirmationModal = ({
    isOpen = false,
    title = "Confirmar operación",
    description = "",
    confirmText = "Confirmar",
    cancelText = "Cancelar",
    loadingText = "Procesando...",
    variant = "warning",
    loading = false,
    error = "",
    onConfirm,
    onClose,
    showCancel = true
}) => {

    if (!isOpen) return null;

    const Icon = VARIANT_ICONS[variant] || FiXCircle;

    const handleOverlayClick = (event) => {
        if (
            event.target === event.currentTarget &&
            !loading
        ) {
            onClose?.();
        }
    };

    const handleConfirm = () => {
        if (loading) return;
        onConfirm?.();
    };

    return (
        <S.ConfirmOverlay
            onMouseDown={handleOverlayClick}
        >
            <S.ConfirmContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirmation-title"
                aria-describedby="confirmation-description"
            >
                <S.ConfirmHeader>

                    <S.ConfirmIcon $variant={variant}>
                        <Icon size={21} />
                    </S.ConfirmIcon>

                    <div style={{ flex: 1 }}>

                        <S.ConfirmTitle id="confirmation-title">
                            {title}
                        </S.ConfirmTitle>

                        <S.ConfirmDescription id="confirmation-description">
                            {description}
                        </S.ConfirmDescription>

                    </div>

                    <S.ConfirmClose
                        type="button"
                        disabled={loading}
                        onClick={onClose}
                        aria-label="Cerrar confirmación"
                    >
                        <FiX size={19} />
                    </S.ConfirmClose>

                </S.ConfirmHeader>

                {error && (
                    <S.ConfirmError role="alert">
                        {error}
                    </S.ConfirmError>
                )}

                <S.ConfirmActions>

                    {showCancel && (
                        <S.CancelConfirmButton
                            type="button"
                            disabled={loading}
                            onClick={onClose}
                        >
                            {cancelText}
                        </S.CancelConfirmButton>
                    )}

                    <S.ConfirmButton
                        type="button"
                        $variant={variant}
                        disabled={loading}
                        onClick={handleConfirm}
                    >
                        {loading ? loadingText : confirmText}
                    </S.ConfirmButton>

                </S.ConfirmActions>

            </S.ConfirmContainer>
        </S.ConfirmOverlay>
    );
};

export default ConfirmationModal;