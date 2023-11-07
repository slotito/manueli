import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css'

import environments from '../../datos/environments.js';
import { ProductCard } from '../../components/ProductCard';

const MuestraCategoria = () => { 

    const { category } = useParams();
    const [ selectedCategory, setCategory] = useState(category.slice(1))
    const [ products, setProducts ] = useState([]);


    //console.log(selectedCategory)

    const getCategoryByName = async (categoryName) => {
        try {
            const response = await fetch(environments.productsUrl);
            const json = await response.json()
            const result = json.filter(product => product.category === categoryName)
            setProducts(result)
        } catch (error) {
            console.log(error)
        }
    }
        

    const destacadosComponentsSec  = getCategoryByName.map((destacado) => (
		<ProductCard
			key={destacado.id_destaca}
			id_destaca={destacado.id_destaca}
			nom_destaca={destacado.nom_destaca}
			cat_destaca={destacado.cat_destaca}
		/>
	));
 

        return (
            <>
  
              <div id="store" className="col-md-9">
  
                
                {destacadosComponentsSec}
                </div>

            </>




        )
    }


export default MuestraCategoria;