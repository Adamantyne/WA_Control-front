import styled from "styled-components";

const ComboBox = styled.select`
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-black);
  font-weight: var(--font-bold);
  background-color: var(--color-white);
  min-width: var(--month-inputh-width);
  min-height: var(--month-inputh-heigth);
  font-size: var(--font-size-2);
  border-radius: var(--border-radious-1);
  border: var(--input-border);
  :hover {
    cursor: pointer;
  }
`;

export default ComboBox;
