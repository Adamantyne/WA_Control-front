import { Link, useNavigate } from "react-router-dom";

import { AuthForm } from "../../layout/Form";
import ErrLabel from "../../layout/ErrLabel";
import Button from "../../layout/Button";
import Input from "../../layout/Input";

export default function SignInForm(props) {
  const {submitData,signInData,setSignInData,errorMessage} = props;

  return (
    <AuthForm onSubmit={submitData}>
      <h1>WA Control</h1>
      <Input
        type="email"
        required
        placeholder="email"
        value={signInData.email}
        onChange={(e) =>
          setSignInData({ ...signInData, email: e.target.value })
        }
      />
      <ErrLabel
        color={
          errorMessage.includes("email")
            ? "var(--color-error)"
            : "var(--color-transparent)"
        }
        message="Email não cadastrado"
      />
      <Input
        type="password"
        required
        placeholder="senha"
        value={signInData.password}
        onChange={(e) =>
          setSignInData({ ...signInData, password: e.target.value })
        }
      />
      <ErrLabel
        color={
          errorMessage.includes("password")
            ? "var(--color-error)"
            : "var(--color-transparent)"
        }
        message="Senha incorreta"
      />
      <Button type="submit">Entrar</Button>
      <Link to={"/signUp"}>
        <p>Não tem uma conta ? Clique aqui para criar !!</p>
      </Link>
    </AuthForm>
  );
}
