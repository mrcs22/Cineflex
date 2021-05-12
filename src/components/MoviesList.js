import { useEffect, useState } from "react";
import axios from "axios";
import List from "./general/FlexUl";
import { Link } from "react-router-dom";
import MovieCard from "./general/MovieCard";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesAndUpdateState();
  }, []);

  return (
    <List centered>
      {movies.map(({ posterURL, id, title }) => {
        return (
          <Link key={id} to={`/filme/${id}`}>
            <li>
              <MovieCard
                height="209px"
                width="145px"
                imageSrc={posterURL}
                title={title}
                margin
              />
            </li>
          </Link>
        );
      })}
    </List>
  );

  function getMoviesAndUpdateState() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
    );

    promise.then((res) => {
      setMovies(res.data);
    });
  }
}