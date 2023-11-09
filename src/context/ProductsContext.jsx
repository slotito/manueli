import { createContext, useContext } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

// Importa los datos del archivo JSON
import productsData from '../datos/products.json';

const ProductsContext = createContext();   // Creo el contexto

export function useProducts() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider value={productsData}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext }; // Exporta el contexto


ProductsProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};
