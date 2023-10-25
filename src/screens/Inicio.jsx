import { useEffect, useState } from "react";
import PeliCard from "../components/PeliCard";
import { useParams } from "react-router-dom";
import MejorCalificada from "./MejorCalificada";
import Tendencias from "./Tendencias";
import Populares from "./Populares";
function Inicio(){
    //se ejecuta en el montaje
  /*   const[films, setFilms]= useState([]);
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
 */

//pasamos componente por prop
 return( <section>
    <h2 className="center"></h2>
        <h2 className="center bg-gray-300 text-gray-900 font-bold p-1 ">TENDENCIAS</h2>
        <div >
            <Tendencias/>
        </div>
        <h2 className="center bg-gray-300 text-gray-900 font-bold p-1">MEJOR CALIFICADOS</h2>
        <div>

            <MejorCalificada/>
        </div>
        <h2 className="center bg-gray-300 text-gray-900 font-bold p-1">POPULARES</h2>
        <div>
            <Populares/>
        </div>
        </section>);
}

export default Inicio;