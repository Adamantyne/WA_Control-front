import HomeScreen from "../HomeScreen";
import Sidebar from "./Sidebar";
import Page from "./Page";
import Windows from "../Windows";

export default function HomePage(props) {
  return (
    <HomeScreen>
      <Sidebar></Sidebar>
      <Page>{props.children}</Page>
      <Windows />
    </HomeScreen>
  );
}
