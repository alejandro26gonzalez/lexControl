import { ThemeProvider } from "styled-components";
import { publicTheme } from "./theme/publicTheme";
import AppRoutes from "./routes/AppRoutes";
import styled from "styled-components";

import useDisableScrollRestoration from "./hooks/useDisableScrollRestoration";
import GlobalStyles from "./styles/GlobalStyles";

function App() {

  useDisableScrollRestoration();

  return (
    <AppLayout>
      <ThemeProvider theme={publicTheme}>
        
        <GlobalStyles />
        
        <MainContent>
          <AppRoutes />
        </MainContent>
      
      </ThemeProvider>
    </AppLayout>
  )
}

export default App;

const AppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;