import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const buyProduct = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id);
    if (productrepeat) {
      console.log("repetido");
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      return;
    } else {
        console.log("no repetido");
        setCart([...cart, product]);
        setCartCount((prevCount) => prevCount + 1);
    }
  };

  const removeFromCart = (productId) => {
    // Filtra los productos que no coincidan con el productId
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const value = {
    cart,
    setCart,
    cartCount,
    setCartCount,
    buyProduct,
    removeFromCart
  };

  return <cartContext.Provider value={value}>
    {children}
    </cartContext.Provider>;
};
export default CartProvider;



CartProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};
