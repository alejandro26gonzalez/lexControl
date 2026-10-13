import { useState } from "react";

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

function TopBar({ user }) {
    const [menuOpen, setMenuOpen] = useState(false);

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

    const handleLogout = () => {
        setMenuOpen(false);
        // Integrar aquí el servicio de cierre de sesión existente.
        // Debe revocar la sesión en el backend y limpiar el contexto.
    };

    return (
        <TopBarContainer>
            <SearchContainer role="search">
                <SearchIcon>
                    <Search size={23} strokeWidth={2} />
                </SearchIcon>

                <SearchInput
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