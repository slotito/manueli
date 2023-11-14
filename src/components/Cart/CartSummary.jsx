import { useContext } from "react"
import { cartContext } from "../../context/CartContext"

const CartSummary = () => {

    const { cart } = useContext(cartContext);
    const total = cart.reduce((acc, product) => acc + (product.price * product.cant), 0);

  return (
    <div>
        <h3>Total a pagar $ {total} </h3>
    </div>
  )
}

export default CartSummary