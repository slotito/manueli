import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const wishContext = createContext();

const WishProvider = ({ children }) => {
  const [wish, setWish] = useState([]);
  const [wishCount, setWishCount] = useState(0);

  const wishProduct = (product) => {
    setWish([...wish, product]);
    setWishCount((prevCount) => prevCount + 1);
  };

  const value = {
    wish,
    setWish,
    wishCount,
    setWishCount,
    wishProduct,
  };

  return <wishContext.Provider value={value}>
    {children}
    </wishContext.Provider>;
};
export default WishProvider;



WishProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};
