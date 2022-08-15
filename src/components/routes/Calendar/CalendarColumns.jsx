import styled from "styled-components";
import dayjs from "dayjs";
import { useState } from "react";

import { hours } from "./getHours";
import { getCalendarContext } from "../../../hooks/calendarContext";
import { postRequisition } from "../../../utils/api";
import { getContext } from "../../../hooks/UserContext";

export default function CalendarColumns(props) {
  const { day, works } = props;
  const { calendarData, schedulingData, setSchedulingData } =
    getCalendarContext();
  const { contextData } = getContext();
  const { openedMonth } = calendarData;

  async function scheduling(date) {
    if (schedulingData?.workId) {
      try {
        const workId = schedulingData.workId;
        const scheduleBody = {};
        if (schedulingData.type === "budget") {
          scheduleBody.budgetDate = date;
        } else if (schedulingData.type === "delivery") {
          scheduleBody.deliveryDate = date;
        }
        await postRequisition(`works/${workId}`, contextData, scheduleBody);
        setSchedulingData(undefined);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <DayColumnContainer>
      {hours.map((hour) => {
        return (
          <HourCell
            key={`${day}${hour}`}
            day={day}
            hour={hour}
            openedMonth={openedMonth}
            scheduling={scheduling}
            works={works}
          />
        );
      })}
    </DayColumnContainer>
  );
}

function HourCell(props) {
  const { day, hour, openedMonth, scheduling, works } = props;
  const year = "2022";
  const dateFormat = "MM/DD/YYYY,hh:mm";
  const date = dayjs(`${openedMonth}/${day}/${year},${hour}`).format(
    dateFormat
  );
  return (
    <HourCellContainer
      onClick={() => {
        scheduling(date);
      }}
    >
      {works.map((work) => {
        const deliveryDate = dayjs(work.deliveryDate).format(dateFormat);
        const budgetDate = dayjs(work.budgetDate).format(dateFormat);
        if (date === budgetDate) {
          return (
            <ScheduleCell key={work.id} customerName={work.customer.name} type={"Orçamento"} />
          );
        } else if (date === deliveryDate) {
          return (
            <ScheduleCell key={work.id} customerName={work.customer.name} type={"Entrega"} />
          );
        }
      })}
    </HourCellContainer>
  );
}

function ScheduleCell(props) {
  const { customerName, type } = props;
  return (
    <ScheduleCellContainer>
      <p>{customerName}</p>
      <p>{type}</p>
    </ScheduleCellContainer>
  );
}

const DayColumnContainer = styled.div`
  min-width: var(--cell-width);
  height: 100%;
  border: var(--input-border);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HourCellContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  box-shadow: var(--cell-border);
  width: var(--cell-width);
  min-width: var(--cell-width);
  height: var(--cell-height);
  min-height: var(--cell-heigth);
  overflow-y: auto;
  padding: var(--cell-padding);
`;

const ScheduleCellContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: var(--schedule-min-height);
  background-color: var(--color-main);
  color: var(--color-white);
  border-radius: var(--border-radious-1);
  padding: var(--cell-padding);
  font-size: var(--font-size-3);
  font-weight: var(--font-bold);
  margin: 5px 0 5px 0;
  p {
    margin: 5px 0 5px 0;
  }
`;
