import { Outlet } from "react-router-dom";
import useResetScrollPosition from "../../hooks/useResetScrollPosition";
import {privateTheme} from "../../theme/privateTheme";
import styled, { ThemeProvider } from "styled-components";
import ScrollToTopButton from "../../components/scrollToTopButton/ScrollToTopButton";

const PrivateLayout = () => {
    useResetScrollPosition();

    return (
        <ThemeProvider theme={privateTheme}>
            <PrivateLayoutContainer>

                <Main>
                    <Outlet />
                </Main>

                <ScrollToTopButton />

            </PrivateLayoutContainer>
        </ThemeProvider>
    )
};
export default PrivateLayout;

const PrivateLayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    flex: 1;
`