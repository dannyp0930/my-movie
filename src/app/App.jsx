import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Navigation from "../components/common/Navigation";
import NotFound from "../routes/NotFound";
import { Search } from "../routes/Search";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  color: white;
`

function App() {
  return (
    <Container>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movie/:id" element={<Detail/>} />
          <Route path="search" element={<Search/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
