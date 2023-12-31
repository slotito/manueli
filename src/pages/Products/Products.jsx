//import './Products.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductCard } from './ProductCard';
import { dataContext } from '../../context/DataContext';
import { cartContext } from '../../context/CartContext';

import { useLocation } from 'react-router-dom';

const Products = () => {

    const { products } = useContext(dataContext);

    //console.log(location);
    const location = useLocation();
    const results = location.state ? location.state.results : products;
    //products = results

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
        filteredProducts = results;
    } else {
        filteredProducts = results.filter(product => product.category === category);
    }
      
    return (
        <>
                     
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-6">
                                {filteredProducts.map(product => (
                                <Link to={`/products/${product.ide}`} key={product.ide}>
                                    <ProductCard
                                        product={product}
                                        buyProduct={buyProduct}
                                        quanty={1} // desde este lugar siempre es 1
                                    />                                 
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
