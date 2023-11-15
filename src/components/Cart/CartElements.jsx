import { useContext } from "react"
import { cartContext } from "../../context/CartContext"

const CartElements = () => {

  const { cart } = useContext(cartContext);

  return cart.map((product) => {
    return (
      <>
        <div className="order-products">
            <div className="order-col">
                <div key={product.id}>
                    <h3>{product.id}</h3>
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                    <h3>{product.quanty}</h3>
                </div>
            </div>
      </div>
      </>
    )
  })
}

export default CartElements