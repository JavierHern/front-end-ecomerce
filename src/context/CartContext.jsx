import React, { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";

// Creamos el contexto
const CartContext = createContext();

// Creamos un hook personalizado para consumir el contexto fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext debe ser usado dentro de un CartProvider');
    }
    return context;
};

// Creamos el componente Proveedor
const CartProvider = ({ children }) => {
    const cartLogic = useCart(); // Usamos nuestro custom hook

    return (
        <CartContext.Provider value={cartLogic}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;