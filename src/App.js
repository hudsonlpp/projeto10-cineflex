import styled from "styled-components";
import { GlobalStyle } from "./components/GlobalStyles"
import Success from "./components/sucesso";
import Seats from "./components/assentos";
import Sessions from "./components/sessoes";
import Home from "./components/home";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sessoes/:id" element={<Sessions />}></Route>
      <Route path="/assentos/:id" element={<Seats />}></Route>
      <Route path="/sucesso" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export const Body = styled.div`
  margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: white;
    padding-top: 67px;
    height: 100vh;
`;