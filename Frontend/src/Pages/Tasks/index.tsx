import CardTask from "../../Components/Card";
import Header from "../../Components/Header";
import { Container } from "./styles";

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
  ];
  return (
    <>
      <Header />
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
