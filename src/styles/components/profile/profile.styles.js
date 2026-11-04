
import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1500;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(8, 17, 27, 0.68);
    backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
    width: 100%;
    max-width: 920px;
    max-height: min(720px, 90vh);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #FFFFFF;
    border: 1px solid #E8DDD9;
    border-radius: 16px;
    box-shadow: 0 24px 80px rgba(8, 17, 27, 0.25);

    @media (max-width: 650px) {
        max-height: 94vh;
        border-radius: 12px;
    }
`;

export const ModalHeader = styled.header`
    min-height: 82px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    border-bottom: 1px solid #E8DDD9;
    background: #FFFFFF;
`;

export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    p {
        margin: 4px 0 0;
        color: #71808C;
        font-family: "Manrope", sans-serif;
        font-size: 12px;
    }
`;

export const HeaderIcon = styled.div`
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: #B69A6A;
    background: #F5F0E8;
    border-radius: 11px;
`;

export const HeaderTitle = styled.h2`
    margin: 0;
    color: #08111B;
    font-family: "Cormorant Garamond", serif;
    font-size: 26px;
    font-weight: 700;
`;

export const CloseButton = styled.button`
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    color: #71808C;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        color: #08111B;
        background: #F5F0E8;
    }
`;

export const ModalBody = styled.div`
    display: grid;
    grid-template-columns: 235px minmax(0, 1fr);
    flex: 1;
    min-height: 0;
    overflow: hidden;

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
        overflow-y: auto;
    }
`;

export const Sidebar = styled.aside`
    padding: 24px 16px;
    background: #FAF8F6;
    border-right: 1px solid #E8DDD9;

    .user-summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 8px 24px;
        text-align: center;
    }

    .user-avatar {
        width: 62px;
        height: 62px;
        display: grid;
        place-items: center;
        margin-bottom: 12px;
        color: #FFFFFF;
        background: #08111B;
        border: 3px solid #B69A6A;
        border-radius: 50%;
        font-family: "Cormorant Garamond", serif;
        font-size: 27px;
        font-weight: 700;
    }

    strong {
        color: #08111B;
        font-family: "Manrope", sans-serif;
        font-size: 13px;
        font-weight: 700;
    }

    span {
        margin-top: 4px;
        color: #71808C;
        font-family: "Manrope", sans-serif;
        font-size: 11px;
        overflow-wrap: anywhere;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    @media (max-width: 650px) {
        padding: 12px 14px;
        border-right: none;
        border-bottom: 1px solid #E8DDD9;

        .user-summary {
            display: none;
        }

        nav {
            flex-direction: row;
            overflow-x: auto;
        }
    }
`;

export const RoleBadge = styled.span`
    margin-top: 10px !important;
    padding: 5px 10px;
    color: #92784E !important;
    background: #F1E9DC;
    border-radius: 20px;
    font-size: 10px !important;
    font-weight: 700;
`;

export const TabButton = styled.button`
    width: 100%;
    min-height: 43px;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 0 13px;
    color: ${({ $active }) => $active ? "#B69A6A" : "#71808C"};
    background: ${({ $active }) => $active ? "#08111B" : "transparent"};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-align: left;
    transition: 0.2s ease;

    span {
        margin: 0;
        color: inherit;
        font-family: "Manrope", sans-serif;
        font-size: 12px;
        font-weight: 600;
    }

    &:hover {
        color: ${({ $active }) => $active ? "#B69A6A" : "#08111B"};
        background: ${({ $active }) => $active ? "#08111B" : "#F0EBE6"};
    }

    @media (max-width: 650px) {
        width: auto;
        flex-shrink: 0;
        padding: 0 12px;
    }
`;

export const Content = styled.main`
    min-width: 0;
    padding: 28px 32px;
    overflow-y: auto;

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media (max-width: 650px) {
        padding: 22px 18px;
        overflow: visible;
    }
`;

export const SectionHeader = styled.div`
    margin-bottom: 2px;
`;

export const SectionTitle = styled.h3`
    margin: 0;
    color: #08111B;
    font-family: "Cormorant Garamond", serif;
    font-size: 25px;
    font-weight: 700;
`;

