import { ContainerWrapper } from '../../styles/components/container.styles';

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    );
};

export default Container;