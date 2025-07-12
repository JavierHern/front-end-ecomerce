import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductGrid-BEM.css';
import { Link } from 'react-router-dom';

const ProductGrid = ({ title, products }) => {
    return (
        <section className="product-section">
            <div className="container">
                <div className="product-section__header">
                    <h2 className="product-section__title">{title}</h2>
                    <Link to="/productos" className="product-section__view-all-link">Ver todos</Link>
                </div>
                <div className="product-section__grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
