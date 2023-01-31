import styled from "styled-components";
import { getOptionsContext } from "../../../../hooks/optionsContext";

export default function OptionsWindow() {
    const {isOpen,currentOptions} = getOptionsContext().optionsInfos;
  return (
    <Background isOpen = {isOpen}>
      <Window>
        <h1>Aqui conterá as opções</h1>
      </Window>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 3%;
  padding-left: calc(3% + 45px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-window);
  transition: all 0.3s linear;
  z-index: var(--z-index-5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};

  /* opacity: ${(props) => (props.isOpen ? "var(--low-opacity)" : "0")};
  z-index: ${(props) =>
    props.isOpen ? "var(--z-index-3)" : "var(--z-index--1)"}; */
`;

const Window = styled.section`
width: 100%;
height: 100%;
  background-color: var(--color-white);
  border-radius: var(--border-radious-2);
`;
