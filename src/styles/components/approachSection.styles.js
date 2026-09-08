import styled from 'styled-components';

import { breakpoints } from '../breakpoints';

export const ApproachSectionContainer = styled.section`
    width: 100%;
    padding: 7rem 0;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ApproachGrid = styled.div`
    display: grid;
    grid-template-columns:
        minmax(0, 1fr)
        minmax(0, 1.05fr)
        minmax(0, 0.95fr);

    align-items: stretch;
    gap: 3.5rem;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr)
            minmax(0, 0.9fr);

        gap: 2.5rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 4rem;
    }
`;

export const ApproachIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-right: 1rem;
    padding-left: 5rem;

    > p {
        max-width: 500px;
        margin: 2rem 0 2rem;

        font-family: ${({ theme }) => theme.typography.fontFamily.body};
        font-size: ${({ theme }) => theme.typography.body.fontSize};
        font-weight: ${({ theme }) => theme.typography.body.fontWeight};
        line-height: ${({ theme }) => theme.typography.body.lineHeight};

        color: ${({ theme }) => theme.colors.textSecondary};
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding-right: 0;

        > p {
            max-width: 100%;
        }
    }
`;

export const ApproachFeatures = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100%;

    padding-left: 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: ${breakpoints.tablet}) {
        padding-left: 0;
        border-left: none;

        gap: 2.5rem;
    }
`;

export const ApproachFeature = styled.article`
    display: flex;
    align-items: flex-start;

    gap: 1rem;
`;

export const ApproachFeatureIcon = styled.div`
    flex: 0 0 48px;

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.accent};

    font-size: 2.8rem;

    svg {
        width: 100%;
        height: 100%;
        stroke-width: 1.5;
    }
`;

export const ApproachFeatureContent = styled.div`
    padding-top: 0.15rem;
`;

export const ApproachFeatureTitle = styled.h3`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};
`;

export const ApproachFeatureDescription = styled.p`
    margin: 0.35rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: ${({ theme }) => theme.typography.small.fontWeight};
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ApproachVisual = styled.div`
    position: relative;
    min-height: 380px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.primary};
    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        display: none;
    }
    @media (max-width: ${breakpoints.mobile}) {
        min-height: 340px;
    }
`;

export const ApproachImage = styled.img`
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const ApproachOverlay = styled.div`
    position: absolute;
    inset: 0;

    background: linear-gradient(
        to bottom,
        rgba(8, 17, 27, 0.35),
        rgba(8, 17, 27, 0.7)
    );
`;

export const ApproachQuote = styled.div`
    position: absolute;
    left: 3rem;
    right: 2rem;
    bottom: 3rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    z-index: 1;

    span {
        max-width: 420px;

        font-family: ${({ theme }) => theme.typography.fontFamily.heading};
        font-size: clamp(2rem, 3vw, 3rem);
        font-weight: 600;
        line-height: 1.05;

        color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: ${breakpoints.mobile}) {
        left: 1.5rem;
        right: 1.5rem;
        bottom: 2rem;

        span {
            font-size: 2rem;
        }
    }
`;

export const ApproachQuoteLine = styled.span`
    display: block;

    width: 125px;
    height: 3px;

    margin-top: 1.5rem;

    background-color: ${({ theme }) => theme.colors.accent};
`;