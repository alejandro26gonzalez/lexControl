import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { footerDarkTheme } from "../../theme/footerDarkTheme";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/scrollToTopButton/ScrollToTopButton";
import useResetScrollPosition from "../../hooks/useResetScrollPosition";

const PublicLayout = () => {
    useResetScrollPosition();
    const { pathname }= useLocation();

    const darkFooterRoutes = ['/about'];

    const isDarkFooter = darkFooterRoutes.includes(pathname);

    return (
        <PublicLayoutContainer>
            <Navbar />

            <Main>
                <Outlet />
            </Main>

            <ScrollToTopButton />

            {
                isDarkFooter ? (

                    <ThemeProvider
                    theme={footerDarkTheme}
                    >
                        <Footer variant='dark'/>
                    </ThemeProvider>
                ) : (
                    <Footer variant='light'/>
                )
            }

        </PublicLayoutContainer>
    )
};
export default PublicLayout;

const PublicLayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    flex: 1;
`