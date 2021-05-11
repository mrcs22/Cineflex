import { useEffect, useState } from "react";
import axios from "axios";
import List from "../general/FlexUl";
import MovieCard from "./MovieCard";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
    );

    promise.then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <List centered>
      {movies.map(({ posterURL, id }) => (
        <MovieCard key={id} imageSrc={posterURL} />
      ))}
    </List>
  );
}
