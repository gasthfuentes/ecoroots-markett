import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav>
      <h1>EcoRoots Market</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/cafe-justo">Café Justo</Link></li>
        <li><Link to="/category/quinoa-andina">Quinoa Andina</Link></li>
        <li><Link to="/category/miel-organica">Miel Orgánica</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;