import { useContext, useState } from "react";
import { Wrapper, Title, Form, Label, Span } from "./styles";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

import { Link } from "react-router-dom";
import ClickButton from "../../Components/Button";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setToken } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        JSON.stringify({ user, password}),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      setToken({ user, password });
      setUser("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log("Deu erro");
    }
  };

  return (
    <>
      <Wrapper>
        <Title>Log in to access your account</Title>
        <Form>
          <Label>Email</Label>
          <Input
            type="text"
            name="user"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Span>
            Do not have an account yet? <Link to="/cadastro">Register</Link>
          </Span>
          <ClickButton children="Login" />
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
