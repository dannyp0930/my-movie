import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Navigation from "../common/Navigation";
import NotFound from "../routes/NotFound";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movie/:id" element={<Detail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
