import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
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
          <div className="product-colors">
            {product.colors.map((color, index) => (
              <span 
                key={index} 
                className="color-dot" 
                style={{ backgroundColor: color }}
                title={`Color ${index + 1}`}
              />
            ))}
          </div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>
          <button className="buy-button">Comprar</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;