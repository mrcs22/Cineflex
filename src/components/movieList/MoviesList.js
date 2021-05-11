import styled from "styled-components";
import MovieCard from "./MovieCard";

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
`;

export default function MoviesList() {
  return (
    <List>
      {/* Just for now*/}
      <MovieCard imageSrc="https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/488_poster_0.jpg?itok=lJBujj0k" />
      <MovieCard imageSrc="https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/488_poster_0.jpg?itok=lJBujj0k" />{" "}
      <MovieCard imageSrc="https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/488_poster_0.jpg?itok=lJBujj0k" />{" "}
      <MovieCard imageSrc="https://www.cineplayers.com/sites/default/files/styles/poster/public/posters/488_poster_0.jpg?itok=lJBujj0k" />{" "}
      {/* Just for now*/}
    </List>
  );
}
