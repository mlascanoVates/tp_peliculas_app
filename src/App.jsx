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
import SearchBar from './components/SearchBar'
import Tendencias from './screens/Tendencias'

function App() {

  return (
   
  
    <BrowserRouter>

      <Navbar/>
      <SearchBar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/categorias/:idCategoria' element={<Categorias/>}/>
        <Route path='/peliculas/tendencias' element={<Tendencias/>}/>
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
