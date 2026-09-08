import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const ProcessSection = styled.section`
    width: 100%;

    padding: 7rem 0;

    background-color: ${({ theme }) => theme.colors.background};
`;
export const StepContent = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 0.75rem;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const ProcessLayout = styled.div`
    display: grid;

    grid-template-columns:
        minmax(300px, 0.8fr)
        minmax(0, 1.7fr);

    gap: 4rem;

    align-items: start;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: 1fr;

        gap: 3.5rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;

        gap: 3.5rem;
    }

`;
export const ProcessIntro = styled.div`
    width: 100%;
    max-width: 520px;
`;
export const ProcessTimelineWrapper = styled.div`
    width: 100%;
`;

export const Timeline = styled.div`
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    position: relative;

    width: 100%;

    @media (max-width: ${breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 0;
    }
`;
export const TimelineStep = styled.article`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 0;

    text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;

        padding-bottom: 3rem;
    }
`;

export const StepIconWrapper = styled.div`
    position: relative;
    z-index: 2;

    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.surfaceAlt};
`;

export const StepIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 58px;
    height: 58px;

    color: ${({ theme }) => theme.colors.primary};

    svg {
        width: 100%;
        height: 100%;

        stroke-width: 1.5;
    }
`;

export const TimelineConnector = styled.span`
    position: absolute;

    z-index: 1;

    background-color: ${({ theme }) => theme.colors.textMuted};

    /* Desktop */
    top: 50px;
    left: 50%;

    width: 100%;
    height: 2px;

    @media (max-width: ${breakpoints.mobile}) {
        top: 100px;
        left: 50%;
        bottom: 0;

        width: 2px;
        height: auto;

        transform: translateX(-50%);
    }
`;
export const StepNumber = styled.span`
    margin-top: 0.75rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;

    color: ${({ theme }) => theme.colors.text};
`;
export const StepTitle = styled.h3`
    max-width: 180px;

    margin: 0.5rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.25;

    color: ${({ theme }) => theme.colors.text};
`;

export const StepDescription = styled.p`
    max-width: 190px;

    margin: 2rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: ${({ theme }) => theme.typography.small.fontWeight};
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textSecondary};
`;