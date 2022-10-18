import styled from "styled-components";

const DefaultPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--white-window);
  border-radius: 0 10px 10px 0;
  border-right: var(--white-border);
  min-height: var(--min-height);
  max-width: var(--page-max-width);
  min-width: var(--page-min-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--page-padding);
  margin-right: 5%;
  h2 {
    font-size: var(--font-size-5);
    margin-bottom: 10px;
  }
  h1{
    font-size: var(--font-size-6);
    margin-bottom: 10px;
    color: var(--color-main);
    font-weight: var(--font-bold);
  }
`;

export default DefaultPage;
