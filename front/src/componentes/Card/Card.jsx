import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, status, gender, species, origin, image, onClose }) => {
  return (
    <div className={style.card}>
      <button className={style.cardButton} onClick={() => onClose(id)}>
        x
      </button>
      <Link to={`/detail/${id}`} className={style.cardLink}>
        <div className={style.cardHeader}>
          <h2>{name}</h2>
        </div>
        <div className={style.cardImage}>
          <img src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
};

export default Card;

