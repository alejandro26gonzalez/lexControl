
import styled from "styled-components";

export const ActivationHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
`;

export const ActivationTitle = styled.h2`
    color: ${({ theme }) => theme.colors?.textPrimary || "#08111B"};
    font-size: 1.7rem;
    font-weight: 700;
`;

export const ActivationDescription = styled.p`
    color: ${({ theme }) => theme.colors?.textSecondary || "#64748B"};
    font-size: 0.95rem;
    line-height: 1.6;
`;

export const ActivationFormElement = styled.form`
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
`;

export const ActivationFieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ActivationFieldLabel = styled.label`
    font-size: 0.9rem;
    font-weight: 600;
    color: #263445;
`;

export const ActivationPasswordWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ActivationFieldInput = styled.input`
    width: 100%;
    padding: 13px 45px 13px 14px;
    border: 1px solid #D9DEE5;
    border-radius: 8px;
    outline: none;
    font-size: 0.95rem;
    transition: border-color 0.2s ease;

    &:focus {
        border-color: #43AEC5;
    }

    &::placeholder {
        color: #A0A9B5;
    }
`;

export const ActivationPasswordToggle = styled.button`
    position: absolute;
    right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: #64748B;
    cursor: pointer;
    font-size: 1.1rem;
`;
