import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ProductList = ({ products, onProductClick }) => {
    const { isDarkTheme } = useContext(ThemeContext);

    if (!products || products.length === 0) {
        return <div className="alert alert-info">Aucun produit trouvé. Veuillez essayer une autre recherche.</div>;
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {products.map(product => (
                <div key={product.id} className="col">
                    <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`} onClick={() => onProductClick(product)}>
                        <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;