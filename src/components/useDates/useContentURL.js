import { useState } from "react";

export const useContentURL = () => {
    const [contenido, setContenido] = useState(null)
    const [typeContent, setTypeContent] = useState(null)
    const [contenidoURL, setContenidoURL] = useState(null)

    const handleContent = (e) => {
        const newContenido = e.target.files[0]
        setContenido(newContenido)
    }

    if(contenido) {
        const renderContenido = new FileReader();
        renderContenido.onload = () => {
            const contenidoURL = renderContenido.result
            setTypeContent(contenido.type)
            setContenidoURL(contenidoURL)
        }
        renderContenido.readAsDataURL(contenido)
    }

    console.log("Archivo Renderizado")

    return { contenidoURL, typeContent, handleContent }
}