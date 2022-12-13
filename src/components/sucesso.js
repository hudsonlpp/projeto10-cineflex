import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Success({ reservation, showtime }) {
console.log(showtime)
    return (
        <SuccessDiv>
            <div>
                Pedido feito com sucesso!
            </div>
            <div>
                <h1>Filme e sessão</h1>
                <p>{showtime.movie}</p>
                <p>{showtime.date} {showtime.hour}</p>
                <h1>Ingressos</h1>
                {reservation.ids.map((seat, index) => <p key={index}>Assento {seat}</p>)}
                <h1>Comprador</h1>
                <p>Nome: {reservation.name}</p>
                <p>CPF: {reservation.cpf}</p>
            </div>
            <Link to="/">
                <StyledButton width="225px" height="42px">Voltar para Home</StyledButton>
            </Link>
        </SuccessDiv>
    );
}

const SuccessDiv = styled.div`
    > div:first-child{
        width: 175px;
        height: 65px;
        font-size: 24px;
        font-weight: 700;
        color: #247a6b;
        text-align: center;
        margin: 120px auto 20px auto;
    }
    > div:nth-child(2){
        color: #293845;
        width: 100vw;
        padding: 0 30px;
        h1{
            font-weight: 700;
            font-size: 24px;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        p{
            font-size: 22px;
            line-height: 26px;
            margin-bottom: 5px;
        }
    }
    a{
        text-decoration: none;
    }
    button{
        margin: 50px auto;
    }
`;

export const StyledButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    color: #FFFFFF;
    background-color: #E8833A;
    border-radius: 3px;
    margin-right: 8px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    > a{
        color: inherit;
        text-decoration: none;
    }
`;