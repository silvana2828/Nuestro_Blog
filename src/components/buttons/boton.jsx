export function Boton({children}) {
  return (
    <label className="border-solid w-[20vh] text-center border-2 py-[6px] border-cyan-400 inline-block ">
      <input type="file" className="hidden"/>
      {children}
    </label>
  )
}