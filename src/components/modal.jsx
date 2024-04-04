import { Link } from "react-router-dom";
import { useCrearNoticiaContext, useNoticiaContext } from "../providers/noticiaProvider";

export function Modal({ estado, cambiarEstado, noticiaSeleccionada}) {

  //en noticia seleccionada se encuentra el id de la noticia 
  const noticias = useNoticiaContext()

  const { deleteNoticias } = useCrearNoticiaContext();

  const noticiaInfo = noticias.find((noticia) => noticia.id == noticiaSeleccionada)
  console.log(noticiaInfo)
  
  return (
    <>
      {estado && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
          <div className="bg-white p-5 rounded flex flex-col items-center gap-5 m-10 overflow-auto touch-auto shadow-lg shadow-indigo-500/40 w-[90%] h-[80%]">

                <div className="flex justify-end gap-5 w-[90%]">
                  <Link to={`/editar/${noticiaInfo.id}`}>
                    <button 
                      className="border-2 p-2 rounded-lg hover:border-jade-500"
                    >
                      Editar
                    </button>
                  </Link>
                  <button 
                    className="border-2 p-2 rounded-lg hover:border-red-600"
                    onClick= {() => deleteNoticias(noticiaInfo.id)}
                  >
                    Borrar
                  </button>
                  <button
                    className="border-2 p-2 rounded-lg hover:bg-sky-600 hover:text-white" onClick={() => {
                      cambiarEstado(false);
                    }}
                  >
                    Cancelar
                  </button>
                </div>

              {/* </div> */}
              <div className="flex flex-col justify-center items-center gap-3 w-[85%] break-words">
                {/* <h1 className="text-6xl"></h1> */}

                <img
                  className="w-[50vh] rounded-xl"
                  src={noticiaInfo.image}
                />

                <p className=" text-4xl uppercase">
                  {noticiaInfo.titulo}
                </p>
                <p className=" w-full">
                  {noticiaInfo.contenido}
                </p>
                <audio src={noticiaInfo.audio} controls></audio>
                <a href={noticiaInfo.archivo} className=" hover:text-blue-600 hover:underline">Contenido Descargable</a>
              </div>
            {/* </div> */}

          </div>
        </div>
      )}
    </>
  );
}