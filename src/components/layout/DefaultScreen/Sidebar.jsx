import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import {
  BsPersonCircle,
  BsFillCalendarWeekFill,
  BsFillGearFill,
} from "react-icons/bs";
import { AiFillHome, AiFillTool } from "react-icons/ai";

import { getWindowContext } from "../../../hooks/windowContext";
import { getSidebarContext } from "../../../hooks/sidebarContext";
import { postRequisition } from "../../../utils/api";
import { getContext } from "../../../hooks/UserContext";
import { deleteItem, getItem } from "../../../utils/localStorage";

export default function Sidebar() {
  const { sidebarInfos, setSidebarInfos } = getSidebarContext();
  const { sidebarIsOpen, currentPage } = sidebarInfos;
  const { closeWindow } = getWindowContext();
  const { contextData } = getContext();
  const { username } = getItem("userData");
  const navigate = useNavigate();

  async function signOut() {
    try {
      await postRequisition("sign-out", contextData, "");
      deleteItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function setSidebar(open, page = null) {
    closeWindow();
    if (page) {
      setSidebarInfos({ sidebarIsOpen: open, currentPage: page });
      return;
    }
    setSidebarInfos({ ...sidebarInfos, sidebarIsOpen: open });
  }

  return (
    <>
      <SidebarBackground
        sidebarIsOpen={sidebarIsOpen}
        onClick={() => setSidebar(false)}
      />
      <SidebarContainer isopen={sidebarIsOpen === true ? "true" : undefined}>
        <SidebarOptions>
          {sidebarIsOpen === true ? (
            <SidebarOption
              onClick={() => setSidebar(!sidebarIsOpen)}
              border={true}
            >
              <h2>{username}</h2>
              <IoIosArrowBack />
            </SidebarOption>
          ) : (
            <SidebarOption
              onClick={() => setSidebar(!sidebarIsOpen)}
              border={true}
            >
              <h2>{username}</h2>
              <IoIosArrowForward />
            </SidebarOption>
          )}
          <Link to={"/home"} onClick={() => setSidebar(false, "home")}>
            <SidebarOption selected={"home" === currentPage}>
              <h2>Home</h2>
              <AiFillHome />
            </SidebarOption>
          </Link>
          <Link to={"/works"} onClick={() => setSidebar(false, "works")}>
            <SidebarOption selected={"works" === currentPage}>
              <h2>Trabalhos</h2>
              <BsFillGearFill />
            </SidebarOption>
          </Link>
          <Link
            to={"/customers"}
            onClick={() => setSidebar(false, "customers")}
          >
            <SidebarOption selected={"customers" === currentPage}>
              <h2>Clientes</h2>
              <BsPersonCircle />
            </SidebarOption>
          </Link>
          <Link to={"/services"} onClick={() => setSidebar(false, "services")}>
            <SidebarOption selected={"services" === currentPage}>
              <h2>Serviços</h2>
              <AiFillTool />
            </SidebarOption>
          </Link>
          <Link to={"/calendar"} onClick={() => setSidebar(false, "calendar")}>
            <SidebarOption selected={"calendar" === currentPage}>
              <h2>Calendário</h2>
              <BsFillCalendarWeekFill />
            </SidebarOption>
          </Link>

          <SidebarOption>
            <h2>Sair</h2>
            <BiLogOutCircle
              onClick={() => {
                signOut();
              }}
            />
          </SidebarOption>
        </SidebarOptions>
      </SidebarContainer>
    </>
  );
}

const SidebarBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: var(--min-height);
  background-color: var(--color-black);
  transition: all 0.3s linear;
  opacity: ${(props) => (props.sidebarIsOpen ? "var(--low-opacity)" : "0")};
  z-index: ${(props) =>
    props.sidebarIsOpen ? "var(--z-index-3)" : "var(--z-index--1)"};
`;

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  min-height: var(--min-height);
  min-width: ${(props) => (props.isopen ? "200px" : "45px")};
  max-width: ${(props) => (props.isopen ? "200px" : "45px")};
  background-color: var(--color-main-3);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px;
  overflow-x: hidden;
  border-right: var(--white-border);
  border-radius: 0 10px 10px 0;
  transition: all 0.2s ease-out;
  z-index: var(--z-index-4);
  font-size: var(--font-size-4);
  font-weight: var(--font-bold);
  svg {
    font-size: var(--font-size-6);
  }
`;
const SidebarOptions = styled.div`
  min-width: 190px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`;
const SidebarOption = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  width: 100%;
  transition: all 0.2s ease-out;
  border-bottom: ${(props) =>
    props.border ? "var(--white-border)" : "none"};
  color: ${(props) =>
    props.selected ? "var(--hover-color)" : "var(--color-white)"};
  font-weight: var(---font-bold);
  :hover {
    cursor: pointer;
    color: var(--hover-color);
  }
`;
