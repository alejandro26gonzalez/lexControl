import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from "../breakpoints";

export const DesktopLogin = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const NavbarContainer = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const NavbarContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    min-height: 90px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    @media (max-width: ${breakpoints.laptop}) {
        padding: 0 1.5rem;
        gap: 1.25rem;
    }
    @media (max-width: ${breakpoints.tablet}) {
        min-height: 72px;
        padding: 0 1rem;
    }
`;

export const LogoLink = styled(NavLink)`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
    @media (max-width: ${breakpoints.tablet}) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Logo = styled.img`
    display: block;
    width: auto;
    height: 72px;
    object-fit: contain;
    @media (max-width: ${breakpoints.tablet}) {
        width: 145px;
        height: auto;
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: 130px;
    }
`;

export const NavigationLink = styled(NavLink)`
    position: relative;
    padding: 0.5rem 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.2s ease;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.tech};
        transition: width 0.2s ease;
    }
    &:hover {
        color: ${({ theme }) => theme.colors.tech};
        &::after {
            width: 100%;
        }
    }

    &.active {
        color: ${({ theme }) => theme.colors.tech};
        &::after {
            width: 100%;
        }
    }
`;

export const DesktopNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    margin-left: auto;
    @media (max-width: ${breakpoints.laptop}) {
        gap: 1.25rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const MenuButton = styled.button`
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    border-radius: ${({ theme }) =>
        theme.borderRadius.medium};
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.75rem;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        color 0.2s ease;
    &:hover {
        background-color: ${({ theme }) =>
            theme.colors.surface};

        color: ${({ theme }) =>
            theme.colors.tech};
    }
    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        margin-left: auto;
    }
`;

export const MobileOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(8, 17, 27, 0.45);
    z-index: 1001;
    animation: fadeIn 0.2s ease;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const MobileMenu = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: min(85vw, 380px);
    height: 100vh;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) =>
        theme.colors.white};
    box-shadow: ${({ theme }) =>
        theme.shadows.large};
    z-index: 1002;
    animation: slideIn 0.25s ease;
    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;

export const MobileMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid
        ${({ theme }) => theme.colors.border};
    font-family: ${({ theme }) =>
        theme.typography.fontFamily.heading};
    font-size: 1.75rem;
    font-weight: 600;
    color: ${({ theme }) =>
        theme.colors.primary};
`;

export const MobileNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-top: 1.5rem;
`;

export const MobileNavigationLink = styled(NavLink)`
    display: block;
    padding: 0.9rem 0;
    border-bottom: 1px solid
        ${({ theme }) => theme.colors.border};
    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) =>
        theme.colors.text};
    text-decoration: none;
    transition:
        color 0.2s ease,
        padding-left 0.2s ease;
    &:hover {
        color: ${({ theme }) =>
            theme.colors.tech};

        padding-left: 0.4rem;
    }
    &.active {
        color: ${({ theme }) =>
            theme.colors.tech};
    }
`;

export const MobileLoginButton = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: ${({ theme }) =>
        theme.borderRadius.medium};
    background-color: ${({ theme }) =>
        theme.colors.accent};
    color: ${({ theme }) =>
        theme.colors.white};
    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};
    font-size: ${({ theme }) =>
        theme.typography.button.fontSize};
    font-weight: ${({ theme }) =>
        theme.typography.button.fontWeight};
    text-decoration: none;
    transition: background-color 0.2s ease;
    &:hover {
        background-color: ${({ theme }) =>
            theme.colors.accentHover};
    }
`;