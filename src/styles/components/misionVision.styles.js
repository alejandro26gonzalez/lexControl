import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const MissionVisionSection = styled.section`
    width: 100%;

    padding: 5rem 0;

    background-color: ${({ theme, $variant }) =>
        $variant === 'dark'
            ? theme.colors.primary
            : theme.colors.background};

    color: ${({ theme, $variant }) =>
        $variant === 'dark'
            ? theme.colors.white
            : theme.colors.text};
`;

export const MissionVisionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    align-items: stretch;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        row-gap: 3rem;
    }
`;

export const MissionVisionItem = styled.article`
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr);

    column-gap: 1.5rem;

    align-items: start;

    min-width: 0;

    ${({ $index }) =>
        $index === 0 &&
        `
            padding-right: 4rem;
        `}

    ${({ $index }) =>
        $index === 1 &&
        `
            padding-left: 4rem;
            border-left: 1px solid
                ${({ theme, $variant }) =>
                    $variant === 'dark'
                        ? 'rgba(255, 255, 255, 0.35)'
                        : theme.colors.border};
        `}

    @media (max-width: ${breakpoints.laptop}) {
        ${({ $index }) =>
            $index === 0 &&
            `
                padding-right: 3rem;
            `}

        ${({ $index }) =>
            $index === 1 &&
            `
                padding-left: 3rem;
            `}
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding-left: 0;
        padding-right: 0;

        border-left: none;

        &:not(:last-child) {
            padding-bottom: 3rem;
            border-bottom: 1px solid
                ${({ theme, $variant }) =>
                    $variant === 'dark'
                        ? 'rgba(255, 255, 255, 0.25)'
                        : theme.colors.border};
        }
    }
`;

export const MissionVisionIcon = styled.div`
    width: 64px;
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme, $variant }) =>
        $variant === 'dark'
            ? theme.colors.white
            : theme.colors.primary};

    font-size: 3.5rem;

    svg {
        width: 100%;
        height: 100%;
        stroke-width: 1.5;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 56px;
        height: 56px;
    }
`;

export const MissionVisionContent = styled.div`
    min-width: 0;
`;

export const MissionVisionEyebrow = styled.span`
    display: block;

    margin-bottom: 1.25rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.sectionTitle.fontSize};
    font-weight: ${({ theme }) => theme.typography.sectionTitle.fontWeight};
    line-height: ${({ theme }) => theme.typography.sectionTitle.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.sectionTitle.letterSpacing};
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.tech};
`;

export const MissionVisionParagraph = styled.p`
    margin: 0 0 1.25rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: ${({ theme }) => theme.typography.small.fontWeight};
    line-height: 1.55;

    color: ${({ theme, $variant }) =>
        $variant === 'dark'
            ? theme.colors.textSecondary
            : theme.colors.text};

    &:last-child {
        margin-bottom: 0;
    }
`;