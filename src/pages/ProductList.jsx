import React, { useEffect, useState } from "react";
import { allProducts } from '../data/ProductsInventory';
import ProductGrid from '../components/ProductGrid';
import '../styles/ProductList-BEM.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const apiUrl = 'https://polite-babka-2ccb05.netlify.app'

        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch(apiUrl, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error(`Error HTTP ${res.status}`);
                }
                const data = await res.json();

                // Normalizar: si la API devuelve { products: [...] } o { data: [...] } o un array directamente
                const normalized = Array.isArray(data)
                    ? data
                    : Array.isArray(data?.products)
                        ? data.products
                        : Array.isArray(data?.data)
                            ? data.data
                            : allProducts; // fallback local

                setProducts(normalized);
            } catch (err) {
                if (err.name === 'AbortError') {
                    // Petición abortada: no hacer nada.
                } else {
                    console.error('Error fetching products:', err);
                    // Fallback: usar datos locales si la API falla
                    setProducts(allProducts);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

        return () => {
            controller.abort();
        };
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
