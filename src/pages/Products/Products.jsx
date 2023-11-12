//import './Products.css';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { useProducts } from '../../context/ProductsContext';

const Products = () => {

    const productsData = useProducts();
    const { category } = useParams(); // mismo nombre que en el App.jsx

    const filteredProducts = productsData.products.filter(product => product.category === category);

    //console.log(category)    
    return (
        <>
            <h2>{ category ? `Products / ${category}` : 'All Products'}</h2>
        
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
