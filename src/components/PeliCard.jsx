import { useState } from "react";
import { Link } from "react-router-dom";

//en el mapeo que renderice el componente por cada elemento que se crea
//https://developer.themoviedb.org/reference/movie-top-rated-list
function PeliCard(props){
    
    const [favorite,setFavorite]= useState(false);
    
 
    return  <div   div className=" card card-compact w-96 bg-base-100 shadow-xl">
              
                <div className="card-body">
                    <figure>
                        {props.film.backdrop_path && (
                        <img src={`https://image.tmdb.org/t/p/w500/${props.film.backdrop_path}`} alt="" />
                        )}
                    </figure> 
                    <p>Calificacion: {props.film.vote_average}</p>
                    <p>Review</p>
                    <p>{props.film.overview}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Detalles</button>
                        <button className="btn btn-primary" onClick={()=>setFavorite(!favorite)}> {favorite ? '❤': '🤍'}</button>

                    </div>
                </div>
            </div>
}

export default PeliCard; 