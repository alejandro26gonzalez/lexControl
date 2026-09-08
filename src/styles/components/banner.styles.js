import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const BannerSection = styled.section`
    width: 100%;

    padding: 2rem 5rem;

    background-color: ${({ theme, $variant }) =>
        $variant === 'light'
            ? theme.colors.background
            : theme.colors.primary};

    color: ${({ theme, $variant }) =>
        $variant === 'light'
            ? theme.colors.text
            : theme.colors.white};
`;
export const BannerContent = styled.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;

    align-items: center;

    gap: 2.5rem;

    min-height: 100px;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;
export const BannerMain = styled.div`
    min-width: 0;
`;
export const BannerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 72px;
    height: 72px;

    color: ${({ theme }) => theme.colors.accent};

    font-size: 4.5rem;

    svg {
        width: 100%;
        height: 100%;
        stroke-width: 1.4;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 60px;
        height: 60px;

        font-size: 3.75rem;
    }
`;
export const BannerAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: ${breakpoints.tablet}) {
        justify-content: flex-start;
    }
`;
export const BannerLogo = styled.img`
    display: block;

    width: 180px;
    max-width: 100%;
    height: auto;

    object-fit: contain;

    @media (max-width: ${breakpoints.tablet}) {
        width: 150px;
    }
`;
export const BannerQuoteMark = styled.span`
    display: inline-block;

    margin-right: 0.75rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 4rem;
    font-weight: 600;
    line-height: 0.5;

    color: ${({ theme }) => theme.colors.accent};

    vertical-align: top;
`;
export const BannerQuote = styled.p`
    display: inline;

    max-width: 650px;

    margin: 0;

    font-family: ${({ theme }) => theme.typography.quote.fontFamily};
    font-size: clamp(1.5rem, 2.5vw, 2.25rem);
    font-weight: ${({ theme }) => theme.typography.quote.fontWeight};
    font-style: ${({ theme }) => theme.typography.quote.fontStyle};
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.white};
`;
export const BannerQuoteLine = styled.span`
    display: block;

    width: 85px;
    height: 2px;

    margin-top: 1rem;

    background-color: ${({ theme }) => theme.colors.accent};
`;
