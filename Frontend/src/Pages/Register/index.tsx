import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper, Title, Form, Label, Span, MenuLink } from "./styles";
import ClickButton from "../../Components/Button";
import Input from "../../Components/Input";

import { useAuth } from "../../Context/Provider";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      try {
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Title>Create an Account</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
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
          Do you have an account? <MenuLink to="/login">Sign in.</MenuLink>
        </Span>
        <ClickButton children="Register" />
      </Form>
    </Wrapper>
  );
};

export default Register;
