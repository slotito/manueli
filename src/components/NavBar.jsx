
import { NavLink } from "react-router-dom";


export function NavBar() {
    return (
        <>

		<nav id="navigation">
			<div className="container">
				<div id="responsive-nav">
					<ul className="main-nav nav navbar-nav">
						<li className="active"><NavLink to="/">Inicio</NavLink></li>
						<li><NavLink to="/nuevos2">Novedades</NavLink></li>
						<li><NavLink to="/categorias">Categorias</NavLink></li>
					</ul>
				</div>
			</div>
		</nav>

        </>
    )
}
