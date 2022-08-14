import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import { getContext } from "../../../hooks/UserContext";
import { getRequisition } from "../../../utils/api";
import CalendarHeader from "./CalendarHeader";
import CalendarSidebar from "./CalendarSidebar";
import CalendarColumns from "./CalendarColumns";

export default function CalendarContainer() {
  const [montlyCalendar, setMontlyCalendar] = useState([[]]);
  const currentMonth = new Date().getMonth() + 1;
  const { contextData } = getContext();

  useEffect(() => {
    if (contextData.config) {
      setCalendar(currentMonth);
    }
  }, [contextData]);

  async function setCalendar(month) {
    try {
      const response = await getRequisition(`calendar/${month}`, contextData);
      setMontlyCalendar(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GblobalContainer>
      <CalendarHeader
        currentMonth={currentMonth}
        montlyCalendar={montlyCalendar}
        setCalendar={setCalendar}
      />
      <Container>
        <CalendarSidebar />
        {montlyCalendar[0].map((dataDay) => {
          const day = dataDay.day;
          return <CalendarColumns key={day} day={day} />;
        })}
      </Container>
    </GblobalContainer>
  );
}

const Container = styled.section`
  width: 100%;
  height: 85vh;
  background-color: red;
  display: flex;
`;

const GblobalContainer = styled.section`
  margin-top: 10px;
  max-width: 79vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

