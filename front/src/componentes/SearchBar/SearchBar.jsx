import style from "./SearchBar.module.css"
const SearchBar = ({onSearch})=> {
   return (
      <div className={style.searchBar}>
         <div className={style.searchInput}>
         <input type='search' /> 
      
         <button onClick={onSearch}>Agregar</button> 
         
</div>
      </div>
   );
};

export default SearchBar;
