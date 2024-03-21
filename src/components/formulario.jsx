import { Boton } from "./buttons/boton";
import { Botones } from "./botones";
import { object } from "prop-types";
export const Formulario = () => {

  const saveData = (e) => {
    const noticia = Object.fromEntries(new window.FormData(e.target));
    console.log({noticia})
    
  }

  return (
    <form className="flex flex-col font-serif  w-[110vh] m-auto p-4 rounded-md mt-3 bg-jade-500/10" onSubmit={saveData}>
      <h2 className="text-center text-3xl mb-2 mt-4">--Nuestro Blog--</h2>
      <p className="mb-3 text-xl">Ingresa tu Post</p>
      <label className="mb-1">Título:</label>
      <textarea
        className="border-2 rounded-lg mb-3 resize-none p-1"
        name="título"
        placeholder="Ingresa el título de tu post"
      ></textarea>
      <label className="mb-1 mt-3">Contenido:</label>
      <textarea
        className="border-b-2 resize-none p-1 rounded-lg mb-3"
        name="Contenido"
        id=""
        cols="20"
        rows="8"
        placeholder="Ingresa el contenido de tu post"
      ></textarea>
      <div className="flex justify-between w-full">
        <Botones>Imagen</Botones>
        <Botones>Audio</Botones>
        <Botones>Archivo</Botones>
      </div>
      <button className="bg-blue-600 hover:bg-blue-500 mt-4 p-3 rounded-lg text-white" type='submit'>
        Enviar
      </button>
    </form>
  );
};
