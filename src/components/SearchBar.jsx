import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar(){
    const[input, setInput]= useState('');
    return (
        <div className="form-control m-3 p-10">
            <div className="font-medium  text-left tracking-wide" >
                <h2 className="text-5xl pb-10">Bienvenido</h2>
                <p></p>
            </div>
         
             
            <form onSubmit={e=>e.preventDefault()}   className="input input-bordered bg-gradient-to-r from-indigo-900 w-24 md:w-[90%] border-solid" >
            <input onChange={(e)=>setInput(e.target.value)} 
            type="text" placeholder="Buscar" 
            className=' bg-transparent w-5/6 '/>
            <button className=" w-1/6   bg-transparent  h-10">
              <Link to={`/results/${input}`}>🔎</Link>
            </button>
        
          </form>
        </div>
    )
   }
   
   export default SearchBar;