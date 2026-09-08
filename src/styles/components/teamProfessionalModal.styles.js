import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    background-color: rgba(8, 17, 27, 0.72);
    backdrop-filter: blur(6px);

    overflow-y: auto;

    @media (max-width: ${breakpoints.mobile}) {
        align-items: flex-start;
        padding: 1rem;
    }
`;

export const ModalContainer = styled.div`
    position: relative;

    width: 100%;
    max-width: 900px;
    max-height: calc(100vh - 4rem);

    overflow-y: auto;

    border-radius: ${({ theme }) => theme.borderRadius.large};

    background-color: ${({ theme }) => theme.colors.background};

    box-shadow: 0 24px 70px rgba(8, 17, 27, 0.28);

    scrollbar-width: thin;

    @media (max-width: ${breakpoints.mobile}) {
        max-height: calc(100vh - 2rem);
        border-radius: ${({ theme }) => theme.borderRadius.medium};
    }
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;

    transition:
        background-color 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        background-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.white};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }
`;

export const ModalHeader = styled.div`
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 2.5rem;

    padding: 3rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 180px 1fr;
        gap: 2rem;
        padding: 2.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 4.5rem 1.5rem 2rem;
    }
`;

export const ModalImageWrapper = styled.div`
    width: 220px;
    height: 260px;

    overflow: hidden;

    border-radius: ${({ theme }) => theme.borderRadius.medium};

    @media (max-width: ${breakpoints.tablet}) {
        width: 180px;
        height: 220px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 150px;
        height: 180px;
        margin: 0 auto;
    }
`;

export const ModalImage = styled.img`
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const ModalHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ModalEyebrow = styled.span`
    margin-bottom: 0.5rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.badge.fontSize};
    font-weight: ${({ theme }) => theme.typography.badge.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.badge.letterSpacing};
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.tech};
`;

export const ModalName = styled.h2`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 600;
    line-height: 0.98;

    color: ${({ theme }) => theme.colors.text};
`;

export const ModalSpecialty = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-top: 1rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.95rem;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textSecondary};

    svg {
        flex-shrink: 0;
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const LinkedInButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    margin-top: 1.5rem;
    padding: 0.65rem 1rem;

    border: 1px solid ${({ theme }) => theme.colors.tech};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: transparent;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.875rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.tech};

    transition:
        background-color 0.2s ease,
        color 0.2s ease;

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 20px;
        height: 20px;

        border-radius: 3px;

        background-color: ${({ theme }) => theme.colors.tech};

        font-size: 0.7rem;
        color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.tech};
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const ModalBody = styled.div`
    padding: 2.5rem 3rem 3rem;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 2rem 1.5rem 2.5rem;
    }
`;

export const ModalSection = styled.section`
    & + & {
        margin-top: 2.5rem;
    }
`;

export const ModalSectionTitle = styled.h3`
    margin: 0 0 1rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.text};
`;

export const ModalDescription = styled.p`
    max-width: 720px;
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    line-height: 1.7;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PracticeAreas = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
`;

export const PracticeArea = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    padding: 0.55rem 0.85rem;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.pill};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.875rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.textSecondary};

    svg {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const Experience = styled.p`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    line-height: 1.7;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const EducationList = styled.div`
    display: grid;
    gap: 1rem;
`;

export const EducationItem = styled.div`
    padding-left: 1rem;

    border-left: 2px solid ${({ theme }) => theme.colors.accent};
`;

export const EducationDegree = styled.p`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.95rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.text};
`;

export const EducationInstitution = styled.p`
    margin: 0.25rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.875rem;

    color: ${({ theme }) => theme.colors.textMuted};
`;