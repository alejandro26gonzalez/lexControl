import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const SpecialtiesSection = styled.section`
    width: 100%;

    padding: 7rem 0;

    background-color: ${({ theme }) =>
        theme.colors.background};
`;

export const SpecialtiesHeader = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 5rem;

    align-items: start;

    margin-bottom: 5rem;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;

        gap: 2rem;

        margin-bottom: 3.5rem;
    }
`;

export const SpecialtiesHeaderContent = styled.div`
    width: 100%;
    max-width: 620px;

    justify-self: start;
`;

export const SpecialtiesAction = styled.div`
    width: 100%;
    max-width: 560px;

    margin: 2rem;

    justify-self: end;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1rem;

    padding-top: 0.5rem;

    p {
        margin: 0;

        font-family: ${({ theme }) =>
            theme.typography.fontFamily.body};

        font-size: ${({ theme }) =>
            theme.typography.body.fontSize};

        font-weight: 500;

        line-height: 1.5;

        color: ${({ theme }) =>
            theme.colors.text};
    }

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%;

        justify-self: start;

        padding-top: 0;
    }
`;

export const SpecialtiesGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(6, 1fr);

    gap: 2rem;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(3, 1fr);

        row-gap: 3.5rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);

        gap: 3rem 2rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;

        gap: 3rem;
    }
`;

export const SpecialtyCard = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
`;

export const SpecialtyIcon = styled.div`
    width: 64px;
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1.5rem;

    color: ${({ theme }) =>
        theme.colors.primary};

    font-size: 3.25rem;

    svg {
        width: 100%;
        height: 100%;
        stroke-width: 1.5;
    }
`;

export const SpecialtyTitle = styled.h3`
    margin: 0;

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) =>
        theme.colors.text};
`;

export const SpecialtyDescription = styled.p`
    max-width: 190px;

    margin: 0.5rem 0 0;

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: ${({ theme }) =>
        theme.typography.small.fontSize};

    font-weight: ${({ theme }) =>
        theme.typography.small.fontWeight};

    line-height: 1.5;

    color: ${({ theme }) =>
        theme.colors.textSecondary};
`;