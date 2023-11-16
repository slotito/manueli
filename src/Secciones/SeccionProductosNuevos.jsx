import { Link } from 'react-router-dom';

import { useState , useContext, useEffect} from 'react';
import enPagina_nuevos from '../datos/enPagina_nuevos.json';  // para destacar los nuevos
import '../estilos/Especiales.css'

//import { useProducts } from '../context/ProductsContext_v2';
import { cartContext } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { dataContext } from '../context/DataContext';

export function SeccionProductosNuevos() {

    //const productsData = useProducts();  // hook personalizado
    const { products } = useContext(dataContext);
    const { buyProduct } = useContext(cartContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                if (products && products.length > 0) {
                    setLoading(false);
                } else {
                    setLoading(true);
                }
    }, [products]);

    if (loading) {
        return <div>Cargando...</div>;
    } else {

    const productsCards  = enPagina_nuevos.map((item) => {
        const product = products.find(product => (product.id === item.id_nuevo && item.home_muestra));
        if (product) {
                return (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard
                            product={product}
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
}
