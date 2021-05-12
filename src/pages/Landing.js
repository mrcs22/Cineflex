import Container from "../components/general/Container";
import MoviesList from "../components/MoviesList";
import Text from "../components/general/Text";

export default function Landing() {
  return (
    <Container>
      <Text height="110px" fontSize="24px" centered>
        Selecione o filme
      </Text>
      <MoviesList />
    </Container>
  );
}
