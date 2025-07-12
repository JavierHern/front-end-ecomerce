import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../data/ProductsInventory';
import '../styles/Search-BEM.css';

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
        if (searchTerm.trim() && searchResults.length > 0) {
            navigate(`/buscar?q=${encodeURIComponent(searchTerm)}`);
            onClose();
        }
    };

    return (
        <div className="search">
            <div className="search__overlay">
                <div className="search__container">
                    <button className="search__close" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>

                    <form onSubmit={handleSubmit} className="search__form">
                        <div className="search__input-container">
                            <i className="fas fa-search search__icon"></i>
                            <input
                                type="text"
                                placeholder="Buscar cubos de Rubik..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search__input"
                                autoFocus
                            />
                            {isLoading && (
                                <div className="search__loading">
                                    <i className="fas fa-spinner fa-spin"></i>
                                </div>
                            )}
                        </div>
                    </form>

                    {showResults && (
                        <div className="search__results">
                            {searchResults.length > 0 ? (
                                <>
                                    <div className="search__results-header">
                                        <span>{searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}</span>
                                    </div>
                                    <div className="search__results-list">
                                        {searchResults.map((cubo) => (
                                            <div
                                                key={cubo.id}
                                                className="search-result"
                                                onClick={() => handleResultClick(cubo)}
                                            >
                                                <img src={cubo.image} alt={cubo.name} className="search-result__image" />
                                                <div className="search-result__info">
                                                    <h4 className="search-result__name">{cubo.name}</h4>
                                                    <p className="search-result__category">{cubo.category}</p>
                                                    <p className="search-result__price">${cubo.price}</p>
                                                </div>
                                                <i className="fas fa-arrow-right search-result__arrow"></i>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="search__no-results">
                                    <i className="fas fa-search"></i>
                                    <p>No se encontraron resultados para "{searchTerm}"</p>
                                    <span>Intenta con otros términos de búsqueda</span>
                                </div>
                            )}
                        </div>
                    )}

                    {searchTerm.length === 0 && (
                        <div className="search__suggestions">
                            <h4>Búsquedas populares</h4>
                            <div className="search__tags">
                                {['Speedcube', 'Cubo', 'Pyraminx', 'Megaminx'].map((tag) => (
                                    <button
                                        key={tag}
                                        className="search__tag"
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
        </div>
    );
};

export default Search;
