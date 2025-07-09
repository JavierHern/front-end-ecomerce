import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/producto/:productId" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          {/* Aquí irían más rutas */}
          <Route path="*" element={<h1>404: Página No Encontrada</h1>} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 CubrikStore. Todos los derechos reservados.</p>
          <p>Javier Hernández Montiel</p>
        </div>
      </footer>
    </div>
  );
}

export default App;