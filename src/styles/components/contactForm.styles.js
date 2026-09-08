import styled from 'styled-components';

import { breakpoints } from '../breakpoints';

export const ContactSection = styled.section`
    width: 100%;
    padding: 6rem 0;

    background-color: ${({ theme }) => theme.colors.surface};

    @media (max-width: ${breakpoints.tablet}) {
        padding: 5rem 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 4rem 0;
    }
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(320px, 1fr);
    gap: 1.25rem;
    align-items: stretch;

    @media (max-width: ${breakpoints.laptop}) {
        grid-template-columns: minmax(0, 1.4fr) minmax(300px, 1fr);
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

export const FormCard = styled.div`
    padding: 2rem;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 4px 18px rgba(8, 17, 27, 0.06);

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem;
    }
`;

export const FormHeader = styled.div`
    margin-bottom: 1.75rem;
`;

export const FormEyebrow = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.badge.fontSize};
    font-weight: ${({ theme }) => theme.typography.badge.fontWeight};
    line-height: ${({ theme }) => theme.typography.badge.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.badge.letterSpacing};
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.tech};
`;

export const FormAccent = styled.span`
    display: block;

    width: 44px;
    height: 3px;

    margin: 0.75rem 0 1rem;

    background-color: ${({ theme }) => theme.colors.accent};
`;

export const FormTitle = styled.h2`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 600;
    line-height: 1;

    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 2.25rem;
    }
`;

export const FormDescription = styled.p`
    max-width: 650px;

    margin: 1rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.95rem;
    line-height: 1.6;

    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Form = styled.form`
    width: 100%;
`;

export const FieldsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    min-width: 0;
`;

export const FieldFull = styled(Field)`
    grid-column: 1 / -1;
`;

export const Label = styled.label`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.text};
`;

const inputStyles = `
    width: 100%;
    height: 48px;

    padding: 0 0.9rem;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.small};

    background-color: ${({ theme }) => theme.colors.background};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.2;

    color: ${({ theme }) => theme.colors.text};

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.tech};

        box-shadow: 0 0 0 3px rgba(67, 174, 197, 0.1);
    }

    &:invalid:not(:placeholder-shown) {
        border-color: ${({ theme }) => theme.colors.error};
    }
`;

export const Input = styled.input`
    ${inputStyles}
`;

export const Select = styled.select`
    ${inputStyles}

    cursor: pointer;

    appearance: auto;
`;

export const TextareaWrapper = styled.div`
    position: relative;
`;

export const Textarea = styled.textarea`
    display: block;

    width: 100%;
    min-height: 140px;

    padding: 0.9rem;

    padding-bottom: 2rem;

    resize: vertical;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.small};

    background-color: ${({ theme }) => theme.colors.background};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.text};

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.tech};

        box-shadow: 0 0 0 3px rgba(67, 174, 197, 0.1);
    }
`;

export const CharacterCount = styled.span`
    position: absolute;
    right: 0.75rem;
    bottom: 0.6rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.7rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.textMuted};
`;

export const SubmitWrapper = styled.div`
    display: flex;

    margin-top: 1.5rem;

    button {
        width: 100%;
    }
`;

export const PrivacyText = styled.p`
    margin: 0.9rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.75rem;
    line-height: 1.5;

    text-align: center;

    color: ${({ theme }) => theme.colors.textMuted};
`;

export const PrivacyLink = styled.a`
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: underline;

    text-underline-offset: 2px;

    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const ChannelsCard = styled.aside`
    display: flex;
    flex-direction: column;

    padding: 2rem;

    border-radius: ${({ theme }) => theme.borderRadius.medium};

    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem;
    }
`;

export const ChannelsHeader = styled.div`
    margin-bottom: 1.75rem;
`;

export const ChannelsEyebrow = styled.span`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.badge.fontSize};
    font-weight: ${({ theme }) => theme.typography.badge.fontWeight};
    line-height: ${({ theme }) => theme.typography.badge.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.badge.letterSpacing};
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.tech};
`;

export const ChannelsAccent = styled.span`
    display: block;

    width: 44px;
    height: 3px;

    margin: 0.75rem 0 1rem;

    background-color: ${({ theme }) => theme.colors.accent};
`;

export const ChannelsTitle = styled.h2`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: clamp(2rem, 3vw, 2.7rem);
    font-weight: 600;
    line-height: 1;

    color: ${({ theme }) => theme.colors.white};
`;

export const ChannelsDescription = styled.p`
    margin: 1rem 0 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    line-height: 1.65;

    color: rgba(255, 255, 255, 0.72);
`;

export const ChannelList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.25rem;
`;
export const ChannelIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 58px;

    width: 58px;
    height: 58px;

    border: 5px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.accent};

    color: ${({ theme }) => theme.colors.white};

    transition: background-color 0.2s ease;

    svg {
        width: 22px;
        height: 22px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        flex-basis: 50px;

        width: 50px;
        height: 50px;

        border-width: 4px;

        svg {
            width: 19px;
            height: 19px;
        }
    }
`;

export const ChannelValue = styled.span`
    margin-top: 0.2rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.45;

    color: ${({ theme }) => theme.colors.white};

    transition: color 0.2s ease;
`;

export const Channel = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    min-width: 0;

    color: inherit;

    text-decoration: none;

    ${({ as }) =>
        as === 'a' &&
        `
            cursor: pointer;
        `}

    &:hover {
        ${ChannelIcon} {
            background-color: ${({ theme }) => theme.colors.accentHover};
        }

        ${ChannelValue} {
            color: ${({ theme }) => theme.colors.accent};
        }
    }

    @media (max-width: ${breakpoints.mobile}) {
        gap: 0.8rem;
    }
`;

export const ChannelContent = styled.div`
    display: flex;
    flex-direction: column;

    min-width: 0;
`;

export const ChannelTitle = styled.h3`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme.colors.white};
`;



export const ChannelDescription = styled.span`
    margin-top: 0.2rem;

    white-space: pre-line;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.78rem;
    font-weight: 400;
    line-height: 1.5;

    color: rgba(255, 255, 255, 0.62);
`;

export const SocialContainer = styled.div`
    margin-top: auto;
    padding-top: 1.5rem;
`;

export const SocialDivider = styled.span`
    display: block;

    width: 100%;
    height: 1px;

    margin-bottom: 1rem;

    background-color: rgba(255, 255, 255, 0.25);
`;

export const SocialTitle = styled.h3`
    margin: 0 0 0.8rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.85rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.white};
`;

export const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;

    border: 1px solid rgba(255, 255, 255, 0.65);
    border-radius: 50%;

    color: ${({ theme }) => theme.colors.white};

    transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        background-color: ${({ theme }) => theme.colors.accent};

        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 40px;
        height: 40px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;