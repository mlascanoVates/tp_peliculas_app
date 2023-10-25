import { useState } from "react";
import { Link } from "react-router-dom";

//en el mapeo que renderice el componente por cada elemento que se crea
//https://developer.themoviedb.org/reference/movie-top-rated-list
function PeliCard(props){
    
    const [favorite,setFavorite]= useState(false);
    
    return  <div className=" card w-96 bg-base-100 shadow-xl">
              
              
                <figure>
                    {props.film.backdrop_path && (
                    <img src={`https://image.tmdb.org/t/p/w500/${props.film.backdrop_path}`} alt="" />
                    )}
                </figure> 
                <div className="card-body   p-5   ">
                  
                    <h2 className="font-bold mb-3">{props.film.title}</h2>
                    <p>Calificacion: {props.film.vote_average}</p>
                    <p>id: {props.film.id}</p>
                 {/*    <p>{props.film.overview}</p> */}
                    <div className="card-actions justify-center mt-5 ">
                        <button className="btn btn-primary"><Link to={`/detalle/${props.film.id}`}>Detalles</Link></button>
                        <button className="btn btn-primary" onClick={()=>setFavorite(!favorite)}> {favorite ? '❤': '🤍'}</button>

                    </div>
                </div>
            </div>
}

export default PeliCard; 