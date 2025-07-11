// import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container">
                {/* Hero Section */}
                <section className="contact-hero">
                    <h1>Contacto</h1>
                    <p>Encuentra toda la información para contactarnos</p>
                </section>

                {/* Contact Cards */}
                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Dirección</h3>
                            <p>Calle Principal 123</p>
                            <p>Colonia Centro</p>
                            <p>Ciudad de México, CDMX 01000</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Teléfono</h3>
                            <p>+52 (55) 1234-5678</p>
                            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                            <p>Sábados: 10:00 AM - 2:00 PM</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Email</h3>
                            <p>info@cubrikstore.com</p>
                            <p>ventas@cubrikstore.com</p>
                            <p>soporte@cubrikstore.com</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Horarios</h3>
                            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                            <p>Sábados: 10:00 AM - 2:00 PM</p>
                            <p>Domingos: Cerrado</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-shipping-fast"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Envíos</h3>
                            <p>Envío gratis en compras +$500</p>
                            <p>Entrega en CDMX: 1-2 días</p>
                            <p>Resto del país: 3-5 días</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-share-alt"></i>
                        </div>
                        <div className="contact-details">
                            <h3>Redes Sociales</h3>
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                                <a href="#" className="social-link">
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