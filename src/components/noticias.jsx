import { Extras } from "./extras";
import { Boton } from "./buttons/boton";
import { useNoticiaContext } from "../providers/noticiaProvider";

export function Noticias() {

  //extraemos las noticas del useNoticiaContext
  const noticias = useNoticiaContext()


  //validamos si hay noticias 
  //para mostrarla en la modal teniendo en cuenta la extructura que tienes
  //primero le pasamos el id de la noticia al boton mediante props
  //luego la recuperamos en el componente boton
  
  return (
    <>
      {noticias.length === 0 && <div className="flex flex-col w-[100%] h-[20vh] justify-center text-center   items-center text-lg"><h1 className=" text-2xl font-serif">No hay noticias en el momento</h1></div>}
      {
        noticias.length >= 1 &&
        noticias?.slice(0, 1).map((noticia) => (
          <div key={noticia.id} className="flex justify-between mx-6 mt-6 font-serif gap-5 snap-none">
            <div
              className=" border-2 w-[150vh] max-h-[80vh] bg-white shadow-lg shadow-indigo-500/40 p-5  overflow-hidden text-ellipsis"
              key={noticia.id}
            >
              <h1 className="text-3xl uppercase text-center mb-3">
                {noticia.titulo}
              </h1>
              <img className="float-right w-[30vh] rounded-lg" src={noticia.image} alt="" />
              <p className="max-h-[50vh] overflow-hidden">{noticia.contenido}</p>
              <Boton noticia={noticia.id}>Ver más</Boton>
            </div>
            <div className="w-[150vh] flex flex-col gap-5  border-2 bg-white shadow-lg shadow-indigo-500/40 p-5">
              {noticias.slice(1).map((noticia) => {
                if (noticia.id != 1) {
                  const indice = noticias.indexOf(noticia);
                  return (
                    <div key={noticia.id}>
                      <h1 className="text-2xl capitalize">{noticia.titulo}</h1>
                      <p className="max-h-[7vh] overflow-hidden">{noticia.contenido}</p>
                      <Extras id={noticia.id} indice={indice} />
                      <div className="flex justify-end">
                        <Boton noticia={noticia.id}>Ver más</Boton>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))

      }
    </>
  );
}
