import { BsPersonCircle } from "react-icons/bs";

import {
  ElementContainer,
  ElementInformations,
} from "../../layout/MacroElements/ElementContainer";

import { getWindowContext } from "../../../hooks/windowContext";

export default function CustomerContainer(props) {
  const { customerData } = props;
  const { openWindow } = getWindowContext();
  const { name, establishment, id } = customerData;
  return (
    <ElementContainer
      onClick={() => {
        openWindow("customer", id);
      }}
    >
      <BsPersonCircle />
      <ElementInformations>
        <h2>{name}</h2>
        <p>{establishment}</p>
      </ElementInformations>
    </ElementContainer>
  );
}
