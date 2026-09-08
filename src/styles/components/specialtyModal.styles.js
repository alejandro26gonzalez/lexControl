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

    backdrop-filter: blur(4px);

    overflow-y: auto;

    @media (max-width: ${breakpoints.mobile}) {
        align-items: flex-start;

        padding: 1rem;
    }
`;
export const ModalContainer = styled.div`
    position: relative;

    width: 100%;
    max-width: 960px;
    max-height: calc(100vh - 4rem);

    overflow-y: auto;

    border-radius: ${({ theme }) => theme.borderRadius.large};

    background-color: ${({ theme }) => theme.colors.background};

    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);

    @media (max-width: ${breakpoints.mobile}) {
        max-height: calc(100vh - 2rem);

        border-radius: ${({ theme }) => theme.borderRadius.medium};
    }
`;
export const ModalCloseButton = styled.button`
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;

    z-index: 3;

    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: rgba(8, 17, 27, 0.7);

    color: ${({ theme }) => theme.colors.white};

    font-size: 1.4rem;

    transition:
        background-color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
        transform: rotate(4deg);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        top: 0.75rem;
        right: 0.75rem;

        width: 38px;
        height: 38px;
    }
`;
export const ModalHeader = styled.header`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;

    min-height: 320px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;
export const ModalImageWrapper = styled.div`
    min-height: 320px;

    overflow: hidden;

    @media (max-width: ${breakpoints.tablet}) {
        min-height: 220px;
        max-height: 260px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-height: 180px;
        max-height: 200px;
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
    align-items: flex-start;
    justify-content: center;

    padding: 3rem 3.5rem;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 2.5rem 3rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 2rem 1.5rem;
    }
`;
export const ModalIcon = styled.div`
    width: 58px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1.25rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.surfaceAlt};

    color: ${({ theme }) => theme.colors.primary};

    font-size: 2rem;

    svg {
        width: 34px;
        height: 34px;

        stroke-width: 1.5;
    }
`;
export const ModalEyebrow = styled.span`
    margin-bottom: 0.75rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.badge.fontSize};
    font-weight: ${({ theme }) => theme.typography.badge.fontWeight};
    line-height: ${({ theme }) => theme.typography.badge.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.badge.letterSpacing};
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.tech};
`;
export const ModalTitle = styled.h2`
    max-width: 520px;

    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 600;
    line-height: 1.05;

    color: ${({ theme }) => theme.colors.text};
`;
export const ModalDescription = styled.p`
    max-width: 540px;

    margin: 1.25rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    line-height: 1.6;

    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const ModalBody = styled.div`
    padding: 2.5rem 3.5rem 3rem;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 2.5rem 3rem 3rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 2rem 1.5rem 2.5rem;
    }
`;
export const SubcategoriesTitle = styled.h3`
    margin: 0 0 1.5rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};
`;
export const SubcategoriesGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 1rem;

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;
export const Subcategory = styled.article`
    padding: 1.25rem;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.surface};

    transition:
        border-color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        transform: translateY(-2px);
    }
`;
export const SubcategoryTitle = styled.h4`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.35;

    color: ${({ theme }) => theme.colors.text};
`;
export const SubcategoryDescription = styled.p`
    margin: 0.5rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textSecondary};
`;