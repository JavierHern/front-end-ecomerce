import { useState, useEffect, useMemo } from "react";

export const useCart = () => {
    const [cart, setCart] = useState(() => {
        // Inicializamos el carrito desde localStorage para persistencia
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.log("Error al parsear el carrito de localStorage", error);
            return [];
        }
    });

    // Guardamos en el localStorage cada vez que el carrito cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingProductIndex !== -1) {
                // Si el producto ya existe, creamos un nuevo array para no mutar el estado
                const updatedCart = prevCart.map((item, index) => {
                    if (index === existingProductIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return updatedCart;
            } else {
                // Si es un producto nuevo, lo añadimos con cantidad 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    // Usamos useMemo para evitar recalcular en cada render si el carrito no cambia
    const cartCount = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }, [cart]);

    return { cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal };
};