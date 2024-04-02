// import { noticias } from "./noticias.json";
import { useNoticiaContext } from "../providers/noticiaProvider";

export function Extras({ id }) {

  const noticias = useNoticiaContext();

  const noticia = noticias.find((noticia) => noticia.id == id);
  
  switch (id) {
    case 3:
      return (
        <>
          <img src={noticia.image} alt="" />
          <audio className=" -z-10" src={noticia.audio} controls></audio>
        </>
      );
      break;

    case 4:
      return (
        <a
          className=" text-gray-500 underline underline-offset-1 tracking-[1px] hover:text-jade-600"
          href={noticia.archivo}
        >
          Descárgame
        </a>
      );
      break;

    default:
      return console.log("Noticia ejercidas");
      break;
  }
}
