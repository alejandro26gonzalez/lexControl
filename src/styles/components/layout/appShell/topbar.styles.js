
import styled from "styled-components";

export const TopBarContainer = styled.header`
    position: relative;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
    width: 100%;
    min-height: 72px;

    padding: 12px 24px;

    background: ${({ theme }) =>
        theme.colors?.surface || "#FFFFFF"};

    @media (max-width: 768px) {
        gap: 12px;
        padding: 12px 18px;
    }

    @media (max-width: 480px) {
        gap: 8px;
        padding: 12px 14px;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;

    flex: 1;
    width: 100%;
    max-width: 352px;
    min-width: 0;
    height: 37px;

    padding: 0 10px;

    border: 1px solid #B9B9B9;
    border-radius: 7px;

    background: #FFFFFF;

    transition:
        border-color 160ms ease,
        box-shadow 160ms ease;

    &:focus-within {
        border-color: #43AEC5;
        box-shadow: 0 0 0 3px rgba(67, 174, 197, 0.12);
    }

    @media (max-width: 480px) {
        max-width: none;
        height: 35px;
        padding: 0 8px;
    }
`;

export const SearchIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 auto;
    color: #555555;
`;

export const SearchInput = styled.input`
    width: 100%;
    min-width: 0;
    height: 100%;

    padding: 0 8px;

    border: none;
    outline: none;

    color: #08111B;
    background: transparent;

    font-family: "Manrope", sans-serif;
    font-size: 12px;

    &::placeholder {
        color: #777777;
        opacity: 1;
    }

    &::-webkit-search-cancel-button {
        cursor: pointer;
    }
`;

export const ProfileContainer = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    flex: 0 0 auto;
`;

export const ProfileButton = styled.button`
    display: flex;
    align-items: center;

    gap: 8px;
    padding: 0;

    border: none;
    background: transparent;
    color: inherit;

    cursor: pointer;
    text-align: left;

    &:focus-visible {
        outline: 2px solid #43AEC5;
        outline-offset: 4px;
        border-radius: 6px;
    }
`;

export const Avatar = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 35px;
    width: 35px;
    height: 35px;

    border-radius: 50%;

    color: #FFFFFF;
    background: #08111B;

    font-family: "Manrope", sans-serif;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const ProfileInfo = styled.span`
    display: flex;
    flex-direction: column;

    min-width: 0;
    max-width: 150px;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const ProfileName = styled.span`
    overflow: hidden;

    color: #08111B;

    font-family: "Manrope", sans-serif;
    font-size: 12px;
    font-weight: 700;

    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ProfileRole = styled.span`
    margin-top: 1px;

    color: #555555;

    font-family: "Manrope", sans-serif;
    font-size: 9px;
    font-weight: 400;
`;

export const DropdownIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: #08111B;

    transition: transform 160ms ease;

    transform: rotate(
        ${({ $open }) => ($open ? "180deg" : "0deg")}
    );
`;

export const ProfileMenu = styled.div`
    position: absolute;
    top: calc(100% + 12px);
    right: 0;

    display: flex;
    flex-direction: column;

    width: 190px;
    padding: 6px;

    border: 1px solid #E4E7EB;
    border-radius: 9px;

    background: #FFFFFF;
    box-shadow: 0 8px 28px rgba(8, 17, 27, 0.12);
`;

export const ProfileMenuItem = styled.button`
    display: flex;
    align-items: center;

    gap: 10px;
    width: 100%;
    padding: 10px;

    border: none;
    border-radius: 5px;

    color: ${({ $danger }) =>
        $danger ? "#B42318" : "#24303D"};

    background: transparent;

    font-family: "Manrope", sans-serif;
    font-size: 12px;
    text-align: left;

    cursor: pointer;

    &:hover {
        background: ${({ $danger }) =>
            $danger ? "#FEF3F2" : "#F3F5F7"};
    }

    &:focus-visible {
        outline: 2px solid #43AEC5;
        outline-offset: -2px;
    }
`;

export const ProfileDivider = styled.hr`
    width: 100%;
    margin: 5px 0;

    border: none;
    border-top: 1px solid #E8EAED;
`;
