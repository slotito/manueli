import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types'; // Importa PropTypes



export const dataContext = createContext();   // Creo el contexto

const DataProvider = ({ children }) => {
  const [productsData, setProducts] = useState([]); // estados iniciales
  const [cart, setCart] = useState([]); // estados iniciales del carrito

  useEffect(() => {
    axios.get('products2.json').then((response) => {
      setProducts(response.data);
    })
  }, []);

  return (
    <dataContext.Provider value={{productsData, cart, setCart}}>
      {children}
    </dataContext.Provider>
  );
}

export default DataProvider // Exporta el contexto



DataProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};


