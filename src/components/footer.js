import styled from "styled-components";

export default function Footer(props) {
  console.log(props)
  return (
    <Container>
      <img src={props.img} alt="Imagem" />
      <p>
        {props.title}
        {props.showtime ? (
          <>
            <br />
            {props.showtime}
          </>
        ) : null}
      </p>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 117px;
  box-sizing: border-box;
  background-color: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: start;
  border-top: 1px solid #9eadba;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 14px;
  > img {
    background-color: white;
    padding: 8px;
    box-sizing: border-box;
    height: 100%;
    margin-right: 14px;
  }
  > p {
    font-size: 26px;
    text-transform: capitalize;
    color: #293845;
  }
`;