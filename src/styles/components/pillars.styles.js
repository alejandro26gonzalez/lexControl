import styled from 'styled-components';

import { breakpoints } from '../breakpoints';

export const PillarsSection = styled.section`
    width: 100%;

    padding: 6rem 0 7rem;

    background-color: ${({ theme }) => theme.colors.primary};
`;

export const PillarsHeader = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 4rem;

    text-align: center;

    ${/* SectionHeader internamente */''}

    > div {
        align-items: center;
    }
`;

export const PillarsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 2.5rem;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const PillarCard = styled.article`
    min-height: 215px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.75rem 2rem;

    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.surfaceBlue};

    text-align: center;
`;

export const PillarIcon = styled.div`
    width: 58px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;

    color: ${({ theme }) => theme.colors.primary};

    font-size: 3.25rem;

    svg {
        width: 100%;
        height: 100%;
        stroke-width: 1.5;
    }
`;

export const PillarTitle = styled.h3`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.primary};
`;

export const PillarDescription = styled.p`
    max-width: 280px;

    margin: 0.75rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: ${({ theme }) => theme.typography.small.fontWeight};
    line-height: 1.45;

    color: ${({ theme }) => theme.colors.primary};
`;