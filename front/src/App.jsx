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
const EMAIL = 'ale@gmail.com';
const PASSWORD = 'unapass1';

function App() {
  const [characters,setCharacters]=useState([])
  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
       ({ data }) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
       }
    );
 }
 const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/Home');
    }
  };
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

 const onClose = (id) => {
  setCharacters(
    characters.filter((char) => char.id !== Number(id))
    
  );
};

  return (
    <div>
      <NavBar onSearch={onSearch}/>
      
    <Routes>
      
    <Route path="/Home" element={<Cards characters={characters} onClose={onClose}/>}/>      
    <Route path="/about" element={<About/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>
    <Route path="/" element={<Form login={login}/>}/>
  
    <Route path="/Favorites" element={<Favs/>}/>

    </Routes>
    </div>
  )
}

export default App
