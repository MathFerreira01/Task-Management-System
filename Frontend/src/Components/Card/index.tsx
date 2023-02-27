import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container } from "./styles";

const CardTask = ({name, description}) => {
  return (
    <Container>
      <CardContent>
        <h2>{name}</h2>
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
