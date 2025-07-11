import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'; // Importar el hook
const CartIcon = () => {
    const { cartCount } = useCartContext(); // Obtener la cantidad del carrito
    return (
        <Link to="/carrito" className="nav-icon essential">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
        </Link>
    )
}

export default CartIcon;