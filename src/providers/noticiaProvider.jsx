import PropTypes from 'prop-types'
import { createContext, useState, useContext, useEffect } from 'react'
import { useImageURL } from '../components/useDates/useImageURL'
import { useContentURL } from '../components/useDates/useContentURL'
import { useAudioURL } from '../components/useDates/useAudioURL'
import { useNavigate } from 'react-router-dom'


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

    const { imageURL, handleImage } = useImageURL();
    const { contenidoURL, handleContent } = useContentURL();  
    const { audioURL, handleAudio } = useAudioURL();     

    const navigate = useNavigate()

    const [id, setId] = useState(1);

    const ChangeId = () => {
        setId(id+1);
    }

    //creamos el estado de las noticias 
    //con una noticia inicial
    // y se guarda en el localStorage
    const [noticias, setNoticias] = useState(() => {
        const saveNoticias = window.localStorage.getItem("Noticias")
        if (saveNoticias) {
            return JSON.parse(saveNoticias);
        }else{
            return []
        }
    })

    useEffect(() => {
        window.localStorage.setItem("Noticias", JSON.stringify(noticias))
    }, [noticias])  

    //creamos la funcion guardar noticia que recibe 
    //una data la cual se obtiene mediante 'register'
    //del useForm
    const guardarNoticia = data => {
        ChangeId()
        const nuevaNoticia = {
            id: Date.now(),
            titulo: data.titulo,
            contenido: data.contenido,
            image: imageURL,
            audio: audioURL,
            archivo: contenidoURL,
        }

        //agregamos la nueva noticia
        setNoticias([...noticias, nuevaNoticia])
        handleImage({ target: { files: []}});
        handleContent({ target: { files: []}});

        navigate('/')
    }


    // Creamos la función para editar la noticia 
    const editarNoticia = (data, id) => {
        const updateNoticias = noticias.map(newItem => {
            if (newItem.id == id) {
                return {
                    ...newItem,
                    id: Date.now,
                    titulo: data.titulo,
                    contenido: data.contenido,
                    image: !imageURL ? newItem.image : imageURL,
                    archivo: !contenidoURL ? newItem.archivo : contenidoURL,
                    audio: !audioURL ? newItem.audio : audioURL
                }
            } else {
                return newItem
            }
        })

        setNoticias(updateNoticias)
        localStorage.setItem('Noticias', JSON.stringify(updateNoticias))

        navigate('/')
    }

    // Creamos la función para eliminar las noticias 
    const deleteNoticias = (id) => {
        const isDelete = window.confirm("¿Deseas eliminar esta noticia?")

        if (isDelete) {
            const newNoticias = noticias.filter(el => el.id != id)
            setNoticias(newNoticias)
        }
    }


    //retornamos los contextos con su metodo provider
    //el primero provee las noticias 
    //el segundo provee la funcion para guardarlas
    return (
        <noticiasContext.Provider value={noticias}>
            <crearNoticiaContext.Provider value={{guardarNoticia, editarNoticia, handleImage, handleContent, handleAudio, deleteNoticias}}>
                {children}
            </crearNoticiaContext.Provider>
        </noticiasContext.Provider>
    )
} 

NoticiaProvider.propTypes ={
    children: PropTypes.any
}