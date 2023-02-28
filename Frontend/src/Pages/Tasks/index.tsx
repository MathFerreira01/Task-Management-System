import { FormEvent, useState } from "react";

import CardTask from "../../Components/Card";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import MenuItem from "@mui/material/MenuItem";
import {
  Container,
  ContainerTextfield,
  Form,
  Label,
  SelectField,
  Title,
  Wrapper,
} from "./styles";
import ClickButton from "../../Components/Button";

const initialState = {
  id: "",
  name: "",
  description: "",
  date: "",
  userId: "",
};

const Tasks = () => {
  const [task, setTask] = useState(initialState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(task);
  };

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
            <SelectField label="Age">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SelectField>
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
