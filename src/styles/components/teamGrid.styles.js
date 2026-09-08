import styled from 'styled-components';

import { breakpoints } from '../breakpoints';

export const TeamSection = styled.section`
    width: 100%;
    padding: 7rem 0;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const TeamHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const TeamControls = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
        flex-wrap: wrap;
    }

    @media (max-width: ${breakpoints.mobile}) {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.75rem;
    }
`;

export const SearchContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 380px;

    @media (max-width: ${breakpoints.tablet}) {
        flex: 1 1 280px;
        max-width: none;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-column: 1 / -1;
        width: 100%;
    }
`;

export const SearchIcon = styled.span`
    position: absolute;
    top: 50%;
    left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.5rem;
    pointer-events: none;


`;

export const SearchInput = styled.input`
    width: 100%;
    height: 46px;
    padding: 0 1rem 0 3rem;
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition: border-color 0.2s ease;
    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }
    &:focus {
        border-color: ${({ theme }) => theme.colors.tech};
    }

`;

export const FilterButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    height: 46px;
    padding: 0 0.5rem;
    border: none;
    background: transparent;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;
    cursor: pointer;
    transition: color 0.2s ease;
    svg {
        width: 28px;
        height: 28px;
    }
    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
    }
    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        justify-self: end;
    }
`;

export const TeamFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin-top: -0.5rem;
    @media (max-width: ${breakpoints.mobile}) {
        gap: 0.4rem;
    }
`;

export const TeamFilter = styled.button`
    padding: 0.5rem 0.9rem;
    border: 1px solid
        ${({ theme, $active }) =>
            $active
                ? theme.colors.accent
                : theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.pill};
    background-color: ${({ theme, $active }) =>
        $active
            ? theme.colors.accent
            : 'transparent'};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme, $active }) =>
        $active
            ? theme.colors.white
            : theme.colors.text};
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease;
    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        background-color: ${({ theme, $active }) =>
            $active
                ? theme.colors.accentHover
                : 'rgba(182, 154, 106, 0.08)'};
    };
    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    };
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.75rem;
    };
`;

export const TeamContainer = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const TeamCard = styled.article`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 410px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 2px 8px rgba(8, 17, 27, 0.08);
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(8, 17, 27, 0.12);
    }
    @media (max-width: ${breakpoints.tablet}) {
        min-height: 0;
    }
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: row;
        align-items: center;
        min-height: 90px;
        padding: 0.75rem 1rem;
    }
`;

export const TeamImageWrapper = styled.div`
    width: 100%;
    height: 198px;
    overflow: hidden;
    @media (max-width: ${breakpoints.tablet}) {
        width: 96px;
        height: 96px;
        margin: 1.5rem auto 0;
        border-radius: 50%;
    }
    @media (max-width: ${breakpoints.mobile}) {
        flex: 0 0 64px;
        width: 64px;
        height: 64px;
        margin: 0;
        border-radius: 50%;
    }
`;

export const TeamImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
    ${TeamCard}:hover & {
        transform: scale(1.025);
    }
    @media (max-width: ${breakpoints.tablet}) {
        border-radius: 50%;
    }
    @media (max-width: ${breakpoints.mobile}) {
        border-radius: 50%;
    }
`;

export const TeamContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem 1.25rem 1.25rem;
    @media (max-width: ${breakpoints.tablet}) {
        align-items: center;
        padding: 1rem 1.25rem 1.5rem;
        text-align: center;
    }
    @media (max-width: ${breakpoints.mobile}) {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto auto;
        align-items: center;
        padding: 0 0 0 1rem;
        text-align: left;
    }
`;

export const TeamName = styled.h3`
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.text};
    @media (max-width: ${breakpoints.mobile}) {
        grid-column: 1;
        font-size: 0.95rem;
    }
`;

export const TeamRole = styled.p`
    margin: 0.4rem 0 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.tech};
    @media (max-width: ${breakpoints.mobile}) {
        grid-column: 1;
        margin-top: 0.2rem;
    }
`;

export const TeamDivider = styled.span`
    display: block;
    width: 28px;
    height: 2px;
    margin: 0.6rem 0 0.75rem;
    background-color: ${({ theme }) => theme.colors.accent};
    @media (max-width: ${breakpoints.tablet}) {
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: ${breakpoints.mobile}) {
        display: none;
    }
`;

export const TeamDescription = styled.p`
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: ${({ theme }) => theme.typography.small.fontWeight};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textSecondary};
    @media (max-width: ${breakpoints.tablet}) {
        max-width: 280px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        display: none;
    }
`;

export const TeamFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
    padding-top: 1.25rem;
    @media (max-width: ${breakpoints.tablet}) {
        justify-content: center;
        gap: 1rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
        grid-column: 1 / -1;
        margin-top: 0.5rem;
        padding-top: 0;
        justify-content: flex-start;
        gap: 1rem;
    }
`;

export const LinkedInButton = styled.a`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.tech};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1;
    color: ${({ theme }) => theme.colors.white};
    transition:
        background-color 0.2s ease,
        transform 0.2s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-2px);
    }
    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: 26px;
        height: 26px;
    }
`;

export const TeamPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    margin-top: 3.5rem;

    @media (max-width: ${breakpoints.mobile}) {
        gap: 1rem;
        margin-top: 2.5rem;
    }
`;

export const TeamPageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 42px;
    height: 42px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.background};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1.25rem;
    line-height: 1;

    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;

    transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;

    &:hover:not(:disabled) {
        border-color: ${({ theme }) => theme.colors.accent};
        background-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.white};
        transform: translateY(-1px);
    }

    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }
`;

export const TeamPageIndicator = styled.span`
    min-width: 110px;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    font-weight: 600;
    line-height: 1.2;

    text-align: center;

    color: ${({ theme }) => theme.colors.textSecondary};
`;