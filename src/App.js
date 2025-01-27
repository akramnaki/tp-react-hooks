import React, { createContext, useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ProductModal from './components/ProductModal'; // Importer le modal
import ThemeToggle from './components/ThemeToggle';
import { LanguageProvider } from './LanguageContext'; // Importer le LanguageProvider
import useLocalStorage from './hooks/useLocalStorage'; // Importer le hook useLocalStorage
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer le CSS de Bootstrap

export const ThemeContext = createContext();

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [language, setLanguage] = useLocalStorage('language', 'fr'); // Utiliser useLocalStorage pour la langue
    const [products, setProducts] = useState([]); // État pour les produits
    const [filteredProducts, setFilteredProducts] = useState([]); // État pour les produits filtrés
    const [error, setError] = useState(null); // État pour les erreurs
    const [selectedProduct, setSelectedProduct] = useState(null); // État pour le produit sélectionné
    const [showModal, setShowModal] = useState(false); // État pour afficher le modal

    // Pagination
    const [currentPage, setCurrentPage] = useState(1); // Page actuelle
    const [productsPerPage] = useState(10); // Nombre de produits par page

    // Fonction pour charger les produits
	const loadProducts = async () => {
	    try {
	        const response = await fetch('https://dummyjson.com/products'); // Assurez-vous que l'URL est correcte
	        if (!response.ok) throw new Error('Erreur réseau');
	        const data = await response.json();
	        console.log("Données reçues de l'API:", data); // Vérifiez la structure des données
	        setProducts(data.products); // Mettez à jour l'état avec les données des produits
	        setFilteredProducts(data.products); // Initialiser les produits filtrés
	        setError(null); // Réinitialisez l'erreur
	    } catch (error) {
	        console.error("Erreur lors du chargement des produits :", error);
	        setError(error.message); // Mettez à jour l'état d'erreur
	    }
	};

    // Charger les produits lors du premier rendu
    useEffect(() => {
        loadProducts();
    }, []);

    // Fonction de recherche
    const handleSearch = (searchTerm) => {
        const results = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
        setCurrentPage(1); // Réinitialiser à la première page lors de la recherche
        console.log("Résultats de la recherche :", results);
    };

    // Calculer les produits à afficher en fonction de la page actuelle
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true); // Ouvrir le modal
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null); // Réinitialiser le produit sélectionné
    };

    // Fonction pour changer de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            <LanguageProvider>
                <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
                    <header className="my-4">
                        <h1 className="text-center">Catalogue de Produits</h1>
                        <div className="d-flex justify-content-end gap-2">
                            <ThemeToggle />
                            {/* Sélecteur de langue */}
                            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="form-select">
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                {/* Ajoutez d'autres langues si nécessaire */}
                            </select>
                        </div>
                    </header>
                    <main>
                        {error && <div className="alert alert-danger">{error}</div>} {/* Afficher l'erreur si elle existe */}
                        <ProductSearch onSearch={handleSearch} /> {/* Passer la fonction de recherche */}
                        <ProductList products={currentProducts} onProductClick={handleProductClick} /> {/* Passez les produits filtrés à ProductList */}
                        {/* Pagination Controls */}
                        <nav>
                            <ul className="pagination justify-content-center">
                                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
                                    <li key={index + 1} className="page-item">
                                        <button onClick={() => paginate(index + 1)} className="page-link">
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </main>
                    {selectedProduct && ( // Afficher le modal si un produit est sélectionné
                        <ProductModal 
                            show={showModal} 
                            handleClose={handleCloseModal} 
                            product={selectedProduct} 
                        />
                    )}
                </div>
            </LanguageProvider>
        </ThemeContext.Provider>
    );
};

export default App;