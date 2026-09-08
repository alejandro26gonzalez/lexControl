import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ $align }) =>
        $align === 'center' ? 'center' : 'flex-start'};

    text-align: ${({ $align }) =>
        $align === 'center' ? 'center' : 'left'};
        
    width: 100%;
`;

export const Eyebrow = styled.span`
    position: relative;

    display: inline-block;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.badge.fontSize};
    font-weight: ${({ theme }) => theme.typography.badge.fontWeight};
    line-height: ${({ theme }) => theme.typography.badge.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.badge.letterSpacing};
    text-transform: ${({ theme }) => theme.typography.badge.textTransform};

    color: ${({ theme }) => theme.colors.tech};

    &::after {
        content: '';

        position: absolute;
        bottom: 0;
        left: 0;

        width: 90px;
        height: 3px;

        background-color: ${({ theme }) => theme.colors.tech};
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 0.875rem;
        padding-bottom: 0.65rem;
    }
`;

export const Title = styled.h1`
    max-width: 1100px;
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({theme, $size}) =>
        $size === 'medium'
            ? theme.typography.sectionTitle.fontSize
            : theme.typography.h1.fontSize
    };
    font-weight: ${({ theme, $size }) =>
        $size === 'medium'
            ? theme.typography.sectionTitle.fontWeight
            : theme.typography.h1.fontWeight};
    line-height: ${({ theme, $size }) =>
        $size === 'medium'
            ? theme.typography.sectionTitle.lineHeight
            : theme.typography.h1.lineHeight};

    letter-spacing: ${({ theme, $size }) =>
        $size === 'medium'
            ? theme.typography.sectionTitle.letterSpacing
            : theme.typography.h1.letterSpacing};

    color: ${({ theme, $variant }) =>
        $variant === 'dark'
            ? theme.colors.white
            : theme.colors.text};

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%;
    }
`;

export const Description = styled.p`
    max-width: 680px;
    margin: 1.5rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};

    color: ${({ theme, $variant }) =>
        $variant === 'dark'
            ? theme.colors.white
            : theme.colors.textSecondary};

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 1.25rem;
        max-width: 100%;
    }
`;

export const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100svh - 80px);
    display: flex;
    align-items: center;

    /* overflow: hidden; */

    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ $background }) =>
        $background ? `url(${$background})` : 'none'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: ${breakpoints.tablet}) {
        min-height: calc(100vh - 72px);
        align-items: flex-end;
        background-position: center;
    }
    @media (max-width: ${breakpoints.mobile}) {
        min-height: calc(100vh - 64px);
    }
`;

export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;

    pointer-events: none;

    background: ${({ $variant }) =>
        $variant === 'dark'
            ? `
                linear-gradient(
                    90deg,
                    rgba(8, 17, 27, 0.98) 0%,
                    rgba(8, 17, 27, 0.88) 35%,
                    rgba(8, 17, 27, 0.42) 65%,
                    rgba(8, 17, 27, 0.08) 100%
                )
            `
            : `
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.98) 0%,
                    rgba(255, 255, 255, 0.94) 35%,
                    rgba(255, 255, 255, 0.55) 65%,
                    rgba(255, 255, 255, 0.08) 100%
                )
            `};

    @media (max-width: ${breakpoints.tablet}) {
        background: ${({ $variant }) =>
            $variant === 'dark'
                ? `
                    linear-gradient(
                        180deg,
                        rgba(8, 17, 27, 0.72) 0%,
                        rgba(8, 17, 27, 0.92) 75%,
                        rgba(8, 17, 27, 0.98) 100%
                    )
                `
                : `
                    linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0.25) 0%,
                        rgba(255, 255, 255, 0.9) 70%,
                        rgba(255, 255, 255, 0.98) 100%
                    )
                `};
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1440px;
    min-height: 100%;
    margin: 0 auto;
    padding: 5rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    @media (max-width: ${breakpoints.laptop}) {
        padding: 4rem 3.5rem;
    }
    @media (min-width: ${breakpoints.tablet}) {
        ${({ $hasQuote }) =>
            $hasQuote &&
            `
                grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
                column-gap: 5rem;
            `}
    }
    @media (max-width: ${breakpoints.tablet}) {
        padding: 4rem 2rem 3.5rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
        padding: 3rem 1.5rem 2.5rem;
    }
`;

export const HeroMain = styled.div`
    width: 100%;
    max-width: 720px;
`;

export const HeroActions = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 1rem;

    margin-top: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin-top: 1.75rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const QuoteContent = styled.div`
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-self: end;
    padding-left: 1rem;
    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const QuoteMark = styled.span`
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

export const QuoteText = styled.p`
    max-width: 520px;

    margin: 1.5rem 0 0;

    font-family: ${({ theme }) =>
        theme.typography.quote.fontFamily};

    font-size: ${({ theme }) =>
        theme.typography.quote.fontSize};

    font-weight: ${({ theme }) =>
        theme.typography.quote.fontWeight};

    font-style: ${({ theme }) =>
        theme.typography.quote.fontStyle};

    line-height: ${({ theme }) =>
        theme.typography.quote.lineHeight};

    color: ${({ theme, $variant }) =>
        $variant === 'dark'
            ? theme.colors.white
            : theme.colors.text};
`;

export const QuoteLine = styled.span`
    display: block;

    width: 180px;
    height: 3px;

    margin-top: 2rem;

    background-color: ${({ theme }) =>
        theme.colors.accent};
`;