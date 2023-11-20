import { useContext, useEffect, useState } from 'react'
import ButtonAddCart from '../../components/ButtonAddCart'
import { wishContext } from '../../context/WishContext'
import { cartContext } from '../../context/CartContext'

export function ProductCard({ product }) {

    const { wishProduct } = useContext(wishContext);
    const { buyProduct } = useContext(cartContext);
    //console.log("el productT", product);

    // Función para señalar cuando un producto está en favoritos
    const { wish } = useContext(wishContext);
    const [ wishIds, setWishIds ] = useState(()=>wish.map((item) => item.id))
    useEffect(() => {
        setWishIds(wish.map((item) => item.id));
      }, [wish]);

    return (

     <>
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
            <h3 className="product-name"><a href="#">{product.title} - Cod: {product.ide}</a></h3>
            <h4 className="product-price">$ {product.price} <del className="product-old-price">${(product.price / (1-product.discountPercentage/100)).toFixed(0 )}</del></h4>
                <ButtonAddCart key={product.ide}
                    classNameButton="add-to-wishlist"
                    classNameHeart={wishIds.includes(product.ide) ? "fa fa-heart" : "fa fa-heart-o"}
                    onClick={()=> wishProduct([product])}
                />
       </div>
        <div className="add-to-cart">
            <ButtonAddCart key={product.ide} 
                title="al Carrito" 
                classNameButton="add-to-cart-btn"
                classNameHeart="fa fa-shopping-cart"
                onClick={()=> buyProduct([product], 1, true)} 
            />
        </div>
    </div>
    </>
)}

