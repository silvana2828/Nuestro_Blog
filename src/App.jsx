import { Header } from "./components/header";
import { Noticias } from "./components/noticias";
import { Formulario } from "./components/formulario";
import { Routes, Route } from "react-router-dom";
import { Modal } from "./components/modal";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Noticias />}></Route>
        <Route path="/formulario" element={<Formulario />}></Route>
        <Route path="/editar" element={<Formulario />}></Route>
        <Route path="/modal" element={<Modal/>}></Route>
      </Routes>
    </>
  );
}

export default App;
