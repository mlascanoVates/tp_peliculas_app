import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar(){

    return (
        <div className="form-control m-3 p-10">
            <div className="font-medium  text-left tracking-wide" >
                <h2 className="text-5xl pb-10">Bienvenido</h2>
                <p></p>
            </div>
         
            <input type="text" placeholder="Buscar" className="input input-bordered w-24 md:w-[100%]  " />
        </div>
    )
   }
   
   export default SearchBar;