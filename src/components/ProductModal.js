import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductModal = ({ show, handleClose, product }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{product.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                <p>{product.description}</p>
                <p><strong>Prix : </strong>{product.price} €</p>
                <p><strong>Catégorie : </strong>{product.category}</p>
                <p><strong>Évaluation : </strong>{product.rating} ⭐</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;