import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Navigation from "../components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
