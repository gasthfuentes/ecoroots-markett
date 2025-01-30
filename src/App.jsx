import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría" />} />
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
