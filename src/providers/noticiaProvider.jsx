
import PropTypes from 'prop-types'
import { createContext, useState, useContext } from 'react'

import { useImageURL } from '../components/hooks/useImageURL'
import { useContentURL } from '../components/hooks/useContentURL.js'

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

    const { imageURL, handleImage } = useImageURL()
    const { typeContent, contenidoURL, handleContent} = useContentURL()

    const [id, setId] = useState(1);
    
    const ChangeId = () => {
        setId(id+1);
    }

    //creamos el estado de las noticias 
    //con una noticia inicial
    const [noticias, setNoticias] = useState([])

    //creamos la funcion guardar noticia que recibe 
    //una data la cual se obtiene mediante 'register'
    //del useForm
    const guardarNoticia = data => {
        ChangeId()
        const nuevaNoticia = {
            id: id,
            titulo: data.titulo,
            contenido: data.contenido,
            image: imageURL,
            audio: contenidoURL,
            type: typeContent,
            archivo: data.archivo
        }

        //agregamos la nueva noticia
        setNoticias([...noticias, nuevaNoticia])
        handleImage({ target: { files: [] } });
        handleContent({ target: { files: [] } });
    }

    console.log(noticias)

    //retornamos los contextos con su metodo provider
    //el primero provee las noticias 
    //el segundo provee la funcion para guardarlas
    return (
        <noticiasContext.Provider value={noticias}>
            <crearNoticiaContext.Provider value={{guardarNoticia, handleImage, handleContent}}>
                {children}
            </crearNoticiaContext.Provider>
        </noticiasContext.Provider>
    )
} 

NoticiaProvider.propTypes ={
    children: PropTypes.any
}