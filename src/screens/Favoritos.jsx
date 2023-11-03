import { useEffect, useState } from 'react';
import PeliCard from '../components/PeliCard';

function Favoritos() {
    const [favFilm, setFavFilm] = useState([]);
    const [favorites, setFavorites] = useState([]);
  

    // LLAMADO A LA API POR CADA ELEMENTO GUARDADO EN EL FAVORITES DE LOCAL STORAGE
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          };

        if (storedFavorites.length > 0) {
            Promise.all(
                storedFavorites.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es&api_key=396a995f0dac33c26922c030cdb715e2`).then((res)=> res.json())
                )
            ) 
            .then((data) => {
                setFavFilm(data);
              })
              
             
               
               setFavorites(storedFavorites); 
        }
    }, [favorites]);

/*    // Función para quitar una peli de la lista de favoritos
   const removeFavorite = (peliId) => {
    const updatedFavorites = favorites.filter((id) => id !== peliId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavFilm(favFilm.filter((film) => film.id !== peliId));
}; */


    return (
        <div>
            <h2 className="text-center my-6">FAVORITES</h2>
            <ul className="flex justify-center items-center flex-wrap gap-6">
                {favFilm.length > 0 ?
                 (
                    favFilm.map((film) => (
                        <li>
                            
                             <PeliCard
                            key={film.id}
                            film={film}
                            favorites={favorites}
                            setFavorites={setFavorites}
                   /*          removeFavorite={removeFavorite} */
                        />
                        </li>
                       
                    ))
                ) 
                : (
                    <p>No hay películas guardadas</p>
                )}
            </ul>
        </div>
    );
}

export default Favoritos;