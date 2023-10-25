import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeliDetalle from "../components/PeliDetalle";



function Detalle(){
    const [film, setFilm]= useState([]);
    //lo uso dentro del fetch
    const {idDetallePeli}  = useParams();
   
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              }
          };

          
        fetch(`https://api.themoviedb.org/3/movie/${idDetallePeli}?language=es&api_key=396a995f0dac33c26922c030cdb715e2`)
        .then((res)=>res.json())
        .then((data)=>setFilm(data));

    },[]);

    return <div>
       {film>0 ?  
       <PeliDetalle film={film[0]}/>
        : <span className="loading loading-spinner loading-xl"></span>}
    </div>;
   }

export default Detalle;