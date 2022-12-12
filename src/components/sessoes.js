import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, TimeBox, Title } from "./Sessions.styled";
import Footer from "../../components/Footer/Footer";

export default function Sessions() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`movies/${id}/showtimes`)
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: Sessions.js:18 ~ useEffect ~ err", err);
      });
  }, []);

  return (
    <>
      <Container>
        <Title>
          <h2>Selecione o horário</h2>
        </Title>
        {movie.days?.map((day) => {
          return (
            <TimeBox key={day.id}>
              <p>
                {day.weekday} - {day.date}
              </p>
              {day.showtimes?.map((showtime) => {
                return (
                  <Link to={`/assentos/${showtime.id}`}>
                    <button>{showtime.name}</button>
                  </Link>
                );
              })}
            </TimeBox>
          );
        })}
      </Container>
      <Footer img={movie.posterURL} title={movie.title} />
    </>
  );
}

export const Container = styled.div`
  padding: 0 20px;
`;

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

export const TimeBox = styled.div`
  p {
    font-size: 20px;
    font-weight: 400;
    width: 100%;
  }
  button {
    background: #e8833a;
    border-radius: 3px;
    color: white;
    padding: 10px 15px;
    margin-bottom: 20px;
    border: none;
    margin-right: 15px;
  }
`;