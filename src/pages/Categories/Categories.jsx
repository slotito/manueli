import '../../estilos/Especiales.css'
import SeccionDestacadosSec from '../../Secciones/SeccionDestacadosSec';
import { dataContext } from '../../context/DataContext';
import { useContext } from 'react';

export function Categories() {

    //const productsData = useProducts();
	const { products } = useContext(dataContext);

    const uniqueCategories = [...new Set(products.map((item) => item.category))];

	const destacadosComponentsSec  = uniqueCategories.map((item) => (
		<SeccionDestacadosSec
			key={item}
			nom_destaca={item}
			cat_destaca={item}
		/>
	));

	
    return (

		<>
		<div className="section">
			<div className="container">
				<div className="row">

					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Todas las categorías</h3>
						</div>
					</div>

					{destacadosComponentsSec}

				</div>
			</div>
		</div>

		</>
    );
}

export default Categories;

