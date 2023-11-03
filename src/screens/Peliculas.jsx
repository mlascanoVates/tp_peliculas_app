//Estrenos
//Peliculas
//Tendencias
//Más vistas


import { useEffect, useState } from "react";
import PeliCard from "../components/PeliCard";
import { useParams } from "react-router-dom";

function Peliculas(){
    //se ejecuta en el montaje
    const[films, setFilms]= useState([]);
    const{ idPeliculas } = useParams();

    const [favorites, setFavorites] = useState([]);
        
   
    //accedemos al JSON y parseamos la info
    //si tenemos guardado los favoritos nos debería dar un array
    useEffect(()=>{
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
      storedFavorites && setFavorites(storedFavorites);
    },[])

/* 
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      }; */

    //MODIFICar ruta
    useEffect(()=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        };

        fetch(`https://api.themoviedb.org/3/movie/${idPeliculas}?language=es&api_key=396a995f0dac33c26922c030cdb715e2`, options)
            .then((res)=> res.json())
            .then((data)=>setFilms(data.results));

    }, [idPeliculas]);

      //forma de recuperar favoritos
   /*  const [favorites, setFavorites] = useState([]);

    //localstorage guarda la info como JSON
    useEffect(()=>{
      const  storedFavorites=Json.parse(localStorage.getItem('favorites'));
      storedFavorites && setFavorites(storedFavorites)
    },[]);
 */


//pasamos componente por prop
 return (
  <section>
    <ul className="flex flex-wrap gap-6">
      {films.length > 0 ? (
        films.slice(0, 20).map(film => (
          <li><PeliCard key={film.id}
          film={film} favorites={favorites} setFavorites={setFavorites}/></li>
        ))
      ) : (
        <h2 className="center">
          <span className="loading loading-spinner loading-xl"></span>
        </h2>
      )}
    </ul>
  </section>
);
 /* ( <section>
    
        <ul className="flex flex-wrap gap-6"> 
            {films.length > 0 ?
             (films.slice(0, 20).map((film)=> <li><PeliCard key={film.id} film={film} /></li>
            ))
            : (<p>Cargando...</p>)
            }
        </ul>
        </section>); */
}

export default Peliculas;