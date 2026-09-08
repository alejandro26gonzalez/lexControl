import styled from 'styled-components';

import { breakpoints } from '../breakpoints';

export const LocationSection = styled.section`
    width: 100%;
    padding: 6rem 0 0;

    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: ${breakpoints.tablet}) {
        padding-top: 5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding-top: 4rem;
    }
`;

export const LocationContainer = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.9fr 1.2fr;

    min-height: 315px;

    overflow: hidden;

    border-radius: ${({ theme }) => theme.borderRadius.medium};

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: 1fr 0.9fr 1fr;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const MapWrapper = styled.div`
    position: relative;

    min-width: 0;
    min-height: 315px;

    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.surfaceAlt};

    @media (max-width: ${breakpoints.tablet}) {
        min-height: 280px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 260px;
    }
`;

export const MapFrame = styled.iframe`
    display: block;

    width: 100%;
    height: 100%;
    min-height: 315px;

    border: 0;

    filter: saturate(0.85);

    @media (max-width: ${breakpoints.tablet}) {
        min-height: 280px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 260px;
    }
`;

export const MapOverlay = styled.div`
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;

    display: inline-flex;
    align-items: center;
    gap: 0.6rem;

    max-width: calc(100% - 2.5rem);

    padding: 0.7rem 1rem;

    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: rgba(255, 255, 255, 0.94);

    box-shadow: 0 4px 16px rgba(8, 17, 27, 0.12);

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};

    svg {
        flex-shrink: 0;

        color: ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: ${breakpoints.mobile}) {
        top: 1rem;
        left: 1rem;

        max-width: calc(100% - 2rem);

        padding: 0.6rem 0.8rem;

        font-size: 0.75rem;
    }
`;

export const MapLink = styled.a`
    position: absolute;
    bottom: 1.25rem;
    left: 1.25rem;

    display: inline-flex;
    align-items: center;

    padding: 0.7rem 1rem;

    border-radius: ${({ theme }) => theme.borderRadius.small};

    background-color: ${({ theme }) => theme.colors.white};

    box-shadow: 0 4px 16px rgba(8, 17, 27, 0.12);

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.2;

    color: ${({ theme }) => theme.colors.text};

    transition:
        background-color 0.2s ease,
        color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        bottom: 1rem;
        left: 1rem;

        padding: 0.6rem 0.8rem;

        font-size: 0.75rem;
    }
`;

export const LocationInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 0;

    padding: 2.5rem;

    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: ${breakpoints.laptop}) {
        padding: 2rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-column: 1 / -1;
        grid-row: 2;

        padding: 2.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-column: auto;
        grid-row: auto;

        padding: 2rem 1.5rem;
    }
`;

export const LocationEyebrow = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.badge.fontSize};
    font-weight: ${({ theme }) => theme.typography.badge.fontWeight};
    line-height: ${({ theme }) => theme.typography.badge.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.badge.letterSpacing};
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.tech};
`;

export const LocationAccent = styled.span`
    display: block;

    width: 44px;
    height: 3px;

    margin: 0.8rem 0 1rem;

    background-color: ${({ theme }) => theme.colors.accent};

    @media (max-width: ${breakpoints.mobile}) {
        width: 36px;

        margin: 0.7rem 0 0.9rem;
    }
`;

export const LocationTitle = styled.h2`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 600;
    line-height: 1;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 2.25rem;
    }
`;

export const LocationDescription = styled.p`
    max-width: 460px;

    margin: 1rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.65;

    color: ${({ theme }) => theme.colors.textSecondary};

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.875rem;
    }
`;

export const LocationAction = styled.div`
    display: flex;

    margin-top: 1.5rem;
`;

export const LocationImage = styled.div`
    min-width: 0;
    min-height: 315px;

    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.surfaceAlt};

    img {
        display: block;

        width: 100%;
        height: 100%;

        object-fit: cover;

        transition: transform 0.5s ease;
    }

    &:hover img {
        transform: scale(1.025);
    }

    @media (max-width: ${breakpoints.tablet}) {
        min-height: 280px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 240px;

        order: 3;
    }
`;

export const Features = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    width: 100%;

    padding: 2rem 0;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);

        row-gap: 2rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;

        padding: 1.5rem 0;
    }
`;

export const Feature = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 0;

    padding: 0 2rem;

    text-align: center;

    & + & {
        border-left: 1px solid ${({ theme }) => theme.colors.border};
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0 1.5rem;

        &:nth-child(3) {
            border-left: none;
        }

        &:nth-child(n + 3) {
            padding-top: 2rem;

            border-top: 1px solid ${({ theme }) => theme.colors.border};
        }
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1rem 1.5rem;

        &:nth-child(n + 3) {
            padding-top: 1.5rem;
        }

        & + & {
            border-left: none;

            border-top: 1px solid ${({ theme }) => theme.colors.border};

            padding-top: 1.5rem;
        }
    }
`;

export const FeatureIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 0.7rem;

    color: ${({ theme }) => theme.colors.primary};

    svg {
        width: 34px;
        height: 34px;

        stroke-width: 1.8;
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin-bottom: 0.6rem;

        svg {
            width: 30px;
            height: 30px;
        }
    }
`;

export const FeatureTitle = styled.h3`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
    }
`;

export const FeatureDescription = styled.p`
    margin: 0.35rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.85rem;
    font-weight: 400;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textMuted};

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.8rem;
    }
`;