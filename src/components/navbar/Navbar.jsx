import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
    NavbarContainer,
    NavbarContent,
    LogoLink,
    Logo,
    NavigationLink,

    DesktopNavigation,
    MenuButton,
    MobileOverlay,
    MobileMenu,
    MobileMenuHeader,
    MobileNavigation,
    MobileNavigationLink,
    MobileLoginButton,
    DesktopLogin
} from "../../styles/components/navbar.styles";
import { navbarConfig } from "../../config/components/navbar";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import Button from "../button/Button";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useLockBodyScroll(isMenuOpen);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((previous) => !previous);
    };

    return (
        <NavbarContainer>
            <NavbarContent>

                <LogoLink to={navbarConfig.links[0].path}>
                    <Logo
                        src={navbarConfig.logo}
                        alt={`${navbarConfig.company} - Inicio`}
                    />
                </LogoLink>

                
                {/* DESKTOP */}
                <DesktopNavigation>
                    {navbarConfig.links.map((link) => (
                        <NavigationLink
                            key={link.id}
                            to={link.path}
                            end={link.path === '/'}
                        >
                            {link.label}
                        </NavigationLink>
                    ))}
                </DesktopNavigation>
                
                <DesktopLogin>
                    <Button to={navbarConfig.login.path} variant="primary">
                        {navbarConfig.login.label}
                    </Button>
                </DesktopLogin>

                {/* MOBILE */}
                <MenuButton
                    type="button"
                    aria-label={
                        isMenuOpen
                            ? 'Cerrar menú'
                            : 'Abrir menú'
                    }
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </MenuButton>

            </NavbarContent>

            {/* MOBILE DRAWER */}
            {isMenuOpen && (
                <>
                    <MobileOverlay onClick={closeMenu} />

                    <MobileMenu>

                        <MobileMenuHeader>
                            <span>
                                {navbarConfig.company}
                            </span>

                            <MenuButton
                                type="button"
                                aria-label="Cerrar menú"
                                onClick={closeMenu}
                            >
                                <FiX />
                            </MenuButton>
                        </MobileMenuHeader>

                        <MobileNavigation>
                            {navbarConfig.links.map((link) => (
                                <MobileNavigationLink
                                    key={link.id}
                                    to={link.path}
                                    end={link.path === '/'}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </MobileNavigationLink>
                            ))}

                            <MobileLoginButton
                                to={navbarConfig.login.path}
                                onClick={closeMenu}
                            >
                                {navbarConfig.login.label}
                            </MobileLoginButton>
                        </MobileNavigation>

                    </MobileMenu>
                </>
            )}
        </NavbarContainer>
    )
};

export default Navbar;