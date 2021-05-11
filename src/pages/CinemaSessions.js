import Container from "../components/Container";
import Text from "../components/general/Text";
import DayMovieTimesCard from "../components/dayMovieTimes/DayMovieTimesCard";

export default function CinemaSession() {
  return (
    <Container padding="23px">
      <Text height="110px" fontSize="24px" centered>
        Selecione o horário
      </Text>

      {sessionsDay.map(({ date, day, movieTimes }) => (
        <DayMovieTimesCard date={date} day={day} movieTimes={movieTimes} />
      ))}
    </Container>
  );
}

const sessionsDay = [
  {
    date: "24/06/2021",
    day: "Quinta-feira",
    movieTimes: ["15:00", "19:00"],
  },
  {
    date: "25/06/2021",
    day: "Sexta-feira",
    movieTimes: ["15:00", "19:00"],
  },
  {
    date: "26/06/2021",
    day: "Sábado",
    movieTimes: ["15:00", "17:00", "19:00", "21:00", "23:00"],
  },
];
