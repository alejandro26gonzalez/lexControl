
import styled from "styled-components";

export const SidebarContainer = styled.aside`
    display: flex;
    flex-direction: column;

    flex: 0 0 184px;
    width: 184px;
    min-height: 100vh;

    padding: 18px 10px 14px;

    color: #ffffff;
    background: linear-gradient(
        180deg,
        #08111b 0%,
        #061a32 55%,
        #06264b 100%
    );

    overflow-x: hidden;

    @media (max-width: 900px) {
        flex-basis: 164px;
        width: 164px;
    }

    @media (max-width: 640px) {
        flex-basis: 64px;
        width: 64px;
        padding-inline: 8px;
    }
`;

export const SidebarBrand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 42px;
    margin-bottom: 28px;
    padding: 0 2px;
`;

export const BrandLogo = styled.img`
    display: block;

    width: 100%;
    max-width: 142px;
    max-height: 38px;

    object-fit: contain;
    object-position: left center;

    @media (max-width: 640px) {
        width: 38px;
        height: 38px;
        object-position: center;
    }
`;

export const SidebarNavigation = styled.nav`
    display: flex;
    flex-direction: column;

    gap: 4px;
    width: 100%;
`;

export const NavigationItem = styled(NavLinkBase)`
    display: flex;
    align-items: center;

    gap: 9px;
    width: 100%;
    min-height: 34px;

    padding: 7px 9px;
    border-radius: 5px;

    color: rgba(255, 255, 255, 0.92);
    text-decoration: none;

    font-family: "Manrope", sans-serif;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.4;

    transition:
        background-color 160ms ease,
        color 160ms ease;

    &:hover {
        background: rgba(255, 255, 255, 0.09);
        color: #ffffff;
    }

    &.active {
        color: #ffffff;
        background: rgba(67, 174, 197, 0.17);
        box-shadow: inset 2px 0 0 #43aec5;
    }

    &:focus-visible {
        outline: 2px solid #43aec5;
        outline-offset: -2px;
    }

    @media (max-width: 640px) {
        justify-content: center;
        padding: 9px 4px;
    }
`;

// Permite usar NavLink como elemento base de styled-components.
function NavLinkBase({ className, ...props }) {
    return <a className={className} {...props} />;
}

export const NavigationIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 17px;

    @media (max-width: 640px) {
        flex-basis: auto;
    }
`;

export const NavigationLabel = styled.span`
    min-width: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 640px) {
        display: none;
    }
`;

export const NavigationSection = styled.div`
    margin: 20px 9px 7px;

    color: rgba(255, 255, 255, 0.52);

    font-family: "Manrope", sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.09em;
    line-height: 1.4;
    text-transform: uppercase;

    &:first-child {
        margin-top: 0;
    }

    @media (max-width: 640px) {
        display: none;
    }
`;

export const SidebarFooter = styled.footer`
    margin-top: auto;
    padding: 12px 8px 4px;

    border-top: 1px solid rgba(255, 255, 255, 0.17);

    color: rgba(255, 255, 255, 0.88);

    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.25;

    @media (max-width: 640px) {
        display: none;
    }
`;
