import { useEffect, useState } from "react";
import PeliCard from '../components/PeliCard'

function Populares() {
    const [films, setFilms] = useState([]);
  
    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          }
      };

      fetch('https://api.themoviedb.org/3/movie/popular?language=es&api_key=396a995f0dac33c26922c030cdb715e2')
        .then(response => response.json())
        .then(data => setFilms(data.results))
       
          
      
    }, []);
   

    return (
      <section>
        <ul className="flex flex-wrap gap-6">
          {films.length > 0 ? (
            films.slice(0, 20).map(film => (
              <li><PeliCard key={film.id}
              film={film}/></li>
            ))
          ) : (
            <h2 className="center">
              <span className="loading loading-spinner loading-xl"></span>
            </h2>
          )}
        </ul>
      </section>
    );
  }
  
export default Populares; 