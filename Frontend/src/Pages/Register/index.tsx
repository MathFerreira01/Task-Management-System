import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import {
  Wrapper,
  Title,
  Form,
  Label,
  Span,
  MessageError,
  MenuLink,
} from "./styles";
import ClickButton from "../../Components/Button";
import Input from "../../Components/Input";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signup(username, email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/login");
  };

  return (
    <Wrapper>
      <Title>Create an Account</Title>
      <Form onSubmit={handleSignup}>
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MessageError>{error}</MessageError>
        <Span>
          Do you have an account? <MenuLink to="/login">Sign in.</MenuLink>
        </Span>
        <ClickButton children="Register" />
      </Form>
    </Wrapper>
  );
};

export default Register;
