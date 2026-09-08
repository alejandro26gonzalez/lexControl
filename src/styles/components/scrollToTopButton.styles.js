import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const ScrollButton = styled.button`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    z-index: 1000;

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    box-shadow: ${({ theme }) => theme.shadows.medium};

    cursor: pointer;

    animation: scrollToTopAppear 0.25s ease-out;

    transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
        border-color: ${({ theme }) => theme.colors.primaryHover};

        transform: translateY(-3px);

        box-shadow: ${({ theme }) => theme.shadows.large};
    }

    &:active {
        transform: translateY(-1px);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }

    @keyframes scrollToTopAppear {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        right: 1.5rem;
        bottom: 1.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        right: 1rem;
        bottom: 1rem;

        width: 44px;
        height: 44px;
    }
`;

export const ScrollIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.25rem;

    transition: transform 0.2s ease;

    ${ScrollButton}:hover & {
        transform: translateY(-2px);
    }
`;