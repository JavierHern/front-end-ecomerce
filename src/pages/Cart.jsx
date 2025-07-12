import React from "react";
import ReturnHome from "../components/ReturnHome";
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";
import '../styles/Cart-BEM.css'

const Cart = () => {
    // Obtenermos todo lo que necesitamos de nuestro contexto
    const { cart, removeFromCart, clearCart, cartTotal, cartCount } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2 className="cart-empty__title">Tu carrito está vacío</h2>
                <p className="cart-empty__message">Parece que aún no has añadido ningún producto.</p>
                <ReturnHome link={"Ver Productos"} />
            </div>
        );
    }

    return (
        <div className="container cart">
            <h1 className="cart__title">Tu Carrito ({cartCount} {cartCount > 1 ? 'artículos' : 'artículo'})</h1>
            <div className="cart__content">
                <div className="cart__items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item__image" />
                            <div className="cart-item__details">
                                <Link to={`/producto/${item.id}`} className="cart-item__name">{item.name}</Link>
                                <p className="cart-item__price">${(item.price || 0).toFixed(2)}</p>
                                <p className="cart-item__quantity">Cantidad: {item.quantity}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="cart-item__remove">
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2 className="cart-summary__title">Resumen del Pedido</h2>
                    <div className="cart-summary__line">
                        <span>Subtotal</span>
                        <span>${cartTotal}</span>
                    </div>
                    <div className="cart-summary__line">
                        <span>Envío</span>
                        <span>Gratis</span>
                    </div>
                    <div className="cart-summary__total">
                        <span>Total</span>
                        <span>${cartTotal}</span>
                    </div>
                    <div className="cart-summary__buttons">
                        <button className="cart-summary__button cart-summary__button--checkout">Proceder al Pago</button>
                        <button onClick={clearCart} className="cart-summary__button cart-summary__button--clear">
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
