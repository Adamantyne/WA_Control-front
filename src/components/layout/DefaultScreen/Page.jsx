import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  height: 100%;
  min-height: var(--min-height);
  max-width: var(--page-max-width);
  min-width: var(--page-min-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:var(--page-padding);
`;

export default Page;