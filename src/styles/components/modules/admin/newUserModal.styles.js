
import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1200;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 24px;

    background: rgba(8, 17, 27, 0.62);
    backdrop-filter: blur(5px);

    animation: overlayIn 0.2s ease;

    @keyframes overlayIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @media (max-width: 600px) {
        padding: 12px;
        align-items: flex-end;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 650px;
    max-height: min(90vh, 820px);

    overflow: hidden;

    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;

    box-shadow: 0 24px 80px rgba(8, 17, 27, 0.24);

    animation: modalIn 0.25s ease;

    @keyframes modalIn {
        from {
            opacity: 0;
            transform: translateY(12px) scale(0.99);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @media (max-width: 600px) {
        max-height: 94vh;
        border-radius: 16px 16px 0 0;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 15px;

    padding: 25px 28px 22px;

    background: ${({ theme }) => theme.colors.surface};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 46px;
    height: 46px;

    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.surfaceAlt};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
`;

export const HeaderText = styled.div`
    flex: 1;
    min-width: 0;
`;

export const ModalTitle = styled.h2`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 1.85rem;
    font-weight: 600;
    line-height: 1.1;
`;

export const ModalDescription = styled.p`
    margin: 6px 0 0;

    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.84rem;
    line-height: 1.5;
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 36px;
    height: 36px;

    border: none;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceAlt};
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const ModalBody = styled.div`
    padding: 25px 28px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.border};
        border-radius: 10px;
    }
`;

export const SectionHeading = styled.h3`
    display: flex;
    align-items: center;
    gap: 9px;

    margin: 0 0 19px;

    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    font-weight: 700;

    svg {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px 16px;

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    min-width: 0;

    ${({ $fullWidth }) => $fullWidth && `
        grid-column: 1 / -1;
    `}
`;

export const FieldLabel = styled.label`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.78rem;
    font-weight: 700;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    min-height: 44px;
    padding: 0 12px;

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.textMuted};

    &:focus-within {
        border-color: ${({ theme }) => theme.colors.tech};
        box-shadow: 0 0 0 3px rgba(67, 174, 197, 0.12);
    }

    svg {
        flex-shrink: 0;
    }
`;

export const FieldInput = styled.input`
    width: 100%;
    min-width: 0;
    height: 44px;

    padding: 0 12px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    outline: none;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.84rem;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
        opacity: 0.75;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.tech};
        box-shadow: 0 0 0 3px rgba(67, 174, 197, 0.12);
    }

    ${InputWrapper} & {
        height: auto;
        padding: 0;
        border: none;
        box-shadow: none;
        background: transparent;
    }
`;

export const SelectWrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    svg {
        position: absolute;
        right: 13px;
        pointer-events: none;
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;

export const FieldSelect = styled.select`
    width: 100%;
    height: 44px;

    padding: 0 38px 0 12px;

    appearance: none;
    outline: none;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.84rem;

    cursor: pointer;

    &:focus {
        border-color: ${({ theme }) => theme.colors.tech};
        box-shadow: 0 0 0 3px rgba(67, 174, 197, 0.12);
    }
`;

export const FieldHint = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.72rem;
    line-height: 1.5;
`;

export const SectionDivider = styled.div`
    height: 1px;
    margin: 25px 0;

    background: ${({ theme }) => theme.colors.border};
`;

export const RoleNotice = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;

    margin-top: 19px;
    padding: 13px 14px;

    background: ${({ theme }) => theme.colors.surfaceAlt};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-left: 3px solid ${({ theme }) => theme.colors.accent};
    border-radius: 7px;

    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.76rem;
    line-height: 1.55;

    svg {
        flex-shrink: 0;
        margin-top: 1px;
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    padding: 18px 28px;

    background: ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 420px) {
        padding: 15px;
    }
`;

export const CancelButton = styled.button`
    min-height: 42px;
    padding: 0 18px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.83rem;
    font-weight: 600;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }
`;

export const SubmitButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    min-height: 42px;
    padding: 0 19px;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.83rem;
    font-weight: 700;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
        border-color: ${({ theme }) => theme.colors.primaryHover};
    }

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;
