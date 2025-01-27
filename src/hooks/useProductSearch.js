import { useState, useEffect } from 'react';

const useProductSearch = () => {
    const [products, setProducts] = useState([]); // État pour stocker les produits
    const [loading, setLoading] = useState(true); // État pour indiquer si les données sont en cours de chargement
    const [error, setError] = useState(null); // État pour gérer les erreurs

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // API pour récupérer les produits
                if (!response.ok) throw new Error('Erreur réseau');
                const data = await response.json();
                console.log("Données reçues de l'API:", data); // Vérifiez les données reçues
                setProducts(data); // Mettez à jour l'état avec les données
                setLoading(false); // Indique que le chargement est terminé
            } catch (err) {
                setError(err.message); // Enregistre l'erreur
                setLoading(false); // Indique que le chargement est terminé même en cas d'erreur
            }
        };

        fetchProducts(); // Appel de la fonction pour récupérer les produits
    }, []); // Le tableau vide signifie que cela ne s'exécute qu'une seule fois lors du montage du composant

    return { 
        products, 
        loading, 
        error,
    };
};

export default useProductSearch;