export const SectionDescription = styled.p`
    margin: 5px 0 0;
    color: #71808C;
    font-family: "Manrope", sans-serif;
    font-size: 12px;
    line-height: 1.6;
`;

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px 16px;

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;

export const FormGroup = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 7px;

    ${({ $full }) => $full && `
        width: 100%;
    `}

    small {
        color: #71808C;
        font-family: "Manrope", sans-serif;
        font-size: 10px;
    }

    small.error {
        color: #B85454;
    }
`;

export const FormLabel = styled.label`
    color: #3E4A54;
    font-family: "Manrope", sans-serif;
    font-size: 11px;
    font-weight: 700;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 42px;
    padding: 0 12px;
    color: #08111B;
    background: #FFFFFF;
    border: 1px solid #E8DDD9;
    border-radius: 7px;
    outline: none;
    font-family: "Manrope", sans-serif;
    font-size: 12px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
        color: #A3ADB4;
    }

    &:focus {
        border-color: #B69A6A;
        box-shadow: 0 0 0 3px rgba(182, 154, 106, 0.12);
    }

    &:disabled {
        color: #71808C;
        background: #F5F3F1;
        cursor: not-allowed;
    }
`;

export const FormSelect = styled.select`
    width: 100%;
    height: 42px;
    padding: 0 12px;
    color: #08111B;
    background: #FFFFFF;
    border: 1px solid #E8DDD9;
    border-radius: 7px;
    font-family: "Manrope", sans-serif;
    font-size: 12px;
`;

export const ActionFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    padding-top: 18px;
    margin-top: 4px;
    border-top: 1px solid #E8DDD9;

    @media (max-width: 450px) {
        flex-direction: column-reverse;

        button {
            width: 100%;
        }
    }
`;

export const PrimaryButton = styled.button`
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 17px;
    color: #FFFFFF;
    background: #08111B;
    border: 1px solid #08111B;
    border-radius: 7px;
    font-family: "Manrope", sans-serif;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover:not(:disabled) {
        background: #101E2D;
        border-color: #B69A6A;
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;

export const SecondaryButton = styled.button`
    min-height: 40px;
    padding: 0 17px;
    color: #3E4A54;
    background: #FFFFFF;
    border: 1px solid #E8DDD9;
    border-radius: 7px;
    font-family: "Manrope", sans-serif;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        color: #08111B;
        background: #F5F3F1;
    }
`;

export const PreferenceCard = styled.div`
    min-height: 76px;
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 14px;
    background: #FFFFFF;
    border: 1px solid #E8DDD9;
    border-radius: 9px;
`;

export const PreferenceIcon = styled.div`
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: #B69A6A;
    background: #F5F0E8;
    border-radius: 8px;
`;

export const PreferenceInfo = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
        color: #08111B;
        font-family: "Manrope", sans-serif;
        font-size: 12px;
        font-weight: 700;
    }

    span {
        color: #71808C;
        font-family: "Manrope", sans-serif;
        font-size: 10px;
        line-height: 1.5;
    }
`;

export const Toggle = styled.input`
    appearance: none;
    position: relative;
    width: 38px;
    height: 21px;
    flex-shrink: 0;
    background: #D7DDE0;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.2s ease;

    &::before {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 15px;
        height: 15px;
        background: #FFFFFF;
        border-radius: 50%;
        transition: transform 0.2s ease;
    }

    &:checked {
        background: #B69A6A;
    }

    &:checked::before {
        transform: translateX(17px);
    }

    &:focus-visible {
        outline: 3px solid rgba(182, 154, 106, 0.25);
        outline-offset: 2px;
    }
`;

export const PasswordWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const PasswordInput = styled(FormInput)`
    padding-right: 43px;
`;

export const PasswordToggle = styled.button`
    position: absolute;
    top: 50%;
    right: 11px;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    padding: 4px;
    color: #71808C;
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        color: #08111B;
    }
`;

export const Divider = styled.hr`
    width: 100%;
    margin: 2px 0;
    border: none;
    border-top: 1px solid #E8DDD9;
`;

