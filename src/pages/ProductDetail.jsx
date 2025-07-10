import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/ProductsInventory';
import AddCartBtn from '../components/AddCartBnt';
import CubeImage from '../components/CubeImage';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams(); // Hook para leer los parámetros de la URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Buscamos el producto en nuestro inventario cuando el componente se monta
        // o cuando el productId cambia.
        const foundProduct = allProducts.find(p => p.id === productId);
        setProduct(foundProduct);
        setLoading(false);
    }, [productId]);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container product-not-found">
                <h2>Producto no encontrado</h2>
                <p>Lo sentimos, no pudimos encontrar el producto que estás buscando.</p>
                <Link to="/productos" className="btn-primary">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container product-detail-container">
            <div className="product-detail-grid">
                <div className="product-detail-image-container">
                    <CubeImage src={product.image} alt={product.name} />
                </div>
                <div className="product-detail-info">
                    <h1 className="product-detail-name">{product.name}</h1>
                    <p className="product-detail-category">{product.category}</p>
                    <p className="product-detail-price">${product.price.toFixed(2)}</p>
                    <p className="product-detail-description">
                        {product.description}
                    </p>
                    <AddCartBtn product={product} />
                    <Link to="/productos" className="back-store">
                        Volver a la tienda
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;