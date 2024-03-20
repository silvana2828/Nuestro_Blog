

export function Noticias({ id_n }) {
  id_n.forEach(() => {
    if (id_n == "1") {
      return (
        <div>
          <h1>Titulo Noticia Uno</h1>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
            omnis odit porro nemo mollitia adipisci repudiandae fugit a quos
            minus esse, aperiam earum temporibus totam.
          </p>
          <button>Ver mas</button>
        </div>
      );
    } else if (id_n == "2") {
      return (
        <div>
          <h1>Titulo Noticia Dos</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            cupiditate fugiat, laudantium repellendus ex explicabo eos illum
            fugit inventore velit. Similique vitae voluptate nemo nulla.
          </p>
          <button>Ver mas</button>
        </div>
      );
    } else if (id_n == "3") {
      return (
        <div>
          <h1>Titulo Noticia Tres</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            doloremque molestiae, nulla illo perferendis quidem iste earum totam
            soluta veniam consequatur, ea cumque maxime id?
          </p>
          <audio src="" controls></audio>
          <button>Ver mas</button>
        </div>
      );
    } else if (id_n == "4") {
      return (
        <div>
          <h1>Titulo Noticia Cuatro</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto id
            asperiores aperiam! Quod, odit nemo reiciendis libero cum sunt. Et
            voluptatem quasi in rerum quam!
          </p>
          <a href="">Recurso Descargable</a>
        </div>
      );
    }
  });
}