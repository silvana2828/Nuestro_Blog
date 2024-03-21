import { Boton } from "./buttons/boton";
export const Formulario = () => {
  return (
    <form className="flex flex-col font-sans  w-[95vh] m-auto p-4  bg-green-500/35 rounded-md mt-10">
      <h2 className="text-center text-3xl mb-4 mt-6">--Nuestro Blog--</h2>
      <p className="mb-3 text-xl">Ingresa tu Post</p>
      <label className="mb-1">Título:</label>
      <textarea
        className="border-2 rounded-lg mb-3 resize-none"
        name="título"
        placeholder="Ingresa el título de tu post"
      ></textarea>
      <label className="mb-1">Ingrese una imagen:</label>
      <Boton>Subir Imagen</Boton>
      <label className="mb-1 mt-3">Contenido:</label>
      <textarea
        className="border-b-2 resize-none border-b-blue-500 rounded-lg mb-3"
        name="Contenido"
        id=""
        cols="20"
        rows="8"
        placeholder="Ingresa el contenido de tu post"
      ></textarea>
      <label className="mb-1">Ingrese un audio:</label>
      <Boton>Subir audio</Boton>
      <button className="bg-blue-600 hover:bg-blue-500 mt-4 p-3 rounded-lg text-white">
        Enviar
      </button>
    </form>
  );
}