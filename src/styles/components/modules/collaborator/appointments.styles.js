
import styled from "styled-components";

export const Page = styled.div`
display: flex;
flex-direction: column;
gap: 26px;
padding-bottom: 35px;
color: #243246;
`;

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;

@media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
}
`;

export const Eyebrow = styled.span`
display: block;
color: #a58757;
font-size: 10px;
font-weight: 800;
letter-spacing: 1.4px;
margin-bottom: 7px;
`;

export const Title = styled.h1`
color: #142337;
font-size: 27px;
font-weight: 750;
margin: 0;
`;

export const Description = styled.p`
color: #788597;
font-size: 13px;
line-height: 1.6;
margin: 7px 0 0;
`;

export const PrimaryButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 9px;
background: #142337;
color: white;
border: 1px solid #142337;
border-radius: 9px;
padding: 11px 17px;
font-size: 12px;
font-weight: 700;
cursor: pointer;
transition: 0.2s;

&:hover {
    background: #243b56;
    border-color: #243b56;
}

svg {
    font-size: 15px;
}
`;

export const SecondaryButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 7px;
background: white;
color: #536174;
border: 1px solid #dfe5eb;
border-radius: 8px;
padding: 8px 12px;
font-size: 11px;
font-weight: 650;
cursor: pointer;

&:hover {
    background: #f4f6f8;
}
`;

export const StatsGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
gap: 15px;

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
gap: 14px;
background: #fff;
border: 1px solid #e9edf1;
border-radius: 12px;
padding: 19px;
box-shadow: 0 3px 12px rgba(20, 35, 55, 0.025);
`;

export const StatIcon = styled.div`
display: grid;
place-items: center;
width: 43px;
height: 43px;
flex-shrink: 0;
background: #f2f4f6;
color: #a58757;
border-radius: 10px;
font-size: 19px;
`;

export const StatValue = styled.div`
color: #182a40;
font-size: 24px;
font-weight: 750;
line-height: 1.2;
`;

export const StatLabel = styled.div`
color: #8490a0;
font-size: 11px;
margin-top: 4px;
`;

export const ContentCard = styled.section`
background: white;
border: 1px solid #e8edf1;
border-radius: 14px;
padding: 23px;
box-shadow: 0 4px 15px rgba(20, 35, 55, 0.025);

@media (max-width: 600px) {
    padding: 15px;
}
`;

export const CalendarHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 15px;
padding-bottom: 21px;
border-bottom: 1px solid #edf0f3;

@media (max-width: 800px) {
    align-items: flex-start;
    flex-direction: column;
}
`;

export const SectionTitle = styled.h2`
margin: 0;
color: #1c2c40;
font-size: 16px;
font-weight: 750;
`;

export const DateText = styled.p`
margin: 6px 0 0;
color: #8792a1;
font-size: 12px;
text-transform: capitalize;
`;

export const CalendarControls = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 7px;
`;

export const IconButton = styled.button`
display: grid;
place-items: center;
width: 32px;
height: 32px;
background: white;
color: #526174;
border: 1px solid #e2e7ec;
border-radius: 7px;
cursor: pointer;

&:hover {
    background: #f4f6f8;
}
`;

export const DateInput = styled.input`
height: 33px;
padding: 0 8px;
border: 1px solid #e2e7ec;
border-radius: 7px;
color: #536174;
font-size: 11px;
outline: none;

&:focus {
    border-color: #a58757;
}
`;

export const FilterBar = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 8px;
padding: 17px 0;
`;

export const FilterLabel = styled.span`
display: inline-flex;
align-items: center;
gap: 6px;
color: #8792a1;
font-size: 11px;
margin-right: 5px;
`;

export const FilterButton = styled.button`
background: ${({ $active }) => ($active ? "#142337" : "#f5f6f8")};
color: ${({ $active }) => ($active ? "#fff" : "#687587")};
border: 1px solid ${({ $active }) => ($active ? "#142337" : "#e9edf1")};
border-radius: 20px;
padding: 7px 13px;
font-size: 10px;
font-weight: 650;
cursor: pointer;
`;

export const AppointmentList = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`;

export const AppointmentRow = styled.div`
display: grid;
grid-template-columns: 85px minmax(0, 1fr);
gap: 15px;

@media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
}
`;

export const TimeColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 5px;
padding-top: 17px;

strong {
    color: #25364b;
    font-size: 12px;
}

span {
    color: #9aa4b1;
    font-size: 10px;
}

@media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: row;
    padding: 0;
}
`;

export const AppointmentCard = styled.article`
min-width: 0;
padding: 16px 18px;
background: ${({ $type }) =>
    $type === "hearing" ? "#fbfaf7" : "#f8fafc"};
border: 1px solid
    ${({ $type }) => ($type === "hearing" ? "#e9dfcc" : "#e8edf2")};
