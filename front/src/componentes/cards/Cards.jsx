import Card from '../Card/Card';
import style from "./cards.module.css"

const Cards = ({characters})=> {
   return(
      <div className={style.container}>
         {
            characters.map(({id, name, status, species, gender, origin, image, onClose})=>{
               return  <Card
               key={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               image={image}
               origin={origin.name}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            })
         }

      </div>
   )
};

export default Cards;
