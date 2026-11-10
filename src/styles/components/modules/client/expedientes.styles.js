
import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding-bottom: 35px;
  color: #243246;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: 7px;
  color: #a58757;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.4px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #142337;
  font-size: 27px;
  font-weight: 750;
`;

export const Description = styled.p`
  margin: 7px 0 0;
  color: #788597;
  font-size: 12px;
  line-height: 1.6;
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
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ $color }) =>
    $color === "blue"
      ? "#edf2f8"
      : $color === "green"
      ? "#edf5f0"
      : "#f5f1e9"};
  color: ${({ $color }) =>
    $color === "blue"
      ? "#52769a"
      : $color === "green"
      ? "#56856a"
      : "#a58757"};
  font-size: 19px;
`;

export const StatValue = styled.div`
  color: #182a40;
  font-size: 24px;
  font-weight: 750;
`;

export const StatLabel = styled.div`
  margin-top: 4px;
  color: #8490a0;
  font-size: 11px;
`;

export const ContentCard = styled.section`
  min-width: 0;
  padding: 21px;
  background: white;
  border: 1px solid #e8edf1;
  border-radius: 13px;
  box-shadow: 0 4px 15px rgba(20, 35, 55, 0.025);

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const ListHeader = styled.div`
  margin-bottom: 17px;
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

export const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 17px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  flex: 1;
  min-width: 220px;
  padding: 10px 12px;
  background: #f8fafb;
  border: 1px solid #e7ebef;
  border-radius: 8px;

  svg {
    color: #8d99a7;
    font-size: 15px;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    min-width: 0;
    background: transparent;
    border: none;
    outline: none;
    color: #344357;
    font-size: 11px;
  }

  input::placeholder {
    color: #a2acb8;
  }
`;

export const FilterSelect = styled.select`
  min-width: 155px;
  padding: 9px 11px;
  background: white;
  color: #596779;
  border: 1px solid #e2e7ec;
  border-radius: 7px;
  outline: none;
  font-size: 10px;
`;

export const CaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const CaseCard = styled.article`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 17px;
  background: #fff;
  border: 1px solid #e9edf1;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #fbfcfd;
    border-color: #c8b58f;
    box-shadow: 0 4px 14px rgba(20, 35, 55, 0.04);
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    padding: 13px;
    gap: 10px;
  }
`;

export const CaseCardIcon = styled.div`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  background: #f3f1ec;
  color: #a58757;
  border-radius: 10px;
  font-size: 19px;
`;

export const CaseCardContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CaseCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CaseTitle = styled.h3`
  margin: 0;
  color: #344357;
  font-size: 12px;
  font-weight: 750;
`;

export const CaseNumber = styled.p`
  margin: 6px 0 0;
  color: #929dab;
  font-size: 9px;
  overflow-wrap: anywhere;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 9px;
  background: ${({ $status }) =>
    $status === "active" ? "#edf5f0" : "#f1f3f5"};
  color: ${({ $status }) =>
    $status === "active" ? "#56856a" : "#758294"};
  border-radius: 20px;
  font-size: 9px;
  font-weight: 750;
  white-space: nowrap;
`;

export const CaseMetadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 17px;
  margin-top: 11px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #8792a1;
    font-size: 9px;
  }

  svg {
    color: #a58757;
    font-size: 11px;
  }
`;

export const StageInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  margin-top: 12px;

  span {
    color: #9aa4b1;
    font-size: 9px;
  }

  strong {
    color: #667487;
    font-size: 9px;
    font-weight: 750;
  }
`;

export const CaseCardArrow = styled.div`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #9ba5b1;
  font-size: 17px;

  @media (max-width: 600px) {
    width: 20px;
  }
`;

export const ListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  padding-top: 13px;
  border-top: 1px solid #edf0f3;
  color: #929dab;
  font-size: 9px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 45px 15px;
  color: #98a3b0;
  text-align: center;

  svg {
    font-size: 27px;
    color: #b5bdc7;
  }

  strong {
    color: #526174;
    font-size: 12px;
  }

  span {
    font-size: 10px;
  }
`;

/* Detalle del expediente */

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  padding: 7px 0;
  background: transparent;
  color: #718095;
  border: none;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #a58757;
  }
`;

