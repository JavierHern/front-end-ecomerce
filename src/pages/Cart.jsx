import React from "react";
import ReturnHome from "../components/ReturnHome";
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";
import '../styles/Cart.css'

const Cart = () => {
    // Obtenermos todo lo que necesitamos de nuestro contexto
    const { cart, removeFromCart, clearCart, cartTotal, cartCount } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Tu carrito está vacío</h2>
                <p>Parece que aún no has añadido ningún producto.</p>
                <ReturnHome link={"Ver Productos"} />
            </div>
        );
    }

    return (
        <div className="container cart-container">
            <h1 className="cart-title">Tu Carrito ({cartCount} {cartCount > 1 ? 'artículos' : 'artículo'})</h1>
            <div className="cart-content">
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <Link to={`/producto/${item.id}`} className="cart-item-name">{item.name}</Link>
                                <p className="cart-item-price">${(item.price || 0).toFixed(2)}</p>
                                <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="cart-item-remove">
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2 className="summary-title">Resumen del Pedido</h2>
                    <div className="summary-line">
                        <span>Subtotal</span>
                        <span>${cartTotal}</span>
                    </div>
                    <div className="summary-line">
                        <span>Envío</span>
                        <span>Gratis</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>${cartTotal}</span>
                    </div>
                    <button className="checkout-btn">Proceder al Pago</button>
                    <button onClick={clearCart} className="btn-secondary clear-cart-btn">
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;