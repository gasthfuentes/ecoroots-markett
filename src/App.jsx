import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer text="Bienvenido a EcoRoots Market, selecciona tus productos favoritos!" />
    </div>
  );
}

export default App;

