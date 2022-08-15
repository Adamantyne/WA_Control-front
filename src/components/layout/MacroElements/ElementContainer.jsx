import styled from "styled-components";

export const ElementContainer = styled.article`
display: flex;
align-items: center;
width: 100%;
background-color: var(--color-main-2);
border-radius: var(--border-radious-2);
box-shadow: var(--shadow);
padding: 20px;
margin:20px 0px 20px 0px;
transition: all 0.1s linear;
color: var(--color-white);
svg{
  font-size: var(--font-size-tittle);
}
:hover{
      cursor: pointer;
      background-color: var(--color-main);
    }
`;

export const ElementInformations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  overflow: hidden;
  p{
    font-size:var(--font-size-4);
  }
`;