export const DetailHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  padding: 23px;
  background: #142337;
  border-radius: 13px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const DetailHeaderContent = styled.div`
  min-width: 0;

  ${Eyebrow} {
    color: #c6ad80;
  }
`;

export const DetailTitle = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 21px;
  font-weight: 750;
  line-height: 1.4;
`;

export const DetailNumber = styled.p`
  margin: 9px 0 0;
  color: #b7c3cf;
  font-size: 10px;
  overflow-wrap: anywhere;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(260px, 0.85fr);
  align-items: start;
  gap: 17px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const MainColumn = styled.div`
  min-width: 0;
`;

export const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 23px;
`;

export const HistoryCount = styled.span`
  padding: 6px 9px;
  background: #f3f5f7;
  color: #748194;
  border-radius: 20px;
  font-size: 9px;
  white-space: nowrap;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  min-height: 125px;
  padding-bottom: 24px;

  &:last-child {
    min-height: auto;
    padding-bottom: 0;
  }

  &:not(:last-child)::before {
    position: absolute;
    content: "";
    top: 36px;
    bottom: 0;
    left: 17px;
    width: 1px;
    background: ${({ $completed }) =>
      $completed ? "#b8cbbd" : "#e3e8ed"};
  }
`;

export const TimelineMarker = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  background: ${({ $completed, $upcoming }) =>
    $completed ? "#edf5f0" : $upcoming ? "#f5f1e9" : "#f3f5f7"};
  color: ${({ $completed, $upcoming }) =>
    $completed ? "#56856a" : $upcoming ? "#a58757" : "#8994a2"};
  border: 1px solid
    ${({ $completed, $upcoming }) =>
      $completed ? "#d7e8dc" : $upcoming ? "#e9dfcc" : "#e5e9ed"};
  border-radius: 50%;
  font-size: 14px;
`;

export const TimelineContent = styled.div`
  flex: 1;
  min-width: 0;
  padding-top: 3px;
`;

export const TimelineTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TimelineTitle = styled.h3`
  margin: 0;
  color: #344357;
  font-size: 12px;
  font-weight: 750;
`;

export const UpcomingBadge = styled.span`
  padding: 4px 7px;
  background: #f5f1e9;
  color: #987b4c;
  border-radius: 20px;
  font-size: 8px;
  font-weight: 750;
`;

export const TimelineDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  color: #a58757;
  font-size: 9px;

  svg {
    font-size: 11px;
  }
`;

export const TimelineDescription = styled.p`
  margin: 9px 0;
  color: #8490a0;
  font-size: 10px;
  line-height: 1.6;
`;

export const CompletedLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #56856a;
  font-size: 9px;
  font-weight: 700;
`;

export const CurrentStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 17px;
  padding: 15px;
  background: #f7f5f0;
  border: 1px solid #eee8dc;
  border-radius: 9px;

  > span {
    color: #95866e;
    font-size: 9px;
  }

  > strong {
    color: #746448;
    font-size: 13px;
  }
`;

export const StageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  background: #eee8dc;
  color: #a58757;
  border-radius: 8px;
  font-size: 17px;
`;

export const ProgressSummary = styled.div`
  margin-top: 17px;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 8px;

    span {
      color: #8d98a5;
      font-size: 9px;
    }

    strong {
      color: #68778a;
      font-size: 9px;
    }
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
  background: #a58757;
  border-radius: inherit;
`;

export const InformationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 19px;
`;

export const InformationItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  > svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: #a58757;
    font-size: 14px;
  }

  div {
    min-width: 0;
  }

  span {
    display: block;
    color: #929dab;
    font-size: 9px;
  }

  strong {
    display: block;
    margin-top: 5px;
    color: #526174;
    font-size: 10px;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }
`;

export const CaseDescription = styled.p`
  margin: 19px 0 0;
  padding-top: 14px;
  border-top: 1px solid #edf0f3;
  color: #8490a0;
  font-size: 10px;
  line-height: 1.6;
`;

export const InformationNotice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 15px;
  background: #f0f5f2;
  border: 1px solid #e0ebe3;
  border-radius: 10px;

  > svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: #56856a;
    font-size: 15px;
  }

  strong {
    display: block;
    color: #50765d;
    font-size: 10px;
  }

  span {
    display: block;
    margin-top: 5px;
    color: #809388;
    font-size: 9px;
    line-height: 1.5;
  }
`;
