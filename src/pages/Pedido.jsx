import { Link } from "react-router-dom";
import ReturnHome from "../components/ReturnHome";
import { useCartContext } from "../context/CartContext";
import '../styles/Cart-BEM.css'

const Pedido = () => {
    const { cart, cartTotal } = useCartContext();

    return (
        <div className="cart-summary_pedido">
            <h2 className="cart-summary__title">¡Felicidades, tu pedido ha sido confirmado!</h2>
            <div className="cart-summary__line">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
            </div>
            <div className="cart-summary__line-pedido">
                <span>Numero de articulos</span>
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item__image" />
                        <div className="cart-item__details">
                            <Link to={`/producto/${item.id}`} className="cart-item__name">{item.name}</Link>

                            <p className="cart-item__quantity">Cantidad: {item.quantity}</p>
                        </div>

                    </div>
                ))}
            </div>
            <div className="cart-summary__line">
                <span>Envío</span>
                <span>Gratis</span>
            </div>
            <div className="cart-summary__total">
                <span>Total</span>
                <span>${cartTotal}</span>
            </div>
            <ReturnHome link={"Ver Productos"} className="cart-summary__buttons" />
        </div>
    )
}

export default Pedido;