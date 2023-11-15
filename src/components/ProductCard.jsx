import { useContext } from 'react'
import ButtonAddCart from './ButtonAddCart'
import { wishContext } from '../context/WishContext'
import { cartContext } from '../context/CartContext'

export function ProductCard({ id, title, price, category, discountPercentage, image}) {

    const { wishProduct } = useContext(wishContext);
    const { buyProduct } = useContext(cartContext);

    return (

     
    <div className="product">
        <div className="product-img">
 
            <img src={image} alt="" />
 
            <div className="product-label">
                <span className="sale">-{discountPercentage}%</span>
                <span className="new">NUEVO</span>
            </div>
                
        </div>

        <div className="product-body">
            <p className="product-category">{category}</p>
            <h3 className="product-name"><a href="#">{title}</a></h3>
            <h4 className="product-price">$ {price} <del className="product-old-price">${(price / (1-discountPercentage/100)).toFixed(0 )}</del></h4>
            <div className="product-btns">
            <ButtonAddCart 
                className="fa fa-heart-o"
                onClick={()=> wishProduct({id, title, price, category, discountPercentage, image})}
                >
                    <button className="add-to-wishlist">
                        <i className="fa fa-heart-o"></i>
                        <span className="tooltipp">lo quiero</span>
                    </button>
            </ButtonAddCart>
{/*                <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">lo quiero</span></button>               
 */}  {/*               <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button> */}
               {/*  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button> */}
            </div>
        </div>
        <div className="add-to-cart">
            <ButtonAddCart 
                title="al Carrito" 
                onClick={()=> buyProduct({id, title, price, category, discountPercentage, image, quanty: 1})} 
                key={id} 
                className="fa fa-shopping-cart"
            />  {/* onAdd(count) */}
        </div>
    </div>

)}

