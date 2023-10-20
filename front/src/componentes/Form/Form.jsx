import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./Form.module.css"

const Form = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const [access, setAccess] = useState(false);

  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'unaPassword';

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email inválido";
    } else if (userData.email.length > 35) {
      newErrors.email = "El email no puede tener más de 35 caracteres";
    }

    if (!/\d/.test(userData.password)) {
      newErrors.password = "La contraseña debe contener al menos un número";
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      newErrors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    validate();
  }, [userData]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/Home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email}</p>
          )}
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
          {errors.password && (
            <p style={{ color: 'red' }}>{errors.password}</p>
          )}
        </div>
        <div className={style.but}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