border-left: 3px solid
    ${({ $type }) => ($type === "hearing" ? "#a58757" : "#43aec5")};
border-radius: 9px;
`;

export const AppointmentTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
gap: 10px;
`;

export const AppointmentTitle = styled.h3`
display: flex;
align-items: center;
gap: 8px;
margin: 0;
color: #25364b;
font-size: 13px;
font-weight: 750;

svg {
    color: #a58757;
    font-size: 15px;
}
`;

export const StatusBadge = styled.span`
padding: 5px 9px;
border-radius: 20px;
background: ${({ $status }) =>
    $status === "completed" ? "#e9f4ed" : "#fff3df"};
color: ${({ $status }) =>
    $status === "completed" ? "#43805a" : "#a6782e"};
font-size: 9px;
font-weight: 750;
`;

export const AppointmentMeta = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px 18px;
margin-top: 13px;

span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #778496;
    font-size: 10px;
    overflow-wrap: anywhere;
}

svg {
    flex-shrink: 0;
    color: #a58757;
    font-size: 12px;
}
`;

export const AppointmentDescription = styled.p`
margin: 12px 0 0;
color: #8792a1;
font-size: 11px;
line-height: 1.5;
`;

export const AppointmentFooter = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 12px;
margin-top: 15px;
padding-top: 12px;
border-top: 1px solid #e9edf0;
`;

export const TypeLabel = styled.span`
color: ${({ $type }) => ($type === "hearing" ? "#947343" : "#378da0")};
font-size: 9px;
font-weight: 700;
`;

export const SharedLabel = styled.span`
display: inline-flex;
align-items: center;
gap: 5px;
color: #7d8997;
font-size: 9px;

svg {
    color: #59936d;
}
`;

export const CompleteButton = styled.button`
display: inline-flex;
align-items: center;
gap: 5px;
margin-left: auto;
padding: 6px 9px;
background: white;
color: #43805a;
border: 1px solid #d8e9dd;
border-radius: 6px;
font-size: 9px;
font-weight: 700;
cursor: pointer;

&:hover {
    background: #edf7f0;
}
`;

export const EmptyState = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 9px;
padding: 55px 15px;
color: #98a3b0;
text-align: center;

svg {
    font-size: 27px;
    color: #b5bdc7;
}

strong {
    color: #526174;
    font-size: 13px;
}

span {
    font-size: 11px;
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
max-width: 680px;
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
margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
margin: 0;
color: #1b2c40;
font-size: 20px;
font-weight: 750;
`;

export const CloseButton = styled.button`
display: grid;
place-items: center;
width: 33px;
height: 33px;
flex-shrink: 0;
background: #f3f5f7;
color: #657286;
border: none;
border-radius: 8px;
cursor: pointer;

&:hover {
    background: #e9edf1;
}
`;

export const TypeSelector = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
margin-bottom: 21px;

@media (max-width: 480px) {
    grid-template-columns: 1fr;
}
`;

export const TypeOption = styled.button`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 7px;
padding: 15px;
background: ${({ $active }) => ($active ? "#f5f2eb" : "#fafbfc")};
color: #26364a;
border: 1px solid ${({ $active }) => ($active ? "#b69a6a" : "#e5eaf0")};
border-radius: 9px;
text-align: left;
cursor: pointer;

svg {
    color: #a58757;
    font-size: 18px;
}

strong {
    font-size: 11px;
}

span {
    color: #8a95a3;
    font-size: 10px;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 17px;
`;

export const FormGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 15px;

@media (max-width: 520px) {
    grid-template-columns: 1fr;
}
`;

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: 7px;
min-width: 0;
grid-column: ${({ $full }) => ($full ? "1 / -1" : "auto")};

label {
    color: #526174;
    font-size: 10px;
    font-weight: 700;
}

input,
select,
textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 11px;
    background: #fbfcfd;
    color: #344357;
    border: 1px solid #e0e6ec;
    border-radius: 7px;
    outline: none;
    font-family: inherit;
    font-size: 11px;
    transition: border 0.2s;
}

input:focus,
select:focus,
textarea:focus {
    border-color: #b69a6a;
}

textarea {
    resize: vertical;
}
`;

export const CalendarNotice = styled.div`
display: flex;
align-items: flex-start;
gap: 9px;
padding: 12px;
background: #f4f6f8;
color: #697789;
border-radius: 8px;
font-size: 10px;
line-height: 1.5;

svg {
    flex-shrink: 0;
    color: #a58757;
    font-size: 15px;
}
`;

export const ErrorMessage = styled.p`
margin: 0;
padding: 10px 12px;
background: #fff0ef;
color: #bd514b;
border-radius: 7px;
font-size: 11px;
`;

export const ModalActions = styled.div`
display: flex;
justify-content: flex-end;
flex-wrap: wrap;
gap: 9px;
padding-top: 5px;
`;
