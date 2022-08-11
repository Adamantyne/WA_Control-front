import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillHome, AiFillTool } from "react-icons/ai";

import { getWindowContext } from "../../../hooks/windowContext";
import { getSidebarContext } from "../../../hooks/sidebarContext";

export default function Sidebar() {
  const {sidebarIsOpen, setSidebarIsOpen} = getSidebarContext();
  const { closeWindow } = getWindowContext();
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
      <Link to={"/home"} onClick={()=>closeWindow()}>
        <Option>
          <AiFillHome />
        </Option>
      </Link>
      <Link to={"/customers"} onClick={()=>closeWindow()}>
        <Option>
          <BsPersonCircle />
        </Option>
      </Link>
      <Link to={"/services"} onClick={()=>closeWindow()}>
        <Option>
          <AiFillTool />
        </Option>
      </Link>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  height: 100%;
  min-height: var(--min-height);
  min-width: ${(props) => (props.children[0].props.isopen ? "200px" : "50px")};
  background-color: var(--color-main2);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px;
  transition: all 0.2s ease-out;
  overflow-x: hidden;
  svg {
    font-size: var(--font-size-6);
    color: var(--color-white);
    :hover {
      cursor: pointer;
    }
  }
`;

const Option = styled.div`
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
