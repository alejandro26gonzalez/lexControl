import {
    HeaderContainer,
    Eyebrow,
    Title,
    Description,
} from '../../styles/components/hero.styles';

const SectionHeader = ({
    eyebrow,
    title,
    description,
    variant = 'light',
    size = 'large',
    align = 'left',
}) => {
    return (
        <HeaderContainer $align={align}>

            {eyebrow && (
                <Eyebrow>
                    {eyebrow}
                </Eyebrow>
            )}

            {title && (
                <Title 
                $variant={variant}
                $size={size}
                >
                    {title}
                </Title>
            )}

            {description && (
                <Description $variant={variant}>
                    {description}
                </Description>
            )}

        </HeaderContainer>
    );
};

export default SectionHeader;