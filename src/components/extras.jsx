import { noticias } from "./noticias.json"

export function Extras({ id }){
    const noticia = noticias.find((noticia) => noticia.id == id)
    switch (id) {
        case 3:
            return(
                <>
                    <img src={noticia.img} alt="" />
                    <audio src={noticia.audio} controls></audio>
                </>
            )
        break;

        case 4:
            return(
                <a href={noticia.archive}>Descárgame</a>
            )
        break;

        default:
            return(
                console.log("Noticia ejercidas")
            )
        break;
    }
}