import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Navigation from "../common/Navigation";
import NotFound from "../routes/NotFound";
import { Search } from "../routes/Search";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movie/:id" element={<Detail/>} />
        <Route path="search" element={<Search/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
