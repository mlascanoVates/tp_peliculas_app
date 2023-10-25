import { useState } from "react";
import { Link } from "react-router-dom";

//en el mapeo que renderice el componente por cada elemento que se crea

function PeliDetalle(props){
    
    const [favorite,setFavorite]= useState(false);

/* 
    const HandleFavorite= ()=>{
        setFavorite(!favorite)
    }
 */
    return  <div className="flex justify-center mb-20 ">
           
    <div  className=" card w-96 bg-base-200 shadow-xl">
            
            <figure>
                {props.film.backdrop_path && (
                <img src={`https://image.tmdb.org/t/p/w500/${props.film.backdrop_path}`} alt="" />
                )}
        
            </figure>
            <div className="card-body ">
                <h2 className="card-title justify-center ">{props.film.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div>
              
                    <p> {props.film.overview}</p>
                </div>
        
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={()=>setFavorite(!favorite)}>  {favorite ? '❤': '🤍'}</button>
                </div>
            </div>
        </div>

    </div> 
 
}

export default PeliDetalle;