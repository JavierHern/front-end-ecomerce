import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../data/ProductsInventory'; import '../styles/Search.css';

const Search = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    // Función de búsqueda
    const performSearch = (term) => {
        if (term.length < 2) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        setIsLoading(true);

        // Simular delay de API
        setTimeout(() => {
            const results = allProducts.filter(cubo =>
                cubo.name.toLowerCase().includes(term.toLowerCase()) ||
                cubo.category.toLowerCase().includes(term.toLowerCase())
            );

            setSearchResults(results);
            setShowResults(true);
            setIsLoading(false);
        }, 300);
    };

    // Efecto para búsqueda en tiempo real
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            performSearch(searchTerm);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    // Manejar selección de resultado
    const handleResultClick = (cubo) => {
        navigate(`/producto/${cubo.id}`);
        onClose();
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/buscar?q=${encodeURIComponent(searchTerm)}`);
            onClose();
        }
    };

    return (
        <div className="search-overlay">
            <div className="search-container">
                <button className="search-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <form onSubmit={handleSubmit} className="search-form">
                    <div className="search-input-container">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            type="text"
                            placeholder="Buscar cubos de Rubik..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                            autoFocus
                        />
                        {isLoading && (
                            <div className="search-loading">
                                <i className="fas fa-spinner fa-spin"></i>
                            </div>
                        )}
                    </div>
                </form>

                {showResults && (
                    <div className="search-results">
                        {searchResults.length > 0 ? (
                            <>
                                <div className="search-results-header">
                                    <span>{searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}</span>
                                </div>
                                <div className="search-results-list">
                                    {searchResults.map((cubo) => (
                                        <div
                                            key={cubo.id}
                                            className="search-result-item"
                                            onClick={() => handleResultClick(cubo)}
                                        >
                                            <img src={cubo.image} alt={cubo.name} className="search-result-image" />
                                            <div className="search-result-info">
                                                <h4 className="search-result-name">{cubo.name}</h4>
                                                <p className="search-result-category">{cubo.category}</p>
                                                <p className="search-result-price">${cubo.price}</p>
                                            </div>
                                            <i className="fas fa-arrow-right search-result-arrow"></i>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="search-no-results">
                                <i className="fas fa-search"></i>
                                <p>No se encontraron resultados para "{searchTerm}"</p>
                                <span>Intenta con otros términos de búsqueda</span>
                            </div>
                        )}
                    </div>
                )}

                {searchTerm.length === 0 && (
                    <div className="search-suggestions">
                        <h4>Búsquedas populares</h4>
                        <div className="search-tags">
                            {['Speedcube', 'Gan', 'MoYu', 'Pyraminx', 'Megaminx', 'Mirror Cube'].map((tag) => (
                                <button
                                    key={tag}
                                    className="search-tag"
                                    onClick={() => setSearchTerm(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;