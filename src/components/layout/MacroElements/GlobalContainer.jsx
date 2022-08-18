import styled from "styled-components";
const GlobalContainer = styled.main`
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

export default GlobalContainer;
