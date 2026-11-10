
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 18px;
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
    font-weight: 800;
`;

export const Description = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
    line-height: 1.7;
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
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
        transform: translateY(-2px);
    }
`;

export const Summary = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

export const SummaryCard = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    min-height: 105px;
    padding: 20px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 13px;
    background: linear-gradient(135deg, #08111B, #142638);
    box-shadow: 0 6px 18px rgba(8,17,27,0.1);
`;

export const SummaryIcon = styled.div`
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border: 1px solid rgba(182,154,106,0.25);
    border-radius: 11px;
    background: rgba(182,154,106,0.12);
    color: ${({ $success, $warning }) =>
        $success ? "#54C1A0" : $warning ? "#D5A85F" : "#C6A875"};
    font-size: 19px;
`;

export const SummaryLabel = styled.p`
    margin: 0 0 6px;
    color: rgba(255,255,255,0.65);
    font-size: 11px;
    font-weight: 600;
`;

export const SummaryValue = styled.p`
    margin: 0;
    color: #FFFFFF;
    font-size: 27px;
    font-weight: 800;
`;

export const Toolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 20px 22px;

    @media (max-width: 700px) {
        align-items: stretch;
        flex-direction: column;
    }
`;

export const ToolbarInfo = styled.div`
    h2 {
        margin: 0 0 5px;
        color: ${({ theme }) => theme.colors.text};
        font-size: 15px;
        font-weight: 800;
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 11px;
    }
`;

export const FilterGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 280px;
    padding: 10px 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.textMuted};

    &:focus-within {
        border-color: ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;

export const FilterSelect = styled.select`
    padding: 10px 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    outline: none;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    cursor: pointer;

    &:focus {
        border-color: ${({ theme }) => theme.colors.accent};
    }
`;

export const TableCard = styled.section`
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 13px;
    background: ${({ theme }) => theme.colors.surface};
`;

export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    white-space: nowrap;

    thead {
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }

    th {
        padding: 13px 18px;
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.7px;
        text-align: left;
    }

    td {
        padding: 15px 18px;
        border-top: 1px solid ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 11px;
    }

    tbody tr {
        transition: background 0.2s;

        &:hover {
            background: ${({ theme }) => theme.colors.surfaceAlt};
        }
    }
`;

export const CaseNumber = styled.span`
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 10px;
    font-weight: 800;
`;

export const CaseName = styled.span`
    display: block;
    max-width: 240px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
    font-weight: 700;
    text-overflow: ellipsis;
`;

export const ClientInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.textSecondary};

    svg {
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;

export const Status = styled.span`
    display: inline-flex;
    padding: 5px 9px;
    border-radius: 20px;
    background: ${({ $status }) =>
        $status === "Activo" ? "rgba(60,140,106,0.13)" :
        $status === "Pendiente" ? "rgba(200,149,66,0.14)" :
        "rgba(113,128,140,0.14)"};
    color: ${({ $status }) =>
        $status === "Activo" ? "#3C8C6A" :
        $status === "Pendiente" ? "#C89542" :
        "#71808C"};
    font-size: 10px;
    font-weight: 700;
`;

export const ActionGroup = styled.div`
    display: flex;
    gap: 6px;
`;

export const ActionButton = styled.button`
    display: grid;
    place-items: center;
    width: 31px;
    height: 31px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 7px;
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }
`;

export const TableFooter = styled.div`
    padding: 14px 19px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 10px;
`;

export const EmptyState = styled.div`
    padding: 35px 20px;
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
    background: rgba(8,17,27,0.65);
    backdrop-filter: blur(3px);
`;

export const Modal = styled.div`
    width: 100%;
    max-width: ${({ $wide }) => $wide ? "1050px" : "720px"};
    max-height: 92vh;
    overflow-y: auto;
    padding: 25px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 23px;
`;

export const ModalTitle = styled.h3`
    margin: 6px 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 19px;
    font-weight: 800;
`;

export const ModalDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    line-height: 1.6;
`;

export const DetailNumber = styled.p`
    margin: 7px 0 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 10px;
    font-weight: 800;
`;

export const CloseButton = styled.button`
    display: grid;
    place-items: center;
    width: 33px;
    height: 33px;
    flex-shrink: 0;
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 19px;
`;

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;

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
    font-size: 11px;
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
    font-size: 11px;

    &:focus {
        border-color: ${({ theme }) => theme.colors.accent};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 11px 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    outline: none;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;

    &:focus {
        border-color: ${({ theme }) => theme.colors.accent};
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 11px 12px;
    resize: vertical;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    outline: none;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-family: inherit;
    font-size: 11px;
    line-height: 1.7;

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
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
`;

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
    }
`;

export const DetailGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(260px, 1fr);
    gap: 17px;
    align-items: start;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const DetailMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
`;

export const DetailSide = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
`;

export const DetailCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: 13px;
    min-width: 0;
    padding: 18px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 11px;
    background: ${({ theme }) => theme.colors.surface};
`;

export const DetailSectionTitle = styled.h4`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 3px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 800;

    svg {
        color: ${({ theme }) => theme.colors.accent};
        font-size: 15px;
    }
`;

export const DetailField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
`;

export const DetailLabel = styled.span`
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 10px;
    font-weight: 600;
`;

export const DetailValue = styled.span`
    overflow-wrap: anywhere;
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
    font-weight: 700;
`;

export const DetailHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DetailStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const StrategyBox = styled.div`
    padding: 13px;
    border-left: 3px solid ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    line-height: 1.8;
`;

export const DetailActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 3px;
`;

export const StageTimeline = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StageItem = styled.div`
    position: relative;
    display: flex;
    gap: 11px;
    min-height: 48px;

    &:not(:last-child)::before {
        content: "";
        position: absolute;
        top: 23px;
        left: 9px;
        width: 1px;
        height: calc(100% - 7px);
        background: ${({ theme }) => theme.colors.border};
    }
`;

export const StageMarker = styled.div`
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    border: 1px solid ${({ $completed, $current, theme }) =>
        $completed || $current ? theme.colors.accent : theme.colors.border};
    border-radius: 50%;
    background: ${({ $completed, $current, theme }) =>
        $completed ? theme.colors.accent :
        $current ? theme.colors.surfaceAlt :
        theme.colors.surface};

    color: ${({ theme }) => theme.colors.primary};
    font-size: 10px;
`;

export const StageContent = styled.div`
    padding-bottom: 15px;
`;

export const StageName = styled.p`
    margin: 2px 0 0;
    color: ${({ $active, theme }) =>
        $active ? theme.colors.accent : theme.colors.textSecondary};
    font-size: 10px;
    font-weight: ${({ $active }) => $active ? 800 : 500};
`;

export const StageDate = styled.span`
    display: block;
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 9px;
`;
