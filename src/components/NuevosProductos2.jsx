import { useContext } from "react";
import { ProductCard } from "../pages/Products/ProductCard";
import environments from "../datos/environments.js";
import enPagina_nuevos from '../datos/enPagina_nuevos.json';

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { cartContext } from "../context/CartContext.jsx";

export function SeccionNuevosProductos2({xDefecto}) {

    const [ products, setProducts ] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(xDefecto); // Inicialmente, no hay categoría seleccionada
	const { buyProduct } = useContext(cartContext);

    const getProducts = async () => {
        try{
            const response = await fetch(environments.productsUrl);
            const data = await response.json();
            setProducts(data);   // Carga 'products'
			//console.log("el resultado de la consulta es: ", data)
        }catch(err){
            console.error(err);
        }
    }
	
    useEffect(()=>{
            getProducts();
    }, [])

	const productsCards  = enPagina_nuevos.map((item) => {

		const product = products.find(product => ((product.id === item.id_nuevo && product.category === selectedCategory) || (product.id === item.id_nuevo && selectedCategory === "all")));
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