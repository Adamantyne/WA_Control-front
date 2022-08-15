import react from "react";

const context = react.createContext();

export function CalendarProvider(props) {
    const [calendarData, setCalendarData] = react.useState({
        currentMonth:new Date().getMonth() + 1,
        openedMonth: new Date().getMonth() + 1
    });
    const [schedulingData, setSchedulingData] = react.useState(undefined);

    return (
        <context.Provider value={{
            calendarData,
            setCalendarData,
            schedulingData,
            setSchedulingData
        }}>
            {props.children}
        </context.Provider>
    );
}
export const getCalendarContext = () => react.useContext(context);
