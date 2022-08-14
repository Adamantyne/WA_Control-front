import styled from "styled-components";

import Sidebar from "./Sidebar";
import Page from "./Page";
import Windows from "../Windows";
import CalendarPage from "./CalendarPage";

export default function DefaultScreen(props) {
  const{calendar}=props;
  return (
    <Screen>
      <Sidebar></Sidebar>
      {calendar?
      <CalendarPage>{props.children}</CalendarPage>:
      <>
      <Page>{props.children}</Page>
      <Windows />
      </>
      }
    </Screen>
  );
}

const Screen = styled.section`
  width: 100%;
  height: 100%;
  min-height: var(--min-height);
  display: flex;
`;
