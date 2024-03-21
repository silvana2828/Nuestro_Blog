export function Boton({children, type}) {
  return (
    <label className="border-solid w-[20vh] text-center border-2 py-[6px] border-cyan-400 inline-block cursor-pointer rounded-lg hover:text-white hover:bg-blue-500">
      <input type={type} className="hidden"/>
      {children}
    </label>
  )
}