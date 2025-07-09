import React from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { featuredProducts, newProducts } from "../data/ProductsInventory";

const Home = () => {
    return (
        <>
            <Hero />
            <ProductGrid title="Productos Destacados" products={featuredProducts} />
            <ProductGrid title="Nuevos Lanzamientos" products={newProducts} />
        </>
    );
};

export default Home;