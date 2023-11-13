import { createContext, useContext } from 'react';

// Importa los datos del archivo JSON
import productsData from '../../public/products2.json';

const dataContext = createContext();   // Creo el contexto

// Pruebo un hook personalizado
export function useProducts() {
    return useContext(dataContext);
}
  