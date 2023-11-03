import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
  const[input, setInput]= useState('');
    return (
   

    <div className="flex justify-between navbar bg-base-100 bg-gradient-to-r from-blue-950 m-0 p-0  px-10" >
    <div className="max-w-min">
        
    <div className="dropdown  ">
        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Inicio</Link></li>
            <li>
            <a>Películas</a>
            <ul className="p-2 ">
                <li><Link to='/peliculas/popular'>Populares</Link></li>
                <li><Link to='/tendencias'>Tendencias</Link></li>
                <li><Link to='/peliculas/top_rated'>Mejor Calificadas</Link></li>
                <li><Link to='/peliculas/upcoming'>Próximos Lanzamientos</Link></li> 
                
            </ul>
            <a>Géneros</a>
            
            </li>
            <li><Link to='/favoritos'>Favoritos</Link></li>
        </ul>
    </div>

    <div className="w-40 w-{30%}">
        <Link to='/'><img src="../logo_pelis.png"/></Link>
    </div>
       
        
    </div>
        <div className="navbar-center hidden lg:flex  ">
            <ul className="menu menu-horizontal  text-2xl	 text-center ">
            <li className="font-extrabold 	"><Link to='/'>Inicio</Link></li>
            <li tabIndex={0}>
                <details>
                <summary>Películas</summary> 
                <ul className="p-2">
                <li><Link to='/peliculas/popular'>Populares</Link></li>
                <li><Link to='/tendencias'>Tendencias</Link></li>
                <li><Link to='/peliculas/top_rated'>Mejor Calificadas</Link></li>
                <li><Link to='/peliculas/upcoming'>Lanzamientos</Link></li> 
                
                </ul>
                </details>
            </li>
            <li tabIndex={0}>
                <details>
                <summary>Géneros</summary>
                
                </details>
            </li>
            <li><Link to='/favoritos'>Favoritos</Link></li>
            </ul>
        </div>
        <div className="navbar-end w-[20%]">
        <input type="text" placeholder="🔎 Buscar" className="input input-bordered w-24 md:w-[50%]  " />
        </div>
    </div>
    )
   }
   
   export default Navbar;