import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";

import {
    AppShellContainer,
    AppShellMain,
    AppShellContent,
    WelcomeDescription,
    WelcomeSection,
    WelcomeTitle,
    WelcomeImage,
} from "../../../../styles/components/layout/appShell/appshell.styles";

function AppShell({ user }) {
    const roles = user?.roles ?? [];

    const role = user?.activeRole ?? roles[0] ?? null;

    const displayName = 
        user?.name?.trim() ||
        user?.full_name?.trim() ||
        user?.email ||
        "Usuario";
    
    const firstName = displayName.split(/\s+/)[0];

    return (
        <AppShellContainer>
            <Sidebar role={role} />

            <AppShellMain>
                <TopBar user={user} />

                <AppShellContent>
                    <WelcomeSection>
                        <div>
                            <WelcomeTitle>
                                Bienvenido, {firstName}
                            </WelcomeTitle>

                            <WelcomeDescription>
                                Aquí tienes un resumen de la actividad de LexControl.
                            </WelcomeDescription>
                        </div>

                        <WelcomeImage 
                        src="../../../../assets/images/team/hero.png"
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