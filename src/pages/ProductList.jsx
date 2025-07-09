import React, { useEffect, useState } from "react";
import { allProducts } from '../data/ProductsInventory';
import ProductGrid from '../components/ProductGrid';
import '../styles/ProductList.css';

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
            }, 500) // Un pequeño retraso para simular la carga
        };

        fetchProducts();
    }, []); // El array de dependencias vacío asegura que se ejecute solo una vez

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="container product-list-container">
            <ProductGrid title="Todos Nuestros Productos" products={products} />
        </div>
    );
};

export default ProductList;