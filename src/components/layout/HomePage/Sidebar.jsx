import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImLoop2 } from "react-icons/im";

export default function Sidebar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <SidebarContainer>
      <ImLoop2
        isopen={sidebarIsOpen===true? "true":undefined}
        onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
      />
      <Link to={"/home"}><h1>h</h1></Link>
      <Link to={"/customers"}><h1>c</h1></Link>
      <Link to={"/services"}><h1>s</h1></Link>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  height: 100%;
  min-height: 100vh;
  width: ${props => props.children[0].props.isopen? "200px":"45px"};
  background-color: #8484fd;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px;
  transition: all 0.2s ease-out;
`;
