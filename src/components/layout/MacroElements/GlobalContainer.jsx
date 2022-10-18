import styled from "styled-components";

import { getContext } from "../../../hooks/UserContext";

export default function GlobalContainer(props) {
  const { backgroundImage: bgImage } = getContext().contextData;
  console.log();
  return (
    <Container bg={bgImage?.length > 0 ? `url(${bgImage})` : "none"}>
      {props.children}
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  min-width: var(--min-width);
  max-width: var(--min-width);
  height: 100%;
  min-height: var(--min-height);
  max-height: var(--min-height);
  overflow: auto;
  display: flex;
  align-items: flex-start;
  background-image: ${(props) => props.bg};
  background-size: contain;
`;
