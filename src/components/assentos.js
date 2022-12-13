import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./footer";
import Seat from "./assento";

export default function Seats( {reservation, setReservation, showtime, setShowtime} ) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    axios
      .get(`showtimes/${id}/seats`)
      .then(({ data }) => {
        setShowtime(data);
      })
      .catch((err) => {
      });
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    setReservation({
      ids: [selectedSeats],
      name: name,
      cpf: cpf
    })
    axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", reservation)
        .then((response)=>{
          console.log(response)
            navigate("/sucesso");
            setLoading(false);
        })
        .catch((error)=>{
          console.log(error)
            setLoading(false);
            navigate("/error");
        });
}

  return (
    <>
      <Container>
        <Title>
          <h2>Selecione o(s) assento(s)</h2>
        </Title>
        <SeatsContainer>
          {showtime.seats?.map((seat, i) => {
            return (
              <Seat
                key={seat.id}
                index={i}
                seat={seat}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            );
          })}
        </SeatsContainer>
        <Labels>
          <Label>
            <div className="selected"></div>
            <p>Selecionado</p>
          </Label>
          <Label>
            <div></div>
            <p>Disponível</p>
          </Label>
          <Label>
            <div className="unavailable"></div>
            <p>Indisponível</p>
          </Label>
        </Labels>
        <form action="" method="GET" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup>
            <label htmlFor="name">Nome do comprador:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..." required/>
          </InputGroup>

          <InputGroup>
            <label htmlFor="name">CPF do comprador:</label>
            <input type="text" onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF..." required/>
          </InputGroup>

          <button type="submit">Reservar assento(s)</button>
        </form>
      </Container>
      <Footer
        img={showtime.movie?.posterURL}
        title={showtime.movie?.title}
        showtime={`${showtime.day?.weekday} - ${showtime.name}`}
      />
    </>
  );
}

export const Container = styled.div`
padding: 0 20px;
form {
  margin-top: 40px;
}
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

export const SeatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Labels = styled.div`
  display: flex;
  padding: 0 20px;
`;

export const Label = styled.div`
  flex: 3;
  text-align: center;
  > div {
    background-color: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    margin: auto;
    box-sizing: border-box;
    height: 25px;
    width: 25px;
    padding: 0;
    font-size: 11px;
    &.unavailable {
      background-color: #fbe192;
      border-color: #f7c52b;
    }
    &.selected {
      background-color: #1aae9e;
      border-color: #0e7d71;
    }
  }
  > p {
    font-size: 13px;
    font-weight: 400;
  }
`;

export const InputGroup = styled.div`
`;