import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types'; // Importa PropTypes

import { getItems } from "../utils/firestore";

export const dataContext = createContext();   // Creo el contexto

const DataProvider = ({ children }) => {

  const [products, setProducts] = useState([]); // estados iniciales
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

/*   useEffect(() => {   // Carga local
    const fetchData = async () => {
      try {
        const response = await axios.get('products2.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); */


  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await getItems('products');
            setProducts(data);
            //console.log("products", data)
        } catch (error) {
            console.error('Error al cargar productos:', error);
            setError('Error al cargar los productos');
        } finally {
            setLoading(false);
        }
    };
    fetchData();
  } , []);
 


  if (loading) {
    return <div>Cargando productos ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  
  return (
    <dataContext.Provider value={{products}}>
      {children}
    </dataContext.Provider>
  );
}

export default DataProvider // Exporta el contexto



DataProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};


