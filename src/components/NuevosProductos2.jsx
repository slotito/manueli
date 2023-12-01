// En desuso variables locales
//import environments from "../datos/environments.js";
//import enPagina_nuevos from '../datos/enPagina_nuevos.json';

import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { cartContext } from "../context/CartContext.jsx";
import { getItems } from "../utils/firestore";
import { ProductCard } from "../pages/Products/ProductCard";

export function SeccionNuevosProductos2({xDefecto}) {

    const [ products, setProducts ] = useState([]);
	const [ productsNuevos, setProductsNuevos ] = useState([]);
	const [ selectedCategory, setSelectedCategory] = useState(xDefecto); // Inicialmente, no hay categoría seleccionada
	const { buyProduct } = useContext(cartContext);

    useEffect(()=>{
		getProducts();
	}, [])

    const getProducts = async () => {
        try{
            const response = await getItems('products')  //await fetch(environments.productsUrl);
            //const data = await response.json();	
            setProducts(response);   // Carga 'products'
        } catch(err){
            console.error(err);
        }
    }
	
	const getProductsNuevos = async () => {
        try{
            const response = await getItems('enPagina_Nuevos')
            setProductsNuevos(response);   // Carga 'productos nuevos'
        } catch(err){
            console.error(err);
        }
    }
    useEffect(()=>{
		getProductsNuevos();
	}, [])

	const productsCards  = productsNuevos.map((item) => {
		const product = products.find(product => ((product.ide === item.id_nuevo && product.category === selectedCategory) || (product.ide === item.id_nuevo && selectedCategory === "all")));
		if (product) {
				return (
					<NavLink to={`/products/${product.id}`} key={product.id}>
						<ProductCard key={product.id}
							product={product}
							buyProduct={buyProduct}
						/>
					</NavLink>
				)
		}
	});

	const noProductsFound = productsCards.every((product) => !product);

	return (
        <>
		<div className="section">
			<div className="container">
				<div className="row">
					
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Nuevos Productos</h3>

							<div className="section-nav"> 
								<ul className="section-tab-nav tab-nav">
									<li><NavLink onClick={() => setSelectedCategory('laptops')}>Notebooks</NavLink></li>
									<li><NavLink onClick={() => setSelectedCategory('smartphones')}>Celulares</NavLink></li>
									<li><NavLink onClick={() => setSelectedCategory('fragrances')}>Fragancias</NavLink></li>
									<li><NavLink onClick={() => setSelectedCategory('home-decoration')}>Decoración</NavLink></li>
								</ul>
							</div>
						</div>
					</div>	

					<div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="products-tabs">
                                    <div id="tab1" className="tab-pane active">
                                        <div className="products-slick" data-nav="#slick-nav-1">
                                            <div className='sectionEsp2'>
												{noProductsFound ? (
													<h3>No hay novedades en esta categoría</h3>
												) : (
													productsCards
												)}
                                            </div>
                                        </div>
                                    </div>
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

export default SeccionNuevosProductos2;