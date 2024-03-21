import { noticias } from './noticias.json';
import { Extras } from './extras';
import { Boton } from './buttons/boton';

export function Noticias(){
  const noticiaP = noticias[0]
  return (
    <div className="flex justify-between border-blue-500 border-2 mx-4 bg-jade-500/85 mt-4">
      <div key={noticiaP.id}>
        <h1>{noticiaP.titule}</h1>
        <img src={noticiaP.img} alt="" />
        <p className=" first-line:uppercase first-line:tracking-widest first-leter:font-bold first-letter:float-left first-letter:text-7xl first-letter:text-slate-500">
          {noticiaP.content}
        </p>
        <Boton>Ver más</Boton>
      </div>
      <div className="bg-green-100">
        {noticias.map((noticia) => {
          if (noticia.id != 1) {
            return (
              <div key={noticia.id}>
                <h1>{noticia.titule}</h1>
                <p>{noticia.content}</p>
                <Extras id={noticia.id} />
                <Boton>Ver más</Boton>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
