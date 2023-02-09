import Header from "../../Components/Header";
import { Container, Text, Title, Subtitle, Wrapper, MenuLink } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Text>Welcome to my project</Text>
        <Title>Task Manager</Title>
        <Subtitle>Login or create an account to access the project</Subtitle>
        <Wrapper>
          <MenuLink to="/register">Create an Account</MenuLink>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
