
import SeccionDestacadosSec from './SeccionDestacadosSec';
import destacadosData from '../datos/enPagina_destacados.json';

import '../estilos/Especiales.css'


export function SeccionDestacados() {

	//const dataMongo = queryCollection();
	//console.log(dataMongo);

	const destacadosComponentsSec  = destacadosData.map((destacado) => (
		<SeccionDestacadosSec
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

					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Categorías Destacadas</h3>
						</div>
					</div>

					{destacadosComponentsSec}

				</div>
			</div>
		</div>

		</>
    );
}

export default SeccionDestacados;

