import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/action";
import { useState, useEffect } from "react";

const Card = ({ id, name, status, gender, species, origin, image, onClose }) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const location = useLocation(); // Obtiene la ruta actual

  const handleFavorite = () => {
    isFav ? dispatch(removeFav(id)) : dispatch(addFav({ id, name, status, gender, species, origin, image, onClose }));
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      
      {location.pathname !== "/Favorites" && (
        <button className={style.cardButton} onClick={() => onClose(id)}>
          x
        </button>
      )}
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


