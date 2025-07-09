import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'; // Importamos el hook
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext(); // Obtenemos la funcion addToCart

  const handleAddToCart = (e) => {
    e.preventDefault(); // Previene la navegación si el botón está dentro del Link
    e.stopPropagation(); // Detiene la propagación del evento
    addToCart(product);
    // Mostrar notificación
    console.log(`Añadido al carrito: ${product.name}`);
  };

  return (
    <div className="product-card">
      <Link to={`/producto/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Añadir al Carrito
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;