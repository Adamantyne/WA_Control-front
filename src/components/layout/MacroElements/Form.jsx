import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    color: var(--color-black);
    margin-top: 10px;
    text-align: center;
  }
  div{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const AuthForm = styled(Form)`
  max-width: var(--auth-max-width);
  h1{
    text-align: center;
    font-size: var(--font-size-tittle);
    font-family: var(--font-family-tittle);
    color: var(--color-main);
    margin-bottom: 20px;
  }
`
