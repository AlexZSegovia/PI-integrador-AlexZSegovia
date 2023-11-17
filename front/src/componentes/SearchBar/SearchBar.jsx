import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   const getRandomId = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      setId(randomId.toString());
      onSearch(randomId.toString());
   };

   const handleAddClick = () => {
      onSearch(id);
      setId("");
   };

   const handleRandomClick = () => {
      getRandomId();
      setId(""); 
   };

   if (location.pathname !== "/Favorites") {
      return (
         <div className={style.searchBar}>
            <button onClick={handleRandomClick}>Random</button>

            <input type='search' value={id} onChange={handleChange}/>
            <button onClick={handleAddClick}>Agregar</button>
         </div>
      );
   }
};

export default SearchBar;

