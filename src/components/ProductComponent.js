import React from 'react';
import useProductSearch from './useProductSearch';

const ProductComponent = () => {
    const { products, loading, error } = useProductSearch(); // Utilise le hook pour récupérer les produits

    if (loading) return <div>Chargement...</div>; // Affiche un message de chargement
    if (error) return <div>Erreur: {error}</div>; // Affiche un message d'erreur

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>{product.title}</div> // Affiche les titres des produits
            ))}
        </div>
    );
};

export default ProductComponent;