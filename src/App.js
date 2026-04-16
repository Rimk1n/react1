import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drinks from "./components/drinks";
import DrinkPage from "./components/DrinkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drinks />} />
        <Route path="/drinks/:id" element={<DrinkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
