import { useSelector , useDispatch} from "react-redux"
import style from "./Favs.module.css";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../redux/action";
import { useState } from "react";
const Favs=()=>{
    const myFavorites=useSelector((state)=>state.myFavorites)
    const dispatch=useDispatch();
    const[aux, setAux]=useState(false);
const handlechange=(event)=>{
    if(event.target.name==="filter"){
        dispatch(filterCards(event.target.value));
    }else{
        dispatch(orderCards(event.target.value))
        setAux(true);
    }
}

    
    return(
        <div >
            <div className={style.selectors}>
            <select name="order" onChange={handlechange}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            <select name="filter"onChange={handlechange}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
            </select>
            </div>
            <div className={style.cartitas}>

            {myFavorites.map(({id, name, status, gender, species, origin, image})=>{
                return(
                <Card 
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
                origin={origin.name}
              />)})
            }
                 </div>

        </div>
    )
};
export default Favs;