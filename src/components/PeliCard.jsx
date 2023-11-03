import { useState } from "react";
import { Link } from "react-router-dom";

//en el mapeo que renderice el componente por cada elemento que se crea
//https://developer.themoviedb.org/reference/movie-top-rated-list
function PeliCard(props){

    const [favorite,setFavorite]= useState(false);

    const handleFavorite = () => {
        const updatedFavorites = props.favorites.includes(props.film.id)
            ? props.favorites.filter((id) => id !== props.film.id)
            : [...props.favorites, props.film.id];

        props.setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        // FUNCIÓN QUE SE UTILIZA SÓLO EN LA SCREEN FAVORITES PARA REMOVER EL TRAGO
      /*   if (props.favorites.includes(props.film.id)) {
            props.removeFavorite(props.film.id);
        } */

        setFavorite(!favorite);
    };

    
    return  (<div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                {props.film.backdrop_path && (
                                    <img src={`https://image.tmdb.org/t/p/w500/${props.film.backdrop_path}`} alt="" />
                    )}
                </figure>
                <div className="card-body mt-40">
                    <h2 className="card-title justify-center">{props.film.title}</h2>
                    <p>Calificacion: {props.film.vote_average}</p>
                               
                    <div className="card-actions justify-center mt-5 ">
                                        <button className="btn btn-primary"><Link to={`/detalle/${props.film.id}`}>Detalles</Link></button>
                                        <button className="btn btn-primary" onClick={handleFavorite}> {props.favorites.includes(props.film.id) ? '❤' :<img width="20" height="20" src="https://img.icons8.com/emoji/48/yellow-heart.png" alt="yellow-heart"/>   }</button>
                    </div>
                </div>
            </div>
            )
}

export default PeliCard; 