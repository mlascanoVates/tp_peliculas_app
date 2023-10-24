function Inicio(){
    return <div>Inicio</div>
   }

export default Inicio;

/* import { useEffect, useState } from "react";
import PeliCard from "../components/PeliCard";

function Home(){
    //se ejecuta en el montaje
    const[drinks, setDrinks]=useState([]);

    //corre una vez que cargó la pagina, dps del return
    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then((res)=> res.json())
        .then((data)=>setDrinks(data.drinks));

    },[])


//pasamos componente por prop
 return( <section>
        <ul className="flex flex-wrap gap-6"> 
            {drinks.length > 0 ?
             (drinks.slice(0, 20).map(drink=> <DrinkCard key={drink.idDrink} drink={drink} />
            ))
            : (<h2 className="center"><span className="loading loading-spinner loading-xl"></span></h2>)
            }
        </ul>
        </section>);
}

export default Home; */