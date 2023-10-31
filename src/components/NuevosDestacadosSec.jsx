import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function NuevosDestacadosSec({id_destaca, nom_destaca, cat_destaca}) {
    return (
        <>
            <div className="col-md-4 col-xs-6">
                <div className="shop">
                    <div className="shop-img">
                        <img src="site/img/shop03.png" alt="" />
                    </div>
                    <div className="shop-body">
                        <Link to="/ruta-de-la-pagina">  
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

NuevosDestacadosSec.propTypes = {
    id_destaca: PropTypes.number.isRequired, 
    nom_destaca: PropTypes.string.isRequired,
  };


export default NuevosDestacadosSec;

