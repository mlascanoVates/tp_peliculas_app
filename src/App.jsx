import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from './screens/Inicio'
import Categorias from './screens/Categorias'
import Favoritos from './screens/Favoritos'
import Detalle from './screens/Detalle'
import Resultados from './screens/Resultados'
import NotFound from './screens/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Search from './components/Search'

function App() {

  return (
   
  
    <BrowserRouter>

      <Navbar/>
      <Search/>
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/categorias/:idCategoria' element={<Categorias/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>
        <Route path='/detalle/:idDetallePeli' element={<Detalle/>}/>
        <Route path='/resultados/:query' element={<Resultados/>}/>     parametro que extraigo 
        <Route path='*' element={<NotFound/>}/> 

      </Routes>

      <Footer/>
    </BrowserRouter> 
  )
}

export default App
