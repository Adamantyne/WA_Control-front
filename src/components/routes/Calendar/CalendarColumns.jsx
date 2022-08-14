import styled from "styled-components";

import { hours } from "./getHours";
import { getCalendarContext } from "../../../hooks/calendarContext";

export default function CalendarColumns(props) {
  const { day } = props;
  const { calendarData } = getCalendarContext();
  const { openedMonth } = calendarData;

  return (
    <DayColumnContainer>
      {hours.map((hour) => {
        return <HourCell day={day} hour={hour} openedMonth={openedMonth} />;
      })}
    </DayColumnContainer>
  );
}

function HourCell(props) {
  const { day, hour, openedMonth } = props;
  return (
    <HourCellContainer>
      <p>{day}</p>
      <p>{hour}</p>
      <p>{openedMonth}</p>
    </HourCellContainer>
  );
}

const DayColumnContainer = styled.div`
  min-width: var(--cell-width);
  height: 100%;
  background-color: pink;
  border: var(--input-border);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HourCellContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  box-shadow: var(--cell-border);
  width: var(--cell-width);
  min-width: var(--cell-width);
  height: var(--cell-height);
  min-height: var(--cell-heigth);
  overflow-y: auto;
`;
