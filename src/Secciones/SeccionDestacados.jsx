import '../estilos/Especiales.css'
import { useEffect, useState } from 'react';
import SeccionDestacadosSec from './SeccionDestacadosSec';

//import destacadosData from '../datos/enPagina_destacados.json';
import { getItems } from "../utils/firestore";

export function SeccionDestacados() {

	//const dataMongo = queryCollection();
	//console.log(dataMongo);

    const [destacadosData, setDestacadosData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItems('enPagina_destacados');
                setDestacadosData(data);
            } catch (error) {
                console.error('Error fetching destacadosData:', error);
            }
        };

        fetchData();
    }, []);




	const destacadosComponentsSec  = destacadosData.map((item) => (
		<SeccionDestacadosSec
			key={item.cat_destaca}
			id_destaca={item.id_destaca}
			nom_destaca={item.nom_destaca}
			cat_destaca={item.cat_destaca}
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

