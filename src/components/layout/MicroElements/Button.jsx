import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--objeects-height);
  font-size: var(--font-size-4);
  border: none;
  color: white;
  background-color: var(--color-main-2);
  border-radius: var(--border-radious-2);
  :hover {
    cursor: pointer;
    background-color: var(--color-main);
  }
`;

export default Button;
