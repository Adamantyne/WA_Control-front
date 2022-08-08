import styled from "styled-components";

import { getContext } from "../../../hooks/UserContext";
import CustomerWindow from "./CustomerWindow";

export default function Windows(props) {
  const { windowState, setWindowState } = getContext();
  const { id, type, isOpen } = windowState;

  return (
    <BackgroundWindow isOpen={isOpen}>
      <WindowContainer>
        {type==="customer"?<CustomerWindow id={id}/>:""}
      </WindowContainer>
    </BackgroundWindow>
  );
}

const WindowContainer = styled.section`
  display: "flex";
  width: 100%;
  max-width: 600px;
  background-color: pink;
  min-height: 500px;
`;

const BackgroundWindow = styled.section`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
