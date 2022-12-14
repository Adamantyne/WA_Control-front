import { Link } from "react-router-dom";

import {AuthForm} from "../../layout/MacroElements/Form";
import ErrLabel from "../../layout/MicroElements/ErrLabel";
import Button from "../../layout/MicroElements/Button";
import Input from "../../layout/MicroElements/Input";


export default function SignUpForm(props) {
  const {submitData,signUpData,setSignUpData,errorMessage} = props;

  return (
    <AuthForm onSubmit={submitData}>
      <h1>WA Control</h1>
      <Input
        type="email"
        required
        placeholder="email"
        value={signUpData.email}
        onChange={(e) =>
          setSignUpData({ ...signUpData, email: e.target.value })
        }
      />
      <ErrLabel
        color={
          errorMessage.includes("email")
            ? "var(--color-error)"
            : "var(--color-transparent)"
        }
        message="Email já cadastrado"
      />
      <Input
        type="text"
        required
        placeholder="nome"
        value={signUpData.username}
        onChange={(e) =>
          setSignUpData({ ...signUpData, username: e.target.value })
        }
      />
      <ErrLabel message="" />
      <Input
        type="password"
        required
        placeholder="senha"
        value={signUpData.password}
        onChange={(e) =>
          setSignUpData({ ...signUpData, password: e.target.value })
        }
      />
      <ErrLabel message="" />
      <Input
        type="password"
        required
        placeholder="repita sua senha"
        value={signUpData.confirmPassword}
        onChange={(e) =>
          setSignUpData({ ...signUpData, confirmPassword: e.target.value })
        }
      />
      <ErrLabel
        color={
          errorMessage.includes("password")
            ? "var(--color-error)"
            : "var(--color-transparent)"
        }
        message="Repita sua senha corretamente"
      />
      <Button type="submit">Criar</Button>
      <Link to={"/"}>
        <p>Já possui uma conta ? clicke aqui para logar !!</p>
      </Link>
    </AuthForm>
  );
}
