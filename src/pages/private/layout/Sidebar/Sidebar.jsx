import { NavLink } from "react-router-dom";
import { navigationByRole } from "../../../../config/appshell/navigation";

import {
    SidebarContainer,
    SidebarBrand,
    BrandLogo,
    SidebarNavigation,
    NavigationItem,
    NavigationIcon,
    NavigationLabel,
    NavigationSection,
    SidebarFooter
} from "../../../../styles/components/layout/appShell/sidebar.styles";
function Sidebar({ role }) {
    const items = navigationByRole[role] ?? [];

    return (
        <SidebarContainer>
            <SidebarBrand>
                <BrandLogo
                    src="../../../../assets/logos/logo-negro.png"
                    alt="LexControl"
                />
            </SidebarBrand>

            <SidebarNavigation aria-label="Navegación principal">
                {items.map((item, index) => {
                    // Encabezado de sección
                    if (item.section) {
                        return (
                            <NavigationSection key={`section-${index}`}>
                                {item.section}
                            </NavigationSection>
                        );
                    }

                    // Enlace de navegación
                    const Icon = item.icon;

                    return (
                        <NavigationItem
                            key={item.path}
                            as={NavLink}
                            to={item.path}
                            end
                            title={item.label}
                        >
                            {Icon && (
                                <NavigationIcon>
                                    <Icon
                                        size={17}
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                    />
                                </NavigationIcon>
                            )}

                            <NavigationLabel>
                                {item.label}
                            </NavigationLabel>
                        </NavigationItem>
                    );
                })}
            </SidebarNavigation>

            <SidebarFooter>
                La tecnología también hace justicia.
            </SidebarFooter>
        </SidebarContainer>
    );
}

export default Sidebar;