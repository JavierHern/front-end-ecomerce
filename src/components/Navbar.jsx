import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'; // Importar el hook
import '../styles/Navbar.css';

const Navbar = () => {
  const { cartCount } = useCartContext(); // Obtener la cantidad del carrito
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CubrikStore
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-item priority-high priority-essential">Inicio</Link>
          <Link to="/productos" className="nav-item priority-high">Productos</Link>
          <Link to="/novedades" className="nav-item priority-medium">Novedades</Link>
          <Link to="/accesorios" className="nav-item priority-low">Accesorios</Link>
          <Link to="/soporte" className="nav-item priority-low">Soporte</Link>
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