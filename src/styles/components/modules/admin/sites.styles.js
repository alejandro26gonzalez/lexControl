
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
    gap: 20px;
    flex-wrap: wrap;
`;

export const Eyebrow = styled.span`
    color: ${({ theme }) => theme.colors.accent};
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.5px;
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
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
        transform: translateY(-1px);
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
    transition: 0.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const TabCount = styled.span`
    padding: 2px 7px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.textSecondary};
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
    min-height: 112px;
    padding: 22px;
    overflow: hidden;

    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;

    background: linear-gradient(
        135deg,
        #08111B 0%,
        #101E2D 100%
    );

    box-shadow: 0 5px 16px rgba(8, 17, 27, 0.12);

    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &::after {
        content: "";
        position: absolute;
        width: 110px;
        height: 110px;
        right: -35px;
        top: -45px;
        border-radius: 50%;
        background: rgba(182, 154, 106, 0.09);
        filter: blur(2px);
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 24px rgba(8, 17, 27, 0.2);
    }
`;

export const SummaryIcon = styled.div`
    position: relative;
    z-index: 1;

    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    flex-shrink: 0;

    border: 1px solid rgba(182, 154, 106, 0.25);
    border-radius: 12px;

    background: rgba(182, 154, 106, 0.12);

    color: ${({ $success, $warning }) =>
        $success ? "#43AEC5" : $warning ? "#D5A85F" : "#B69A6A"};

    font-size: 21px;
`;

export const SummaryLabel = styled.p`
    position: relative;
    z-index: 1;

    margin: 0 0 7px;

    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.3px;
`;

export const SummaryValue = styled.p`
    position: relative;
    z-index: 1;

    margin: 0;

    color: #FFFFFF;
    font-size: 29px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.8px;
`;


export const ContentCard = styled.section`
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.surface};
`;

export const Toolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 22px;
    flex-wrap: wrap;

    @media (max-width: 650px) {
        align-items: stretch;
        flex-direction: column;
    }
`;

export const SectionTitle = styled.h2`
    margin: 0 0 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 700;
`;

export const SectionDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 260px;
    padding: 10px 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.textMuted};

    &:focus-within {
        border-color: ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: 650px) {
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

    &::placeholder {
        color: ${({ theme }) => theme.colors.textMuted};
    }
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
        padding: 13px 20px;
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.8px;
        text-align: left;
    }

    td {
        padding: 15px 20px;
        border-top: 1px solid ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 12px;
    }

    tbody tr:hover {
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }
`;

export const NameCell = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;

    svg {
        color: ${({ theme }) => theme.colors.accent};
        flex-shrink: 0;
    }
`;

export const Status = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 5px 9px;
    border-radius: 20px;
    background: ${({ $active, theme }) =>
        $active ? `${theme.colors.success}18` : `${theme.colors.error}18`};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.success : theme.colors.error};
    font-size: 11px;
    font-weight: 700;
`;

export const Actions = styled.div`
    display: flex;
    gap: 7px;
`;

export const ActionButton = styled.button`
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const EmptyState = styled.div`
    padding: 35px 20px;
    color: ${({ theme }) => theme.colors.textMuted};
    text-align: center;
`;

export const TableFooter = styled.div`
    padding: 15px 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 11px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    padding: 20px;
    background: rgba(8, 17, 27, 0.65);
    backdrop-filter: blur(3px);
`;

export const Modal = styled.div`
    width: 100%;
    max-width: 480px;
    padding: 25px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 25px;
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
    gap: 18px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 700;
`;

export const Input = styled.input`
    width: 100%;
    padding: 11px 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    outline: none;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;

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
    margin-top: 10px;
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
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
    }
`;
