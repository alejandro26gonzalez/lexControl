import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;
    padding-left: 5rem;
    padding-right: 5rem;

    @media (max-width: ${breakpoints.laptop}) {
        padding-left: 3.5rem;
        padding-right: 3.5rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`;