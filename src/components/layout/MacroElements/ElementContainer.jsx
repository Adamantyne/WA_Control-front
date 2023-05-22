import styled from "styled-components";

export const ElementContainer = styled.article`
display: flex;
align-items: center;
width: 100%;
background-color:${(props) => props.bgVariant ? `${props.bgVariant}` : "var(--color-main)"};
border-radius: var(--border-radious-2);
box-shadow: var(--shadow);
padding: 20px;
margin:20px 0px 20px 0px;
transition: all 0.1s linear;
color: var(--color-white);
border: ${(props) => props.borderVariant ? `${props.borderVariant}` : "var(--blue-border)"};
svg{
  font-size: var(--font-size-tittle);
}
:hover{
      cursor: pointer;
      background-color:${(props) => props.hoverBgVariant ? `${props.hoverBgVariant}` : "var(--hover-color-3)"};
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