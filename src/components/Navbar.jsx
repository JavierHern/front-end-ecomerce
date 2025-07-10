import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'; // Importar el hook
import '../styles/Navbar.css';

const Navbar = () => {
  const { cartCount } = useCartContext(); // Obtener la cantidad del carrito
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
          <Link to="/carrito" className="nav-icon essential">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;