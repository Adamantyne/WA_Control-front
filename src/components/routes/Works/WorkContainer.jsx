import { BsFillGearFill } from "react-icons/bs";
import dayjs from "dayjs";

import {
  ElementContainer,
  ElementInformations,
} from "../../layout/MacroElements/ElementContainer";

import { getWindowContext } from "../../../hooks/windowContext";

export default function WorkContainer(props) {
  const { workData } = props;
  const { openWindow } = getWindowContext();
  const { id, customer, createAt } = workData;
  const createDate = dayjs(createAt).format("DD/MM/YY");

  function checkingWorkStatus(){
    return workData.payed && workData.delivered && workData.finished
  }

  return (
    <ElementContainer
      borderVariant = {checkingWorkStatus() ? "var(--green-border)" : null}
      onClick={() => {
        openWindow("work", id);
      }}
    >
      <BsFillGearFill />
      <ElementInformations>
        <h2>{customer.name}</h2>
        <p>{createDate}</p>
      </ElementInformations>
    </ElementContainer>
  );
}
