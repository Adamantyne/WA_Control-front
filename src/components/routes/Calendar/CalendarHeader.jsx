import styled from "styled-components";

import MonthInput from "./MonthInput";
import weekNames from "./getWeekNames";
import { getCalendarContext } from "../../../hooks/calendarContext";

export default function CalendarHeader(props) {
  const {montlyCalendar,setCalendar} = props;
  const {calendarData}=getCalendarContext();
  const {currentMonth} = calendarData;

  return (
    <CalendarHeaderContainer>
      <MonthInput setCalendar={setCalendar} />
      {montlyCalendar[0].map((dayOfCalendar) => {
        const { day, dayOfWeek } = dayOfCalendar;
        return (
          <DaysCell key={day}>
            <h2>{day}</h2>
            <p>{weekNames[dayOfWeek]}</p>
          </DaysCell>
        );
      })}
    </CalendarHeaderContainer>
  );
}


const CalendarHeaderContainer = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
`;

const DaysCell = styled.article`
  padding: 5px 0 5px 0;
  min-width: var(--cell-width);
  max-height: var(--month-inputh-heigth);
  background-color: white;
  box-shadow: var(--cell-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    font-size: var(--font-size-4);
  }
  p {
    font-size: var(--font-size-2);
  }
`;
