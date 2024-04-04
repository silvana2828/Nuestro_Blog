import { useState } from "react";

export const useContentURL = () => {
    const [contenido, setContenido] = useState(null)
    const [typeContent, setTypeContent] = useState(null)
    const [contenidoURL, setContenidoURL] = useState(null)

    const handleContent = (e) => {
        const newContenidoA = e.target.files[0]
        setContenido(newContenidoA)
    }

    if(contenido) {
        const renderContenidoA = new FileReader();
        renderContenidoA.onload = () => {
            const contenidoURL = renderContenidoA.result
            setTypeContent(contenido.type)
            setContenidoURL(contenidoURL)
        }
        renderContenidoA.readAsDataURL(contenido)
    }

    console.log("Archivo Renderizado")

    return { contenidoURL, typeContent, handleContent }
}