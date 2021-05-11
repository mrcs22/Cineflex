import List from "../general/FlexUl";
import MovieCard from "./MovieCard";

export default function MoviesList() {
  return (
    <List centered>
      {/* Just for now*/}
      <MovieCard imageSrc="https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/488_poster_0.jpg?itok=lJBujj0k" />
      <MovieCard imageSrc="https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/488_poster_0.jpg?itok=lJBujj0k" />{" "}
      <MovieCard imageSrc="https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/488_poster_0.jpg?itok=lJBujj0k" />{" "}
      <MovieCard imageSrc="https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/488_poster_0.jpg?itok=lJBujj0k" />{" "}
      {/* Just for now*/}
    </List>
  );
}
