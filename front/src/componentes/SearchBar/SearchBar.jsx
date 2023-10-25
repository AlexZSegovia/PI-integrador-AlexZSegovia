import { useState } from "react";
import style from "./SearchBar.module.css"
const SearchBar = ({onSearch})=> {
   const [id,setId]=useState("")
   const handleChange=(event)=>{
      setId(event.target.value)
   }
   if (location.pathname !=="/Favorites"  ){
   return (
      <div className={style.searchBar}>
         <input type='search' value={id} onChange={handleChange}/> 
         <button onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
};
};
export default SearchBar;
