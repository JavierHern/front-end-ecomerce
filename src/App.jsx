import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import './App.css';

// Datos de ejemplo
const featuredProducts = [
  {
    id: 1,
    name: 'CubeX Pro 3x3',
    category: 'Cubo de velocidad',
    price: 29.99,
    colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'],
    image: 'https://placehold.co/600x400?text=Cubo+3x3'
  },
  {
    id: 2,
    name: 'PyraX Speed',
    category: 'Pirámide',
    price: 24.99,
    colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f'],
    image: 'https://placehold.co/600x400?text=Cubo+3x3'
  },
  {
    id: 3,
    name: 'MegaX Ultimate',
    category: 'Megaminx',
    price: 39.99,
    colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'],
    image: 'https://placehold.co/600x400?text=Cubo+3x3'
  },
  {
    id: 4,
    name: 'CubeX 4x4',
    category: 'Cubo de velocidad',
    price: 34.99,
    colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'],
    image: 'https://placehold.co/600x400?text=Cubo+3x3'
  }
];

const newProducts = [
  {
    id: 5,
    name: 'CubeX Air',
    category: 'Edición limitada',
    price: 49.99,
    colors: ['#34495e', '#ecf0f1', '#95a5a6'],
    image: 'https://placehold.co/600x400?text=Cubo+3x3'
  },
  {
    id: 6,
    name: 'CubeX Mini 2x2',
    category: 'Cubo de bolsillo',
    price: 19.99,
    colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'],
    image: 'https://placehold.co/600x400?text=Cubo+3x3'
  },
  {
    id: 7,
    name: 'SkewbX Pro',
    category: 'Skewb',
    price: 27.99,
    colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f'],
    image: 'https://placehold.co/600x400?text=Cubo+3x3'
  },
  {
    id: 8,
    name: 'CubeX 5x5 Master',
    category: 'Avanzado',
    price: 44.99,
    colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'],
    image: 'https://placehold.co/600x400?text=Cubo+3x3'
  }
];

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