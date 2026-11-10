
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 27px;
    width: 100%;
`;

export const WelcomePanel = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    min-height: 220px;
    padding: 32px 36px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;
    background: linear-gradient(115deg, #101E2D 0%, #172A3B 100%);

    @media (max-width: 650px) {
        padding: 25px 22px;
    }
`;

export const WelcomeContent = styled.div`
    position: relative;
    z-index: 2;
    max-width: 570px;
`;

export const WelcomeEyebrow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    color: #C6A875;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.2px;
`;

export const WelcomeTitle = styled.h1`
    max-width: 490px;
    margin: 0;
    color: #FFFFFF;
    font-size: clamp(25px, 3vw, 34px);
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: -0.7px;

    span {
        color: #C6A875;
    }
`;

export const WelcomeDescription = styled.p`
    max-width: 480px;
    margin: 12px 0 18px;
    color: rgba(255,255,255,0.7);
    font-size: 12px;
    line-height: 1.8;
`;

export const WelcomeDate = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.58);
    font-size: 11px;
    text-transform: capitalize;

    svg {
        color: #C6A875;
    }
`;

export const WelcomeDecoration = styled.div`
    position: absolute;
    top: 0;
    right: 35px;
    display: grid;
    place-items: center;
    width: 260px;
    height: 100%;
    pointer-events: none;

    .decoration-circle {
        position: absolute;
        border: 1px solid rgba(182,154,106,0.18);
        border-radius: 50%;
    }

    .circle-one {
        width: 205px;
        height: 205px;
    }

    .circle-two {
        width: 145px;
        height: 145px;
    }

    .decoration-center {
        display: grid;
        place-items: center;
        width: 75px;
        height: 75px;
        border: 1px solid rgba(182,154,106,0.3);
        border-radius: 19px;
        background: rgba(182,154,106,0.12);
        color: #C6A875;
        font-size: 31px;
        transform: rotate(-7deg);
    }

    @media (max-width: 850px) {
        opacity: 0.35;
        right: -70px;
    }

    @media (max-width: 550px) {
        display: none;
    }
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

export const SectionTitle = styled.h2`
    margin: 0 0 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    font-weight: 800;
`;

export const SectionDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    line-height: 1.6;
`;

export const MetricsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export const MetricCard = styled.div`
    padding: 19px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.surface};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: translateY(-3px);
        border-color: ${({ theme }) => theme.colors.accent};
        box-shadow: 0 7px 18px rgba(8,17,27,0.07);
    }

    .metric-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    .metric-arrow {
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: 16px;
    }

    &:hover .metric-arrow {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const MetricIcon = styled.div`
    display: grid;
    place-items: center;
    width: 39px;
    height: 39px;
    border-radius: 10px;

    background: ${({ $color }) =>
        $color === "gold" ? "rgba(182,154,106,0.13)" :
        $color === "warning" ? "rgba(200,149,66,0.13)" :
        $color === "cyan" ? "rgba(67,174,197,0.13)" :
        "rgba(60,140,106,0.13)"};

    color: ${({ $color }) =>
        $color === "gold" ? "#B69A6A" :
        $color === "warning" ? "#C89542" :
        $color === "cyan" ? "#3299B0" :
        "#3C8C6A"};

    font-size: 18px;
`;

export const MetricLabel = styled.p`
    margin: 0 0 7px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
    font-weight: 600;
`;

export const MetricValue = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 27px;
    font-weight: 800;
    letter-spacing: -0.7px;
`;

export const MetricFooter = styled.p`
    margin: 6px 0 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 10px;
`;

export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 330px;
    gap: 20px;
    align-items: start;

    @media (max-width: 1050px) {
        grid-template-columns: 1fr;
    }
`;

export const MainColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    min-width: 0;
`;

