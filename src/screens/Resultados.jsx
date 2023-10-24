function Resultados(){
    return <div>Resultados</div>
   }

export default Resultados;

/* import { useEffect, useState } from "react";
import PeliCard from "../components/PeliCard";
import { useParams } from "react-router-dom";

//Resultado de búsqueda
//renderiza una green card
function Resultados(){
    //se ejecuta en el montaje
    const[drinks, setDrinks]= useState([]);
    const{ query } = useParams();

    //corre una vez que cargó la pagina, dps del return
    useEffect(()=>{
        //búsqueda por nombre
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
            .then((res)=> res.json())
            .then((data)=>setDrinks(data.drinks));

    }, [query]);


//pasamos componente por prop
 return( <section>
    <h2 className="center">{query.toUpperCase().replace('_',' ')}</h2>
        <ul className="flex flex-wrap gap-6"> 
            {drinks.length > 0 ?
             (drinks.slice(0, 20).map((drink)=> <DrinkCard key={drink.idDrink} drink={drink} />
            ))
            : (<p>Cargando...</p>)
            }
        </ul>
        </section>);
}

export default Resultados; */