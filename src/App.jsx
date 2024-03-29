import { Header } from "./components/header";
import { Noticias } from "./components/noticias";
import { Formulario } from "./components/formulario";
import { Routes, Route } from "react-router-dom";
import { Modal } from "./components/modal";
import { useState } from "react";

export const noticiasN = [
  {
    id:1,
    titulo: "Asalto",
    contenido: "Hola como estas soy David",
    image: "",
    audio: "",
    archivo: ""
  },
  {
    id:2,
    titulo: "Sueño",
    contenido:"Tengo mucho sueño",
    image: "",
    audio: "",
    archivo: ""
  },
  {
    id:3,
    titulo: "Descansar",
    contenido: "Hola familia bella",
    image: "",
    audio: "",
    archivo: ""
  },
    {
    id:4,
    titulo: "Mañana no hay clase",
    contenido:"Por fortuna",
    image: "",
    audio: "",
    archivo: ""
  }
]

function App() {
  const [editNoticia, setEditNoticia] = useState(null)
  const [noticias, setNoticias] = useState(noticiasN)

  // Insertar noticias al blog
  const addNoticias = (noticia) => {
    setNoticias([
      ...noticias,
      noticia 
    ])
  }

  // Editar información  de la BD
  const editNoticias = (noticia) => {
    const newNoticias = noticias.map(not => not.id === noticia.id ? noticia : not)
    setNoticias(newNoticias)
    setEditNoticia(null)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Noticias noticias={noticias}/>}></Route>
        <Route path="/formulario" element={<Formulario addNoticias={addNoticias} />}></Route>
        <Route path="/editar" element={<Formulario editNoticia={editNoticia} editNoticias={editNoticias}/>}></Route>
        <Route path="/modal" element={<Modal setEditNoticia={setEditNoticia} elementos={noticias}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
