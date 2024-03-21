import { noticias } from './noticias.json';
import { Extras } from './extras';


export function Noticias(){
  const noticiaP = noticias[0]
  return(
    <div className='flex'>
      <div key={noticiaP.id}>
        <h1>{noticiaP.titule}</h1>
        <img src={noticiaP.img} alt="" />
        <p>{noticiaP.content}</p>
        <button>Ver más</button>
      </div>
      <div>
        {
          noticias.map(noticia => {
            if(noticia.id != 1){
              return(
                <div key={noticia.id}>
                  <h1>{noticia.titule}</h1>
                  <p>{noticia.content}</p>
                  <Extras id={noticia.id}/>
                  <button>Ver más</button>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}
