import React from 'react';

const ReloadButton = ({ onReload }) => {
    return (
        <button onClick={onReload} className="btn btn-primary">
            Recharger les Produits
        </button>
    );
};

export default ReloadButton;