import { useForm } from "react-hook-form"
import { useCrearNoticiaContext } from "../../providers/noticiaProvider";
import { useNavigate } from "react-router-dom";


export const Formulario = () => {

  //uso use Form para simplificar la extraccion de datos
  const { register, handleSubmit } = useForm()
  
  //extraigo la funcion 'guardarNoticia' de useCrearNoticiaContext
  const { guardarNoticia, handleImage, handleContent, handleAudio } = useCrearNoticiaContext();

  //los register obtienen informacion y la almacena en
  //un objeto luego esta se la enviamos a 
  //guardarNoticia mediante el handleSubmit

  const navigate = useNavigate();
   
  return (
    <form
      className="flex flex-col font-serif  w-[110vh] m-auto p-4 rounded-md mt-3 bg-jade-500/10"
      onSubmit={handleSubmit(guardarNoticia)}
    >
      <h2 className="text-center text-3xl mb-2 mt-4 text-blue-700 font-bold">
        --Nuestro Blog--
      </h2>
      <p className="mb-3 text-xl">Ingresa tu Post</p>
      <label className="mb-1">Título:</label>
      <textarea
        type="text"
        {...register("titulo")}
        className="border-2 rounded-lg mb-3 resize-none p-1"
        placeholder="Ingresa el título de tu post"
      ></textarea>
      <label className="mb-1 mt-3">Contenido:</label>
      <textarea
        className="border-b-2 resize-none p-1 rounded-lg mb-3"
        type="text"
        {...register("contenido")}
        id=""
        cols="20"
        rows="8"
        placeholder="Ingresa el contenido de tu post"
      ></textarea>
      <div className="flex justify-between w-full p-3">

        {/* <Botones id="image">Imagen</Botones>
        <Botones id="audio">Audio</Botones>
        <Botones id="archivo">Archivo</Botones> */}
        <label className=" cursor-pointer bg-slate-300 rounded-lg p-2 hover:bg-blue-500 hover:text-white">

          Ingrese una imagen
          <input
            type="file"
            className=" hidden"
            {...register("image")}
            onChange={(e) => handleImage(e)}
          />
        </label>
        <label className=" cursor-pointer bg-slate-300 rounded-lg p-2 hover:bg-blue-500 hover:text-white">
          Ingrese un archivo
          <input
            type="file"
            className=" hidden"
            {...register("archivo")}
            onChange={(e) => handleContent(e)}
          />
        </label>
        <label className=" cursor-pointer bg-slate-300 rounded-lg p-2 hover:bg-blue-500 hover:text-white">
          Ingrese un audio
          <input type="file" className=" hidden" {...register("audio")} />
        </label>
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-500 mt-4 p-3 rounded-lg text-white"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};
