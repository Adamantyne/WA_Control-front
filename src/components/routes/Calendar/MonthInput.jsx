
import months from "./getMonthNames";
import { getCalendarContext } from "../../../hooks/calendarContext";
import ComboBox from "../../layout/MicroElements/ComboBox";

export default function MonthInput(props) {
  const {setCalendar} = props;
  const {calendarData, setCalendarData}=getCalendarContext();
  const {currentMonth} = calendarData;

  return (
    <ComboBox
      name="mês"
      defaultValue={currentMonth}
      onChange={(e) => {
        setCalendar(e.target.value);
        setCalendarData({...calendarData, openedMonth:e.target.value})
      }}
    >
      {months.map((month) => {
        const { name, value } = month;
        return <ComboBoxMonth key={name + value} name={name} value={value} />;
      })}
    </ComboBox>
  );
}

function ComboBoxMonth(props) {
  const { name, value } = props;
  return <option value={value}>{name}</option>;
}

