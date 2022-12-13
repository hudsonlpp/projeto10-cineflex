import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Title>Cineflex</Title>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 67px;
  box-sizing: border-box;
  background-color: #C3CFD9;
  color: #E8833A;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 14px;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 400;
`;