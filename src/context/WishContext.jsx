import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const wishContext = createContext();

const WishProvider = ({ children }) => {
  const [wish, setWish] = useState([]);
  const [wishCount, setWishCount] = useState(0);

  const wishProduct = (product) => {
    const productrepeat = wish.find((item) => item.id === product[0].id);
    if (productrepeat) {
      console.log("repetido");
      return;
    } else {
      setWish([...wish, product[0]]);
      setWishCount((prevCount) => prevCount + 1);
    }
  };

    const removeFromWish = (productId) => {
    // Filtra los productos que no coincidan con el productId
    const updatedWish = wish.filter((product) => product.id !== productId[0]);
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
