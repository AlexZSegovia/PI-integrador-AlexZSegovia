import './App.css'
import Cards from './componentes/cards/Cards';
import NavBar from './componentes/navBar/navBar';
import axios from "axios";
import  { useState } from "react";
import { Route, Routes }   from 'react-router-dom';
import Detail from './componentes/Detail/Detail';
import About from  "./componentes/About/About"
import Form from './componentes/Form/Form';
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
      
      <Route path="/Home" element={<Cards characters={characters} onClose={onClose}/>}/>      
    <Route path="/about" element={<About/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>
    <Route path="/" element={<Form/>}/>

    </Routes>
    </div>
  )
}

export default App
