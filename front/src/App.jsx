import './App.css'
import Cards from './componentes/cards/Cards';
import characters from './data';
import NavBar from './componentes/navBar/navBar';
function App() {


  return (
    <div >
      <NavBar/>
      <Cards characters={characters} 
        onClose={() => window.alert('Emulamos que se cierra la card')} />
    </div>
  )
}

export default App
