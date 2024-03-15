import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import IncioSesion from './Componentes/inicioSesion';
import Lista from './Componentes/lista';


function App() {
  return (
    <div>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IncioSesion />} />
          <Route path="/carros" element={<Lista />} />
        </Routes>
      </BrowserRouter>
   </div>
    </div>
  );
}

export default App;
