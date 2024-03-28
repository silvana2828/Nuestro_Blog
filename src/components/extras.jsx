import { noticias } from "./noticias.json";

export function Extras({ id }) {
  const noticia = noticias.find((noticia) => noticia.id == id);
  switch (id) {
    case 3:
      return (
        <>
          <img src={noticia.img} alt="" />
          <audio className=" -z-10" src={noticia.audio} controls></audio>
        </>
      );
      break;

    case 4:
      return (
        <a
          className=" text-gray-500 underline underline-offset-1 tracking-[1px] hover:text-jade-600"
          href={noticia.archive}
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
