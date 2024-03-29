import { Boton1 } from "./boton1";
export function Botones({ children, name, handleFileChange }) {
  return (
    <div className="flex justify-center flex-col">
      <label>Ingrese un {children}:</label>
      <Boton1  name={name} handleFileChange={handleFileChange}>
        Subir {children}
      </Boton1>
    </div>
  );
}
