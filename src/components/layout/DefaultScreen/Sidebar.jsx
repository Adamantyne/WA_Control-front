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
import { deleteItem } from "../../../utils/localStorage";

export default function Sidebar() {
  const { sidebarIsOpen, setSidebarIsOpen } = getSidebarContext();
  const { closeWindow } = getWindowContext();
  const { contextData } = getContext();
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

  return (
    <>
      <SidebarBackground
        sidebarIsOpen={sidebarIsOpen}
        onClick={() => setSidebarIsOpen(false)}
      />
      <SidebarContainer>
        {sidebarIsOpen === true ? (
          <IoIosArrowBack
            isopen={sidebarIsOpen === true ? "true" : undefined}
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          />
        ) : (
          <IoIosArrowForward
            isopen={sidebarIsOpen === true ? "true" : undefined}
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          />
        )}
        <SidebarOptions>
          <Link to={"/home"} onClick={() => closeWindow()}>
            <SidebarOption>
              <h2>Home</h2> <AiFillHome />
            </SidebarOption>
          </Link>
          <Link to={"/works"} onClick={() => closeWindow()}>
            <SidebarOption>
              <h2>Trabalhos</h2>
              <BsFillGearFill />
            </SidebarOption>
          </Link>
          <Link to={"/customers"} onClick={() => closeWindow()}>
            <SidebarOption>
              <h2>Clientes</h2>
              <BsPersonCircle />
            </SidebarOption>
          </Link>
          <Link to={"/services"} onClick={() => closeWindow()}>
            <SidebarOption>
              <h2>Serviços</h2>
              <AiFillTool />
            </SidebarOption>
          </Link>
          <Link to={"/calendar"} onClick={() => closeWindow()}>
            <SidebarOption>
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
  z-index: ${(props) => (props.sidebarIsOpen ? "var(--z-index-3)" : "var(--z-index--1)")};
`;

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  min-height: var(--min-height);
  min-width: ${(props) => (props.children[0].props.isopen ? "200px" : "45px")};
  max-width: ${(props) => (props.children[0].props.isopen ? "200px" : "45px")};
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
  font-size: var(--font-size-5);
  svg,
  h2 {
    :hover {
      cursor: pointer;
      color: var(--hover-color);
    }
    transition: all 0.1s linear;
    color: var(--color-white);
    font-weight: var(---font-bold);
  }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  width: 100%;
  transition: all 0.2s ease-out;
  :hover {
    cursor: pointer;
    svg,
    h2 {
      cursor: pointer;
      color: var(--hover-color);
    }
  }
`;
