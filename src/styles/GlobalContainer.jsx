import styled from "styled-components";
import { breakpoints as device} from "./breakpoints";

const GlobalContainer = ({ children }) => {
    return <Container>{children}</Container>
}

export default GlobalContainer;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh; /* mejor que height */

  @media ${device.mobile} {
    width: 95%;
  }
`;
