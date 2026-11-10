
import styled from "styled-components";

export const Page = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
padding-bottom: 35px;
color: #243246;
`;

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;

@media (max-width: 700px) {
align-items: flex-start;
flex-direction: column;
}
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

export const PrimaryButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 9px;
padding: 11px 17px;
background: #142337;
color: white;
border: 1px solid #142337;
border-radius: 9px;
font-size: 11px;
font-weight: 700;
cursor: pointer;
transition: 0.2s;

&:hover {
background: #243b56;
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
padding: 9px 14px;
background: white;
color: #536174;
border: 1px solid #dfe5eb;
border-radius: 8px;
font-size: 11px;
font-weight: 650;
cursor: pointer;

&:hover {
background: #f4f6f8;
}
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
background: #f2f4f6;
color: #a58757;
border-radius: 10px;
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

export const VisibilityInfo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;

@media (max-width: 650px) {
grid-template-columns: 1fr;
}
`;

export const VisibilityItem = styled.div`
display: flex;
align-items: center;
gap: 13px;
padding: 17px;
background: #fff;
border: 1px solid #e8edf1;
border-radius: 11px;

strong {
display: block;
color: #344357;
font-size: 11px;
margin-bottom: 5px;
}

span {
display: block;
color: #8994a2;
font-size: 10px;
line-height: 1.5;
}
`;

export const VisibilityIcon = styled.div`
display: grid;
place-items: center;
width: 38px;
height: 38px;
flex-shrink: 0;
border-radius: 9px;
background: ${({ $type }) =>
$type === "internal" ? "#f4f0e8" : "#edf5f0"};
color: ${({ $type }) =>
$type === "internal" ? "#a58757" : "#54866a"};
font-size: 17px;
`;

export const ContentCard = styled.section`
min-width: 0;
background: white;
border: 1px solid #e8edf1;
border-radius: 14px;
box-shadow: 0 4px 15px rgba(20, 35, 55, 0.025);
`;

export const Toolbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 13px;
padding: 18px;
border-bottom: 1px solid #edf0f3;
`;

export const SearchBox = styled.div`
display: flex;
align-items: center;
gap: 9px;
flex: 1;
min-width: 220px;
padding: 9px 12px;
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
border: none;
outline: none;
background: transparent;
color: #344357;
font-size: 11px;
}

input::placeholder {
color: #a2acb8;
}
`;

export const SelectGroup = styled.div`
display: flex;
align-items: center;
gap: 8px;
color: #8994a2;

select {
max-width: 190px;
padding: 9px 10px;
background: white;
color: #596779;
border: 1px solid #e2e7ec;
border-radius: 7px;
outline: none;
font-size: 10px;
}

@media (max-width: 600px) {
width: 100%;
flex-wrap: wrap;

select {
    flex: 1;
    min-width: 0;
    max-width: none;
}
}
`;

export const TableWrapper = styled.div`
width: 100%;
overflow-x: auto;
`;

export const Table = styled.table`
width: 100%;
min-width: 850px;
border-collapse: collapse;

th {
padding: 14px 16px;
background: #fafbfc;
color: #8994a2;
font-size: 9px;
font-weight: 750;
text-align: left;
white-space: nowrap;
}

td {
padding: 14px 16px;
color: #657286;
border-top: 1px solid #edf0f3;
font-size: 10px;
vertical-align: middle;
}

tbody tr:hover {
background: #fcfcfd;
}
`;

export const DocumentName = styled.div`
display: flex;
align-items: center;
gap: 10px;
min-width: 200px;

strong {
display: block;
max-width: 240px;
overflow: hidden;
color: #344357;
font-size: 10px;
font-weight: 700;
text-overflow: ellipsis;
white-space: nowrap;
}

span {
display: block;
margin-top: 4px;
color: #9aa4b1;
font-size: 9px;
}
`;

export const FileIcon = styled.div`
display: grid;
place-items: center;
width: 34px;
height: 37px;
flex-shrink: 0;
background: #f1f3f6;
color: #a58757;
border-radius: 7px;
font-size: 16px;
`;

export const TypeText = styled.span`
display: block;
max-width: 150px;
color: #667487;
line-height: 1.5;
`;

export const CaseNumber = styled.span`
display: block;
max-width: 180px;
color: #68778a;
font-size: 9px;
overflow-wrap: anywhere;
`;

export const VisibilityBadge = styled.span`
display: inline-flex;
align-items: center;
gap: 6px;
padding: 6px 9px;
border-radius: 20px;
background: ${({ $type }) =>
$type === "internal" ? "#f4f0e8" : "#edf5f0"};
color: ${({ $type }) =>
$type === "internal" ? "#987b4c" : "#54866a"};
font-size: 9px;
font-weight: 750;
white-space: nowrap;
`;

export const Actions = styled.div`
display: flex;
align-items: center;
gap: 6px;
`;

export const ActionButton = styled.button`
display: grid;
place-items: center;
width: 29px;
height: 29px;
background: white;
color: ${({ $danger }) => ($danger ? "#c36b65" : "#718095")};
border: 1px solid #e6ebef;
border-radius: 6px;
cursor: pointer;

&:hover {
background: ${({ $danger }) => ($danger ? "#fff1f0" : "#f1f4f7")};
}
`;

export const TableFooter = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;
padding: 13px 17px;
color: #929dab;
border-top: 1px solid #edf0f3;
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
font-size: 25px;
}

strong {
color: #526174;
font-size: 12px;
}

span {
font-size: 10px;
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
max-width: 570px;
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
margin-bottom: 23px;
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

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 17px;
`;

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: 7px;

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
padding: 11px;
background: #fbfcfd;
color: #344357;
border: 1px solid #e0e6ec;
border-radius: 7px;
outline: none;
font-family: inherit;
font-size: 11px;
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

export const UploadArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 9px;
padding: 26px 15px;
background: ${({ $selected }) => ($selected ? "#f5f8fa" : "#fafbfc")};
border: 1px dashed ${({ $selected }) => ($selected ? "#a58757" : "#ccd5df")};
border-radius: 9px;
text-align: center;
cursor: pointer;

input {
display: none;
}

> svg {
color: #a58757;
font-size: 25px;
}

strong {
max-width: 100%;
overflow-wrap: anywhere;
color: #46566a;
font-size: 11px;
}

span {
color: #929dab;
font-size: 9px;
}

&:hover {
background: #f5f7f9;
}
`;

export const AccessNotice = styled.div`
display: flex;
align-items: flex-start;
gap: 11px;
padding: 13px;
background: ${({ $type }) =>
$type === "internal" ? "#f8f5ee" : "#f0f6f2"};
color: ${({ $type }) =>
$type === "internal" ? "#987b4c" : "#54866a"};
border-radius: 8px;

> svg {
flex-shrink: 0;
margin-top: 2px;
font-size: 16px;
}

strong {
display: block;
font-size: 10px;
}

span {
display: block;
margin-top: 5px;
color: #7e8996;
font-size: 9px;
line-height: 1.5;
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
