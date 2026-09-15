import styled from "styled-components";


export const PageContainer = styled.div`
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 40px;
`;


export const Content = styled.div`
    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
`;


export const IconContainer = styled.div`
    width: 80px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 24px;

    border-radius: 50%;

    font-size: 38px;
`;


export const Code = styled.span`
    font-size: 96px;
    font-weight: 800;

    line-height: 1;

    margin-bottom: 16px;
`;


export const Title = styled.h1`
    margin: 0 0 16px;

    font-size: 32px;
    font-weight: 700;
`;


export const Description = styled.p`
    max-width: 480px;

    margin: 0 0 32px;

    font-size: 16px;
    line-height: 1.6;
`;


export const BackButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 12px 20px;

    border: none;
    border-radius: 8px;

    cursor: pointer;

    font-size: 15px;
    font-weight: 600;

    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.85;
    }
`;