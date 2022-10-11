import { useEffect } from "react";

import { getContext } from "../../../hooks/UserContext";
import DefaultScreen from "../../layout/DefaultScreen";
import CalendarContainer from "./CalendarComponents/CalendarContainer";
import GlobalContainer from "../../layout/MacroElements/GlobalContainer";

export default function Calendar(props) {
  const {contextData} = getContext();
  const bgImage = contextData.backgroundImage;

  useEffect(() => {
    if (contextData.config) {
      getSchedules();
    }
  }, []);

  async function getSchedules() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GlobalContainer bg={bgImage?.length>0?`url(${bgImage})`:"none"}>
      <DefaultScreen calendar={true}>
        <CalendarContainer></CalendarContainer>
      </DefaultScreen>
    </GlobalContainer>
  );
}
