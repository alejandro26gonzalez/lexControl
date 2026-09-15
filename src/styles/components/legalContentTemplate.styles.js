import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { breakpoints } from "../breakpoints";

export const LegalContentLayout = styled.div`
    display: grid;

    grid-template-columns: minmax(240px, 280px) minmax(0, 1fr);

    gap: 3.5rem;

    align-items: start;

    padding: 5rem 0 7rem;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: 240px minmax(0, 1fr);

        gap: 2.5rem;

        padding: 4rem 0 6rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;

        gap: 2rem;

        padding: 3.5rem 0 5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        gap: 1.5rem;

        padding: 2.5rem 0 4rem;
    }
`;

export const Navigation = styled.aside`
    position: sticky;
    top: 2rem;

    width: 100%;
    max-width: 100%;
    min-width: 0;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    padding: 1.5rem;

    background-color: ${({ theme }) => theme.colors.surface};

    border: 1px solid ${({ theme }) => theme.colors.border};

    border-radius: ${({ theme }) => theme.borderRadius.large};

    @media (max-width: ${breakpoints.tablet}) {
        position: relative;
        top: auto;

        width: 100%;
        max-width: 100%;
        min-width: 0;

        padding: 1rem;

        gap: 1rem;

        overflow: hidden;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: .75rem;

        border-radius: ${({ theme }) => theme.borderRadius.medium};
    }
`;

export const NavigationTitle = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    font-size: ${({ theme }) => theme.typography.badge.fontSize};
    font-weight: ${({ theme }) => theme.typography.badge.fontWeight};

    letter-spacing: ${({ theme }) => theme.typography.badge.letterSpacing};

    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.textMuted};

    @media (max-width: ${breakpoints.mobile}) {
        display: none;
    }
`;

export const NavigationList = styled.nav`
    display: flex;
    flex-direction: column;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: row;

        overflow-x: auto;

        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: ${breakpoints.mobile}) {
        gap: .5rem;
    }
`;

export const NavigationItem = styled.div`
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
        width: auto;
        flex: 0 0 auto;
    }
`;

export const NavigationButton = styled.button`
    width: 100%;

    display: flex;
    align-items: center;

    gap: .875rem;

    padding: 1rem;

    border: 0;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    background-color: ${({ $active, theme }) =>
        $active
            ? theme.colors.background
            : "transparent"};

    color: ${({ $active, theme }) =>
        $active
            ? theme.colors.text
            : theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    text-align: left;

    transition:
        background-color .2s ease,
        color .2s ease;

    cursor: pointer;

    &:last-child {
        border-bottom: 0;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: auto;

        min-width: max-content;

        border: 1px solid ${({ theme }) => theme.colors.border};

        border-radius: ${({ theme }) => theme.borderRadius.medium};
    }
`;

export const NavigationIcon = styled.span`
    width: 36px;
    height: 36px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: ${({ theme }) => theme.borderRadius.small};

    background-color: ${({ $active, theme }) =>
        $active
            ? theme.colors.accent
            : theme.colors.surfaceAlt};

    color: ${({ $active, theme }) =>
        $active
            ? theme.colors.white
            : theme.colors.textSecondary};

    font-size: 1.1rem;

    transition:
        background-color .2s ease,
        color .2s ease;
`;

export const NavigationText = styled.span`
    font-size: ${({ theme }) => theme.typography.small.fontSize};

    font-weight: 600;

    line-height: 1.4;

    white-space: nowrap;
`;

export const HelpCard = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1.25rem;

    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.white};
`;

export const HelpIcon = styled.div`
    margin-bottom: .75rem;

    color: ${({ theme }) => theme.colors.accent};

    font-size: 1.5rem;
`;

export const HelpTitle = styled.h3`
    margin: 0 0 .25rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};

    font-size: 1.5rem;

    font-weight: 600;
`;

export const HelpText = styled.p`
    margin: 0 0 1rem;

    color: rgba(255, 255, 255, .7);

    font-size: ${({ theme }) => theme.typography.small.fontSize};
`;

export const HelpButton = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 42px;

    padding: .65rem 1rem;

    border-radius: ${({ theme }) => theme.borderRadius.small};

    background-color: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.primary};

    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: 600;

    transition:
        background-color .2s ease,
        color .2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const Content = styled.article`
    width: 100%;

    min-width: 0;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentHeader = styled.header`
    padding-bottom: 2rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ContentEyebrow = styled.span`
    display: block;

    margin-bottom: .5rem;

    color: ${({ theme }) => theme.colors.accent};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    font-size: ${({ theme }) => theme.typography.badge.fontSize};
    font-weight: ${({ theme }) => theme.typography.badge.fontWeight};

    letter-spacing: ${({ theme }) => theme.typography.badge.letterSpacing};

    line-height: 1.2;

    text-transform: uppercase;
`;

