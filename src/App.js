import "./App.css";
import Header from "./Header";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fin from "./paginas/fin";
import Acerca from "./paginas/acerca";

function App() {
  const hinat =
    "https://w0.peakpx.com/wallpaper/633/579/HD-wallpaper-hinata-anime-haikyu-haikyuu.jpg";

    


  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="/fin" element={<Fin />} />

        </Routes>
      </BrowserRouter>

      <h1 className="h1">Mi pagina web de presentacion</h1>

      <div className="imagenp">
        <img src={hinat} alt="imagen" height="1040px" width="900px"/>
      </div>
    </div>

    
  );
}

export default App;
