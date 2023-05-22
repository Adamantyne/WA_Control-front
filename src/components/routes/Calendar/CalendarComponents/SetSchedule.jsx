import styled from "styled-components";
import { BsFillGearFill } from "react-icons/bs";

import { getItem, setItem } from "../../../../utils/localStorage";
import ScheduleList from "../calendarUtilities/setScheduleButton";
import { getOptionsContext } from "../../../../hooks/optionsContext";

export default function SetSchedule() {
  const {setOptionsInfos} = getOptionsContext();
  function setHours(hours) {
    setItem("hours", hours);
  }

  return (
    <ScheduleListContainer>
      <ScheduleList
        onClick={() => {
          //setOptionsInfos({isOpen:true, currentOptions:"hours"});
          window.alert(
             "Em breve você poderá selecionar os horários de funcionamento!"
          );
        }}
      >
        <h2>Horários</h2>
        <BsFillGearFill />
      </ScheduleList>
    </ScheduleListContainer>
  );
}

const ScheduleListContainer = styled.div`
  width: 100%;
  max-width: var(--calendar-max-width);
`;