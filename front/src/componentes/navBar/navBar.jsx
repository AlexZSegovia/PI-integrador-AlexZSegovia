import SearchBar from "../SearchBar/SearchBar";
import style from "./navBar.module.css"
import { Link, NavLink, useLocation} from "react-router-dom";
 const NavBar = ({onSearch})=> {
   const location=useLocation()
      if (location.pathname !=="/"  ){
         return (

       <div className={style.navBar}>
         <Link to="/Home"><button>Home</button></Link>
         <Link to="/Favorites"><button>Favorites</button></Link>

         <NavLink to="/About"><button>About</button></NavLink>
        <SearchBar onSearch={onSearch}/>
        <Link to="/"><button>logout</button></Link>


       </div>
    );}
 };
 export default NavBar