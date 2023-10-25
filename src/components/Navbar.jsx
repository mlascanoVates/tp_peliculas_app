import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
  const[input, setInput]= useState('');
    return (
      /*   <div className="navbar bg-base-100 ">
        <div className="flex-1 ">
          DRINKS APP
        </div>

        <ul className=" fex gap-4 justify-center">
          <li><Link to='/'>Principal</Link></li>
          <li><Link to='/categorias'>Categorias</Link></li>
          <li><Link to='/favorites'>Favoritos</Link></li>
        </ul>

        <div className="flex-none gap-2">
          <form onSubmit={e=>e.preventDefault()} className="flex">
            <input onChange={(e)=>setInput(e.target.value)} 
            type="text" placeholder="Search" 
            className="input input-bordered w-24 md:w-auto" />
            <button className="text-[30px]">
              <Link to={`/results/${input}`}>🔎</Link>
            </button>
            {/* queremos que tmb traiga la query 
            La info que ingresa el usuario la guardamos en un ESTADO
            manejamos el envio de informacion con lupa, prevenimos refresco automático
            modificamos el estado ONCHANGE cada vez que va ingresando un dato se cambia un estado
            
          </form>
         {/*  <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" />
              </div>
            </label>
             <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul> 
          </div> 
        </div>
      </div> */


    <div className="flex  navbar bg-base-100 bg-gray-900 m-0 p-0 order-{order}  " >
    <div className="flex-1 ">
        
    <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Inicio</Link></li>
            <li>
            <a>Películas</a>
            <ul className="p-2">
                <li><Link to='/peliculas/'>Estrenos</Link></li>
                <li><Link to='/peliculas/populares'>Populares</Link></li>
                <li><Link to='/peliculas/tendencias'>Tendencias</Link></li>
                <li><Link to='/peliculas/mejor_calificadas'>Mejor Calificadas</Link></li>
                
            </ul>
            <a>Géneros</a>
            <ul className="p-2">
                <li>Comedria</li>
                <li>Drama</li>
                <li>Suspenso</li>
            </ul>
            </li>
            <li><Link to='/favoritos'>Favoritos</Link></li>
        </ul>
    </div>

    <div className="w-40 w-{30%}">
        <Link to='/'><img src="../logo_pelis.png"/></Link>
    </div>
       
        
    </div>
        <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">
            <li className="font-extrabold"><Link to='/'>Inicio</Link></li>
            <li tabIndex={0}>
                <details>
                <summary>Películas</summary>
                <ul className="p-2">
                <li><Link to='/peliculas/'>Estrenos</Link></li>
                <li><Link to='/peliculas/populares'>Populares</Link></li>
                <li><Link to='/peliculas/tendencias'>Tendencias</Link></li>
                <li><Link to='/peliculas/mejor_calificadas'>Mejor Calificadas</Link></li>
                </ul>
                </details>
            </li>
            <li tabIndex={0}>
                <details>
                <summary>Géneros</summary>
                <ul className="p-2">
                    <li>Comedia</li>
                    <li>Drama</li>
                    <li>Suspenso</li>
                </ul>
                </details>
            </li>
            <li><Link to='/favoritos'>Favoritos</Link></li>
            </ul>
        </div>
        <div className="navbar-end w-[30%]">
        <input type="text" placeholder="🔎 Buscar" className="input input-bordered w-24 md:w-[50%]  " />
        </div>
    </div>
    )
   }
   
   export default Navbar;