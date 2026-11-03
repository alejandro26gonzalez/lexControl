import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Search,
    ChevronDown,
    UserRound,
    Settings,
    LogOut
} from "lucide-react";

import {
    TopBarContainer,
    SearchContainer,
    SearchIcon,
    SearchInput,
    ProfileContainer,
    ProfileButton,
    Avatar,
    ProfileInfo,
    ProfileName,
    ProfileRole,
    DropdownIcon,
    ProfileMenu,
    ProfileMenuItem,
    ProfileDivider
} from "../../../../styles/components/layout/appShell/topbar.styles";

import { useAuth } from "../../../../context/AuthContext";

function TopBar({ user }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const {logout} = useAuth();

    const displayName = 
        user?.name?.trim() ||
        user?.full_name?.trim() ||
        user?.email ||
        "Usuario"
    
    const initials = displayName
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join("");

    const activeRole = user?.activeRole ?? user?.roles?.[0];

    const roleLabels = {
        ADMIN: "Administrador",
        COLLABORATOR: "Colaborador",
        CLIENT: "Cliente"
    };

    const roleLabel = roleLabels[activeRole] ?? "Usuario";

    const handleLogout = async () => {
        setMenuOpen(false);
        
        try {
            await logout();
            navigate("/portal/login", {
                replace:true,
                state: {
                    loggedOut: true
                }
            });
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <TopBarContainer>
            <SearchContainer role="search">
                <SearchIcon>
                    <Search size={23} strokeWidth={2} />
                </SearchIcon>

                <SearchInput
                    id="search-users-documents"
                    name="search-users-documents"
                    type="search"
                    placeholder="Buscar usuarios, documentos..."
                    aria-label="Buscar en LexControl"
                />
            </SearchContainer>

            <ProfileContainer>
                <ProfileButton
                    type="button"
                    aria-expanded={menuOpen}
                    aria-haspopup="menu"
                    aria-label={`Perfil de ${displayName}`}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <Avatar aria-hidden="true">
                        {initials || "U"}
                    </Avatar>

                    <ProfileInfo>
                        <ProfileName>
                            {displayName}
                        </ProfileName>

                        <ProfileRole>
                            {roleLabel}
                        </ProfileRole>
                    </ProfileInfo>

                    <DropdownIcon $open={menuOpen}>
                        <ChevronDown size={17} />
                    </DropdownIcon>
                </ProfileButton>

                {menuOpen && (
                    <ProfileMenu role="menu">
                        <ProfileMenuItem
                            type="button"
                            role="menuitem"
                            onClick={() => setMenuOpen(false)}
                        >
                            <UserRound size={16} />
                            Mi perfil
                        </ProfileMenuItem>

                        <ProfileMenuItem
                            type="button"
                            role="menuitem"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Settings size={16} />
                            Preferencias
                        </ProfileMenuItem>

                        <ProfileDivider />

                        <ProfileMenuItem
                            type="button"
                            role="menuitem"
                            $danger
                            onClick={handleLogout}
                        >
                            <LogOut size={16} />
                            Cerrar sesión
                        </ProfileMenuItem>
                    </ProfileMenu>
                )}
            </ProfileContainer>
        </TopBarContainer>
    );
}

export default TopBar;