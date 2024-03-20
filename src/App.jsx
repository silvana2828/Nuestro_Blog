import { Header } from './components/header'
import { Noticias } from './components/noticias'
import { Formulario } from './components/formulario'

// import './App.css'
// const nombres = [
//   {
//     id: 1,
//     name: "Silvana",
//     apellido: "zufriaga",
//   },
//   {
//     id: 2,
//     name: "Alejandra",
//     apellido: "Zuluaga",
//   },
// ];
// const Nombres = nombres.map((nombre) => {
//   return (
//     <div key={nombre.id}>
//       <h2>{nombre.name}</h2>
//     </div>
//   );
// });
function App() {

  return (
    <>
      <Header/>
      {/* <div>
        <Noticias id_n={id}/>
      </div>
      {Nombres} */}
      <Formulario></Formulario>
    </>
  )
}

export default App