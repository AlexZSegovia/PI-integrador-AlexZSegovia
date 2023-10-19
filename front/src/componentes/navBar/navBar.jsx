import SearchBar from "../SearchBar/SearchBar";
import style from "./navBar.module.css"
import { Link, NavLink} from "react-router-dom";
 const NavBar = ({onSearch})=> {
    return (
       <div className={style.navBar}>
         <Link to="/"><button>Home</button></Link>
         
         <NavLink to="/About"><button>About</button></NavLink>
        <SearchBar onSearch={onSearch}/>
         
       </div>
    );
 };
 export default NavBar