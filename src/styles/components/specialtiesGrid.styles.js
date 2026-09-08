import styled from 'styled-components';

import { breakpoints } from '../breakpoints';

export const SpecialtiesSection = styled.section`
    width: 100%;
    padding: 4rem 0;

    background-color: ${({ theme }) => theme.colors.background};
`;
export const SpecialtiesHeader = styled.div`
    margin-bottom: 4rem;
`;
export const SpecialtiesGridContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(3, minmax(0, 1fr));

    gap: 2rem 2rem;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

        gap: 1.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;
export const SpecialtyImage = styled.img`
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.45s ease;
`;
export const SpecialtyCard = styled.article`
    display: flex;
    flex-direction: column;

    min-width: 0;
    min-height: 410px;

    overflow: hidden;
    cursor: pointer;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.background};

    box-shadow: 0 2px 8px rgba(8, 17, 27, 0.12);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 24px rgba(8, 17, 27, 0.16);
    }

    &:hover ${SpecialtyImage} {
        transform: scale(1.045);
    }
`;
export const SpecialtyImageWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 165px;

    overflow: visible;
`;
export const SpecialtyIcon = styled.div`
    position: absolute;

    left: 1rem;
    bottom: -32px;

    z-index: 2;

    width: 64px;
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.surfaceAlt};

    color: ${({ theme }) => theme.colors.primary};

    font-size: 2.25rem;

    box-shadow: 0 2px 6px rgba(8, 17, 27, 0.08);

    svg {
        width: 38px;
        height: 38px;

        stroke-width: 1.5;
    }
`;
export const SpecialtyImageContainer = styled.div`
    width: 100%;
    height: 100%;

    overflow: hidden;

    border-radius: ${({ theme }) => theme.borderRadius.medium}
        ${({ theme }) => theme.borderRadius.medium}
        0
        0;
`;
export const SpecialtyContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 1;

    padding: 3rem 1.5rem 1.25rem;
`;
export const SpecialtyTitle = styled.h3`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};
`;
export const SpecialtyDescription = styled.p`
    margin: 0.75rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textSecondary};
`;