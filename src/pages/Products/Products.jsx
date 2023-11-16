//import './Products.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductCard } from '../../components/ProductCard';
import { dataContext } from '../../context/DataContext';
import { cartContext } from '../../context/CartContext';


const Products = () => {

    const { products } = useContext(dataContext);
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
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
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
                                        <Link to={`/products/${product.id}`} key={product.id}>

                                        <ProductCard
                                            product={product}
                                            buyProduct={buyProduct}
                                            quanty={1}
                                        />
                                        </Link>
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
