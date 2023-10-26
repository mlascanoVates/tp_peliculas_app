import { useEffect, useState } from "react";
import PeliCard from '../components/PeliCard'
/* 
function Inicio(){
    //se ejecuta en el montaje
    const[films, setFilms]=useState([]);


  
      
  
    //corre una vez que cargó la pagina, dps del return
 
    
    useEffect(()=>{
        //endpoint GENEROS DE PELICULAS
      //  fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=396a995f0dac33c26922c030cdb715e2')
     

    

                const options = {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTZhOTk1ZjBkYWMzM2MyNjkyMmMwMzBjZGI3MTVlMiIsInN1YiI6IjY1MzUwYjU4OTFmMGVhMDBjNDIyYzdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5CEiK4SwqD-xrfm6I_127TWmDb-4liUYTlJTbQ7Bzbo'
                    }
                  };
                  
                  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
                    .then(response => response.json())
                    .then((data) =>setFilms(data))
                    
           
    },[])

{/* <li key={film.id}>{film.name}
              <img src={film.file_path} alt="" />
              </li>))
 

//pasamos componente por prop
 return( <section>
        <ul className="flex flex-wrap gap-6"> 
        {films.length > 0 ?
             (films.map(films=> <li key={films.id}>{films.original_title}</li>
            ))
            : (<h2 className="center"><span className="loading loading-spinner loading-xl"></span></h2>)
            }
        </ul>
        </section>);
}
 */
function Tendencias() {
    const [films, setFilms] = useState([]);
  
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          };
          
          fetch('https://api.themoviedb.org/3/trending/movie/week?language=es&api_key=396a995f0dac33c26922c030cdb715e2', options)
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
                  film={film}/>
                     
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