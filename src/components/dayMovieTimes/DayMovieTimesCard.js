import Text from "../general/Text";
import MovieTime from "./MovieTime";
import List from "../general/FlexUl";
import { Link } from "react-router-dom";

export default function MovieTimesCard({ date, day, movieTimes }) {
  return (
    <>
      <Text tallness="35px" fontSize="20px">
        {day} - {date}
      </Text>
      <List>
        {movieTimes.map(({ name, id }) => (
          <Link key={id} to={`/sessao/${id}`}>
            <MovieTime>{name}</MovieTime>
          </Link>
        ))}
      </List>
    </>
  );
}
