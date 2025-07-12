import React from 'react';
import AddCartBtn from './AddCartBtn';
import CubeImage from './CubeImage';
import { Link } from 'react-router-dom';
import '../styles/ProductCard-BEM.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/producto/${product.id}`} className="product-card__link">
                <div className="product-card__image-container">
                    <CubeImage src={product.image} alt={product.name} />
                </div>
                <div className="product-card__info">
                    <h3 className="product-card__name">{product.name}</h3>
                    <p className="product-card__category">{product.category}</p>
                    <p className="product-card__price">${product.price}</p>
                    <AddCartBtn product={product} />
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
