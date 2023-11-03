import { useEffect, useState } from "react";
import PeliCard from '../components/PeliCard'


//idPeliculas=trending


function Tendencias() {
    const [films, setFilms] = useState([]);

    const [favorites, setFavorites] = useState([]);
        
   
    //accedemos al JSON y parseamos la info
    //si tenemos guardado los favoritos nos debería dar un array
    useEffect(()=>{
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
      storedFavorites && setFavorites(storedFavorites);
    },[])

  
/*     const {idPeliculas}  = useParams(); */
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          };
          
          fetch( `https://api.themoviedb.org/3/trending/movie/week?language=es&api_key=396a995f0dac33c26922c030cdb715e2`, options)
            .then(response => response.json())
            .then(data => setFilms(data.results))
    
      
    }, []);
   
    return (
    <dii >
      <div className="flex flex-wrap gap-6">
          {films.length > 0 ? (
            films.slice(0, 20).map(film => (
                <div className="carousel-item">
                    <PeliCard key={film.id}
                  film={film} favorites={favorites} setFavorites={setFavorites}/>
                     
                </div>      
          ))) : (
            <h2 className="center">
              <span className="loading loading-spinner loading-xl"></span>
            </h2>
          )}
      
        </div>
        </dii>
    

    );
  }
  
export default Tendencias; 