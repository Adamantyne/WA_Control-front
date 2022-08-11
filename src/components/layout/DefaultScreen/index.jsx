import styled from "styled-components";

import Sidebar from "./Sidebar";
import Page from "./Page";
import Windows from "../Windows";

export default function DefaultScreen(props) {
  return (
    <Screen>
      <Sidebar></Sidebar>
      <Page>{props.children}</Page>
      <Windows />
    </Screen>
  );
}

const Screen = styled.section`
  width: 100%;
  height: 100%;
  min-height: var(--min-height);
  display: flex;
`;
