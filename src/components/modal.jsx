import { useState } from "react";
import { Link } from "react-router-dom";
export function Modal({ estado, cambiarEstado }) {
  return (
    <>
      {estado && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
          <div className="bg-white p-5 rounded flex flex-col items-center gap-5 m-10 overflow-auto touch-auto shadow-lg shadow-indigo-500/40 w-[90%] h-[80%]">
            <div>
              <div>
                <div className="flex justify-end gap-5">
                  <Link to="/editar">
                    <button className="border-2 p-2 rounded-lg hover:border-jade-500">
                      Editar
                    </button>
                  </Link>
                  <button className="border-2 p-2 rounded-lg hover:border-red-600">
                    Borrar
                  </button>
                  <button
                    className="border-2 p-2 rounded-lg hover:bg-sky-600 hover:text-white"
                    onClick={() => {
                      cambiarEstado(false);
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center gap-3">
                <h1 className="text-3xl">Título de la noticia</h1>
                <img
                  className="w-[60vh] rounded-xl"
                  src="data:image/jpeg;base64,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"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus iure porro vitae asperiores, sequi facere cupiditate?
                  Saepe reprehenderit sapiente ipsum, nemo sunt adipisci aperiam
                  perferendis odit odio, exercitationem temporibus sint. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                  iure porro vitae asperiores, sequi facere cupiditate? Saepe
                  reprehenderit sapiente ipsum, nemo sunt adipisci aperiam
                  perferendis odit odio, exercitationem temporibus sint. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                  iure porro vitae asperiores, sequi facere cupiditate? Saepe
                  reprehenderit sapiente ipsum, nemo sunt adipisci aperiam
                  perferendis odit odio, exercitationem temporibus sint. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                  iure porro vitae asperiores, sequi facere cupiditate? Saepe
                  reprehenderit sapi temporibus sint. amet
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
