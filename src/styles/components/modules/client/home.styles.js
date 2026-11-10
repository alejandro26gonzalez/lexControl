
import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding-bottom: 35px;
  color: #243246;
`;

export const WelcomeCard = styled.section`
  position: relative;
  display: flex;
  min-height: 245px;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  padding: 34px 38px;
  background: linear-gradient(115deg, #101e2d 0%, #1b3045 70%, #263c50 100%);
  border-radius: 15px;
  color: white;

  @media (max-width: 650px) {
    padding: 25px;
  }
`;

export const WelcomeContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 590px;
`;

export const WelcomeEyebrow = styled.span`
  display: block;
  margin-bottom: 13px;
  color: #c6ad80;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.7px;
`;

export const WelcomeTitle = styled.h1`
  margin: 0;
  color: #fff;
  font-size: clamp(23px, 3vw, 31px);
  font-weight: 750;
  line-height: 1.3;
`;

export const WelcomeDescription = styled.p`
  max-width: 500px;
  margin: 13px 0 20px;
  color: #c1cbd5;
  font-size: 12px;
  line-height: 1.7;
`;

export const WelcomeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const WelcomeButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 16px;
  background: #b69a6a;
  color: #142337;
  border: 1px solid #b69a6a;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 750;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #c7ad82;
    border-color: #c7ad82;
  }
`;

export const WelcomeDecoration = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 220px;
  height: 190px;
  flex-shrink: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const DecorationCircle = styled.div`
  position: absolute;
  width: 175px;
  height: 175px;
  border: 1px solid rgba(182, 154, 106, 0.35);
  border-radius: 50%;

  &::before,
  &::after {
    position: absolute;
    content: "";
    border: 1px solid rgba(182, 154, 106, 0.2);
    border-radius: 50%;
  }

  &::before {
    inset: 15px;
  }

  &::after {
    inset: 32px;
  }
`;

export const DecorationIcon = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  background: rgba(182, 154, 106, 0.12);
  color: #d0b787;
  border: 1px solid rgba(182, 154, 106, 0.4);
  border-radius: 50%;
  font-size: 42px;
`;

