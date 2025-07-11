import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import '../styles/Navbar.css';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para abrir/cerrar el menú móvil
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <Link to="/" className="navbar-logo">CubrikStore</Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={closeMobileMenu}>Inicio</Link>
          <Link to="/productos" className="nav-item" onClick={closeMobileMenu}>Productos</Link>
          <Link to="/accesorios" className="nav-item" onClick={closeMobileMenu}>Accesorios</Link>
          <Link to="/contacto" className="nav-item" onClick={closeMobileMenu}>Contacto</Link>
        </div>

        <div className="nav-icons">
          <Link to="/buscar" className="nav-icon essential">
            <i className="fas fa-search"></i>
          </Link>
          <CartIcon />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;