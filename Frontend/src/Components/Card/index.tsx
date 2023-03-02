import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container } from "./styles";

const CardTask = ({ name, description, date, user }) => {
  return (
    <Container>
      <CardContent>
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{user}</p>
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
