import { useEffect } from "react";
import styled from "styled-components";
import { BsFillGearFill } from "react-icons/bs";

import { getItem, setItem } from "../../../../utils/localStorage";

export default function SetSchedule(){

    function setHours(hours){
        setItem("hours",hours)
    }
    
    return(<ScheduleList
        onClick={() => {
          window.alert(
            "Em breve você poderá selecionar os horários de funcionamento!"
          );
        }}
      >
        <h2>Horários</h2>
        <BsFillGearFill />
      </ScheduleList>)
}

const ScheduleList = styled.button`
  margin: 5px 0 0 auto;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  overflow: hidden;
  border-radius: var(--border-radious-2);
  background-color: var(--white-window);
  border: var(--default-border);
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
    z-index: var(--z-index-0);
  }
  svg {
    font-size: var(--font-size-6);
    z-index: var(--z-index-1);
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