import styled from "styled-components";

export default function DivLabel(props) {
  const { color,message } = props;
  return <LabelContainer>
    <Label color={color?color:"var(--color-transparent)"}>
        {message?message:"message"}
    </Label>
  </LabelContainer>;
}

const LabelContainer = styled.div`
  width: 100%;
  margin: 0px 0 10px 0;
  padding-left: 10px;
`;
const Label = styled.label`
  font-size: var(--font-size-2);
  color: ${(props)=>props.color};
`;
