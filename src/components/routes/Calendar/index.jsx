import styled from "styled-components";
import { BsFillGearFill } from "react-icons/bs";

import { getContext } from "../../../hooks/UserContext";
import DefaultScreen from "../../layout/DefaultScreen";
import CalendarContainer from "./CalendarComponents/CalendarContainer";
import GlobalContainer from "../../layout/MacroElements/GlobalContainer";

export default function Calendar(props) {
  const { contextData } = getContext();
  const bgImage = contextData.backgroundImage;


  return (
    <GlobalContainer bg={bgImage?.length > 0 ? `url(${bgImage})` : "none"}>
      <DefaultScreen calendar={true}>
        <ScheduleListContainer>
          <ScheduleList
            onClick={() => {
              window.alert(
                "Em breve você poderá selecionar os horários de funcionamento!"
              );
            }}
          >
            <h2>Horários</h2>
            <BsFillGearFill />
          </ScheduleList>
        </ScheduleListContainer>
        <CalendarContainer></CalendarContainer>
      </DefaultScreen>
    </GlobalContainer>
  );
}

const ScheduleListContainer = styled.div`
  width: 100%;
  max-width: var(--calendar-max-width);
`;

const ScheduleList = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  overflow: hidden;
  svg,
  h2 {
    color: var(--color-main);
    transition: all 0.3s ease-out;
    color: var(--color-main);
  }
  h2 {
    opacity: 0;
    transform: translateX(100px);
    font-weight: var(--font-bold);
    font-size: var(--font-size-4);
    z-index: 0;
  }
  svg {
    font-size: var(--font-size-6);
    z-index: 1;
  }
  :hover {
    svg,
    h2 {
      color: var(--hover-color-2);
    }
    svg {
      cursor: pointer;
      transform: rotate(80deg);
    }
    h2 {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
