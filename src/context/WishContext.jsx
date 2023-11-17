import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useLocalStorage } from '../components/Cart/useLocalStorage'

export const wishContext = createContext();

const WishProvider = ({ children }) => {

  const [wish, setWish] = useLocalStorage('wish', []);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    setWishCount(wish.length);
  }, [wish]);

  const wishProduct = (product) => {
      if (!wish || wish.length === 0) {
        console.log("no hay wish");
        setWish([product[0]]);
      } else {    
        const productrepeat = wish.find((item) => item.id === product[0].id);
        if (productrepeat) {
          console.log("repetido");
          return;
        } else {
          console.log("no repetido");
          setWish((prevWish) => [...prevWish, product[0]]);
        }
      } 
  }

  const removeFromWish = (productId) => {
    const updatedWish = wish.filter((product) => product.id !== productId[0]); // filtra los que coinciden
    setWish(updatedWish);
  };

  
  const value = {
    wish,
    setWish,
    wishCount,
    setWishCount,
    wishProduct,
    removeFromWish
  };

  return <wishContext.Provider value={value}>
    {children}
    </wishContext.Provider>;
};
export default WishProvider;



WishProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};
