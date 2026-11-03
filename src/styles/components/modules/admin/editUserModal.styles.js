
import styled from "styled-components";

import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    HeaderIcon,
    HeaderText,
    ModalTitle,
    ModalDescription,
    CloseButton,
    ModalBody,
    FormGrid,
    FormGroup,
    FieldLabel,
    InputWrapper,
    FieldInput,
    FieldSelect,
    SelectWrapper,
    FieldHint,
    SectionHeading,
    SectionDivider,
    RoleNotice,
    ModalFooter,
    CancelButton,
    SubmitButton,
} from "./newUserModal.styles";

export {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    HeaderIcon,
    HeaderText,
    ModalTitle,
    ModalDescription,
    CloseButton,
    ModalBody,
    FormGrid,
    FormGroup,
    FieldLabel,
    InputWrapper,
    FieldInput,
    FieldSelect,
    SelectWrapper,
    FieldHint,
    SectionHeading,
    SectionDivider,
    RoleNotice,
    ModalFooter,
    CancelButton,
    SubmitButton,
};

export const ErrorMessage = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;

    margin-bottom: 20px;
    padding: 12px 14px;

    background: ${({ theme }) => theme.colors.feedback.error.background};
    border: 1px solid ${({ theme }) => theme.colors.feedback.error.border};
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.feedback.error.text};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.8rem;
    line-height: 1.5;

    svg {
        flex-shrink: 0;
        margin-top: 1px;
    }
`;
