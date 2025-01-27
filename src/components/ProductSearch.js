import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce'; // Assurez-vous d'importer le hook useDebounce

const ProductSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300); // Utiliser le debounce avec un délai de 300 ms

    // Effectuer la recherche lorsque le terme de recherche débouncé change
    useEffect(() => {
        onSearch(debouncedSearchTerm);
    }, [debouncedSearchTerm, onSearch]);

    const handleSearchClick = () => {
        onSearch(searchTerm); // Appelle la fonction de recherche avec le terme de recherche
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick(); // Effectuer la recherche si la touche "Entrée" est pressée
        }
    };

    return (
        <div className="d-flex justify-content-center mb-4">
            <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Met à jour l'état de recherche
                onKeyPress={handleKeyPress} // Gérer l'événement de pression de touche
                className="form-control me-2"
            />
            <button onClick={handleSearchClick} className="btn btn-primary">Rechercher</button> {/* Bouton de recherche */}
        </div>
    );
};

export default ProductSearch;