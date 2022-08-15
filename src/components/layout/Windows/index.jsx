import styled from "styled-components";

import { getWindowContext } from "../../../hooks/windowContext";
import CustomerWindow from "./CustomerWindow";
import ServiceWindow from "./ServiceWindow";
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
  min-height: var(--window-min-heigth);
  max-height: var(--window-min-heigth);
  overflow-y: auto;
  padding: var(--window-padding);
`;

const BackgroundWindow = styled.section`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  height: 100%;
  background-color: var(--white-window);
  border-left: var(--white-border);
  border-radius: 10px 0 0 10px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`;
