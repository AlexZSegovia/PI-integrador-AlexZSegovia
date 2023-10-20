export default (data) => {
    let errors = {};
  
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.e1 = "Email inválido";
    }
    if (data.email.length > 35) {
      errors.e2 = "El email no puede tener más de 35 caracteres";
    }
  
    if (!/\d/.test(data.password)) {
      errors.p1 = "La contraseña debe contener al menos un número";
    }
    if (data.password.length < 6 || data.password.length > 10) {
      errors.p2 = "La contraseña debe tener entre 6 y 10 caracteres";
    }
  
    return errors; // Añade esta línea para que la función devuelva los errores.
  };