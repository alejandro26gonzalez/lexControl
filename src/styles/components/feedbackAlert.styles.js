import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -120%);
    }

    to {
        opacity: 1;
        transform: translate(-50%, 0);
    }
`;

const slideUp = keyframes`
    from {
        opacity: 1;
        transform: translate(-50%, 0);
    }

    to {
        opacity: 0;
        transform: translate(-50%, -120%);
    }
`;

export const FeedbackAlertContainer = styled.div`
    position: fixed;

    top: 1.25rem;
    left: 50%;

    z-index: 9999;

    width: min(90vw, 520px);

    display: flex;
    align-items: center;

    padding: 1rem 1.25rem;

    background: ${({ theme, $variant }) =>
        theme.colors.feedback[$variant].background};

    border: 1px solid
        ${({ theme, $variant }) =>
            theme.colors.feedback[$variant].border};

    border-radius: ${({ theme }) =>
        theme.borderRadius.medium};

    box-sizing: border-box;

    box-shadow: ${({ theme }) =>
        theme.shadows?.medium || "0 8px 24px rgba(0, 0, 0, 0.12)"};

    animation: ${({ $isExiting }) =>
        $isExiting
            ? slideUp
            : slideDown
    } 400ms ease forwards;
`;

export const FeedbackAlertIcon = styled.div`
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.9rem;

    color: ${({ theme, $variant }) =>
        theme.colors.feedback[$variant].icon};

    font-size: 1.35rem;
`;

export const FeedbackAlertContent = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.25rem;
`;

export const FeedbackAlertTitle = styled.p`
    margin: 0;

    color: ${({ theme, $variant }) =>
        theme.colors.feedback[$variant].text};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: 0.9rem;
    font-weight: 700;
`;

export const FeedbackAlertDescription = styled.p`
    margin: 0;

    color: ${({ theme, $variant }) =>
        theme.colors.feedback[$variant].text};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily.body};

    font-size: 0.8rem;
    line-height: 1.5;
`;