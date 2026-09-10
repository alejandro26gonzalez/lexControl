import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { breakpoints } from '../../breakpoints';

export const FormContainer = styled.div`
    width: 100%;
    max-width: 560px;

    margin: 0 auto;

    color: ${({ theme }) => theme.colors.text};
`;

export const BackLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;

    gap: 0.5rem;

    margin-bottom: 1.75rem;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.85rem;
    font-weight: 500;

    text-decoration: none;

    transition:
        color 0.2s ease,
        transform 0.2s ease;

    svg {
        width: 17px;
        height: 17px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.text};

        transform: translateX(-2px);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;

        border-radius: ${({ theme }) => theme.borderRadius.small};
    }
`;

export const FormHeader = styled.header`
    margin-bottom: 1.75rem;
`;

export const FormTitle = styled.h1`
    margin: 0 0 0.55rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: clamp(2.5rem, 4vw, 3.4rem);
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    line-height: 1.02;
    letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 2.45rem;
    }
`;

export const FormDescription = styled.p`
    max-width: 550px;

    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
    font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
    line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};

    color: ${({ theme }) => theme.colors.textSecondary};

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
    }
`;

export const Steps = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    margin-bottom: 2rem;
`;

export const Step = styled.div`
    display: flex;
    align-items: center;

    gap: 0.65rem;

    flex-shrink: 0;
`;

export const StepNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    border-radius: 50%;

    background-color: ${({ theme, $active }) =>
        $active
            ? theme.colors.accent
            : theme.colors.surfaceAlt};

    color: ${({ theme, $active }) =>
        $active
            ? theme.colors.white
            : theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.8rem;
    font-weight: 700;
`;

export const StepContent = styled.div`
    display: flex;
    align-items: center;
`;

export const StepLabel = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.78rem;
    font-weight: ${({ $active }) => ($active ? 700 : 500)};
    line-height: 1.2;

    color: ${({ theme, $active }) =>
        $active
            ? theme.colors.text
            : theme.colors.textMuted};

    white-space: nowrap;

    @media (max-width: ${breakpoints.mobile}) {
        display: none;
    }
`;

export const StepLine = styled.span`
    flex: 1;

    height: 1px;

    min-width: 25px;

    margin: 0 0.8rem;

    background-color: ${({ theme }) => theme.colors.border};

    @media (max-width: ${breakpoints.mobile}) {
        margin: 0 0.5rem;
    }
`;

export const RegisterFormElement = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 1rem;
`;

export const FieldsGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 1.05rem 1rem;

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;

        gap: 0.9rem;
    }
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.45rem;

    min-width: 0;
`;

export const FieldLabel = styled.label`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};
`;

export const FieldInput = styled.input`
    width: 100%;
    height: 46px;

    padding: 0 0.9rem;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.small};

    background-color: ${({ theme }) => theme.colors.surface};

    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.86rem;
    line-height: 1.2;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.textSecondary};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.tech};

        box-shadow: 0 0 0 3px rgba(67, 174, 197, 0.1);
    }

    @media (max-width: ${breakpoints.mobile}) {
        height: 44px;

        font-size: 0.84rem;
    }
`;

export const PasswordWrapper = styled.div`
    position: relative;

    width: 100%;

    ${FieldInput} {
        padding-right: 3.5rem;
    }
`;

export const PasswordToggle = styled.button`
    position: absolute;
    top: 50%;
    right: 0.7rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    padding: 0;

    border: none;

    background: transparent;

    color: ${({ theme }) => theme.colors.textMuted};

    cursor: pointer;

    transform: translateY(-50%);

    transition: color 0.2s ease;

    svg {
        width: 19px;
        height: 19px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.text};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 2px;

        border-radius: ${({ theme }) => theme.borderRadius.small};
    }
`;

export const TermsContainer = styled.div`
    display: flex;
    align-items: flex-start;

    gap: 0.6rem;

    margin-top: 0.15rem;
`;

export const TermsCheckbox = styled.input`
    flex-shrink: 0;

    width: 16px;
    height: 16px;

    margin-top: 0.1rem;

    accent-color: ${({ theme }) => theme.colors.accent};

    cursor: pointer;
`;

export const TermsText = styled.label`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.72rem;
    font-weight: 400;
    line-height: 1.45;

    color: ${({ theme }) => theme.colors.textSecondary};

    cursor: pointer;
`;

export const TermsLink = styled.a`
    color: ${({ theme }) => theme.colors.text};

    font-weight: 600;

    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
    }
`;

export const RegisterButton = styled.button`
    width: 100%;
    height: 48px;

    margin-top: 0.2rem;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};

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
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;

    margin: 1.35rem 0;

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
`;

export const LoginRedirect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.3rem;

    margin-top: 1.4rem;
`;

export const LoginText = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.78rem;

    color: ${({ theme }) => theme.colors.textMuted};
`;

export const LoginLink = styled.a`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.78rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.text};

    text-decoration: underline;
    text-underline-offset: 2px;

    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
    }
`;