import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const ContentSplitSection = styled.section`
    width: 100%;
    padding: 7rem 0;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentSplitGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 5rem;
    align-items: center;


    @media (max-width: ${breakpoints.laptop}) {
        gap: 3.5rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 3.5rem;
    }
`;

export const ContentColumn = styled.div`
    width: 100%;

    padding-left: ${({ $imagePosition }) =>
        $imagePosition === 'right' ? '5rem' : '0'};

    padding-right: ${({ $imagePosition }) =>
        $imagePosition === 'left' ? '5rem' : '0'};

    order: ${({ $imagePosition }) =>
        $imagePosition === 'left' ? 2 : 1};
`;

export const VisualColumn = styled.div`
    width: 100%;

    order: ${({ $imagePosition }) =>
        $imagePosition === 'left' ? 1 : 2};
`;

export const ContentBody = styled.div`
    margin-top: 2rem;
`;

export const Paragraph = styled.p`
    max-width: 650px;
    margin: 0 0 1.5rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};

    color: ${({ theme }) => theme.colors.textSecondary};

    &:last-child {
        margin-bottom: 0;
    }
`;

// lista de variacion 1

export const FeaturesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    margin-top: 2rem;
`;

export const Feature = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const FeatureIcon = styled.div`
    flex: 0 0 40px;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};

    font-size: 1.35rem;

    svg {
        width: 22px;
        height: 22px;
    }
`;

export const FeatureLabel = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;

    color: ${({ theme }) => theme.colors.text};
`;

export const ActionWrapper = styled.div`
    margin-top: 2rem;
`;

// imagen 

export const ImageWrapper = styled.div`
    position: relative;

    width: 100%;
    min-height: 460px;

    overflow: visible;

    @media (max-width: ${breakpoints.tablet}) {
        min-height: 360px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 300px;
    }
`;

export const Image = styled.img`
    display: block;

    width: 100%;
    height: 100%;
    min-height: 460px;

    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
        min-height: 360px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 300px;
    }
`;

// badge 

export const Badge = styled.div`
    position: absolute;

    left: -3rem;
    bottom: -2rem;

    z-index: 2;

    width: min(380px, 80%);

    padding: 2rem 3rem;

    border-radius: ${({ theme }) => theme.borderRadius.large};

    background-color: ${({ theme }) => theme.colors.primary};

    box-shadow: ${({ theme }) => theme.shadows?.medium || '0 12px 30px rgba(0, 0, 0, 0.12)'};

    @media (max-width: ${breakpoints.tablet}) {
        left: 1.5rem;
        bottom: -1.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        position: relative;

        left: auto;
        bottom: auto;

        width: 100%;
        margin-top: -2rem;

        padding: 1.5rem;
    }
`;

export const BadgeMark = styled.span`
    display: block;
    margin: 0;
    font-family: ${({ theme }) =>
        theme.typography.fontFamily.heading};
    font-size: clamp(5rem, 7vw, 7rem);
    font-weight: 600;
    line-height: 0.5;
    color: ${({ theme }) => theme.colors.accent};
    user-select: none;
`;

export const BadgeQuote = styled.p`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.45;

    color: ${({ theme }) => theme.colors.white};
`;

export const BadgeLogo = styled.span`
    display: block;

    margin-top: 1rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 1.5rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.white};
`;

export const BadgeLine = styled.span`
    display: block;

    width: 85px;
    height: 3px;

    margin-top: 0.75rem;

    background-color: ${({ theme }) => theme.colors.accent};
`;