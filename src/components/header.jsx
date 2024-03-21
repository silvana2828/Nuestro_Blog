import { Link } from "react-router-dom";


export function Header(){
    return (
      <>
        <nav className="flex justify-between p-2 items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4">
          <Link to='/' className="text-white text-2xl cursor-pointer hover:tracking-widest hover:text-havelock-blue-200">
            Nuestro Blog
          </Link>
          <Link to='/formulario' className="border-2 p-2 rounded-lg text-white text-xl hover:bg-indigo-500/80">
            Crear
          </Link>
        </nav>
      </>
    );
}