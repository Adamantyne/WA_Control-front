import { AiFillTool } from "react-icons/ai";

import {
  ElementContainer,
  ElementInformations,
} from "../../layout/MacroElements/ElementContainer";

import { getWindowContext } from "../../../hooks/windowContext";

export default function CustomerContainer(props) {
  const { serviceData } = props;
  const { openWindow } = getWindowContext();
  const { value, id, name } = serviceData;
  return (
    <ElementContainer
      onClick={() => {
        openWindow("service", id);
      }}
    >
      <AiFillTool />
      <ElementInformations>
        <h2>{name}</h2>
        <p>{`R$ ${value/100}`}</p>
      </ElementInformations>
    </ElementContainer>
  );
}
