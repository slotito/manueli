import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import enPagina_nuevos from '../datos/enPagina_nuevos.json';

import { useProducts } from '../context/ProductsContext';
import { cartContext } from "../context/CartContext";

export function SeccionNuevosProductos() {

	const productsData = useProducts();
	const { buyProduct } = useContext(cartContext);

	const productsCards  = enPagina_nuevos.map((item) => {
		const product = productsData.products.find(product => (product.id === item.id_nuevo));
		if (product) {
				return (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						category={product.category}
						discountPercentage={product.discountPercentage}
						image={product.thumbnail}
						buyProduct={buyProduct}
					/>
				)
		}
	});
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
									<li className="active"><a data-toggle="tab" href="#tab1">Notebooks</a></li>
									<li><a data-toggle="tab" href="#tab1">Celulares</a></li>
									<li><a data-toggle="tab" href="#tab1">Camaras</a></li>
									<li><a data-toggle="tab" href="#tab1">Accesorios</a></li>
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

				</div>
			</div>
		</div>





        </>
    );
}

export default SeccionNuevosProductos;