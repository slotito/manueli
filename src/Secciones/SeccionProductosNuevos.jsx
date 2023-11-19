import { Link } from 'react-router-dom';

import { useState , useContext, useEffect} from 'react';
import '../estilos/Especiales.css'

import { ProductCard } from '../pages/Products/ProductCard';

import { dataContext } from '../context/DataContext';

//import enPagina_nuevos from '../datos/enPagina_nuevos.json';  // para destacar los nuevos
import { getItems } from "../utils/firestore";

export function SeccionProductosNuevos() {

    const { products } = useContext(dataContext);
    const [loading, setLoading] = useState(true);

    const [enPagina_nuevos, setenPagina_nuevos] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await getItems('enPagina_Nuevos');
                    setenPagina_nuevos(data);
                } catch (error) {
                    console.error('Error fetching nuevos:', error);
                }
            };

            fetchData();
        }, []);




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
        //console.log("el product", product);
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
