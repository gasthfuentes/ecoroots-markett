import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink></li>
        <li><NavLink to="/category/infusiones" className={({ isActive }) => isActive ? "active" : ""}>Infusiones</NavLink></li>
        <li><NavLink to="/category/envasados" className={({ isActive }) => isActive ? "active" : ""}>Envasados</NavLink></li>
        <li><NavLink to="/category/legumbres" className={({ isActive }) => isActive ? "active" : ""}>Legumbres</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
