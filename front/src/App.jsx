import './App.css'
import Cards from './componentes/cards/Cards';
import NavBar from './componentes/navBar/navBar';
import axios from "axios";
import  { useState,useEffect } from "react";
import { Route, Routes ,useNavigate}   from 'react-router-dom';
import Detail from './componentes/Detail/Detail';
import About from  "./componentes/About/About"
import Form from './componentes/Form/Form';
import Favs from './componentes/favs/favs';
import style from "./App.css"


function App() {
  const [characters,setCharacters]=useState([])

  async function onSearch(id) {
    try {
      const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
      const { data } = response;
  
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert('No se encontró ningún personaje con este ID.');
      }
    } catch (error) {
      console.error('Hubo un error al buscar el personaje:', error.message);
      alert('Ocurrió un error al buscar el personaje.');
    }
  }
  
 
 const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  



  async function login(userData) {
      try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login'; // Corregir la URL
      const {data} = await axios.get(`${URL}?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
      } catch (error) {
        alert("¡No hay usuarios registrados!")
      }
   }


  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onClose = (id) => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((char) => char.id !== id)
    );
  };
  

  return (
    <div className={style.appstyle}>
      <NavBar onSearch={onSearch}/>
    <Routes>
      
    <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />
}/>      
    <Route path="/about" element={<About/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>
    <Route path="/" element={<Form login={login}/>}/>
  
    <Route path="/Favorites" element={<Favs/>}/>

    </Routes>
    </div>
  )
}

export default App
