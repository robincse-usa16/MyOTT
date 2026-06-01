import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContentDetails from "./pages/ContentDetails";
import Player from "./pages/Player";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/:id" element={<ContentDetails />} />
        <Route path="/watch/:id" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
