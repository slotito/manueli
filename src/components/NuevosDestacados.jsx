
import NuevosDestacadosSec from './NuevosDestacadosSec';
import destacadosData from '../datos/destacados.json';
import { ProductCard } from './ProductCard';
import '../estilos/Especiales.css'

export function SeccionNuevosDestacados() {


	const destacadosComponents  = destacadosData.map((destacado) => (
		<NuevosDestacadosSec
			key={destacado.id_destaca}
			id_destaca={destacado.id_destaca}
			nom_destaca={destacado.nom_destaca}
			cat_destaca={destacado.cat_destaca}
		/>
	));

    return (

		<>
		<div className="section">
			<div className="container">
				<div className="row">

					{destacadosComponents}

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
									<div className='sectionEsp1'>
										<ProductCard />
										<ProductCard />
										<ProductCard />
										<ProductCard />
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

export default SeccionNuevosDestacados;

