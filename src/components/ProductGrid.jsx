import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductGrid.css';

const ProductGrid = ({ title, products }) => {
  return (
    <section className="product-section">
      <div className="container">
        <div className="product-section-header">
          <h2 className="product-section-title">{title}</h2>
          <a href="/productos" className="view-all-link">Ver todos</a>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;