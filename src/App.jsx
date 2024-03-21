import { Header } from './components/header'
import { Noticias } from './components/noticias'
import { Formulario } from './components/formulario'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Noticias/>}></Route>
        <Route path="/formulario" element={<Formulario/>}></Route>
      </Routes>
    </>
  )
}

export default App