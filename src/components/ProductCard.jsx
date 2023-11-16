import { useContext } from 'react'
import ButtonAddCart from './ButtonAddCart'
import { wishContext } from '../context/WishContext'
import { cartContext } from '../context/CartContext'

export function ProductCard({ product }) {

    const { wishProduct } = useContext(wishContext);
    const { buyProduct } = useContext(cartContext);

    return (

     
    <div className="product">
        <div className="product-img">
 
            <img src={product.thumbnail} alt="" />
            <div className="product-label">
                <span className="sale">-{product.discountPercentage}%</span>
                <span className="new">NUEVO</span>
            </div>
                
        </div>

        <div className="product-body">
            <p className="product-category">{product.category}</p>
            <h3 className="product-name"><a href="#">{product.title}</a></h3>
            <h4 className="product-price">$ {product.price} <del className="product-old-price">${(product.price / (1-product.discountPercentage/100)).toFixed(0 )}</del></h4>
            <div className="product-btns">
                <ButtonAddCart 
                    className="fa fa-heart-o"
                    onClick={()=> wishProduct({product})}
                    >
                        <button className="add-to-wishlist">
                            <i className="fa fa-heart-o"></i>
                            <span className="tooltipp">lo quiero</span>
                        </button>
                </ButtonAddCart>
            </div>
        </div>
        <div className="add-to-cart">
            <ButtonAddCart key={product.id} 
                title="al Carrito" 
                onClick={()=> buyProduct({product, quanty: 1})} 
                className="fa fa-shopping-cart"
            />  {/* onAdd(count) */}
        </div>
    </div>

)}

