import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { breakpoints } from '../breakpoints';

export const FooterContainer = styled.footer`
    width: 100%;

    background-color: ${({ theme }) =>
        theme.colors.background};

    color: ${({ theme }) =>
        theme.colors.text};
`;

export const FooterContent = styled.div`
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;

    padding: 3rem 3.5rem 2rem;

    @media (max-width: ${breakpoints.laptop}) {
        padding: 2.5rem 2rem 1.75rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 2.5rem 1.5rem 1.5rem;
    }
`;

export const FooterTop = styled.div`
    display: grid;

    grid-template-columns:
        auto
        1fr
        auto
        auto;

    align-items: center;

    gap: 2.5rem;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns:
            auto
            1fr
            auto;

        gap: 1.5rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;

        align-items: center;

        text-align: center;

        gap: 1.5rem;
    }
`;

export const LogoLink = styled(NavLink)`
    display: flex;
    align-items: center;

    flex-shrink: 0;

    text-decoration: none;
`;

export const Logo = styled.img`
    display: block;

    width: auto;
    height: 74px;

    object-fit: contain;

    @media (max-width: ${breakpoints.laptop}) {
        height: 62px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        height: 58px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        height: 52px;
    }
`;

export const Navigation = styled.nav`
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 2.25rem;

    @media (max-width: ${breakpoints.laptop}) {
        gap: 1.25rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;

        flex-wrap: wrap;

        gap: 0.75rem 1.5rem;
    }
`;

export const NavigationLink = styled(NavLink)`
    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: ${({ theme }) =>
        theme.typography.small.fontSize};

    font-weight: 600;

    color: ${({ theme }) =>
        theme.colors.textSecondary};

    text-decoration: none;

    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) =>
            theme.colors.tech};
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.875rem;
    }
`;

export const SocialLinks = styled.div`
    display: flex;

    align-items: center;

    gap: 1rem;

    padding-left: 1.5rem;

    border-left: 1px solid
        ${({ theme }) => theme.colors.border};

    @media (max-width: ${breakpoints.laptop}) {
        padding-left: 1rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding-left: 0;

        padding-top: 1.25rem;

        border-left: none;

        border-top: 1px solid
            ${({ theme }) => theme.colors.border};
    }
`;

export const SocialLink = styled.a`
    display: flex;

    align-items: center;
    justify-content: center;

    width: 42px;
    height: 42px;

    color: ${({ theme }) =>
        theme.colors.text};

    font-size: 1.65rem;

    text-decoration: none;

    transition:
        color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        color: ${({ theme }) =>
            theme.colors.tech};

        transform: translateY(-2px);
    }
`;

export const FooterMessage = styled.p`
    max-width: 190px;

    margin: 0;

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: ${({ theme }) =>
        theme.typography.small.fontSize};

    font-weight: 600;

    line-height: 1.45;

    color: ${({ theme }) =>
        theme.colors.text};

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 280px;
    }
`;

export const Divider = styled.hr`
    width: 100%;

    margin: 2rem 0 1.5rem;

    border: 0;
    border-top: 1px solid
        ${({ theme }) => theme.colors.border};

    @media (max-width: ${breakpoints.tablet}) {
        margin: 1.75rem 0 1.25rem;
    }
`;

export const FooterBottom = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;

        text-align: center;

        gap: 1.25rem;
    }
`;

export const Copyright = styled.p`
    margin: 0;

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: ${({ theme }) =>
        theme.typography.small.fontSize};

    line-height: 1.5;

    color: ${({ theme }) =>
        theme.colors.textSecondary};
`;

export const LegalNavigation = styled.nav`
    display: flex;

    align-items: center;

    gap: 0;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;

        gap: 0.75rem;
    }
`;

export const LegalLink = styled(NavLink)`
    padding: 0 1.5rem;

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: ${({ theme }) =>
        theme.typography.small.fontSize};

    color: ${({ theme }) =>
        theme.colors.textSecondary};

    text-decoration: none;

    transition: color 0.2s ease;

    &:not(:last-child) {
        border-right: 1px solid
            ${({ theme }) => theme.colors.border};
    }

    &:hover {
        color: ${({ theme }) =>
            theme.colors.tech};
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0;

        &:not(:last-child) {
            border-right: none;
        }
    }
`;