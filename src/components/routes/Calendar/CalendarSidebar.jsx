import styled from "styled-components";

import { hours } from "./getHours";

export default function CalendarSidebar() {
  return (
    <CalendarSidebarContainer>
      {hours.map((hour) => {
        return <HourCell>{hour}</HourCell>;
      })}
    </CalendarSidebarContainer>
  );
}

const CalendarSidebarContainer = styled.section`
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: purple;
  width: var(--month-inputh-width);
`;
const HourCell = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: var(--cell-heigth);
  min-height: var(--cell-heigth);
  min-width: var(--month-inputh-width);
  justify-content: center;
  background-color: white;
  box-shadow: var(--cell-border);
`;
