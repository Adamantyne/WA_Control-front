import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward, IoIosExit } from "react-icons/io";
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
  const {contextData} = getContext();
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
      <Link to={"/home"} onClick={() => closeWindow()}>
        <SidebarOption>
          <AiFillHome />
        </SidebarOption>
      </Link>
      <Link to={"/works"} onClick={() => closeWindow()}>
        <SidebarOption>
          <BsFillGearFill />
        </SidebarOption>
      </Link>
      <Link to={"/customers"} onClick={() => closeWindow()}>
        <SidebarOption>
          <BsPersonCircle />
        </SidebarOption>
      </Link>
      <Link to={"/services"} onClick={() => closeWindow()}>
        <SidebarOption>
          <AiFillTool />
        </SidebarOption>
      </Link>
      <Link to={"/calendar"} onClick={() => closeWindow()}>
        <SidebarOption>
          <BsFillCalendarWeekFill />
        </SidebarOption>
      </Link>
      <div>
        <SidebarOption>
          <IoIosExit
            onClick={() => {
              signOut();
            }}
          />
        </SidebarOption>
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  height: 100%;
  min-height: var(--min-height);
  min-width: ${(props) => (props.children[0].props.isopen ? "200px" : "50px")};
  background-color: var(--color-main-3);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px;
  transition: all 0.2s ease-out;
  overflow-x: hidden;
  border-right: var(--white-border);
  border-radius: 0 10px 10px 0;
  svg {
    transition: all 0.1s linear;
    font-size: var(--font-size-6);
    color: var(--color-white);
    :hover {
      cursor: pointer;
      color: var(--hover-color);
    }
  }
`;

const SidebarOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  border-radius: var(--border-radious-2);
  width: 100%;
  h2 {
    color: var(--color-white);
    font-size: var(--font-size-3);
    font-weight: var(---font-bold);
    margin-right: 10px;
  }
`;
