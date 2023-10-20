import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./Form.module.css"
import validation from "./validation"

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
  
  });

 
 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setErrors(validation({...userData,[name]: value}))
    setUserData({...userData,[name]: value});
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <h2>Inicia Sesión </h2>
      <form onSubmit={handleSubmit}>
        <div className={style.email}>
          <label>Email:</label>
          <input
            type="email"
            placeholder='Escribe aqui'
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
            {errors.e1 ? (<p className={style["error-text"]}>{errors.e1}</p>) : ( <p className={style["error-text"]}>{errors.e2}</p>)}
        </div>
        <div className={style.constraseña}>
          <label>Contraseña:</label>
          <input
            type="password"
            placeholder='Escribe aqui'
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
            {errors.p1 ? (<p className={style["error-text"]}>{errors.p1}</p>) : ( <p className={style["error-text"]}>{errors.p2}</p>)}
        </div>
        <div className={style.but}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