export const SideColumn = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 0;
`;

export const ContentCard = styled.section`
    padding: 21px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.surface};

    &.workspace-card {
        background: linear-gradient(140deg, #101E2D, #172A3B);
        border-color: rgba(255,255,255,0.08);

        h3 {
            margin: 15px 0 8px;
            color: #FFFFFF;
            font-size: 15px;
            font-weight: 800;
        }

        p {
            margin: 0;
            color: rgba(255,255,255,0.62);
            font-size: 11px;
            line-height: 1.8;
        }

        button {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 17px;
            padding: 9px 0;
            border: none;
            background: transparent;
            color: #C6A875;
            font-size: 11px;
            font-weight: 800;
            cursor: pointer;
        }
    }

    .workspace-heading {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #C6A875;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 1px;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 17px;
`;

export const ViewAll = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 0;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 10px;
    font-weight: 800;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
    }
`;

export const CaseList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CaseItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 16px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    &:first-child {
        border-top: none;
    }

    .case-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 7px;
        flex-shrink: 0;
    }

    .case-date {
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: 9px;
    }

    @media (max-width: 600px) {
        align-items: flex-start;
        flex-direction: column;

        .case-right {
            align-items: flex-start;
        }
    }
`;

export const CaseInfo = styled.div`
    min-width: 0;
`;

export const CaseNumber = styled.span`
    display: block;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.4px;
`;

export const CaseName = styled.h3`
    margin: 0 0 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 700;
`;

export const CaseMeta = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 10px;
`;

export const CaseStatus = styled.span`
    padding: 5px 9px;
    border-radius: 20px;
    background: ${({ $variant }) =>
        $variant === "review" ? "rgba(67,174,197,0.13)" :
        $variant === "progress" ? "rgba(60,140,106,0.13)" :
        "rgba(200,149,66,0.14)"};

    color: ${({ $variant }) =>
        $variant === "review" ? "#3299B0" :
        $variant === "progress" ? "#3C8C6A" :
        "#C89542"};

    font-size: 10px;
    font-weight: 700;
`;

export const AppointmentList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AppointmentItem = styled.div`
    display: flex;
    gap: 12px;
    padding: 15px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    &:first-child {
        border-top: none;
    }
`;

export const AppointmentDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 54px;
    flex-shrink: 0;
    border: 1px solid rgba(182,154,106,0.2);
    border-radius: 9px;
    background: rgba(182,154,106,0.09);

    strong {
        color: ${({ theme }) => theme.colors.text};
        font-size: 20px;
        font-weight: 800;
        line-height: 1;
    }

    span {
        margin-top: 5px;
        color: ${({ theme }) => theme.colors.accent};
        font-size: 9px;
        font-weight: 800;
    }
`;

export const AppointmentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
`;

export const AppointmentTitle = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
    font-weight: 800;
`;

export const AppointmentMeta = styled.p`
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 10px;

    svg {
        color: ${({ theme }) => theme.colors.accent};
        font-size: 11px;
    }
`;

export const QuickAccessGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 13px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const QuickAccessCard = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 175px;
    padding: 17px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 11px;
    background: ${({ theme }) => theme.colors.surface};
    text-align: left;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: translateY(-3px);
        border-color: ${({ theme }) => theme.colors.accent};
        box-shadow: 0 7px 17px rgba(8,17,27,0.06);
    }
`;

export const QuickAccessIcon = styled.div`
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    margin-bottom: 13px;
    border-radius: 9px;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.accent};
    font-size: 17px;
`;

export const QuickAccessTitle = styled.h3`
    margin: 0 0 7px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 800;
`;

export const QuickAccessDescription = styled.p`
    flex: 1;
    margin: 0 0 13px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 10px;
    line-height: 1.7;
`;

export const QuickAccessArrow = styled.span`
    display: flex;
    align-items: center;
    gap: 7px;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 10px;
    font-weight: 800;
`;

export const EmptyMessage = styled.div`
    padding: 25px;
    color: ${({ theme }) => theme.colors.textMuted};
    text-align: center;
`;
