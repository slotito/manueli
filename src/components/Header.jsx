import { NavLink, Link } from "react-router-dom";


export function Header() {
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
                                    <form>
                                        <select className="input-select">
                                            <option value="0">Categoría</option>
                                            <option value="1">Category 01</option>
                                            <option value="1">Category 02</option>
                                        </select>
                                        <input className="input" placeholder="Busque acá" />
                                        <button className="search-btn">Buscar</button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-3 clearfix">
                                <div className="header-ctn">
                                    <div>
                                        <a href="#">
                                            <i className="fa fa-heart-o"></i>
                                            <span>Mis deseos</span>
                                            <div className="qty">5</div>
                                        </a>
                                    </div>

                                    <div className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <i className="fa fa-shopping-cart"></i>
                                            <NavLink to="/cart">
                                                <span>Mi Carrito</span>
                                            </NavLink>
                                            <div className="qty">3</div>
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


