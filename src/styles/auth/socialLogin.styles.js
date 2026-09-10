import styled from "styled-components";

import { breakpoints } from "../breakpoints";

export const SocialContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const SocialButton = styled.button`
    width: 100%;
    min-height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 0 24px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

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

    ${({ $provider, theme }) =>
        $provider === "google" &&
        `
            background-color: ${theme.colors.white};
            border-color: ${theme.colors.border};
            color: ${theme.colors.text};
        `}

    ${({ $provider }) =>
        $provider === "microsoft" &&
        `
            background-color: #3778ED;
            border-color: #3778ED;
            color: #FFFFFF;
        `}

    ${({ $provider }) =>
        $provider === "apple" &&
        `
            background-color: #000000;
            border-color: #000000;
            color: #FFFFFF;
        `}

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.small};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }

    &:active {
        transform: translateY(1px);
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 52px;

        padding: 0 16px;

        gap: 10px;

        font-size: 0.875rem;
    }

    @media (max-width: 360px) {
        padding: 0 12px;

        gap: 8px;

        font-size: 0.8125rem;
    }
`;

export const GoogleIcon = styled.span`
    flex: 0 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 25px;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 22px;
    }

    @media (max-width: 360px) {
        font-size: 20px;
    }
`;

export const MicrosoftIcon = styled.span`
    flex: 0 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.white};

    font-size: 20px;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 18px;
    }

    @media (max-width: 360px) {
        font-size: 17px;
    }
`;

export const AppleIcon = styled.span`
    flex: 0 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.white};

    font-size: 22px;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
    }

    @media (max-width: 360px) {
        font-size: 18px;
    }
`;