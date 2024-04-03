import { useState } from "react";

export const useContentURL = () => {
    const [contenido, setContenido] = useState(null)
    const [typeContent, setTypeContent] = useState(null)
    const [contenidoURL, setContenidoUrl] = useState(null)

    const handleContent = (e) => {
        const newContenidoA = e.target.files[0]
        setContenido(newContenidoA)
    }

    if (contenido) {
        const renderContenidoA = new FileReader();
        renderContenidoA.onload = () => {
            const contenidoUrl = renderContenidoA.result
            setTypeContent(contenido.type)
            setContenidoUrl(contenidoUrl)
        }
        renderContenidoA.readAsDataURL(contenido)
    }

    console.log(contenido)

    return { contenidoURL, typeContent, handleContent }

}