import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // État pour stocker la valeur
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Essayer de récupérer l'élément du stockage local
            const item = window.localStorage.getItem(key);
            // Si l'élément existe, le retourner en tant que valeur JSON
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue; // Retourner la valeur initiale en cas d'erreur
        }
    });

    // Fonction pour mettre à jour la valeur dans le stockage local
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore); // Mettre à jour l'état local
            window.localStorage.setItem(key, JSON.stringify(valueToStore)); // Mettre à jour le stockage local
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue]; // Retourner la valeur stockée et la fonction de mise à jour
};

export default useLocalStorage;