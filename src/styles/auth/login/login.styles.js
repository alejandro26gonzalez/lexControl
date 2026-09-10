import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { breakpoints } from "../../breakpoints";

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
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
        align-items: center;

        text-align: center;
    }
`;

export const PageContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 100%;
    min-height: 100vh;

    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: 0.95fr 1.05fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 100svh;

        padding: 0.75rem;
    }
`;

export const ImageSection = styled.section`
    position: relative;

    min-width: 0;
    min-height: calc(100vh - 2rem);

    overflow: hidden;

    border-radius: ${({ theme }) => theme.borderRadius.large};

    background-image: url("/src/assets/images/auth/sider_auth.png");
    background-size: cover;
    background-position: center;

    &::after {
        content: "";

        position: absolute;
        inset: 0;

        background:
            linear-gradient(
                90deg,
                rgba(8, 17, 27, 0.08),
                rgba(8, 17, 27, 0.02)
            );

        pointer-events: none;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

export const FormSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 0;
    min-height: calc(100vh - 2rem);

    padding: 3rem 4.5rem;

    border-radius: ${({ theme }) => theme.borderRadius.large};

    background-color: ${({ theme }) => theme.colors.surface};

    @media (max-width: ${breakpoints.laptop}) {
        padding: 3rem;
    }

    @media (max-width: 900px) {
        min-height: calc(100vh - 2rem);

        padding: 3rem 4rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 3rem 2.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: calc(100svh - 1.5rem);

        padding: 2rem 1.25rem;

        border-radius: ${({ theme }) => theme.borderRadius.medium};
    }
`;

export const LoginContent = styled.div`
    width: 100%;
    max-width: 550px;

    margin: 0 auto;
`;

export const Title = styled.h1`
    margin: 1.5rem 0 1rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: clamp(2.75rem, 4vw, 3.75rem);
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 1.25rem;

        font-size: clamp(2.5rem, 7vw, 3.5rem);
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 1rem;

        font-size: 2.5rem;
    }
`;

export const Description = styled.p`
    max-width: 500px;

    margin: 0 0 2rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
    font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
    line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};

    color: ${({ theme }) => theme.colors.textSecondary};

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 580px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin-bottom: 1.5rem;

        font-size: 1rem;
        line-height: 1.55;
    }
`;