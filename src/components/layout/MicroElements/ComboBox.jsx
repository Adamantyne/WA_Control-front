import styled from "styled-components";

const ComboBox = styled.select`
display: flex;
align-items: center;
justify-content: center;
color: var(--color-black);
background-color: var(--color-white);
max-width: var(--month-inputh-width);
height: var(--month-inputh-heigth);
:hover{
    cursor: pointer;
}
`;

export default ComboBox;