
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`;

export const WelcomePanel = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 255px;
    padding: 35px 40px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    background: linear-gradient(120deg, #08111B 0%, #101E2D 65%, #172A3B 100%);
    box-shadow: 0 12px 30px rgba(8,17,27,0.12);

    @media (max-width: 700px) {
        padding: 28px 22px;
    }
`;

export const WelcomeContent = styled.div`
    position: relative;
    z-index: 2;
    max-width: 560px;
`;

export const WelcomeEyebrow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 17px;
    color: ${({ $date }) => $date ? "rgba(255,255,255,0.6)" : "#B69A6A"};
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.4px;

    svg {
        font-size: 14px;
    }

    ${({ $date }) => $date && `
        margin: 23px 0 0;
        font-size: 10px;
        letter-spacing: 0.3px;
        text-transform: capitalize;
    `}
`;

export const WelcomeTitle = styled.h1`
    max-width: 500px;
    margin: 0;
    color: #FFFFFF;
    font-size: clamp(27px, 3.2vw, 39px);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -1px;

    span {
        color: #B69A6A;
    }
`;

export const WelcomeDescription = styled.p`
    max-width: 470px;
    margin: 13px 0 20px;
    color: rgba(255,255,255,0.7);
    font-size: 13px;
    line-height: 1.8;
`;

export const WelcomeActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const WelcomeButton = styled.button`
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px 15px;
    border: 1px solid rgba(182,154,106,0.5);
    border-radius: 8px;
    background: #B69A6A;
    color: #08111B;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: #C9AD7C;
        transform: translateY(-2px);
    }
`;

export const WelcomeDecoration = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    place-items: center;
    width: 350px;
    height: 100%;
    pointer-events: none;

    .decoration-circle {
        position: absolute;
        border: 1px solid rgba(182,154,106,0.16);
        border-radius: 50%;
    }

    .circle-one {
        width: 240px;
        height: 240px;
    }

    .circle-two {
        width: 175px;
        height: 175px;
    }

    .decoration-center {
        display: grid;
        place-items: center;
        width: 100px;
        height: 100px;
        border: 1px solid rgba(182,154,106,0.35);
        border-radius: 25px;
        background: rgba(182,154,106,0.1);
        color: #B69A6A;
        font-size: 43px;
        transform: rotate(-8deg);
        box-shadow: 0 0 50px rgba(182,154,106,0.08);
    }

    .decoration-caption {
        position: absolute;
        bottom: 25px;
        color: rgba(255,255,255,0.3);
        font-size: 8px;
        font-weight: 800;
        letter-spacing: 2px;
    }

    @media (max-width: 850px) {
        opacity: 0.2;
        right: -120px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin-bottom: 17px;

    .section-caption {
        display: flex;
        align-items: center;
        gap: 7px;
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.8px;
    }
`;

