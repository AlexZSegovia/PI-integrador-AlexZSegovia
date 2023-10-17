import SearchBar from "../SearchBar/SearchBar";
import style from "./navBar.module.css"
 const NavBar = ()=> {
    return (
       <div className={style.nav}>
        <SearchBar/>
       </div>
    );
 };
 export default NavBar