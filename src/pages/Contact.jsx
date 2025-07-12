// import { useState } from 'react';
import '../styles/Contact-BEM.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                {/* Hero Section */}
                <section className="contact__hero">
                    <h1 className="contact__hero-title">Contacto</h1>
                    <p className="contact__hero-subtitle">Encuentra toda la información para contactarnos</p>
                </section>

                {/* Contact Cards */}
                <div className="contact__grid">
                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-card__details">
                            <h3 className="contact-card__title">Dirección</h3>
                            <p className="contact-card__text">Calle Principal 123</p>
                            <p className="contact-card__text">Colonia Centro</p>
                            <p className="contact-card__text">Ciudad de México, CDMX 01000</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-card__details">
                            <h3 className="contact-card__title">Teléfono</h3>
                            <p className="contact-card__text">+52 (55) 1234-5678</p>
                            <p className="contact-card__text">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                            <p className="contact-card__text">Sábados: 10:00 AM - 2:00 PM</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-card__details">
                            <h3 className="contact-card__title">Email</h3>
                            <p className="contact-card__text">info@cubrikstore.com</p>
                            <p className="contact-card__text">ventas@cubrikstore.com</p>
                            <p className="contact-card__text">soporte@cubrikstore.com</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="contact-card__details">
                            <h3 className="contact-card__title">Horarios</h3>
                            <p className="contact-card__text">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                            <p className="contact-card__text">Sábados: 10:00 AM - 2:00 PM</p>
                            <p className="contact-card__text">Domingos: Cerrado</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <i className="fas fa-shipping-fast"></i>
                        </div>
                        <div className="contact-card__details">
                            <h3 className="contact-card__title">Envíos</h3>
                            <p className="contact-card__text">Envío gratis en compras +$500</p>
                            <p className="contact-card__text">Entrega en CDMX: 1-2 días</p>
                            <p className="contact-card__text">Resto del país: 3-5 días</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <i className="fas fa-share-alt"></i>
                        </div>
                        <div className="contact-card__details">
                            <h3 className="contact-card__title">Redes Sociales</h3>
                            <div className="social-links">
                                <a href="#" className="social-links__link">
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                                <a href="#" className="social-links__link">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                                <a href="#" className="social-links__link">
                                    <i className="fab fa-whatsapp"></i> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