export const DecorationLabel = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 12px;
  background: #263c50;
  color: #d8dfE6;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 9px;

  svg {
    color: #c5aa79;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #1c2c40;
  font-size: 15px;
  font-weight: 750;
`;

export const SectionDescription = styled.p`
  margin: 6px 0 0;
  color: #8994a2;
  font-size: 10px;
  line-height: 1.5;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 19px;
  background: white;
  border: 1px solid #e9edf1;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(20, 35, 55, 0.025);
`;

export const StatIcon = styled.div`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  font-size: 19px;

  background: ${({ $color }) =>
    $color === "blue"
      ? "#edf2f8"
      : $color === "gold"
      ? "#f5f1e9"
      : "#edf5f0"};

  color: ${({ $color }) =>
    $color === "blue"
      ? "#52769a"
      : $color === "gold"
      ? "#a58757"
      : "#56856a"};
`;

export const StatInformation = styled.div`
  min-width: 0;
`;

export const StatValue = styled.div`
  color: #182a40;
  font-size: 24px;
  font-weight: 750;
  line-height: 1.2;
`;

export const StatLabel = styled.div`
  margin-top: 4px;
  color: #526174;
  font-size: 11px;
  font-weight: 700;
`;

export const StatFootnote = styled.div`
  margin-top: 4px;
  color: #9aa4b1;
  font-size: 9px;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(270px, 0.9fr);
  align-items: start;
  gap: 18px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
`;

export const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
`;

export const ContentCard = styled.section`
  min-width: 0;
  padding: 20px;
  background: white;
  border: 1px solid #e8edf1;
  border-radius: 13px;
  box-shadow: 0 4px 15px rgba(20, 35, 55, 0.025);
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 19px;
`;

export const TextButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 5px 0;
  background: transparent;
  color: #a58757;
  border: none;
  font-size: 10px;
  font-weight: 750;
  cursor: pointer;

  &:hover {
    color: #816943;
  }
`;

export const CaseList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CaseItem = styled.article`
  padding: 16px 0;
  border-top: 1px solid #edf0f3;

  &:first-child {
    padding-top: 0;
    border-top: none;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const CaseTop = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const CaseIcon = styled.div`
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  flex-shrink: 0;
  background: #f3f1ec;
  color: #a58757;
  border-radius: 9px;
  font-size: 17px;
`;

export const CaseInformation = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CaseTitle = styled.h3`
  margin: 0;
  color: #344357;
  font-size: 11px;
  font-weight: 750;
`;

export const CaseNumber = styled.p`
  margin: 5px 0 0;
  color: #929dab;
  font-size: 9px;
  overflow-wrap: anywhere;
`;

export const CaseStatus = styled.span`
  padding: 5px 9px;
  background: #edf5f0;
  color: #56856a;
  border-radius: 20px;
  font-size: 9px;
  font-weight: 750;
  white-space: nowrap;
`;

export const CaseDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 7px;
  margin: 12px 0;
  color: #8b96a4;
  font-size: 9px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
`;

export const ProgressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 8px;

  span {
    color: #9aa4b1;
    font-size: 9px;
  }

  strong {
    color: #68778a;
    font-size: 9px;
  }
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 6px;
  overflow: hidden;
  background: #edf0f3;
  border-radius: 10px;
`;

export const ProgressBar = styled.div`
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;
  background: linear-gradient(90deg, #a58757, #c6ad80);
  border-radius: inherit;
`;

export const DocumentList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DocumentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 13px 0;
  border-top: 1px solid #edf0f3;

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

export const DocumentIcon = styled.div`
  display: grid;
  place-items: center;
  width: 37px;
  height: 40px;
  flex-shrink: 0;
  background: #f3f1ec;
  color: #a58757;
  border-radius: 8px;
  font-size: 17px;
`;

export const DocumentInformation = styled.div`
  flex: 1;
  min-width: 0;
`;

export const DocumentName = styled.strong`
  display: block;
  color: #435268;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DocumentMeta = styled.span`
  display: block;
  margin-top: 5px;
  color: #98a2af;
  font-size: 9px;
`;

export const PublicLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #56856a;
  font-size: 9px;
  font-weight: 700;
  white-space: nowrap;

  svg {
    font-size: 12px;
  }
`;

export const SmallIcon = styled.div`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: #f3f1ec;
  color: #a58757;
  border-radius: 8px;
`;

export const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AppointmentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 11px;
`;

export const AppointmentDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 48px;
  flex-shrink: 0;
  background: #f5f1e9;
  border-radius: 8px;

  strong {
    color: #8f744a;
    font-size: 17px;
    line-height: 1.2;
  }

  span {
    margin-top: 2px;
    color: #a58757;
    font-size: 9px;
    text-transform: capitalize;
  }
`;

export const AppointmentInformation = styled.div`
  min-width: 0;
  padding-top: 2px;

  strong {
    display: block;
    color: #405067;
    font-size: 10px;
    line-height: 1.4;
  }

  > span {
    display: block;
    margin-top: 4px;
    color: #9aa4b1;
    font-size: 9px;
  }
`;

export const AppointmentTime = styled.span`
  display: flex !important;
  align-items: center;
  gap: 5px;
  margin-top: 7px !important;
  color: #a58757 !important;
  font-weight: 650;
`;

export const FullWidthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 19px;
  padding: 10px;
  background: #f5f6f8;
  color: #58687c;
  border: 1px solid #e9edf1;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #edf0f3;
  }
`;

export const SupportCard = styled.div`
  padding: 20px;
  background: #f7f8fa;
  border: 1px solid #e8edf1;
  border-radius: 13px;
`;

export const SupportIcon = styled.div`
  display: grid;
  place-items: center;
  width: 39px;
  height: 39px;
  margin-bottom: 13px;
  background: #eaf0f5;
  color: #577794;
  border-radius: 9px;
  font-size: 18px;
`;

export const SupportTitle = styled.h3`
  margin: 0;
  color: #344357;
  font-size: 12px;
  font-weight: 750;
`;

export const SupportDescription = styled.p`
  margin: 8px 0 14px;
  color: #7e8a99;
  font-size: 10px;
  line-height: 1.6;
`;

export const SupportNote = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-top: 11px;
  border-top: 1px solid #e5e9ed;
  color: #8b96a4;
  font-size: 9px;

  svg {
    color: #a58757;
  }
`;
export const PrivacyCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 15px;
  background: #f7f5f0;
  border: 1px solid #eee8dc;
  border-radius: 11px;

  > div:last-child {
    strong {
      display: block;
      color: #746448;
      font-size: 10px;
    }

    span {
      display: block;
      margin-top: 5px;
      color: #938875;
      font-size: 9px;
      line-height: 1.5;
    }
  }
`;

export const PrivacyIcon = styled.div`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: #eee8dc;
  color: #a58757;
  border-radius: 8px;
`;