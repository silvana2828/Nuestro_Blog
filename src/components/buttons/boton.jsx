import { useState } from "react";
import { Modal } from "../modal";
export function Boton({ children, type, id }) {
   const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <>
      <label className="border-solid w-[20vh] text-center border-2 py-[2px] border-cyan-400 inline-block cursor-pointer rounded-lg hover:text-white hover:bg-blue-500">
        <input
          type={type}
          className="hidden"
          id={id}
          onClick={() => cambiarEstadoModal1(!estadoModal1)}
        />
        {children}
      </label>
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}></Modal>
    </>
  );
}