export const SectionTitle = styled.h2`
    margin: 0 0 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
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
    gap: 16px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export const MetricCard = styled.div`
    position: relative;
    padding: 22px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    background: linear-gradient(145deg, #08111B, #142638);
    box-shadow: 0 8px 22px rgba(8,17,27,0.12);
    cursor: pointer;
    transition: all 0.25s ease;

    &::after {
        content: "";
        position: absolute;
        width: 130px;
        height: 130px;
        top: -65px;
        right: -45px;
        border-radius: 50%;
        background: rgba(182,154,106,0.10);
    }

    &:hover {
        transform: translateY(-5px);
        border-color: rgba(182,154,106,0.45);
        box-shadow: 0 14px 30px rgba(8,17,27,0.22);
    }

    .metric-arrow {
        position: relative;
        z-index: 1;
        color: rgba(255,255,255,0.45);
        font-size: 17px;
        transition: 0.2s;
    }

    &:hover .metric-arrow {
        color: #B69A6A;
        transform: translate(3px,-3px);
    }
`;

export const MetricTop = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
`;

export const MetricIcon = styled.div`
    display: grid;
    place-items: center;
    width: 45px;
    height: 45px;
    border: 1px solid rgba(182,154,106,0.25);
    border-radius: 12px;
    background: rgba(182,154,106,0.12);

    color: ${({ $color }) =>
        $color === "gold" ? "#D0B27E" :
        $color === "cyan" ? "#54C1D5" :
        $color === "purple" ? "#B7A0DC" :
        "#72B998"};

    font-size: 20px;
`;

export const MetricLabel = styled.p`
    position: relative;
    z-index: 1;
    margin: 0 0 8px;
    color: rgba(255,255,255,0.68);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.3px;
`;

export const MetricValue = styled.p`
    position: relative;
    z-index: 1;
    margin: 0;
    color: #FFFFFF;
    font-size: 31px;
    font-weight: 800;
    letter-spacing: -1px;
`;

export const MetricFooter = styled.p`
    position: relative;
    z-index: 1;
    margin: 9px 0 0;
    color: rgba(255,255,255,0.45);
    font-size: 10px;
`;


export const DashboardGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 290px;
    gap: 22px;
    align-items: start;

    @media (max-width: 1000px) {
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
`;

export const ModuleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`;

export const ModuleCard = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 205px;
    padding: 23px;
    overflow: hidden;

    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    background: linear-gradient(145deg, #101E2D, #08111B);
    text-align: left;
    cursor: pointer;
    transition: all 0.25s ease;

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 23px;
        width: 42px;
        height: 2px;
        background: #B69A6A;
        transition: width 0.25s ease;
    }

    &:hover {
        transform: translateY(-4px);
        border-color: rgba(182,154,106,0.4);
        box-shadow: 0 12px 25px rgba(8,17,27,0.18);
    }

    &:hover::before {
        width: calc(100% - 46px);
    }
`;

export const ModuleIcon = styled.div`
    display: grid;
    place-items: center;
    width: 45px;
    height: 45px;
    margin-bottom: 18px;

    border: 1px solid rgba(182,154,106,0.25);
    border-radius: 12px;
    background: rgba(182,154,106,0.12);
    color: #C6A875;
    font-size: 20px;
`;

export const ModuleTitle = styled.h3`
    margin: 0 0 8px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 800;
`;

export const ModuleDescription = styled.p`
    flex: 1;
    margin: 0 0 17px;
    color: rgba(255,255,255,0.58);
    font-size: 11px;
    line-height: 1.8;
`;

export const ModuleLink = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #C6A875;
    font-size: 11px;
    font-weight: 800;

    svg {
        transition: transform 0.2s;
    }

    ${ModuleCard}:hover & svg {
        transform: translateX(4px);
    }
`;


export const ActivityCard = styled.section`
    padding: 23px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    background: linear-gradient(145deg, #101E2D, #08111B);
    box-shadow: 0 8px 22px rgba(8,17,27,0.12);
`;

export const ActivityHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
        color: #FFFFFF;
    }

    p {
        color: rgba(255,255,255,0.52);
    }

    > svg {
        color: #B69A6A;
        font-size: 20px;
    }
`;

export const ActivityList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ActivityItem = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 15px 0;
    border-top: 1px solid rgba(255,255,255,0.08);

    &:first-child {
        border-top: none;
    }
`;

export const ActivityIcon = styled.div`
    display: grid;
    place-items: center;
    width: 39px;
    height: 39px;
    flex-shrink: 0;
    border: 1px solid rgba(182,154,106,0.2);
    border-radius: 11px;
    background: rgba(182,154,106,0.10);

    color: ${({ $color }) =>
        $color === "cyan" ? "#54C1D5" :
        $color === "gold" ? "#D0B27E" :
        "#72B998"};

    font-size: 17px;
`;

export const ActivityContent = styled.div`
    flex: 1;
    min-width: 0;
`;

export const ActivityTitle = styled.p`
    margin: 0 0 5px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 700;
`;

export const ActivityDescription = styled.p`
    margin: 0;
    color: rgba(255,255,255,0.5);
    font-size: 10px;
`;

export const ActivityTime = styled.span`
    flex-shrink: 0;
    color: #B69A6A;
    font-size: 9px;
    font-weight: 700;
`;


export const SystemCard = styled.section`
    padding: 22px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    background: linear-gradient(145deg, #101E2D, #08111B);
    box-shadow: 0 8px 22px rgba(8,17,27,0.12);

    .system-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h2 {
            color: #FFFFFF;
        }

        p {
            color: rgba(255,255,255,0.5);
        }

        > svg {
            color: #B69A6A;
            font-size: 20px;
        }
    }

    .system-security {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 19px;
        padding: 12px;
        border: 1px solid rgba(60,140,106,0.2);
        border-radius: 9px;
        background: rgba(60,140,106,0.09);
        color: #8AC7A7;
        font-size: 10px;
        font-weight: 700;
    }
`;

export const SystemStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 9px;
    background: rgba(255,255,255,0.035);
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 700;
`;

export const SystemStatusDot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #69B58D;
    box-shadow: 0 0 0 4px rgba(105,181,141,0.12);
`;

export const SystemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 21px;
`;

export const SystemInfoItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    span {
        color: rgba(255,255,255,0.48);
        font-size: 10px;
    }

    strong {
        color: #FFFFFF;
        font-size: 10px;
        font-weight: 700;
    }
`;

export const QuickAccessCard = styled.section`
    padding: 22px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    background: linear-gradient(145deg, #101E2D, #08111B);
    box-shadow: 0 8px 22px rgba(8,17,27,0.12);

    h2 {
        color: #FFFFFF;
    }

    > p {
        color: rgba(255,255,255,0.5);
    }
`;

export const QuickAccessItem = styled.button`
    display: flex;
    align-items: center;
    gap: 11px;
    width: 100%;
    padding: 14px 0;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    background: transparent;
    color: rgba(255,255,255,0.75);
    font-size: 11px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition: 0.2s;

    &:last-child {
        border-bottom: none;
    }

    svg:first-child {
        color: #B69A6A;
        font-size: 16px;
    }

    svg:last-child {
        margin-left: auto;
        color: rgba(255,255,255,0.35);
    }

    &:hover {
        color: #FFFFFF;

        svg:last-child {
            color: #B69A6A;
            transform: translate(3px,-2px);
        }
    }
`;
