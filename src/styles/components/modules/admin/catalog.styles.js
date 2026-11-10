
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Eyebrow = styled.span`
    color: ${({ theme }) => theme.colors.accent};
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.4px;
`;

export const Title = styled.h1`
    margin: 7px 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 26px;
    font-weight: 700;
`;

export const Description = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 13px;
`;

export const CreateButton = styled.button`
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px 16px;
    border: none;
    border-radius: 9px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
    }
`;

export const Tabs = styled.div`
    display: flex;
    gap: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Tab = styled.button`
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 12px 16px;
    margin-bottom: -1px;
    border: none;
    border-bottom: 2px solid ${({ $active, theme }) =>
        $active ? theme.colors.accent : "transparent"};
    background: transparent;
    color: ${({ $active, theme }) =>
        $active ? theme.colors.text : theme.colors.textMuted};
    font-size: 13px;
    font-weight: ${({ $active }) => ($active ? 700 : 500)};
    cursor: pointer;
`;

export const TabCount = styled.span`
    padding: 3px 8px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    font-size: 11px;
`;

export const Summary = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;

export const SummaryCard = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    min-height: 105px;
    padding: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 13px;
    background: linear-gradient(135deg, #08111B, #101E2D);
    box-shadow: 0 5px 16px rgba(8, 17, 27, 0.12);

    &::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        top: -45px;
        right: -30px;
        border-radius: 50%;
        background: rgba(182, 154, 106, 0.1);
    }

    &:hover {
        transform: translateY(-2px);
        transition: 0.2s ease;
    }
`;

export const SummaryIcon = styled.div`
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    border: 1px solid rgba(182, 154, 106, 0.25);
    border-radius: 11px;
    background: rgba(182, 154, 106, 0.12);
    color: ${({ $success, $warning }) =>
        $success ? "#43AEC5" : $warning ? "#D5A85F" : "#B69A6A"};
    font-size: 20px;
`;

export const SummaryLabel = styled.p`
    position: relative;
    z-index: 1;
    margin: 0 0 7px;
    color: rgba(255, 255, 255, 0.75);
    font-size: 11px;
    font-weight: 700;
`;

export const SummaryValue = styled.p`
    position: relative;
    z-index: 1;
    margin: 0;
    color: white;
    font-size: 27px;
    font-weight: 800;
`;

export const Toolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;

    h2 {
        margin: 0 0 5px;
        color: ${({ theme }) => theme.colors.text};
        font-size: 17px;
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 12px;
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 270px;
    padding: 10px 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.textMuted};

    &:focus-within {
        border-color: ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const ProfessionalCard = styled.article`
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 13px;
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 4px 14px rgba(8, 17, 27, 0.06);
    transition: 0.2s;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 9px 24px rgba(8, 17, 27, 0.1);
    }
`;

export const ProfessionalImage = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 190px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 35px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export const ProfessionalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 18px;
`;

export const ProfessionalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
`;

export const ProfessionalName = styled.h3`
    margin: 0 0 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 17px;
    font-weight: 700;
`;

export const ProfessionalPosition = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.tech};
    font-size: 13px;
    font-weight: 700;
`;

export const SpecialtyTag = styled.span`
    align-self: flex-start;
    padding: 6px 9px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    font-weight: 600;
`;

export const CardDescription = styled.p`
    display: -webkit-box;
    overflow: hidden;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
    line-height: 1.7;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-top: 13px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    span {
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: 10px;
    }
`;

export const CardLink = styled.a`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.colors.tech};
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.techHover};
    }
`;

export const SpecialtyCard = styled.article`
    padding: 22px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 13px;
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 4px 14px rgba(8, 17, 27, 0.06);
`;

export const SpecialtyCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
`;

export const SpecialtyTitle = styled.h3`
    margin: 8px 0 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
`;

export const SpecialtyDescription = styled.p`
    margin: 15px 0 20px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 13px;
    line-height: 1.7;
`;

export const DynamicTitle = styled.h4`
    margin: 0 0 13px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 800;
`;

export const SpecialtyAreaList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
`;

export const SpecialtyArea = styled.div`
    padding-left: 13px;
    border-left: 2px solid ${({ theme }) => theme.colors.accent};
`;

export const SpecialtyAreaName = styled.h5`
    margin: 0 0 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 700;
`;

export const SpecialtyAreaDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    line-height: 1.6;
`;

export const CardActions = styled.div`
    display: flex;
    gap: 6px;
`;

export const IconButton = styled.button`
    display: grid;
    place-items: center;
    width: 31px;
    height: 31px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 7px;
    background: transparent;
    color: ${({ $danger, theme }) =>
        $danger ? theme.colors.error : theme.colors.textSecondary};
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }
`;

export const EmptyState = styled.div`
    padding: 45px 20px;
    border: 1px dashed ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
    text-align: center;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    padding: 20px;
    overflow-y: auto;
    background: rgba(8, 17, 27, 0.68);
    backdrop-filter: blur(3px);
`;

export const Modal = styled.div`
    width: 100%;
    max-width: 680px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 25px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 24px;
`;

export const ModalTitle = styled.h3`
    margin: 0 0 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 19px;
`;

export const ModalDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
`;

export const CloseButton = styled.button`
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    min-width: 0;
    grid-column: ${({ $full }) => $full ? "1 / -1" : "auto"};
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 700;
`;

export const Input = styled.input`
    width: 100%;
    min-width: 0;
    padding: 11px 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    outline: none;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;

    &:focus {
        border-color: ${({ theme }) => theme.colors.accent};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-width: 0;
    padding: 11px 12px;
    resize: vertical;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    outline: none;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-family: inherit;
    font-size: 12px;
    line-height: 1.6;

    &:focus {
        border-color: ${({ theme }) => theme.colors.accent};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 15px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CancelButton = styled.button`
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
`;

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
    }
`;

export const DynamicSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.surfaceAlt};
`;

export const DynamicHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const DynamicItem = styled.div`
    display: ${({ $column }) => $column ? "flex" : "grid"};
    grid-template-columns: ${({ $column }) =>
        $column ? "none" : "1fr auto"};
    flex-direction: ${({ $column }) => $column ? "column" : "initial"};
    position: relative;
    gap: 9px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.surface};
`;

export const AddButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 7px 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
`;

export const RemoveButton = styled.button`
    display: grid;
    place-items: center;
    align-self: flex-end;
    width: 32px;
    height: 32px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.error};
    cursor: pointer;
`;

export const ImagePreview = styled.img`
    width: 100%;
    max-width: 130px;
    height: 100px;
    margin-top: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    object-fit: cover;
`;
