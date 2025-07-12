import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/ProductsInventory';
import AddCartBtn from '../components/AddCartBtn';
import CubeImage from '../components/CubeImage';
import '../styles/ProductDetail-BEM.css';

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
            <div className="loader">
                <div className="loader__spinner"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container product-not-found">
                <h2 className="product-not-found__title">Producto no encontrado</h2>
                <p className="product-not-found__message">Lo sentimos, no pudimos encontrar el producto que estás buscando.</p>
                <Link to="/productos" className="product-not-found__link">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container product-detail">
            <div className="product-detail__grid">
                <div className="product-detail__image-container">
                    <CubeImage src={product.image} alt={product.name} />
                </div>
                <div className="product-detail__info">
                    <h1 className="product-detail__name">{product.name}</h1>
                    <p className="product-detail__category">{product.category}</p>
                    <p className="product-detail__price">${product.price.toFixed(2)}</p>
                    <p className="product-detail__description">
                        {product.description}
                    </p>
                    <div className="product-detail__add-btn">
                        <AddCartBtn product={product} />
                    </div>
                    <Link to="/productos" className="product-detail__back-link">
                        Volver a la tienda
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
