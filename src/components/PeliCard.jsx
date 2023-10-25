import { useState } from "react";
import { Link } from "react-router-dom";

//en el mapeo que renderice el componente por cada elemento que se crea
//https://developer.themoviedb.org/reference/movie-top-rated-list
function PeliCard(props){
    
    const [favorite,setFavorite]= useState(false);
    
    return  (<div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                {props.film.backdrop_path && (
                                    <img src={`https://image.tmdb.org/t/p/w500/${props.film.backdrop_path}`} alt="" />
                    )}
                </figure>
                <div className="card-body mt-40">
                    <h2 className="card-title justify-center">{props.film.title}</h2>
                    <p>Calificacion: {props.film.vote_average}</p>
                                    <p>id: {props.film.id}</p>
                    <div className="card-actions justify-center mt-5 ">
                                        <button className="btn btn-primary"><Link to={`/detalle/${props.film.id}`}>Detalles</Link></button>
                                        <button className="btn btn-primary" onClick={()=>setFavorite(!favorite)}> {favorite ? '❤': '🤍'}</button>
                    </div>
                </div>
            </div>
            )
}

export default PeliCard; 