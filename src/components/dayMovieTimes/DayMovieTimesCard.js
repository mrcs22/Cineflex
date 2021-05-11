import Text from "../general/Text";
import MovieTime from "./MovieTime";
import List from "../general/FlexUl";

export default function MovieTimesCard({ date, day, movieTimes }) {
  return (
    <>
      <Text height="35px" fontSize="20px">
        {day} - {date}
      </Text>
      <List>
        {movieTimes.map(({ name, id }) => (
          <MovieTime key={id}>{name}</MovieTime>
        ))}
      </List>
    </>
  );
}
