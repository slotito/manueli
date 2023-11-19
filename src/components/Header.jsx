import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { cartContext } from "../context/CartContext";
import { wishContext } from "../context/WishContext";
import { dataContext } from "../context/DataContext";

export function Header() {

    const { cartCount } = useContext(cartContext);
    const { wishCount } = useContext(wishContext);

    const { products } = useContext(dataContext);

    const uniqueCategories = [...new Set(products.map((item) => item.category))];

    const [textoBuscado, setTextoBuscado] = useState("");



    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const results = products.filter((product) => {
            return (
                product.title.toLowerCase().includes(textoBuscado.toLowerCase()) ||
                product.description.toLowerCase().includes(textoBuscado.toLowerCase())
            )
        })
        //console.log(results);

        if (results.length > 0) {
            navigate("/products", { state: { results } });
        }
    }

    return (
        <>
            <header>
                <div id="top-header">
                    <div className="container">
                        <ul className="header-links pull-left">
                            <li><a href="#"><i className="fa fa-phone"></i> +099-913493</a></li>
                            <li><a href="#"><i className="fa fa-envelope-o"></i> selorigi@gmail.com</a></li>
                            <li><a href="#"><i className="fa fa-map-marker"></i> 1234 La Celeste</a></li>
                        </ul>
                        <ul className="header-links pull-right">
                            <li><a href="#"><i className="fa fa-dollar"></i> UYU/USD</a></li>
                            <li><a href="#"><i className="fa fa-user-o"></i> Mi Cuenta</a></li>
                        </ul>
                    </div>
                </div>

                <div id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="header-logo">
                                    <NavLink to="/" className="logo">
                                    <a href="#" className="logo2">
                                        <img src="../../site/img/logoR-min.png" alt="" />
                                    </a>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="header-search">
                                    <form onSubmit={handleSearch}>
                                        <select className="input-select" style={{"width": "120px"}}>
                                            <option value="0">Todas</option>
                                            {uniqueCategories.map((category, index) => (
                                                <option key={index + 1} value={index + 1}>{category}</option>
                                            ))}
                                        </select>
                                        <input style={{"width": "300px"}}
                                            className="input"
                                            placeholder="Digite el texto y presione Buscar"
                                            value={textoBuscado}
                                            onChange={(e) => setTextoBuscado(e.target.value)} 
                                        />
                                        <button style={{"width": "80px"}}
                                            className="search-btn"
                                            type="submit"
                                        >
                                            Buscar
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-3 clearfix">
                                <div className="header-ctn">
                                    <div>
                                        <a href="#">
                                            <i className="fa fa-heart-o"></i>
                                            <NavLink to="/misDeseos">
                                                <span>Mis deseos</span>
                                            </NavLink>
                                            <div className="qty">{wishCount}</div>
                                        </a>
                                    </div>

                                    <div className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <i className="fa fa-shopping-cart"></i>
                                            <NavLink to="/cart">
                                                <span>Mi Carrito</span>
                                            </NavLink>
                                            <div className="qty">{cartCount}</div>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

  
        </>
    );
}


