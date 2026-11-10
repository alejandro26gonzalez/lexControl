
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
  flex-wrap: wrap;
  gap: 15px;
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

export const ReadOnlyBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  background: #f0f5f2;
  color: #56856a;
  border: 1px solid #e0ebe3;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
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
  padding: 18px;
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
      : $color === "gold"
      ? "#f5f1e9"
      : "#edf5f0"};
  color: ${({ $color }) =>
    $color === "blue"
      ? "#52769a"
      : $color === "gold"
      ? "#a58757"
      : "#56856a"};
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

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(270px, 0.85fr);
  align-items: start;
  gap: 17px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
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

export const CalendarHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 20px;
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

export const CalendarControls = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  background: white;
  color: #647286;
  border: 1px solid #e2e7ec;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background: #f4f6f8;
  }
`;

export const MonthLabel = styled.strong`
  min-width: 110px;
  color: #344357;
  font-size: 11px;
  text-align: center;
`;

export const TodayButton = styled.button`
  padding: 7px 10px;
  background: #f5f1e9;
  color: #947747;
  border: 1px solid #eee5d5;
  border-radius: 7px;
  font-size: 9px;
  font-weight: 750;
  cursor: pointer;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 5px;
`;

export const WeekDay = styled.div`
  padding: 8px 2px;
  color: #929dab;
  font-size: 9px;
  font-weight: 750;
  text-align: center;
`;

export const DayCell = styled.button`
  display: flex;
  min-width: 0;
  min-height: 65px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 9px 3px;
  background: ${({ $selected, $today }) =>
    $selected ? "#142337" : $today ? "#f5f1e9" : "#fff"};
  color: ${({ $selected }) => ($selected ? "#fff" : "#526174")};
  border: 1px solid
    ${({ $selected, $today, $hasEvents }) =>
      $selected
        ? "#142337"
        : $today
        ? "#d9c9aa"
        : $hasEvents
        ? "#e9e2d5"
        : "#edf0f3"};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    border-color: #b69a6a;
    background: ${({ $selected }) => ($selected ? "#142337" : "#faf8f3")};
  }

  @media (max-width: 500px) {
    min-height: 53px;
    padding: 7px 2px;
  }
`;

export const DayNumber = styled.span`
  font-size: 11px;
  font-weight: 750;
`;

export const EventIndicators = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const EventDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  background: ${({ $type }) =>
    $type === "hearing" ? "#b69a6a" : "#43aec5"};
  border-radius: 50%;
`;

export const DayEventCount = styled.span`
  color: inherit;
  font-size: 7px;
  opacity: 0.8;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const EmptyDay = styled.div`
  min-height: 65px;

  @media (max-width: 500px) {
    min-height: 53px;
  }
`;

export const CalendarLegend = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 16px;
  padding-bottom: 19px;
  border-bottom: 1px solid #edf0f3;

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #8792a1;
    font-size: 9px;
  }
`;

export const SelectedDateSection = styled.div`
  padding-top: 19px;
`;

export const SelectedEventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 15px;
`;

export const SelectedEvent = styled.button`
  display: flex;
  align-items: center;
  gap: 11px;
  width: 100%;
  padding: 12px;
  background: #fafbfc;
  color: #68778a;
  border: 1px solid #edf0f3;
  border-radius: 9px;
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: #c8b58f;
    background: #fbfaf7;
  }

  > div:nth-child(2) {
    flex: 1;
    min-width: 0;
  }

  > svg:last-child {
    flex-shrink: 0;
    color: #9aa4b1;
  }
`;

export const EventTypeIcon = styled.div`
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  background: ${({ $type }) =>
    $type === "hearing" ? "#f5f1e9" : "#edf3f7"};
  color: ${({ $type }) =>
    $type === "hearing" ? "#a58757" : "#527c98"};
  border-radius: 8px;
  font-size: 15px;
`;

export const EventTitle = styled.strong`
  display: block;
  color: #435268;
  font-size: 10px;
  line-height: 1.4;
`;

export const EventTime = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 6px;
  color: #929dab;
  font-size: 9px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 35px 12px;
  color: #98a3b0;
  text-align: center;

  svg {
    font-size: 25px;
    color: #b5bdc7;
  }

  strong {
    color: #526174;
    font-size: 11px;
  }

  span {
    font-size: 9px;
    line-height: 1.5;
  }
`;

