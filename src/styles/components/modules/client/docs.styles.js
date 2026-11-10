
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

export const AccessIndicator = styled.span`
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

  svg {
    font-size: 14px;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 17px;
  background: white;
  border: 1px solid #e9edf1;
  border-radius: 11px;
  box-shadow: 0 3px 12px rgba(20, 35, 55, 0.025);
`;

export const StatIcon = styled.div`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ $color }) =>
    $color === "blue"
      ? "#edf2f8"
      : $color === "gold"
      ? "#f5f1e9"
      : $color === "green"
      ? "#edf5f0"
      : "#f1f3f5"};
  color: ${({ $color }) =>
    $color === "blue"
      ? "#52769a"
      : $color === "gold"
      ? "#a58757"
      : $color === "green"
      ? "#56856a"
      : "#758294"};
  font-size: 18px;
`;

export const StatValue = styled.div`
  color: #182a40;
  font-size: 23px;
  font-weight: 750;
`;

export const StatLabel = styled.div`
  margin-top: 4px;
  color: #8490a0;
  font-size: 10px;
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

export const CardHeader = styled.div`
  margin-bottom: 19px;
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
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
  padding-bottom: 17px;
  border-bottom: 1px solid #edf0f3;
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

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8994a2;

  select {
    min-width: 175px;
    padding: 10px 11px;
    background: white;
    color: #596779;
    border: 1px solid #e2e7ec;
    border-radius: 7px;
    outline: none;
    font-size: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;

    select {
      flex: 1;
    }
  }
`;

export const DocumentList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DocumentItem = styled.article`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 17px 0;
  border-bottom: 1px solid #edf0f3;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 750px) {
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const DocumentIcon = styled.div`
  display: grid;
  place-items: center;
  width: 45px;
  height: 49px;
  flex-shrink: 0;
  background: #f3f1ec;
  color: #a58757;
  border-radius: 9px;
  font-size: 20px;
`;

export const DocumentInformation = styled.div`
  flex: 1;
  min-width: 180px;
`;

export const DocumentName = styled.h3`
  margin: 0;
  color: #344357;
  font-size: 12px;
  font-weight: 750;
  overflow-wrap: anywhere;
`;

export const DocumentMetadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 7px;
  color: #929dab;
  font-size: 9px;
`;

export const DocumentType = styled.span`
  color: #a58757;
  font-weight: 700;
`;

export const CaseInformation = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 9px;
  color: #7e8a99;
  font-size: 9px;

  svg {
    flex-shrink: 0;
    color: #a58757;
  }
`;

export const CaseNumber = styled.span`
  color: #a0aab5;
  overflow-wrap: anywhere;
`;

export const PublishedDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  color: #9aa4b1;
  font-size: 9px;

  svg {
    color: #a58757;
  }
`;

export const DocumentActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 750px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 60px;
  }

  @media (max-width: 480px) {
    padding-left: 0;
  }
`;

export const PublicBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #56856a;
  font-size: 9px;
  font-weight: 700;
  white-space: nowrap;

  svg {
    font-size: 12px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 33px;
  height: 33px;
  background: white;
  color: #718095;
  border: 1px solid #e4e9ee;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background: #f4f6f8;
    color: #a58757;
  }
`;

export const DownloadButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 9px 12px;
  background: #142337;
  color: white;
  border: 1px solid #142337;
  border-radius: 7px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.2s;

  &:hover {
    background: #243b56;
  }

  svg {
    font-size: 13px;
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
  padding: 50px 15px;
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

export const SecurityNotice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #f0f5f2;
  border: 1px solid #e0ebe3;
  border-radius: 10px;

  > svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: #56856a;
    font-size: 17px;
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
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 22px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #1b2c40;
  font-size: 19px;
  font-weight: 750;
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

  &:hover {
    background: #e9edf1;
  }
`;

export const DetailDocument = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: #f8f9fa;
  border: 1px solid #edf0f3;
  border-radius: 9px;

  strong {
    display: block;
    color: #344357;
    font-size: 11px;
    overflow-wrap: anywhere;
  }

  span {
    display: block;
    margin-top: 6px;
    color: #929dab;
    font-size: 9px;
  }
`;

export const DetailDocumentIcon = styled.div`
  display: grid;
  place-items: center;
  width: 39px;
  height: 42px;
  flex-shrink: 0;
  background: #f3f1ec;
  color: #a58757;
  border-radius: 8px;
  font-size: 18px;
`;

export const DetailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 20px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    padding-bottom: 11px;
    border-bottom: 1px solid #edf0f3;
  }

  span {
    color: #8994a2;
    font-size: 10px;
  }

  strong {
    max-width: 60%;
    color: #526174;
    font-size: 10px;
    text-align: right;
    overflow-wrap: anywhere;
  }
`;

export const DetailDescription = styled.p`
  margin: 16px 0 0;
  color: #8490a0;
  font-size: 10px;
  line-height: 1.6;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 22px;
`;

export const SecondaryButton = styled.button`
  padding: 9px 14px;
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
