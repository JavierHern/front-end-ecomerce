import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
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
          <Link to="/" className="nav-item">Inicio</Link>
          <Link to="/productos" className="nav-item">Productos</Link>
          <Link to="/novedades" className="nav-item">Novedades</Link>
          <Link to="/accesorios" className="nav-item">Accesorios</Link>
          <Link to="/soporte" className="nav-item">Soporte</Link>
        </div>
        <div className="nav-icons">
          <ThemeToggle />
          <Link to="/buscar" className="nav-icon">
            <i className="fas fa-search"></i>
          </Link>
          <Link to="/carrito" className="nav-icon">
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;