import { useState } from "react";
import { Button } from "../../Components/Button/styles";
import CardTask from "../../Components/Card";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  Container,
  ContainerTextfield,
  Form,
  Label,
  SelectField,
  Title,
  Wrapper,
} from "./styles";

const Tasks = () => {
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
    {
      id: 5,
      name: "teste",
      description: "fazer todas as atividades da faculdade e estudar por 1h.",
    },
    {
      id: 6,
      name: "teste",
      description: "fazer todas as atividades da faculdade e estudar por 1h.",
    },
    {
      id: 7,
      name: "teste",
      description: "fazer todas as atividades da faculdade e estudar por 1h.",
    },
    {
      id: 8,
      name: "teste",
      description: "fazer todas as atividades da faculdade e estudar por 1h.",
    },
  ];
  return (
    <>
      <Header />
      <Wrapper>
        <Title>Register Your New Task</Title>
        <Form>
          <ContainerTextfield>
            <Label>Task</Label>
            <Input />
          </ContainerTextfield>
          <ContainerTextfield>
            <Label>Description</Label>
            <Input />
          </ContainerTextfield>
          <ContainerTextfield>
            <Label>Date</Label>
            <Input type="date" />
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
            <Button>Send</Button>
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
