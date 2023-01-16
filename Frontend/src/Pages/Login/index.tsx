import { useContext, useState } from "react";
import { Wrapper, Title, Form, Label, Span } from "./styles";
import AuthContext from "../../Context/Auth";

import { Link } from "react-router-dom";
import ClickButton from "../../Components/Button";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: "",
  password: "",
};

interface IClient {
  user: string;
  password: string;
}

const Login = () => {
  const { setToken } = useContext(AuthContext);
  const [client, setClient] = useState(initialState);
  const navigate = useNavigate();

  const Login = ({ user, password }: IClient) => {
    if (user === "admin" && password === "admin") {
      return { token: "1234" };
    }
    return { error: "Usuário ou senha invalido." };
  };

  const HandleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    const { token } = Login();

    if (token) {
      setToken(token);
      return navigate("/");
    }
    setClient(initialState);
  };

  return (
    <>
      <Wrapper>
        <Title>Log in to access your account</Title>
        <Form onSubmit={() => HandleSubmit}>
          <Label>Email</Label>
          <Input
            type="text"
            name="user"
            value={client.user}
            onChange={(event) =>
              setClient({ ...client, user: event.target.value })
            }
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={client.password}
            onChange={(event) =>
              setClient({ ...client, password: event.target.value })
            }
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
