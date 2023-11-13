import { Link } from 'react-router-dom';

import { useState , useContext, useEffect} from 'react';
import enPagina_nuevos from '../datos/enPagina_nuevos.json';  // para destacar los nuevos
import '../estilos/Especiales.css'

//import { useProducts } from '../context/ProductsContext_v2';
import { ProductCard } from '../components/ProductCard';
import { dataContext } from '../context/DataContext';

export function SeccionProductosNuevos() {

    //const productsData = useProducts();  // hook personalizado
    const { productsData, cart, setCart } = useContext(dataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                if (productsData && productsData.length > 0) {
                    setLoading(false);
                } else {
                    setLoading(true);
                }
    }, [productsData]);

    if (loading) {
        //console.log(productsData)
        return <div>Cargando...</div>;
    } else {

    const productsCards  = enPagina_nuevos.map((item) => {
        //console.log(productsData)
        const product = productsData.find(product => (product.id === item.id_nuevo && item.home_muestra));
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
}
