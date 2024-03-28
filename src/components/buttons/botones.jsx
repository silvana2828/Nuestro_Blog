import { Boton1 } from "./boton1";
export function Botones({ children, id }) {
  return (
    <div className="flex justify-center flex-col">
      <label>Ingrese un {children}:</label>
      <Boton1 type="file" id={id}>
        Subir {children}
      </Boton1>
    </div>
  );
}
