//import './Products.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { ProductCard } from '../../components/ProductCard';
import { dataContext } from '../../context/DataContext';
import { cartContext } from '../../context/CartContext';


const Products = () => {

    const { productsData } = useContext(dataContext);
    //const { cart, setCart } = useContext(cartContext);
    //const { cartCount, setCartCount } = useContext(cartContext);
    const { buyProduct } = useContext(cartContext);
    const { category } = useParams(); // mismo nombre que en el App.jsx

/*     const buyProduct = (product) => {
        console.log('Compraste:', product);
        setCart([...cart, product]); // spread operator obtengo el carrito tal cuál está y le agrego el nuevo producto
        setCartCount(cartCount + 1);
    } */

    let filteredProducts;
    if (!category) {
        filteredProducts = productsData;
    } else {
        filteredProducts = productsData.filter(product => product.category === category);
    }
      
    return (
        <>
            {/* <h2>{ category ? `Products / ${category}` : 'All Products'}</h2> */}
        
            <div className="section">
                <div className="container">
            <div className="row">
                <div className="col-md-12">
{/*             <div id="store" className="col-md-9">
                <div id="store" className="sectionEsp1">
 */}                        <div className="section">
                            <div className="container">
                                <div className="row">
                                        {filteredProducts.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            id={product.id}
                                            title={product.title}
                                            price={product.price}
                                            category={product.category}
                                            discountPercentage={product.discountPercentage}
                                            image={product.thumbnail}
                                            buyProduct={buyProduct}
                                            cant={1}
                                        />
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default Products
