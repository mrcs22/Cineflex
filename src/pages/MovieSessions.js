import Container from "../components/general/Container";
import Text from "../components/general/Text";
import DayMovieTimesCard from "../components/dayMovieTimes/DayMovieTimesCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Footer from "../components/footer";

export default function CinemaSession() {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`
    );

    promise.then((res) => {
      setMovieData(res.data);
    });
  }, [movieId]);

  if (movieData.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Container padding="23px" marginBottom>
        <Text height="110px" fontSize="24px" centered>
          Selecione o horário
        </Text>

        {movieData.days.map(({ weekday, date, showtimes, id }) => (
          <DayMovieTimesCard
            key={id}
            date={date}
            day={weekday}
            movieTimes={showtimes}
          />
        ))}
      </Container>
      <Footer title={movieData.title} imageSrc={movieData.posterURL} />
    </>
  );
}
