import { ProductCard } from "./ProductCard";
import environments from "../datos/environments.js";
import enPagina_nuevos from '../datos/enPagina_nuevos.json';

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function SeccionNuevosProductos2({xDefecto}) {

    const [ products, setProducts ] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(xDefecto); // Inicialmente, no hay categoría seleccionada

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
					<ProductCard
						key={product.id}
						title={product.title}
						price={product.price}
						category={product.category}
						discountPercentage={product.discountPercentage}
						image={product.thumbnail}
					/>
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