import { NavLink } from "react-router-dom";

export function Footer() {
    return (

		<footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Estamos acá</h3>
								<ul className="footer-links">
									<li><a href="#"><i className="fa fa-map-marker"></i>Calle Cualquiera - Montevideo</a></li>
									<li><a href="#"><i className="fa fa-phone"></i>+099-913493</a></li>
									<li><a href="#"><i className="fa fa-envelope-o"></i>selorigi@gmail.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Categorias</h3>
								<ul className="footer-links">
									<li>
										<NavLink to="/nuevos2">
											<a href="#">Ofertas</a>
										</NavLink>
									</li>
									<li>
										<NavLink to="/categorias/laptops">
											<a href="#">Notebooks</a>
										</NavLink>
									</li>
									<li>
										<NavLink to="/categorias/smartphones">
											<a href="#">Celulares</a>
										</NavLink>
									</li>
									<li>
										<NavLink to="/categorias/fragrances">
											<a href="#">Fragancias</a>
										</NavLink>
									</li>
									<li>
										<NavLink to="/categorias/home-decoration">
											<a href="#">Decoración</a>
										</NavLink>
									</li>

								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Informacion</h3>
								<ul className="footer-links">
									<li><a href="#">Sobre Nosotros</a></li>
									<li><a href="#">Contactenos</a></li>
									<li><a href="#">Política de Privacidad</a></li>
									<li><a href="#">Terminos y condiciones</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Servicio</h3>
								<ul className="footer-links">
{/* 									<li><a href="#">Mi Cuenta</a></li>
 */}									<li><a href="#">Ayuda</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								<li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
								<li><a href="#"><i className="fa fa-credit-card"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>

    )
}