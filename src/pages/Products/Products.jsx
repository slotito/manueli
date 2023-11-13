//import './Products.css';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { useProducts } from '../../context/ProductsContext_v2';
import { dataContext } from '../../context/DataContext';
import { useContext } from 'react';

const Products = () => {

    //const productsData = useProducts();
    const { productsData, cart, setCart } = useContext(dataContext);
    const { category } = useParams(); // mismo nombre que en el App.jsx

    const buyProduct = (product) => {
        //setCart([...cart, product]);
    }

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
                                            title={product.title}
                                            price={product.price}
                                            category={product.category}
                                            discountPercentage={product.discountPercentage}
                                            image={product.thumbnail}
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
