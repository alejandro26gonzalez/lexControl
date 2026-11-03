
import styled from "styled-components";
import { Search } from "lucide-react";


export const TableContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
`;

export const TableHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
`;

export const TableTitle = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.15rem;
    font-weight: 650;
    letter-spacing: -0.025em;
`;

export const TableDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.875rem;
    line-height: 1.5;
`;

export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
    overscroll-behavior-x: contain;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.surface};
`;

export const TableElement = styled.table`
    width: 100%;
    min-width: 720px;
    border-collapse: separate;
    border-spacing: 0;
    text-align: left;
`;

export const TableHead = styled.thead`
    background: ${({ theme }) => theme.colors.background};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
    transition: background 0.15s ease;

    &:not(:last-child) {
        & > td {
            border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        }
    }

    ${TableBody} &:hover {
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const TableCell = styled.td`
    padding: 0.95rem 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.875rem;
    vertical-align: middle;
    white-space: nowrap;

    ${TableHead} & {
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 0.75rem;
        font-weight: 650;
        letter-spacing: 0.045em;
        text-transform: uppercase;
        padding-top: 0.85rem;
        padding-bottom: 0.85rem;
    }
`;

export const TableMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180px;
    padding: 2rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.875rem;
    text-align: center;
`;

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
`;

export const ActionButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    padding: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
        border-color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme }) => theme.colors.background};
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    &[data-variant="danger"]:hover {
        color: #DC6262;
        border-color: #DC6262;
        background: rgba(220, 98, 98, 0.08);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.accent};
        outline-offset: 2px;
    }
`;

export const FiltersContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    flex-wrap: wrap;
`;

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 450px;
`;

export const SearchIcon = styled(Search)`
    position: absolute;
    left: 0.9rem;
    width: 17px;
    height: 17px;
    color: ${({ theme }) => theme.colors.text.secondary};
    pointer-events: none;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 42px;
    padding: 0 2.7rem 0 2.6rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9px;
    outline: none;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.85rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text.secondary};
        opacity: 0.75;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.accent};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent}20;
    }
`;

export const ClearSearchButton = styled.button`
    position: absolute;
    right: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    padding: 0;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.text.primary};
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0;
    flex-wrap: wrap;
`;

export const PaginationInfo = styled.span`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.8rem;
`;

export const PaginationControls = styled.div`
    display: flex;
    align-items: center;
    gap: 0.35rem;
`;

export const PaginationButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 34px;
    height: 34px;
    padding: 0 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 7px;
    background: ${({ $active, theme }) =>
        $active ? theme.colors.accent : theme.colors.surface};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.primary : theme.colors.text.secondary};
    font-size: 0.8rem;
    font-weight: ${({ $active }) => $active ? "650" : "400"};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        border-color: ${({ theme }) => theme.colors.accent};
        color: ${({ $active, theme }) =>
            $active ? theme.colors.primary : theme.colors.accent};
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

export const PageSizeSelect = styled.select`
    height: 34px;
    padding: 0 2rem 0 0.65rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 7px;
    outline: none;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.8rem;
    cursor: pointer;

    &:focus {
        border-color: ${({ theme }) => theme.colors.accent};
    }
`;

export const CreateUserButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    padding: 0 17px;
    min-height: 42px;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.875rem;
    font-weight: 600;

    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryHover};
        border-color: ${({ theme }) => theme.colors.primaryHover};
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    &:focus-visible {
        outline: 3px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }

    @media (max-width: 600px) {
        padding: 0 12px;
        min-height: 40px;

        span {
            display: none;
        }
    }
`;


export const ConfirmOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1300;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    background: rgba(8, 17, 27, 0.62);
    backdrop-filter: blur(4px);
`;

export const ConfirmContainer = styled.div`
    width: 100%;
    max-width: 430px;
    padding: 26px;

    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;

    box-shadow: 0 20px 60px rgba(8, 17, 27, 0.22);
`;

export const ConfirmHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 14px;
`;

export const ConfirmIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 44px;
    height: 44px;

    color: ${({ $active, theme }) =>
        $active ? theme.colors.error : theme.colors.success};

    background: ${({ $active, theme }) =>
        $active
            ? theme.colors.feedback.error.background
            : theme.colors.feedback.success.background};

    border-radius: 11px;
`;

export const ConfirmTitle = styled.h3`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 1.6rem;
    font-weight: 600;
`;

export const ConfirmDescription = styled.p`
    margin: 7px 0 0;

    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.84rem;
    line-height: 1.6;
`;

export const ConfirmClose = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    padding: 5px;

    border: none;
    border-radius: 6px;
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }
`;

export const ConfirmActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    margin-top: 26px;
`;

export const ConfirmButton = styled.button`
    min-height: 40px;
    padding: 0 16px;

    border: 1px solid ${({ $active, theme }) =>
        $active ? theme.colors.error : theme.colors.success};

    border-radius: 8px;

    background: ${({ $active, theme }) =>
        $active ? theme.colors.error : theme.colors.success};

    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.82rem;
    font-weight: 700;

    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.88;
    }

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;

export const CancelConfirmButton = styled.button`
    min-height: 40px;
    padding: 0 16px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textSecondary};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 0.82rem;
    font-weight: 600;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceAlt};
    }

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;
