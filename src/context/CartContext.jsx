import { createContext, useContext } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

import { useState } from 'react';

// --- Contexto para el carrito de compras ---
const cartContext = createContext();

export function useCart() {
  return useContext(cartContext);
}

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const addProduct = (product, qty) => {
        // 1. creamos la funcion que va a modificar el estado cart del contexto
    
        // 2. verificar si el producto ya existe en el carrito
        if (cart.some((prod) => prod.id === product.id)) {
          // 3. si existe, actualizamos la cantidad
          const newCart = cart.map((prod) => {
            // 3.1 recorremos el carrito
            if (prod.id === product.id) {
              // 3.2 si el producto existe, actualizamos la cantidad
              return {
                ...prod, // 3.3 copiamos las propiedades del producto
                qty: prod.qty + qty, // 3.4 actualizamos la cantidad
              };
            }
            return prod; // 3.5 si no es el producto que estamos buscando, lo devolvemos sin modificar
          });
    
          setCart(newCart); // 3.6 actualizamos el estado del carrito con el nuevo carrito que tiene la cantidad actualizada
        } else {
          // 4. si no existe, lo agregamos al carrito
          setCart([{ qty, ...product }, ...cart]);
        }
      };
    

  return (
    <cartContext.Provider value={{ cart, total, totalItems, addProduct}}>
      {children}
    </cartContext.Provider>
  );
}
// ---- fin contexto carrito de compras ----


CartProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};
