import { useCartContext } from '../context/CartContext'; // Importamos el hook
import { allProducts } from '../data/ProductsInventory';
import '../styles/AddCartBtn-BEM.css'

const AddCartBtn = ({ product = allProducts[0] }) => {
    const { addToCart } = useCartContext(); // Obtenemos la funcion addToCart

    const handleAddToCart = (e) => {
        e.preventDefault(); // Previene la navegación si el botón está dentro del Link
        e.stopPropagation(); // Detiene la propagación del evento
        addToCart(product);
        // Mostrar notificación
        console.log(`Añadido al carrito: ${product.name}`);
    };

    return (
        <button className="add-cart-btn" onClick={handleAddToCart}>
            Añadir al Carrito
        </button>
    )
}

export default AddCartBtn;
