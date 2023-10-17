import style from "./Card.module.css"
const Card = ({id, name, status, gender, species, origin, image, onClose}) => {
   return (
      <div className={style.card}>
         <div className={style.cardHeader}>
         <h2> {name}</h2>
         </div>
         <div className={style.cardImage}>
         <img src={image } alt={name} />
         </div>
         <div className={style.cardDescription}>
         <h2>Especie: {species}</h2>
         <h2>Status: {status}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         </div>
         <button onClick={onClose}>Cerrar</button>

      </div>
   );
};

export default Card;

