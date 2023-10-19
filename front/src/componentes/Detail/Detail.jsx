import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-alexzsegovia`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div className={style.detailcard}>
      <div className={style.detailcontent}>
        <div className={style.detailtext}>
          <h1>Nombre: {character.name}</h1>
          <h1>Status: {character.status}</h1>
          <h1>Especie: {character.species}</h1>
          <h1>Genero: {character.gender}</h1>
          <h1>Tipo: {character.type ? character.type : "Desconocido"}</h1>
          <h1>Origen: {character.origin && character.origin.name}</h1>
          <h1>Ubicación: {character.location && character.location.name}</h1>
        </div>
        <div className={style.detailimage}>
          <img src={character.image} alt={character.name} />
        </div>
      </div>
      <Link to="/">
        <button>back</button>
      </Link>
    </div>
  );
};

export default Detail;