export const SideColumn = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
`;

export const CardHeader = styled.div`
  margin-bottom: 16px;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 17px;
`;

export const FilterButton = styled.button`
  padding: 7px 9px;
  background: ${({ $active }) => ($active ? "#142337" : "#f4f6f8")};
  color: ${({ $active }) => ($active ? "#fff" : "#748194")};
  border: 1px solid ${({ $active }) => ($active ? "#142337" : "#e9edf1")};
  border-radius: 20px;
  font-size: 9px;
  font-weight: 700;
  cursor: pointer;
`;

export const UpcomingList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpcomingItem = styled.button`
  display: flex;
  align-items: flex-start;
  gap: 11px;
  width: 100%;
  padding: 13px 0;
  background: transparent;
  border: none;
  border-top: 1px solid #edf0f3;
  text-align: left;
  cursor: pointer;

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  > div:last-child {
    min-width: 0;
    flex: 1;
  }
`;

export const UpcomingDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 47px;
  flex-shrink: 0;
  background: ${({ $type }) =>
    $type === "hearing" ? "#f5f1e9" : "#edf3f7"};
  border-radius: 8px;

  strong {
    color: ${({ $type }) =>
      $type === "hearing" ? "#947747" : "#527c98"};
    font-size: 17px;
    line-height: 1.2;
  }

  span {
    margin-top: 2px;
    color: #9aa4b1;
    font-size: 8px;
    text-transform: capitalize;
  }
`;

export const UpcomingTitle = styled.strong`
  display: block;
  color: #435268;
  font-size: 10px;
  line-height: 1.5;
`;

export const UpcomingMeta = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
  color: #929dab;
  font-size: 9px;
`;

export const UpcomingType = styled.span`
  display: inline-block;
  margin-top: 7px;
  color: ${({ $type }) =>
    $type === "hearing" ? "#987b4c" : "#527c98"};
  font-size: 8px;
  font-weight: 750;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  padding: 17px;
  background: #f7f5f0;
  border: 1px solid #eee8dc;
  border-radius: 11px;

  strong {
    color: #746448;
    font-size: 10px;
  }

  span {
    color: #938875;
    font-size: 9px;
    line-height: 1.6;
  }
`;

export const InfoIcon = styled.div`
  display: grid;
  place-items: center;
  width: 33px;
  height: 33px;
  background: #eee8dc;
  color: #a58757;
  border-radius: 8px;
  font-size: 16px;
`;

/* Detalle del compromiso */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(12, 23, 36, 0.62);
  backdrop-filter: blur(3px);
  overflow-y: auto;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 520px;
  max-height: 92vh;
  overflow-y: auto;
  padding: 25px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 17px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #1b2c40;
  font-size: 18px;
  font-weight: 750;
  line-height: 1.4;
`;

export const CloseButton = styled.button`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: #f3f5f7;
  color: #657286;
  border: none;
  border-radius: 8px;
  font-size: 19px;
  cursor: pointer;
`;

export const EventTypeBadge = styled.span`
  display: inline-flex;
  padding: 7px 10px;
  background: ${({ $type }) =>
    $type === "hearing" ? "#f5f1e9" : "#edf3f7"};
  color: ${({ $type }) =>
    $type === "hearing" ? "#987b4c" : "#527c98"};
  border-radius: 20px;
  font-size: 9px;
  font-weight: 750;
`;

export const DetailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 22px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 11px;

  > svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: #a58757;
    font-size: 15px;
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

  small {
    display: block;
    margin-top: 4px;
    color: #9aa4b1;
    font-size: 9px;
    overflow-wrap: anywhere;
  }
`;

export const EventDescription = styled.p`
  margin: 20px 0 0;
  padding-top: 15px;
  border-top: 1px solid #edf0f3;
  color: #8490a0;
  font-size: 10px;
  line-height: 1.6;
`;

export const MeetingLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 18px;
  padding: 11px;
  background: #142337;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 10px;
  font-weight: 700;

  &:hover {
    background: #243b56;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const CloseAction = styled.button`
  padding: 9px 15px;
  background: white;
  color: #536174;
  border: 1px solid #dfe5eb;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 650;
  cursor: pointer;

  &:hover {
    background: #f4f6f8;
  }
`;
