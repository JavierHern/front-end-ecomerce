import React from 'react';
import AddCartBtn from '../components/AddCartBnt';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';
import CubeImage from './CubeImage';

const ProductCard = ({ product }) => {

  return (
    <div className="product-card">
      <Link to={`/producto/${product.id}`} className="product-link">
        <div className="product-image-container">
          <CubeImage src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>
          <AddCartBtn product={product} />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;