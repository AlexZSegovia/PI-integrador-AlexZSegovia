import './App.css'
import Card from './componentes/Card';
import Cards from './componentes/Cards';
import SearchBar from './componentes/SearchBar';
import characters, {Rick} from './data';

function App() {


  return (
    <div>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
      <Card
        id={Rick.id}
        name={Rick.name}
        status={Rick.status}
        species={Rick.species}
        gender={Rick.gender}
        origin={Rick.origin.name}
        image={Rick.image}
        onClose={() => window.alert('Emulamos que se cierra la card')} />
    </div>
  )
}

export default App
