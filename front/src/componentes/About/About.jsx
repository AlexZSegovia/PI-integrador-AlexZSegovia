import { NavLink } from "react-router-dom"
import style from "./About.module.css"
const About=()=>{
    return(
        <div className={style.About}>
            <h3>Mi Carta</h3>
            <h1>Nombre:Alex Segovia</h1>
            <h1>origin:Heart</h1>
            <h1>Gender:Male</h1>
            <h1>Especie: Human</h1>
            <NavLink to="/Home"><button>Home</button></NavLink>

        </div>
        
    )
}
export default About