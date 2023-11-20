import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useLocalStorage } from '../components/Cart/useLocalStorage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const wishContext = createContext();

const WishProvider = ({ children }) => {

  const toastOptions = {
    position: 'top-right',
    autoClose: 2000, // Tiempo en milisegundos
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };
  const notify = (message) => toast(message, toastOptions);

  const [wish, setWish] = useLocalStorage('wish', []);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    setWishCount(wish.length);
  }, [wish]);

  const wishProduct = (product) => {  // Agrega o no un producto al wish
      if (!wish || wish.length === 0) {
        //console.log("no hay wish");
        setWish([product[0]]);
        notify("Producto agregado a favoritos");
      } else {    
        const productrepeat = wish.find((item) => item.id === product[0].id);
        if (productrepeat) {
          console.log("repetido");
          notify("Producto ya estaba en tus favoritos");
          return;
        } else {
          notify("Producto agregado a favoritos");
          //console.log("no repetido");
          setWish((prevWish) => [...prevWish, product[0]]);
        }
      } 
  }

  const removeFromWish = (productId) => {
    notify("Producto quitado de tus favoritos");
    const updatedWish = wish.filter((product) => product.ide !== productId); // filtra los que coinciden
    setWish(updatedWish);
  };

  
  const value = {
    wish,
    setWish,
    wishCount,
    setWishCount,
    wishProduct,
    removeFromWish,
  };

  return (
    <>
      <wishContext.Provider value={value}>
        {children}
      </wishContext.Provider>;
      <ToastContainer />
    </>
  );
};
export default WishProvider;



WishProvider.propTypes = {
    children: PropTypes.node, // Define 'children' como un prop de tipo 'node'
};
