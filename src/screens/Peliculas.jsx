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
    const{ id } = useParams();


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      };

    //MODIFICar ruta
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=396a995f0dac33c26922c030cdb715e2`)
            .then((res)=> res.json())
            .then((data)=>setFilms(data.resourses));

    }, [id]);


//pasamos componente por prop
 return( <section>
    <h2 className="center">{idFilms.toUpperCase().replace('_',' ')}</h2>
        <ul className="flex flex-wrap gap-6"> 
            {films.length > 0 ?
             (films.slice(0, 20).map((film)=> <PeliCard key={film.id} film={film} />
            ))
            : (<p>Cargando...</p>)
            }
        </ul>
        </section>);
}

export default Peliculas;