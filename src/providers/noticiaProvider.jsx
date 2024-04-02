
import PropTypes from 'prop-types'
import { createContext, useState, useContext } from 'react'

//creo dos contextos
//el primero envia la informacion presente 
//en el objeto de noticias
const noticiasContext = createContext()

//el segundo se encarga de recibir la informacion del form
//y cambiar el estado de las noticias
const crearNoticiaContext = createContext()

//creamos dos custom hooks que utilicen nuestro contexto
export const useNoticiaContext = () => {
    return useContext(noticiasContext)
}
export const useCrearNoticiaContext = () => {
    return useContext(crearNoticiaContext)
}


//creamos un componente en el que los hijos 
//mendiante la prop {children} puedan acceder
//a los valores que este provee
export function NoticiaProvider({ children }) {

    const [id, setId] = useState(1);

    const ChangeId = () => {
        setId(id+1);
    }

    //creamos el estado de las noticias 
    //con una noticia inicial
    const [noticias, setNoticias] = useState([
        {
            id: 1,
            titulo: "Asalto",
            contenido: "Hola como estas soy David",
            image: "",
            audio: "",
            archivo: ""
        },
    ])

    //creamos la funcion guardar noticia que recibe 
    //una data la cual se obtiene mediante 'register'
    //del useForm
    const guardarNoticia = data => {
        ChangeId()
        const nuevaNoticia = {
            id: id,
            titulo: data.titulo,
            contenido: data.contenido,
            image: data.image,
            audio: data.audio,
            archivo: data.archivo
        }

        //agregamos la nueva noticia
        setNoticias([...noticias, nuevaNoticia])
    }


    //retornamos los contextos con su metodo provider
    //el primero provee las noticias 
    //el segundo provee la funcion para guardarlas
    return (
        <noticiasContext.Provider value={noticias}>
            <crearNoticiaContext.Provider value={guardarNoticia}>
                {children}
            </crearNoticiaContext.Provider>
        </noticiasContext.Provider>
    )
} 

NoticiaProvider.propTypes ={
    children: PropTypes.any
}