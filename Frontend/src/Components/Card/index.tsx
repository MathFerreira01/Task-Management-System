import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container } from "./styles";
import task from "../interface/ITask";

const CardTask = ({ id, name, description, date, userId, users }: task) => {
  return (
    <Container>
      <CardContent>
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{users.username}</p>
        <p>{users.email}</p>
        <p>{description}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Container>
  );
};

export default CardTask;
