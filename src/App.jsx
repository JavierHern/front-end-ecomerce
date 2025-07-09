import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import { featuredProducts, newProducts } from './data/ProductsInventory.js';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <ProductGrid title="Productos Destacados" products={featuredProducts} />
                  <ProductGrid title="Nuevos Lanzamientos" products={newProducts} />
                </>
              } />
              {/* Aquí irían más rutas */}
            </Routes>
          </main>
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2025 CubrikStore. Todos los derechos reservados.</p>
              <p>Javier Hernández Montiel</p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;