import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import Search from './Search';
import '../styles/Navbar-BEM.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Función para abrir/cerrar el menú móvil
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // Función para abrir/cerrar la búsqueda
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <button className="navbar__mobile-toggle" onClick={handleMenuToggle}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>

          <Link to="/" className="navbar__logo">CubrikStore</Link>

          <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--active' : ''}`}>
            <Link to="/" className="navbar__link" onClick={closeMobileMenu}>Inicio</Link>
            <Link to="/productos" className="navbar__link" onClick={closeMobileMenu}>Productos</Link>
            <Link to="/accesorios" className="navbar__link" onClick={closeMobileMenu}>Accesorios</Link>
            <Link to="/contacto" className="navbar__link" onClick={closeMobileMenu}>Contacto</Link>
          </div>

          <div className="navbar__icons">
            <button className="navbar__icon navbar__icon--search" onClick={handleSearchToggle}>
              <i className="fas fa-search"></i>
            </button>
            <CartIcon />
          </div>
        </div>
      </nav>
      {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}

    </>
  );
};

export default Navbar;
