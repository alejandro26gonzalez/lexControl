import styled from 'styled-components';

import { breakpoints } from '../../breakpoints';

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 0;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    width: 100%;

    margin-bottom: 1.35rem;
`;

export const Label = styled.label`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
    width: 100%;
    height: 52px;

    box-sizing: border-box;

    padding: 0 1rem;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.2;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        background-color 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.textSecondary};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.tech};

        background-color: ${({ theme }) => theme.colors.background};

        box-shadow: 0 0 0 3px rgba(67, 174, 197, 0.1);
    }

    &:disabled {
        opacity: 0.6;

        cursor: not-allowed;
    }

    @media (max-width: ${breakpoints.mobile}) {
        height: 48px;

        padding: 0 0.9rem;

        font-size: 0.9rem;
    }
`;

export const PasswordContainer = styled.div`
    position: relative;

    width: 100%;

    ${Input} {
        padding-right: 3.5rem;
    }
`;

export const EyeButton = styled.button`
    position: absolute;

    top: 50%;
    right: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    padding: 0;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};

    background-color: transparent;

    color: ${({ theme }) => theme.colors.textMuted};

    transform: translateY(-50%);

    cursor: pointer;

    transition:
        color 0.2s ease,
        background-color 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.text};

        background-color: ${({ theme }) => theme.colors.surfaceAlt};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 2px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        right: 0.6rem;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    min-height: 52px;

    padding: 0 1.5rem;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    line-height: ${({ theme }) => theme.typography.button.lineHeight};

    cursor: pointer;

    transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
        border-color: ${({ theme }) => theme.colors.primaryHover};

        box-shadow: ${({ theme }) => theme.shadows.small};
    }

    &:active {
        transform: translateY(1px);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }

    &:disabled {
        opacity: 0.55;

        cursor: not-allowed;

        transform: none;

        box-shadow: none;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 48px;

        padding: 0 1rem;
    }
`;

export const LoginRedirect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    gap: 0.35rem;

    margin-top: 1.5rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.82rem;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textMuted};

    a,
    button {
        padding: 0;

        border: none;

        background: transparent;

        color: ${({ theme }) => theme.colors.text};

        font-family: inherit;
        font-size: inherit;
        font-weight: 700;

        text-decoration: underline;
        text-underline-offset: 3px;

        cursor: pointer;

        transition: color 0.2s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.accentHover};
        }

        &:focus-visible {
            outline: 2px solid ${({ theme }) => theme.colors.tech};
            outline-offset: 3px;

            border-radius: ${({ theme }) => theme.borderRadius.small};
        }
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 1.25rem;

        font-size: 0.78rem;
    }
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    gap: 1rem;

    margin: 1.5rem 0;

    span {
        flex: 1;

        height: 1px;

        background-color: ${({ theme }) => theme.colors.border};
    }

    strong {
        color: ${({ theme }) => theme.colors.text};

        font-family: ${({ theme }) => theme.typography.fontFamily.body};
        font-size: 0.85rem;
        font-weight: 700;
    }

    @media (max-width: ${breakpoints.mobile}) {
        gap: 0.75rem;

        margin: 1.25rem 0;
    }
`;



// estilos del codigo de confirmacion

