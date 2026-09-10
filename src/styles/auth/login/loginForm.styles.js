import styled from "styled-components";

import { breakpoints } from "../../breakpoints";

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;

    margin-bottom: 25px;

    @media (max-width: ${breakpoints.mobile}) {
        margin-bottom: 20px;
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
`;

export const Input = styled.input`
    width: 100%;
    height: 55px;

    box-sizing: border-box;

    padding: 0 20px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    outline: none;

    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    line-height: 1.2;

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
        border-color: ${({ theme }) => theme.colors.accent};

        box-shadow: 0 0 0 3px rgba(182, 154, 106, 0.12);
    }

    &:disabled {
        cursor: not-allowed;

        background-color: ${({ theme }) => theme.colors.surfaceAlt};
        opacity: 0.7;
    }

    @media (max-width: ${breakpoints.mobile}) {
        height: 52px;

        padding: 0 16px;

        font-size: 0.9rem;
    }
`;

export const PasswordContainer = styled.div`
    position: relative;

    width: 100%;

    ${Input} {
        padding-right: 55px;
    }
`;

export const EyeButton = styled.button`
    position: absolute;
    top: 50%;
    right: 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    padding: 0;

    border: none;
    background: transparent;

    color: ${({ theme }) => theme.colors.textMuted};

    font-size: 20px;

    cursor: pointer;

    transform: translateY(-50%);

    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.text};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 2px;

        border-radius: ${({ theme }) => theme.borderRadius.small};
    }

    @media (max-width: ${breakpoints.mobile}) {
        right: 14px;
    }
`;

export const RegisterRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: -5px;
    margin-bottom: 20px;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    line-height: ${({ theme }) => theme.typography.small.lineHeight};

    span {
        color: ${({ theme }) => theme.colors.textMuted};
    }

    @media (max-width: ${breakpoints.mobile}) {
        flex-wrap: wrap;

        margin-bottom: 18px;

        font-size: 0.8rem;
    }
`;

export const RegisterLink = styled.a`
    color: ${({ theme }) => theme.colors.text};

    font-weight: 700;

    text-decoration: underline;
    text-underline-offset: 3px;

    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;

        border-radius: ${({ theme }) => theme.borderRadius.small};
    }
`;

export const OptionsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    line-height: ${({ theme }) => theme.typography.small.lineHeight};

    @media (max-width: ${breakpoints.mobile}) {
        gap: 12px;

        font-size: 0.8rem;
    }
`;

export const Remember = styled.label`
    display: flex;
    align-items: center;

    gap: 8px;

    color: ${({ theme }) => theme.colors.text};

    font-weight: 600;

    cursor: pointer;

    input {
        width: 16px;
        height: 16px;

        margin: 0;

        accent-color: ${({ theme }) => theme.colors.accent};

        cursor: pointer;
    }
`;

export const ForgotLink = styled.a`
    color: ${({ theme }) => theme.colors.text};

    font-weight: 700;

    text-decoration: none;

    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};

        text-decoration: underline;
        text-underline-offset: 3px;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;

        border-radius: ${({ theme }) => theme.borderRadius.small};
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    height: 55px;

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
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
        border-color: ${({ theme }) => theme.colors.primaryHover};

        box-shadow: ${({ theme }) => theme.shadows.small};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }

    &:active {
        transform: translateY(1px);
    }

    &:disabled {
        cursor: not-allowed;

        opacity: 0.6;
    }

    @media (max-width: ${breakpoints.mobile}) {
        height: 52px;
    }
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;

    gap: 15px;

    margin: 22px 0;

    span {
        flex: 1;

        height: 1px;

        background-color: ${({ theme }) => theme.colors.border};
    }

    strong {
        color: ${({ theme }) => theme.colors.text};

        font-family: ${({ theme }) => theme.typography.fontFamily.body};
        font-size: 0.9375rem;
        font-weight: 700;
        line-height: 1.2;
    }

    @media (max-width: ${breakpoints.mobile}) {
        gap: 12px;

        margin: 20px 0;
    }
`;