import { Extras } from "./extras";
import { Boton } from "./buttons/boton";
import { useState } from "react";

export function Noticias({ noticias }) {

  const noticiaP = noticias[0];

  const [noticiaE, setNoticiaE] = useState(noticias)
  
  return (
    <>
      {
        noticias.length === 0 
        ? <div><h1>No hay noticias en el momento</h1></div> 
        : <div className="flex justify-between mx-6 mt-6 font-serif gap-5 snap-none">
            <div
              className=" border-2 w-[150vh] max-h-[80vh] bg-white shadow-lg shadow-indigo-500/40 p-5  overflow-hidden text-ellipsis"
              key={noticiaP.id}
            >
              <h1 className="text-4xl capitalize text-center mb-3">
                {noticiaP.titulo}
              </h1>
              <img className="float-right w-[30vh] rounded-lg" src={noticiaP.image} alt="" />
              <p className="max-h-[50vh] overflow-hidden">{noticiaP.contenido}</p>
              <Boton noticias={noticiaP.id}>Ver más</Boton>
            </div>
            <div className="w-[150vh] flex flex-col gap-5  border-2 bg-white shadow-lg shadow-indigo-500/40 p-5">
              {noticias.map((noticia) => {
                if (noticia.id != 1) {
                  return (
                    <div key={noticia.id}>
                      <h1 className="text-2xl capitalize">{noticia.titulo}</h1>
                      <p className="max-h-[7vh] overflow-hidden">{noticia.contenido}</p>
                      <Extras id={noticia.id} />
                      <div className="flex justify-end">
                        <Boton noticia={noticia.id}>Ver más</Boton>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
      }
    </>
  );
}
