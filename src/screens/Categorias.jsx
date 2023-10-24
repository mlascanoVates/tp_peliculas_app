function Categorias(){
    return <div>Categorias</div>
   }

export default Categorias;

/* import { useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import { useParams } from "react-router-dom";

function Categorias(){
    //se ejecuta en el montaje
    const[drinks, setDrinks]= useState([]);
    const{ idCategory } = useParams();

    //corre una vez que cargó la pagina, dps del return
    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${idCategory}`)
            .then((res)=> res.json())
            .then((data)=>setDrinks(data.drinks));

    }, [idCategory]);


//pasamos componente por prop
 return( <section>
    <h2 className="center">{idCategory.toUpperCase().replace('_',' ')}</h2>
        <ul className="flex flex-wrap gap-6"> 
            {drinks.length > 0 ?
             (drinks.slice(0, 20).map((drink)=> <DrinkCard key={drink.idDrink} drink={drink} />
            ))
            : (<p>Cargando...</p>)
            }
        </ul>
        </section>);
}

export default Categorias; */