export const ContentTitle = styled.h1`
    margin: 0 0 1rem;

    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};

    font-size: clamp(2.5rem, 4vw, 4rem);

    font-weight: 600;

    line-height: 1;

    letter-spacing: -.02em;
`;

export const ContentIntro = styled.p`
    max-width: 780px;

    margin: 0;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    font-size: ${({ theme }) => theme.typography.body.fontSize};

    line-height: 1.7;
`;

export const UpdatedAt = styled.span`
    display: block;

    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.textMuted};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    font-size: ${({ theme }) => theme.typography.small.fontSize};
`;

export const Sections = styled.div`
    width: 100%;
`;

export const LegalSection = styled.section`
    padding: 2rem 0;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-child {
        border-bottom: 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem 0;
    }
`;

export const SectionHeader = styled.div`
    display: grid;

    grid-template-columns: 48px minmax(0, 1fr);

    gap: 1rem;

    align-items: start;

    margin-bottom: 1rem;
`;

export const SectionNumber = styled.div`
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.surfaceAlt};

    color: ${({ theme }) => theme.colors.accent};

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};

    font-size: 1.5rem;

    font-weight: 600;
`;

export const SectionHeading = styled.h2`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};

    font-size: clamp(1.6rem, 2.2vw, 2.25rem);

    font-weight: 600;

    line-height: 1.1;
`;

export const SectionBody = styled.div`
    padding-left: calc(48px + 1rem);

    @media (max-width: ${breakpoints.mobile}) {
        padding-left: 0;
    }
`;

export const Paragraph = styled.p`
    margin: 0 0 1rem;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    font-size: ${({ theme }) => theme.typography.body.fontSize};

    line-height: 1.7;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const HighlightList = styled.div`
    margin-top: 1.5rem;

    overflow: hidden;

    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.surface};
`;

export const Highlight = styled.div`
    display: grid;

    grid-template-columns: 48px minmax(0, 1fr);

    gap: 1rem;

    padding: 1.25rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-child {
        border-bottom: 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 40px minmax(0, 1fr);

        padding: 1rem;
    }
`;

export const HighlightIcon = styled.div`
    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.accent};

    font-size: 1.2rem;
`;

export const HighlightContent = styled.div`
    min-width: 0;
`;

export const HighlightTitle = styled.h3`
    margin: 0 0 .35rem;

    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    font-size: ${({ theme }) => theme.typography.small.fontSize};

    font-weight: 700;
`;

export const HighlightText = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    font-size: ${({ theme }) => theme.typography.small.fontSize};

    line-height: 1.6;
`;

export const BulletList = styled.ul`
    display: flex;

    flex-direction: column;

    gap: .75rem;

    margin: 1.25rem 0 0;

    padding-left: 1.25rem;
`;

export const Bullet = styled.li`
    padding-left: .25rem;

    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    font-size: ${({ theme }) => theme.typography.body.fontSize};

    line-height: 1.6;
`;