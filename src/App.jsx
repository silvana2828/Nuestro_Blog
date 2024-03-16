import { Header } from './components/header'
import { Noticias } from './components/noticias'
// import './App.css'

function App() {

  const id = ['1','2','3','4']

  return (
    <>
      <Header/>
      <div>
        <Noticias id_n={id}/>
      </div>
    </>
  )
}

export default App