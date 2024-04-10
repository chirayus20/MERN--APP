import "./App.css";
import Navber from "./components/Navber";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navber />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/all" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
