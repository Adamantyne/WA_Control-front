import styled from "styled-components";

import  hours  from "../calendarUtilities/getHours";
import MonthInput from "../calendarUtilities/MonthInput";

export default function CalendarSidebar(props) {
  const {  setCalendar } = props;
  return (
    <CalendarSidebarContainer>
      <MonthInput setCalendar={setCalendar} />
      {hours.map((hour) => {
        return <HourCell key={`${hour}`}>{hour}</HourCell>;
      })}
    </CalendarSidebarContainer>
  );
}

const CalendarSidebarContainer = styled.section`
  position: sticky;
  left: 0;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  width: var(--month-inputh-width);
  z-index: 2;
`;
const HourCell = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: var(--cell-heigth);
  min-height: var(--cell-heigth);
  min-width: var(--month-inputh-width);
  justify-content: center;
  font-weight:var(--font-bold);
  background-color: var(--color-main-2);
  color: var(--color-white);
  box-shadow: var(--white-border);
`;
