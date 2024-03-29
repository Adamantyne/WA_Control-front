import styled from "styled-components";

import { getWindowContext } from "../../../hooks/windowContext";
import CustomerWindow from "./customerWindows";
import ServiceWindow from "./ServiceWindows";
import WorkWindow from "./WorkWindows/WorkWindow";
import CreateWorkWindow from "./WorkWindows/CreateWorkWindow";

export default function Windows() {
  const { windowState } = getWindowContext();
  const { id, type, isOpen } = windowState;

  return (
    <BackgroundWindow isOpen={isOpen}>
      <WindowContainer isOpen={isOpen}>
        {type==="customer"?<CustomerWindow id={id}/>:""}
        {type==="service"?<ServiceWindow id={id}/>:""}
        {type==="work"?<WorkWindow id={id}/>:""}
        {type==="createWork"?<CreateWorkWindow id={id}/>:""}
      </WindowContainer>
    </BackgroundWindow>
  );
}

const WindowContainer = styled.section`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  max-width: var(--window-max-width);
  background-color: var(--color-white);
  border-left: var(--default-border);
  border-right: var(--default-border);
  min-height: var(--window-min-heigth);
  max-height: var(--window-min-heigth);
  overflow-y: auto;
  padding: var(--window-padding);
`;

const BackgroundWindow = styled.section`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`;
