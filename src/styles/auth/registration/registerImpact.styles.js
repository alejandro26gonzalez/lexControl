import styled from 'styled-components';

import { breakpoints } from '../../breakpoints';

export const ImpactContainer = styled.aside`
    position: relative;

    width: 100%;
    height: 100%;

    min-height: 100%;

    overflow: hidden;

    background-image: url('/src/assets/images/auth/fondoRegister.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 380px;
    }
`;

export const ImpactOverlay = styled.div`
    position: absolute;
    inset: 0;

    z-index: 1;

    background: linear-gradient(
        90deg,
        rgba(8, 17, 27, 0.97) 0%,
        rgba(8, 17, 27, 0.82) 42%,
        rgba(8, 17, 27, 0.45) 72%,
        rgba(8, 17, 27, 0.2) 100%
    );
`;

export const ImpactContent = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100%;

    padding: 3.5rem 4rem;

    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${breakpoints.laptop}) {
        padding: 3rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 2.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 2rem 1.5rem;
    }
`;

export const Logo = styled.img`
    display: block;

    width: 145px;
    height: auto;

    margin-bottom: 3.5rem;

    object-fit: contain;

    @media (max-width: ${breakpoints.laptop}) {
        width: 130px;

        margin-bottom: 2.75rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 115px;

        margin-bottom: 2rem;
    }
`;

export const MainMessage = styled.h1`
    max-width: 500px;

    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: clamp(2.5rem, 3.5vw, 3.5rem);
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    line-height: 1.02;
    letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};

    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${breakpoints.laptop}) {
        font-size: clamp(2.3rem, 3.5vw, 3.1rem);
    }

    @media (max-width: ${breakpoints.mobile}) {
        max-width: 400px;

        font-size: 2.35rem;
    }
`;

export const Description = styled.p`
    max-width: 430px;

    margin: 1.5rem 0 2.5rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    line-height: 1.5;

    color: rgba(255, 255, 255, 0.82);

    @media (max-width: ${breakpoints.mobile}) {
        margin: 1rem 0 2rem;

        font-size: 0.9rem;
    }
`;

export const BenefitsList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.15rem;

    max-width: 430px;
`;

export const BenefitItem = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;
`;

export const BenefitIcon = styled.div`
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 42px;
    height: 42px;

    border: 1px solid rgba(182, 154, 106, 0.35);
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: rgba(182, 154, 106, 0.24);

    color: ${({ theme }) => theme.colors.accent};

    backdrop-filter: blur(5px);

    svg {
        width: 20px;
        height: 20px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 38px;
        height: 38px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;

export const BenefitContent = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.15rem;
`;

export const BenefitTitle = styled.h3`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.white};
`;

export const BenefitDescription = styled.p`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.75rem;
    line-height: 1.35;

    color: rgba(255, 255, 255, 0.68);
`;

export const Quote = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    max-width: 300px;

    margin-top: auto;

    padding-top: 3rem;

    @media (max-width: ${breakpoints.mobile}) {
        padding-top: 2rem;
    }
`;

export const QuoteLine = styled.span`
    display: block;

    width: 55px;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.accent};
`;

export const QuoteText = styled.p`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 1.15rem;
    font-weight: ${({ theme }) => theme.typography.quote.fontWeight};
    font-style: ${({ theme }) => theme.typography.quote.fontStyle};
    line-height: ${({ theme }) => theme.typography.quote.lineHeight};

    color: rgba(255, 255, 255, 0.82);
`;