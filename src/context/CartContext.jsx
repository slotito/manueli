import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useLocalStorage } from '../components/Cart/useLocalStorage'

export const cartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useLocalStorage('cart', [])
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  const buyProduct = (product, vquanty, execute) => {
    if (execute) {
    vquanty = vquanty ?? 1;

    if (!cart || cart.length === 0) {
      setCart([{ ...product[0], quanty: vquanty }]);
      setCartCount(1);
    } else {
        const productrepeat = cart.find((item) => item.id === product[0].id);
        if (productrepeat) {
          console.log("repetido");
          const newCart = cart.map((item) => {
            if (item.id === product[0].id) {
              return { ...item, quanty: (item.quanty || 1) + vquanty };
            } else {
              return item;
            }
          });
          setCart(newCart);
          return;
        } else {
            console.log("no repetido");
            setCart([...cart, { ...product[0], quanty: vquanty }]);
            setCartCount((prevCount) => prevCount + 1);
        } 
    }
  }
  };

  const removeFromCart = (productId) => {
    // Filtra los productos que no coincidan con el productId
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    try {
      window.localStorage.removeItem('cart'); 
      console.log('Carrito eliminado del almacenamiento local');
      setCart([]);
    } catch (error) {
      console.error('Error al eliminar el carrito del almacenamiento local', error);
    }
  };
  

  const value = {
    cart,
    setCart,
    cartCount,
    setCartCount,
    buyProduct,
    removeFromCart,
    handleClearCart
  };

  return <cartContext.Provider value={value}>
    {children}
    </cartContext.Provider>;
};
export default CartProvider;



CartProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};
