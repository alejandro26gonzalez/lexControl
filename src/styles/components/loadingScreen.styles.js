import styled from 'styled-components';

export const LoadingContainer = styled.div`
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const LoadingText = styled.p`
    margin: 0;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};

    color: ${({ theme }) => theme.colors.text};
`;