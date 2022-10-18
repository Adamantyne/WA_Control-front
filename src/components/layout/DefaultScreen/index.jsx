import styled from "styled-components";

import Sidebar from "./Sidebar";
import DefaultPage from "./DefaultPage";
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
      <DefaultPage>{props.children}</DefaultPage>
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
