import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Title, Form, Label, Span, MenuLink } from "./styles";

import ClickButton from "../../Components/Button";
import Input from "../../Components/Input";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signin } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <>
      <Wrapper>
        <Title>Sign in to access your account</Title>
        <Form onSubmit={handleLogin}>
          <Label>Email</Label>
          <Input
            type="text"
            name="user"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Span>
            Do not have an account yet?{" "}
            <MenuLink to="/register">Register</MenuLink>
          </Span>
          <ClickButton children="Login" />
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
