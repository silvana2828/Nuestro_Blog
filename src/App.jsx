import { Header } from "./components/header";
import { Noticias } from "./components/noticias";
import { Formulario } from "./components/form/formulario";
import { FormularioEdit } from "./components/form/formularioEdit";
import { Routes, Route } from "react-router-dom";
import { Modal } from "./components/modal";

import { NoticiaProvider } from "./providers/noticiaProvider";

function App() {
  // Insertar noticias al blog
  // const addNoticias = (noticia) => {
  //   setNoticias([
  //     ...noticias,
  //     noticia
  //   ])
  // }

  // Editar información  de la BD
  // const editNoticias = (noticia) => {
  //   const newNoticias = noticias.map(not => not.id === noticia.id ? noticia : not)
  //   setNoticias(newNoticias)
  //   setEditNoticia(null)
  // }

  return (
    <>
      <NoticiaProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Noticias />}></Route>
          <Route path="/formulario" element={<Formulario />}></Route>
          <Route path="/editar/:id" element={<FormularioEdit/>}></Route>
          <Route path="/modal" element={<Modal />}></Route>
        </Routes>
      </NoticiaProvider>
    </>
  );
}

export default App;
