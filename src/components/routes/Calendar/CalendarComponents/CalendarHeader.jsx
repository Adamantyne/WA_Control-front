import styled from "styled-components";

import weekNames from "../calendarUtilities/getWeekNames";

export default function CalendarHeader(props) {
  const { montlyCalendar, setCalendar } = props;

  return (
    <CalendarHeaderContainer>
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
  max-height: var(--month-inputh-heigth);
`;

const DaysCell = styled.article`
  background-color: var(--color-main-2);
  box-shadow: var(--white-border);
  padding: 5px 0 5px 0;
  min-width: var(--cell-width);
  max-height: 100%;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: var(--font-bold);
  h2 {
    font-size: var(--font-size-4);
  }
  p {
    font-size: var(--font-size-2);
  }
`;
