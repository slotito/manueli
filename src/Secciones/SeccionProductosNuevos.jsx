import enPagina_nuevos from '../datos/enPagina_nuevos.json';  // para destacar los nuevos
import '../estilos/Especiales.css'

import { useProducts } from '../context/ProductsContext';
import { ProductCard } from '../components/ProductCard';

import { Link } from 'react-router-dom';

export function SeccionProductosNuevos() {

    const productsData = useProducts();

    const productsCards  = enPagina_nuevos.map((item) => {
        const product = productsData.products.find(product => (product.id === item.id_nuevo && item.home_muestra));
        if (product) {
                return (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            discountPercentage={product.discountPercentage}
                            image={product.thumbnail}
                        />
                    </Link>
                )
        }
    });

    return (
		<>
            <div className="section">
                <div className="container">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">Nuevos Productos</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="products-tabs">
                                    <div id="tab1" className="tab-pane active">
                                        <div className="products-slick" data-nav="#slick-nav-1">
                                            <div className='sectionEsp1'>
                                                {productsCards}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
		</>
    );
}
