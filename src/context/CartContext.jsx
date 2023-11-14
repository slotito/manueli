import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const buyProduct = (product) => {
    setCart([...cart, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const value = {
    cart,
    setCart,
    cartCount,
    setCartCount,
    buyProduct,
  };

  return <cartContext.Provider value={value}>
    {children}
    </cartContext.Provider>;
};
export default CartProvider;



CartProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};
