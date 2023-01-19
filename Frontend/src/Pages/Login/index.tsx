import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { Wrapper, Title, Form, Label, Span } from "./styles";

import ClickButton from "../../Components/Button";
import Input from "../../Components/Input";
import { useAuth } from "../../Context/Provider";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { user, signIn } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
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
    <>
      <ToastContainer />
      <Wrapper>
        <Title>Log in to access your account</Title>
        <Form onSubmit={handleSubmit}>
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
            Do not have an account yet? <Link to="/register">Register</Link>
          </Span>
          <ClickButton children="Login" />
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
