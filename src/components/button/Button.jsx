import { FiArrowRight } from 'react-icons/fi';

import {
    ButtonLink,
    ButtonElement,
    ButtonArrow,
} from '../../styles/components/button.styles';
import { Link } from 'react-router-dom';

const ButtonContent = ({ children, variant }) => (
    <>
        {children}

        {variant === 'textArrown' && (
            <ButtonArrow>
                <FiArrowRight />
            </ButtonArrow>
        )}
    </>
);

const Button = ({
    children,
    to,
    href,
    variant = 'primary',
    type = 'button',
    onClick,
    ...props
}) => {
    if (to) {
        return (
            <ButtonLink
                as={Link}
                to={to}
                $variant={variant}
                {...props}
            >
                {children}
            </ButtonLink>
        );
    }

    if (href) {
        return (
            <ButtonLink
                as="a"
                href={href}
                $variant={variant}
                {...props}
            >
                {children}
            </ButtonLink>
        );
    }

    return (
        <ButtonElement
            type={type}
            onClick={onClick}
            $variant={variant}
            {...props}
        >
            <ButtonContent
                variant={variant}
            >
                {children}
            </ButtonContent>
        </ButtonElement>
    );
};

export default Button;