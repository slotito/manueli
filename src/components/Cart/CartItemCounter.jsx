import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { cartContext } from '../../context/CartContext'


const CartItemCounter = ({ product, actQuanty, onValueChange }) => {

    const { buyProduct } = useContext(cartContext);
    const [quanty, setQuanty] = useState(actQuanty || 1);

    useEffect(() => {
        if (product.quanty) {
          setQuanty(product.quanty);
        }
    }, [product.quanty]);

    useEffect(() => {  // Llama a la función proporcionada cuando cambia la cantidad
      onValueChange(quanty);
    }, [quanty, onValueChange]);
    
    const handleIncrement = () => {
        buyProduct({ ...product, quanty: quanty + 1 }, false);
        setQuanty((prevQuanty) => prevQuanty + 1);
    };
    
    const handleDecrement = () => {
        if (quanty > 1) {
          buyProduct({ ...product, quanty: quanty - 1 }, false);
          setQuanty((prevQuanty) => prevQuanty - 1);
        }
    };
    
  return (

    <>
        <div className="input-number">
            <input type="number" value={quanty} readOnly />
            <span className="qty-up" onClick={handleIncrement}>+</span>
            <span className="qty-down" onClick={handleDecrement}>-</span>
        </div>

    </>
  )
}

CartItemCounter.propTypes = {
    quanty: PropTypes.number   // .isRequired
}

export default CartItemCounter