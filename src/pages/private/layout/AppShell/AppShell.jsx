import { Outlet, useLocation } from "react-router-dom";
import {useAuth} from "../../../../context/AuthContext";
import {
    pageConfig,
    defaultPageConfig
} from "../../../../config/appshell/pageConfig";

import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import HeroImg from "../../../../assets/images/team/hero.png";

import {
    AppShellContainer,
    AppShellMain,
    AppShellContent,
    WelcomeDescription,
    WelcomeSection,
    WelcomeTitle,
    WelcomeImage,
} from "../../../../styles/components/layout/appShell/appshell.styles";

function AppShell() {

    const { user, loading, isAuthenticated} = useAuth();
    const {pathname} = useLocation();

    if (loading) return null;

    if (!isAuthenticated || !user) return null;

    const role = user?.roles?.[0] ?? null;

    const displayName = 
        user?.name?.trim() ||
        user?.email ||
        "Usuario";
    
    const firstName = displayName.split(/\s+/)[0];

    const currentPage = pageConfig[role]?.[pathname] ?? defaultPageConfig;

    const welcomeTitle = 
        currentPage.type === "home"
            ? `Bienvenido, ${firstName}`
            : currentPage.title;

    return (
        <AppShellContainer>
            <Sidebar role={role} />

            <AppShellMain>
                <TopBar user={user} />

                <AppShellContent>
                    <WelcomeSection>
                        <div>
                            <WelcomeTitle>
                                {welcomeTitle}
                            </WelcomeTitle>

                            <WelcomeDescription>
                                {currentPage.description}
                            </WelcomeDescription>
                        </div>

                        <WelcomeImage 
                        src={HeroImg}
                        alt=""
                        aria-hidden="true"
                        />
                    </WelcomeSection>

                    <Outlet />
                </AppShellContent>
            </AppShellMain>
        </AppShellContainer>
    )
}

export default AppShell;