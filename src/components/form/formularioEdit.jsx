import { useForm } from "react-hook-form"
import { useNoticiaContext, useCrearNoticiaContext } from "../../providers/noticiaProvider";
import { useParams } from "react-router-dom";


export const FormularioEdit = () => {

  const { id } = useParams();

  //uso use Form para simplificar la extraccion de datos
  const { register, handleSubmit } = useForm()

  //Valores del formulario 
  const noticias = useNoticiaContext()

  const noticiaInfo = noticias.find((noticia) => noticia.id == id)
  
  //extraigo la funcion 'guardarNoticia' de useCrearNoticiaContext
  const { editarNoticia, handleImage, handleContent } = useCrearNoticiaContext();

  //los register obtienen informacion y la almacena en
  //un objeto luego esta se la enviamos a 
  //guardarNoticia mediante el handleSubmit
   
  return (
    <form
      className="flex flex-col font-serif  w-[110vh] m-auto p-4 rounded-md mt-3 bg-jade-500/10"
      onSubmit={handleSubmit(editarNoticia)}
    >
      <h2 className="text-center text-3xl mb-2 mt-4">--Nuestro Blog--</h2>
      <p className="mb-3 text-xl">Ingresa tu Post</p>
      <input type="text" className="hidden" {...register('id')} defaultValue={noticiaInfo?.id}/>
      <label className="mb-1">Título:</label>
      <textarea
        type="text"
        {...register('titulo')}
        className="border-2 rounded-lg mb-3 resize-none p-1"
        placeholder="Ingresa el título de tu post"
        defaultValue={noticiaInfo?.titulo}
      ></textarea>
      <label className="mb-1 mt-3">Contenido:</label>
      <textarea
        className="border-b-2 resize-none p-1 rounded-lg mb-3"
        type="text"
        {...register('contenido')}
        id=""
        cols="20"
        rows="8"
        placeholder="Ingresa el contenido de tu post"
        defaultValue={noticiaInfo?.contenido}
      ></textarea>
      <div className="flex flex-col justify-between w-full">
        <input 
          type="file" 
          {...register('image')}
          onChange={(e) => handleImage(e)}
        />
        <input 
          type="file" 
          {...register('archivo')} 
          onChange={(e) => handleContent(e)}
        />
        <input 
          type="file" 
          {...register('audio')}
        />
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
