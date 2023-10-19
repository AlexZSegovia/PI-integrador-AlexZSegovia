import './App.css'
import Cards from './componentes/cards/Cards';
import NavBar from './componentes/navBar/navBar';
import axios from "axios";
import  { useState } from "react";
import { Route, Routes }   from 'react-router-dom';
import Detail from './componentes/Detail/Detail';
import About from  "./componentes/About/About"
function App() {
  const [characters,setCharacters]=useState([])
  function onSearch(id) {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-alexzsegovia`).then(
       ({ data }) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
       }
    );
 }
 const onClose = (id) => {
  setCharacters(
    characters.filter((char) => char.id !== Number(id))
    
  );
};
 
  return (
    <div>
      <NavBar onSearch={onSearch}/>
    <Routes>
      <Route path="/" element={<Cards characters={characters} onClose={onClose}/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>

    </Routes>
    </div>
  )
}

export default App
