import React from 'react';
import { Link } from 'react-router-dom';
import AddCartBtn from './AddCartBtn';
import '../styles/Hero-BEM.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <h1 className="hero__title">CubeX 3x3</h1>
                    <h2 className="hero__subtitle">Redefine tu experiencia de speedcubing.</h2>
                    <p className="hero__description">
                        Nuestro nuevo cubo magnético de alta precisión con tecnología avanzada para profesionales y entusiastas.
                    </p>
                    <div className="hero__links">
                        <div className="hero__link hero__link--primary">
                            <AddCartBtn />
                        </div>
                        <Link to="/producto/1" className="hero__link hero__link--secondary">
                            Más información
                        </Link>
                    </div>
                </div>
                <div className="hero__image-container">
                    <img
                        src="/images/cubo3x3.png"
                        alt="CubeX Pro Rubik's Cube"
                        className="hero__image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
