import react from "react";

const context = react.createContext();

export function CalendarProvider(props) {
    const [calendarData, setCalendarData] = react.useState({
        currentMonth:new Date().getMonth() + 1,
        openedMonth: new Date().getMonth() + 1
    });

    return (
        <context.Provider value={{
            calendarData,
            setCalendarData
        }}>
            {props.children}
        </context.Provider>
    );
}
export const getCalendarContext = () => react.useContext(context);
