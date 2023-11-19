import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { cartContext } from "../context/CartContext"


const Checkout = () => {

    const { cart, removeFromCart, handleClearCart  } = useContext(cartContext);

	const [ valoresFormulario, setValoresFormulario ] = useState({
		nombre: '',
		apellido: '',
		email: '',
		direccion: '',
		ciudad: '',
		pais: '',
		telefono: '',
	});

    useEffect(() => {
        
	}, [cart])

    const total = cart.reduce((acc, product) => acc + (product.price * product.quanty), 0);
    const totalItems = cart.reduce((acc, product) => acc + product.quanty, 0);

    const handleRemove = (productId) => {
      removeFromCart(productId);
    };

	const handleCheckout = () => {
		console.log('Finalizó la compra, agradecer al usuario por su compra y limpiar el carrito');
		handleClearCart();
	};

	const handleValoresFormulario = (e) => {
		console.log(e.target.name, e.target.value)
		setValoresFormulario({
			...valoresFormulario,
			[e.target.name]: e.target.value
		})
	}
    

  return (
    <>
		<div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">Mi Carrito</h3>
						<ul className="breadcrumb-tree">
                            <Link to="/">
							<li><a href="#">Home</a></li>
                            </Link>
						
						</ul>
					</div>
				</div>
			</div>
		</div>


		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="billing-details">
							<div className="section-title">
								<h3 className="title">Domicilio de Facturación</h3>
							</div>
							<form>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									name="nombre" 
									placeholder="Nombre"
									onChange={handleValoresFormulario} 
									value={valoresFormulario.nombre}
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									name="apellido" 
									placeholder="Apellido" 
									onChange={handleValoresFormulario}
									value={valoresFormulario.apellido}
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="email" 
									name="email" 
									placeholder="Email"
									onChange={handleValoresFormulario} 
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									name="direccion" 
									placeholder="Dirección"
									onChange={handleValoresFormulario} 
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									name="ciudad" 
									placeholder="Ciudad"
									onChange={handleValoresFormulario}  
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									name="pais" 
									placeholder="Pais"
									onChange={handleValoresFormulario} 
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="tel" 
									name="tel" 
									placeholder="Telefono"
									onChange={handleValoresFormulario} 
								/>
							</div>
							<div className="form-group">
								<div className="input-checkbox">
									<input type="checkbox" id="create-account" />
{/* 									<label for="create-account">
										<span></span>
										Create Account?
									</label> */}
									<div className="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										<input className="input" type="password" name="password" placeholder="Enter Your Password" />
									</div>
								</div>
							</div>
							</form>
						</div>

						<div className="shiping-details">

							<div className="input-checkbox">
								<input type="checkbox" id="shiping-address" />
{/* 								<label for="shiping-address">
									<span></span>
									Ship to a diffrent address?
								</label> */}
								<div className="caption">
									<div className="form-group">
										<input className="input" type="text" name="first-name" placeholder="First Name" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="last-name" placeholder="Last Name" />
									</div>
									<div className="form-group">
										<input className="input" type="email" name="email" placeholder="Email"  />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="address" placeholder="Address" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="city" placeholder="City" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="country" placeholder="Country" />
									</div>
									<div className="form-group">
										<input className="input" type="text" name="zip-code" placeholder="ZIP Code" />
									</div>
									<div className="form-group">
										<input className="input" type="tel" name="tel" placeholder="Telephone" />
									</div>
								</div>
							</div>
						</div>

					</div>

					<div className="col-md-5 order-details">
						<div className="section-title text-center">
							<h3 className="title">Tu Pedido</h3>
						</div>
						<div className="order-summary">
							<div className="order-col">
								<div><strong>Producto</strong></div>
							</div>
						</div>

                        {cart.map((product) => (
                                <div key={product.id} className="product-widget">
                                    <div className="product-img">
                                        <img src={product.thumbnail} alt="" />
                                    </div>
									<div className="product-body">
										<Link to={`/products/${product.id}`}>
											<h3 className="product-name"><a href="#">Cod.: {product.id} - {product.title}</a></h3>
										</Link>
										<h4 className="product-price"><span className="qty">Cant: {product.quanty}</span> x $ {product.price} = $ {product.price * product.quanty}</h4>
									</div>
                                    <button onClick={() => handleRemove(product.id)} className="delete"><i className="fa fa-close"></i></button>
                                </div>
                                ))}

                                <div className="cart-summary">
									<small>{totalItems} Item(s) seleccionados</small>
									<h5>TOTAL $: {total}</h5>
								</div>

								{total > 0 ? (
										<a href="#" className="primary-btn order-submit" onClick={handleCheckout}>
										Finalizar Orden
										</a>
									) : (
										<h5>El carrito está vacío. Agrega productos para finalizar la orden.</h5>
								)}
					</div>
				</div>
			</div>
		</div>


    </>
  )
}

export default Checkout