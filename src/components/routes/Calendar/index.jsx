import { useState, useEffect } from "react";

import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import DefaultScreen from "../../layout/DefaultScreen";
import CalendarContainer from "./CalendarContainer";


export default function Calendar() {
  const [customers, setCustomers] = useState("Carregando");
  const { contextData } = getContext();
  const { windowState, openWindow } = getWindowContext();

  useEffect(() => {
    
  }, []);

  return (
    <DefaultScreen calendar={true}>
      <CalendarContainer></CalendarContainer>
    </DefaultScreen>
  );
}