import Container from "../components/Container";
import MoviesList from "../components/movieList/MoviesList";
import Text from "../components/Text";

export default function Landing() {
  return (
    <Container>
      <Text height="110px" fontSize="24px" alignment="center">
        Selecione o filme
      </Text>
      <MoviesList />
    </Container>
  );
}
