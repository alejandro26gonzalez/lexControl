import styled from 'styled-components';

import { breakpoints } from '../../breakpoints';

export const RegistryContainer = styled.main`
    display: grid;

    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

    width: 100%;
    min-height: 100vh;

    gap: 1rem;

    padding: 1rem;

    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: minmax(360px, 0.9fr) minmax(0, 1.1fr);

        gap: 0;
        padding: 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: block;

        min-height: 100vh;

        overflow: visible;
    }
`;

export const RegistryImpact = styled.section`
    position: relative;

    min-width: 0;
    min-height: calc(100vh - 2rem);

    overflow: hidden;

    border-radius: ${({ theme }) => theme.borderRadius.large};

    @media (max-width: ${breakpoints.laptop}) {
        min-height: 100vh;

        border-radius: 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const RegistryContent = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 0;
    min-height: calc(100vh - 2rem);

    padding: 3rem 4rem;

    overflow-y: auto;

    border-radius: ${({ theme }) => theme.borderRadius.large};

    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: ${breakpoints.laptop}) {
        min-height: 100vh;

        padding: 3rem;

        border-radius: 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
        min-height: 100vh;

        padding: 3rem 2.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 2rem 1.25rem;
    }
`;