import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Navigation from "../components/common/Navigation";
import NotFound from "../routes/NotFound";
import Search from "../routes/Search";
import { Container } from "./style";
import Video from "routes/Detail/Videos";

function App() {
  return (
    <Container>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movie/:id" element={<Detail/>}>
            <Route path=":kind" element={<Video />} />
          </Route>
          <Route path="search" element={<Search/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
