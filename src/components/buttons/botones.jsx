import { Boton } from "./boton";
export function Botones({ children }) {
  return (
    <div className="flex justify-center flex-col">
      <label>Ingrese un {children}:</label>
      <Boton type="file" id={id}>Subir {children}</Boton>
    </div>
  );
}
