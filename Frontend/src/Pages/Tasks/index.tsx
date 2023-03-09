import { useState, useEffect, FormEvent } from "react";

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
import getAllTasks from "../../services/Tasks/all-tasks";
import IUser from "../../interface/IUser";
import createTaskService from "../../services/Tasks/create-task";
import ITask from "../../interface/ITask";

const initialState = {
  id: "",
  name: "",
  description: "",
  date: "",
  userId: "",
};

const Tasks = () => {
  const [task, setTask] = useState(initialState);
  const [dataTask, setDataTask] = useState<ITask[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const createTask = async (event: FormEvent) => {
    event.preventDefault();
    const response = await createTaskService(task);

    if (response.error) {
      console.log(response.error);
      return;
    }
    console.log(response.message);
  };

  const getTasks = async () => {
    const response = await getAllTasks();
    if (response.erro) {
      console.log(response.error);
    }
    setDataTask(response);
  };

  const getUsers = async () => {
    const response = await getAllUsers();
    if (response.erro) {
      console.log(response.error);
    }
    setUsers(response);
  };

  useEffect(() => {
    getUsers(), getTasks();
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <Title>Register Your New Task</Title>
        <Form onSubmit={createTask}>
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
        {dataTask.map((task, index) => (
          <CardTask
            key={index}
            id={task.id}
            name={task.name}
            description={task.description}
            date={task.date}
            userId={task.userId}
            users={task.users}
          />
        ))}
      </Container>
    </>
  );
};

export default Tasks;
