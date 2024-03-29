import { Boton } from "./buttons/boton";
import { Botones } from "./buttons/botones";
import { object } from "prop-types";
import { useEffect, useState } from "react"; 
export const Formulario = ({ addNoticias, editNoticia, editNoticias }) => {

  const [formData, setFormData]=useState({
    id: null,
    titulo: '',
    contenido: '',
    image: '',
    audio: null,
    archive: null
  })

  useEffect(() => {
    if (editNoticia !== null){
      setFormData(editNoticia)
    }else{
      setFormData({
        id: null,
        titulo: '',
        contenido: '',
        image: '',
        audio: null,
        archive: null
      })
    }
  }, [editNoticia])

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = ()=>{
    setFormData({
      ...formData,
      [e.target.name]: reader.result
    });
    }
    
    if (file){
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(formData.titulo !== '' && formData.contenido !== ''){
      if(editNoticia !== null){
        editNoticias(formData)
      }else{
        formData.id = Date.now()
        addNoticias(formData)
        setFormData({
          id: null,
          titulo: '',
          contenido: '',
          image: null,
          audio: null,
          archive: null
        })
      }
    }else{
      alert("No se ha ingresado el titulo y/o el contenido");
    }
  }

  return (
    <form
      className="flex flex-col font-serif  w-[110vh] m-auto p-4 rounded-md mt-3 bg-jade-500/10"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-3xl mb-2 mt-4">--Nuestro Blog--</h2>
      <p className="mb-3 text-xl">Ingresa tu Post</p>
      <label className="mb-1">Título:</label>
      <textarea
        className="border-2 rounded-lg mb-3 resize-none p-1"
        name="titulo"
        placeholder="Ingresa el título de tu post" 
        onChange={handleChange}
      ></textarea>
      <label className="mb-1 mt-3">Contenido:</label>
      <textarea
        className="border-b-2 resize-none p-1 rounded-lg mb-3"
        name="contenido"
        id="contenido"
        cols="20"
        rows="8"
        placeholder="Ingresa el contenido de tu post"
        onChange={handleChange}
      ></textarea>
      <div className="flex justify-between w-full">
        <Botones id="image" name="image" handleFileChange={handleFileChange}>Imagen</Botones>
        <Botones id="audio" name="audio" handleFileChange={handleFileChange}>Audio</Botones>
        <Botones id="archive" name="archive" handleFileChange={handleFileChange}>Archivo</Botones>
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
