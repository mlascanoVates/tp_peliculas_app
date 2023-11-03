import { useEffect, useState } from "react";
import PeliCard from "../components/PeliCard";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function Inicio(){

    const [films1, setFilms] = useState([]);
    const [favorites, setFavorites] = useState([]);
        
  
    //accedemos al JSON y parseamos la info
    //si tenemos guardado los favoritos nos debería dar un array
    useEffect(()=>{
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
      storedFavorites && setFavorites(storedFavorites);
    },[])

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

    const [films2, setFilms2] = useState([]);
  
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          };
           fetch('https://api.themoviedb.org/3/movie/top_rated?language=es&api_key=396a995f0dac33c26922c030cdb715e2', options)
            .then(response => response.json())
            .then(data => setFilms2(data.results))
    
      
    }, []);

    const [films3, setFilms3] = useState([]);

  
    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          }
      };

      fetch('https://api.themoviedb.org/3/movie/popular?language=es&api_key=396a995f0dac33c26922c030cdb715e2', options)
        .then(response => response.json())
        .then(data => setFilms3(data.results))
      
    }, []);


 
 return( <section>
    <h2 className="center"></h2>
        <div className="  text-left tracking-wide" >
    <h2 className="center  text-white-900 font-bold p-1 text-4xl pt-10 pl-10 pb-5"><Link to='/tendencias'>{`Tendencias >`} </Link></h2>
        </div>
        <dii className='w-screen	'>
          <div className="carousel carousel-center   w-screen	 p-4 bg-neutral rounded-box">
            {films1.length > 0 ? (
              films1.slice(0, 10).map(film => (
                  <div className="carousel-item">
                    <PeliCard key={film.id}
                    film={film} favorites={favorites} setFavorites={setFavorites}/>
                      
                  </div>    )))    
                : (
              <h2 className="center">
                <span className="loading loading-spinner loading-xl"></span>
              </h2> )
            }
      
          </div>
        </dii>
        <div className="  text-left tracking-wide" >
          <h2 className="center  text-white-900 font-bold p-1 text-4xl p-5 pt-10 pl-10"><Link to='/peliculas/top_rated'>{`Mejor Calificadas >`} </Link></h2>
        </div>
        <dii className='w-screen	'>
          <div className="carousel carousel-center   w-screen	 p-4 bg-neutral rounded-box">
            {films2.length > 0 ? (
              films2.slice(0, 10).map(film => (
                  <div className="carousel-item">
                    <PeliCard key={film.id}
                    film={film} favorites={favorites} setFavorites={setFavorites}/>
                      
                  </div>    )))    
                : (
              <h2 className="center">
                <span className="loading loading-spinner loading-xl"></span>
              </h2> )
            }
      
          </div>
        </dii>
        <div className="  text-left tracking-wide" >
          <h2 className="center  text-white-900 font-bold p-1 text-4xl p-5 pt-10 pl-10"><Link to='/peliculas/popular'>{`Populares >`} </Link></h2>
        </div>
        <div className='w-screen	'>
          <div className="carousel carousel-center   w-screen	 p-4 bg-neutral rounded-box">
            {films3.length > 0 ? (
              films3.slice(0, 10).map(film => (
                  <div className="carousel-item">
                    <PeliCard key={film.id}
                    film={film} favorites={favorites} setFavorites={setFavorites}/>
                      
                  </div>    )))    
                : (
              <h2 className="center">
                <span className="loading loading-spinner loading-xl"></span>
              </h2> )
            }
      
          </div>
        </div>
        </section>);
}

export default Inicio;