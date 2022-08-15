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
  background-color: var(--color-main-2);
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const DaysCell = styled.article`
  background-color: var(--color-main-2);
  box-shadow: var(--white-border);
  padding: 5px 0 5px 0;
  min-width: var(--cell-width);
  max-height: var(--month-inputh-heigth);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight:var(--font-bold);
  h2 {
    font-size: var(--font-size-4);
  }
  p {
    font-size: var(--font-size-2);
  }
`;
