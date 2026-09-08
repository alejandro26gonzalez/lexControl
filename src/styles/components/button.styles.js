import styled from 'styled-components';

const ButtonBase = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 48px;
    padding: 0.75rem 1.5rem;

    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    line-height: ${({ theme }) => theme.typography.button.lineHeight};

    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;

    transition:
        background-color 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        transform: translateY(-1px);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.tech};
        outline-offset: 3px;
    }
    
`;

const getBackground = ({ theme, $variant }) => {
    switch ($variant) {
        case 'secondary':
            return 'transparent';
        case 'textArrow':
            return 'transparent';
        case 'primary':
        default:
            return theme.colors.accent;
    }
};

const getColor = ({ theme, $variant }) => {
    switch ($variant) {
        case 'secondary':
            return theme.colors.white;
        case 'textArrow':
            return theme.colors.text;
        case 'primary':
        default:
            return theme.colors.white;
    }
};

const getBorderColor = ({ theme, $variant }) => {
    switch ($variant) {
        case 'secondary':
            return theme.colors.white;
        case 'textArrow':
            return theme.colors.accent;
        case 'primary':
        default:
            return theme.colors.accent;
    }
};

const getHoverBackground = ({ theme, $variant }) => {
    switch ($variant) {
        case 'secondary':
            return 'rgba(255, 255, 255, 0.08)';

        case 'textArrow':
            return 'transparent';

        case 'primary':
        default:
            return theme.colors.accentHover;
    }
};

const getHoverBorderColor = ({ theme, $variant }) => {
    switch ($variant) {
        case 'secondary':
            return theme.colors.white;

        case 'textArrow':
            return theme.colors.accentHover;

        case 'primary':
        default:
            return theme.colors.accentHover;
    }
};

const textArrowStyles = ({ $variant, theme }) =>
    $variant === 'textArrow' &&
    `
        min-height: auto;
        padding: 0 0 0.5rem;

        border: none;
        border-bottom: 2px solid ${theme.colors.accent};

        border-radius: 0;

        gap: 0.25rem;
    `;

export const ButtonLink = styled(ButtonBase)`
    background-color: ${getBackground};
    color: ${getColor};
    border-color: ${getBorderColor};

    ${textArrowStyles}

    &:hover {
        background-color: ${getHoverBackground};
        border-color: ${getHoverBorderColor};
        color: ${({theme, $variant}) => 
            $variant === 'textArrow'
            ? theme.colors.accent
            : theme.colors.white
        }
    }
`;

export const ButtonElement = styled(ButtonBase)`
    background-color: ${getBackground};
    color: ${getColor};
    border-color: ${getBorderColor};

    ${textArrowStyles}

    &:hover {
        background-color: ${getHoverBackground};
        border-color: ${getHoverBorderColor};
        color: ${({theme, $variant}) => 
            $variant === 'textArrow'
            ? theme.colors.accent
            : theme.colors.white
        }
    }
`;
export const ButtonArrow = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    line-height: 1;
    transition: transform 0.2s ease;
    ${ButtonLink}:hover &,
    ${ButtonElement}:hover & {
        transform: translateX(4px);
    }
`;