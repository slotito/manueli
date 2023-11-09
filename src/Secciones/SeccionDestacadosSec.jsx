import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function NuevosDestacadosSec({ nom_destaca, cat_destaca}) {

	const [selectedCategory, setSelectedCategory] = useState(''); // Inicialmente, no hay categoría seleccionada
    console.log(selectedCategory)
    return (
      
        <>
            <div className="col-md-4 col-xs-6">
                <div className="shop">
                    <div className="shop-img">
                        <img src="../site/img/shop03.png" alt="" />
                    </div>
                    <div className="shop-body">
                        <Link to={`${cat_destaca}`} onClick={() => setSelectedCategory(cat_destaca)}>  
                            <h3>{ nom_destaca }</h3>
                            <span href="#" className="cta-btn">Compre Ahora
                                <i className="fa fa-arrow-circle-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NuevosDestacadosSec;


NuevosDestacadosSec.propTypes = {
    id_destaca: PropTypes.number, 
    nom_destaca: PropTypes.string.isRequired,
    cat_destaca: PropTypes.string
  };


