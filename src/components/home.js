import styled from "styled-components";
import { useEffect, useState } from "react";
import { Movie, MovieList, Title } from "./Home.styled";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("movies")
      .then(({ data }) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: Home.js:16 ~ useEffect ~ err", err);
      });
  }, []);

  return (
    <>
      <Title>
        <h2>Selecione o filme</h2>
      </Title>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/sessoes/${movie.id}`}>
                <img src={movie.posterURL} alt={movie.overview} />
              </Link>
            </Movie>
          );
        })}
      </MovieList>
    </>
  );
}

export const Title = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > h2 {
    font-weight: 400;
  }
`;

export const MovieList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Movie = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  img {
    height: 193px;
    background: white;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
`