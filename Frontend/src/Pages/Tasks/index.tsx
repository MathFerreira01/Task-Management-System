import { FormEvent, useState, useEffect } from "react";

import CardTask from "../../Components/Card";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import {
  Container,
  ContainerTextfield,
  Form,
  Label,
  Title,
  Wrapper,
} from "./styles";

import ClickButton from "../../Components/Button";
import getAllUsers from "../../services/Users/get-all-users";

interface user {
  id: string;
  username: string;
  email: string;
}

const initialState = {
  id: "",
  name: "",
  description: "",
  date: "",
  userId: "",
};

const Tasks = () => {
  const [task, setTask] = useState(initialState);
  const [users, setUsers] = useState<user[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(task);
  };

  const getUsers = async () => {
    const response = await getAllUsers();
    if (response.erro) {
      console.log(response.error);
    }
    setUsers(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const tasks = [
    {
      id: 1,
      name: "teste",
      description: "fazer todas as atividades da faculdade e estudar por 1h.",
    },
    {
      id: 2,
      name: "teste",
      description: "fazer todas as atividades da faculdade e estudar por 1h.",
    },
    {
      id: 3,
      name: "teste",
      description: "fazer todas as atividades da faculdade e estudar por 1h.",
    },
    {
      id: 4,
      name: "teste",
      description: "fazer todas as atividades da faculdade e estudar por 1h.",
    },
  ];
  return (
    <>
      <Header />
      <Wrapper>
        <Title>Register Your New Task</Title>
        <Form onSubmit={handleSubmit}>
          <ContainerTextfield>
            <Label>Task</Label>
            <Input
              type="text"
              value={task.name}
              onChange={(event) =>
                setTask({ ...task, name: event.target.value })
              }
            />
          </ContainerTextfield>
          <ContainerTextfield>
            <Label>Description</Label>
            <Input
              type="text"
              value={task.description}
              onChange={(event) =>
                setTask({ ...task, description: event.target.value })
              }
            />
          </ContainerTextfield>
          <ContainerTextfield>
            <Label>Date</Label>
            <Input
              type="date"
              value={task.date}
              onChange={(event) =>
                setTask({ ...task, date: event.target.value })
              }
            />
          </ContainerTextfield>
          <ContainerTextfield>
            <Label>User</Label>
            <Select
              style={{
                height: "46px",
                background: "#212121",
                marginBottom: "0.9em",
                color: "#e9e9f2",
              }}
              value={task.userId}
              onChange={(event) =>
                setTask({ ...task, userId: event.target.value as string })
              }
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.username}
                </MenuItem>
              ))}
            </Select>
          </ContainerTextfield>
          <ContainerTextfield>
            <ClickButton>Send</ClickButton>
          </ContainerTextfield>
        </Form>
      </Wrapper>
      <Container>
        {tasks.map((task) => (
          <CardTask
            key={task.id}
            name={task.name}
            description={task.description}
          />
        ))}
      </Container>
    </>
  );
};

export default Tasks;
