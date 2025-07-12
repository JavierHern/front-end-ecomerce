import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'; // Importar el hook
import '../styles/CartIcon-BEM.css'

const CartIcon = () => {
    const { cartCount } = useCartContext(); // Obtener la cantidad del carrito
    return (
        <Link to="/carrito" className="cart-icon">
            <i className="cart-icon__symbol fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className='cart-icon__badge'>{cartCount}</span>}
        </Link>
    )
}

export default CartIcon;
