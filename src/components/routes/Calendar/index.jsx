import styled from "styled-components";

import DefaultScreen from "../../layout/DefaultScreen";
import CalendarContainer from "./CalendarComponents/CalendarContainer";
import SetSchedule from "./CalendarComponents/SetSchedule";

export default function Calendar() {
  return (
    <DefaultScreen calendar={true}>
      <SetSchedule />
      <CalendarContainer />
    </DefaultScreen>
  );
}
