import styled from "styled-components";

// =====================================================
// VARIANTES
// =====================================================

const getVariantColor = ({ $variant, theme }) => {
    switch ($variant) {
        case "danger":
            return theme.colors.error;

        case "success":
            return theme.colors.success;

        case "warning":
        default:
            return theme.colors.accent;
    }
};

const getVariantBackground = ({ $variant, theme }) => {
    switch ($variant) {
        case "danger":
            return theme.colors.feedback.error.background;

        case "success":
            return theme.colors.feedback.success.background;

        case "warning":
        default:
            return theme.colors.surfaceAlt;
    }
};

// =====================================================
// OVERLAY
// =====================================================

export const ConfirmOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1300;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background: rgba(8, 17, 27, 0.62);
    backdrop-filter: blur(4px);
`;

// =====================================================
// CONTAINER
// =====================================================

export const ConfirmContainer = styled.div`
    width: 100%;
    max-width: 430px;
    max-height: calc(100vh - 40px);

    padding: 26px;

    overflow-y: auto;

    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;

    box-shadow: 0 20px 60px rgba(8, 17, 27, 0.22);

    animation: confirmAppear 0.2s ease-out;

    @keyframes confirmAppear {
        from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
        }

        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @media (max-width: 480px) {
        padding: 22px;
    }
`;

// =====================================================
// HEADER
// =====================================================

export const ConfirmHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 14px;
`;

export const ConfirmIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 44px;
    height: 44px;

    color: ${getVariantColor};
    background: ${getVariantBackground};

    border-radius: 11px;
`;

export const ConfirmTitle = styled.h3`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.heading};

    font-size: 1.35rem;
    font-weight: 600;
    line-height: 1.3;
`;

export const ConfirmDescription = styled.p`
    margin: 7px 0 0;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: 0.84rem;
    line-height: 1.6;

    strong {
        color: ${({ theme }) => theme.colors.text};
        font-weight: 600;
    }
`;

// =====================================================
// CLOSE BUTTON
// =====================================================

export const ConfirmClose = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    margin-left: auto;
    padding: 5px;

    border: none;
    border-radius: 6px;

    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};

    cursor: pointer;

    transition: background 0.2s ease;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;

// =====================================================
// ERROR MESSAGE
// =====================================================

export const ConfirmError = styled.p`
    margin: 18px 0 0;
    padding: 10px 12px;

    border-radius: 7px;

    background: ${({ theme }) =>
        theme.colors.feedback.error.background};

    color: ${({ theme }) => theme.colors.error};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: 0.82rem;
    line-height: 1.5;
`;

// =====================================================
// ACTIONS
// =====================================================

export const ConfirmActions = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 10px;

    margin-top: 26px;
`;

// =====================================================
// CONFIRM BUTTON
// =====================================================

export const ConfirmButton = styled.button`
    min-height: 40px;
    padding: 0 16px;

    border: 1px solid ${getVariantColor};
    border-radius: 8px;

    background: ${getVariantColor};
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: 0.82rem;
    font-weight: 700;

    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover:not(:disabled) {
        opacity: 0.88;
    }

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;

// =====================================================
// CANCEL BUTTON
// =====================================================

export const CancelConfirmButton = styled.button`
    min-height: 40px;
    padding: 0 16px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: 0.82rem;
    font-weight: 600;

    cursor: pointer;
    transition: background 0.2s ease;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;