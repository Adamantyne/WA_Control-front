import react, { useEffect } from "react";

import { getItem } from "../utils/localStorage";

const context = react.createContext();

export function CalendarProvider(props) {
  const initialHoursArr = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
  const [calendarData, setCalendarData] = react.useState({
    currentMonth: new Date().getMonth() + 1,
    openedMonth: new Date().getMonth() + 1,
  });
  const [schedulingData, setSchedulingData] = react.useState(undefined);
  const [hours, setHours] = react.useState(initialHoursArr);

  useEffect(() => {
    const currentSchedules = getItem("hours");
    if (currentSchedules) {
      setHours(currentSchedules);
    }
  }, [getItem("hours")]);

  return (
    <context.Provider
      value={{
        calendarData,
        setCalendarData,
        schedulingData,
        setSchedulingData,
        hours,
        setHours,
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export const getCalendarContext = () => react.useContext(context);
