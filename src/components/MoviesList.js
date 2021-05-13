import { useEffect, useState } from "react";
import axios from "axios";
import List from "./general/FlexUl";
import { Link } from "react-router-dom";

import MovieCard from "./general/MovieCard";
import styled from "styled-components";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesAndUpdateState();
  }, []);

  return (
    <List centered>
      {movies.map(({ posterURL, id, title }) => {
        return (
          <li key={id}>
            <Link to={`/filme/${id}`}>
              <HoverableMovieCard
                tallness="209px"
                thickness="145px"
                apart
                hoverable
              >
                <img src={posterURL} alt={title} />
              </HoverableMovieCard>
            </Link>
          </li>
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

const HoverableMovieCard = styled(MovieCard)`
  &:hover {
    height: 214px;
    width: 149px;

    margin: 6px 13px;
    margin-top: 0;
  }
`;
