import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">CubeX Pro</h1>
        <h2 className="hero-subtitle">Redefine tu experiencia de speedcubing.</h2>
        <p className="hero-description">
          Nuestro nuevo cubo magnético de alta precisión.
        </p>
        <div className="hero-links">
          <Link to="/productos/cubex-pro" className="hero-link primary">
            Comprar
          </Link>
          <Link to="/productos/cubex-pro/specs" className="hero-link secondary">
            Más información
          </Link>
        </div>
      </div>
      <div className="hero-image-container">
        <img 
          src="/images/hero-cube.png" 
          alt="CubeX Pro Rubik's Cube" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;