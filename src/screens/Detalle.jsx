function Detalle(){
    return <div>Detalle</div>
   }

export default Detalle;

/* import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";


function Detail(){
    const [trago, setTrago]= useState([]);
    //lo uso dentro del fetch
    const {idDetail}  = useParams();
   

    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDetail}`)
        .then((res)=>res.json())
        .then((data)=>setTrago(data.drinks));

    },[]);

    return <div>
       {trago.length>0 ?  
       <CardDetail drink={trago[0]}/>
        : <span className="loading loading-spinner loading-xl"></span>}
    </div>;
   }

export default Detail; */