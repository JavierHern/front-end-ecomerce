import React, { useEffect, useState } from "react";
import { allProducts } from '../data/ProductsInventory';
import ProductGrid from '../components/ProductGrid';
import '../styles/ProductList-BEM.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulamos una carga de datos asíncroan, como si fuera una API real.
        // Esto demuestra un uso práctico para el uso de useEffect.
        const fetchProducts = () => {
            setTimeout(() => {
                setProducts(allProducts);
                setLoading(false);
            }) // Se puede agregar un pequeño retraso para simular la carga
        };

        fetchProducts();
    }, []); // El array de dependencias vacío asegura que se ejecute solo una vez

    if (loading) {
        return (
            <div className="product-list-loader">
                <div className="product-list-loader__spinner"></div>
            </div>
        );
    }

    return (
        <div className="container product-list">
            <ProductGrid title="Todos Nuestros Productos" products={products} />
        </div>
    );
};

export default ProductList;
