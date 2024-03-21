import { Boton } from "./buttons/boton";
export function Botones({ children }) {
  return (
    <div className="flex justify-center flex-col">
      <label>Ingrese un {children}:</label>
      <Boton type="file">Subir {children}</Boton>
    </div>
  );
}
