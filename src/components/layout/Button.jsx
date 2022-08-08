import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  font-size: 18px;
  border: none;
  color: white;
  background-color: var(--color-main2);
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

export default Button;
