import { useState } from "react";
import { Link } from "react-router-dom";

function Search(){

    return (
        <div className="form-control m-3">
            <div className="font-medium  text-left tracking-wide" >
                <h2 className="text-5xl ">Bienvenido</h2>
                <p>Buscar Películas es muy fácil</p>
            </div>
         
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-[90%]  " />
        </div>
    )
   }
   
   export default Search;