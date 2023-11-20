import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { cartContext } from "../../context/CartContext"


const Checkout = () => {

    const { cart, removeFromCart, handleClearCart  } = useContext(cartContext);

	// para el manejo del formulario
	const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    useEffect(() => {   
	}, [cart])

    const total = cart.reduce((acc, product) => acc + (product.price * product.quanty), 0);
    const totalItems = cart.reduce((acc, product) => acc + product.quanty, 0);

    const handleRemove = (productId) => {
      removeFromCart(productId);
    };

	const handleCheckout = (data) => {
		if (!data.nombre || !data.apellido) {
			alert('Debe ingresar nombre y apellido para finalizar la compra');
			return;
		} else {
			//console.log('Finalizó la compra, agradecer al usuario por su compra y limpiar el carrito');
			handleClearCart("MUCHAS GRACIAS POR TU COMPRA !!!!");
			reset();

		}
	};

	const enviar = (data) => {  // en desuso
		console.log(data)
		//e.target.reset()
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

				<form onSubmit={handleSubmit(handleCheckout)}>

					<div className="col-md-7">
						<div className="billing-details">
							<div className="section-title">
								<h3 className="title">Domicilio de Facturación</h3>
							</div>

							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									placeholder="Nombre (es obligatorio)"
									{...register("nombre", { required: true, maxLength: 20 })}
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									placeholder="Apellido (es obligatorio)" 
									{...register("apellido", { required: true, maxLength: 20 })}
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="email" 
									placeholder="Email (no es obligatorio)"
									{...register("email", { required: false, pattern: /^\S+@\S+$/i })}
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									placeholder="Dirección (no es obligatorio)"
									{...register("direccion", { required: false, maxLength: 100 })}
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									placeholder="Ciudad (no es obligatorio)"
									{...register("ciudad", { required: false, maxLength: 100 })}
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="text" 
									placeholder="Pais (no es obligatorio)"
									{...register("pais", { required: false, maxLength: 100 })}
								/>
							</div>
							<div className="form-group">
								<input 
									className="input" 
									type="tel" 
									placeholder="Telefono (no es obligatorio)"
									{...register("telefono", { required: false, maxLength: 11 })}
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
                                <div key={product.ide} className="product-widget">
                                    <div className="product-img">
                                        <img src={product.thumbnail} alt="" />
                                    </div>
									<div className="product-body">
										<Link to={`/products/${product.ide}`}>
											<h3 className="product-name"><a href="#">Cod.: {product.ide} - {product.title}</a></h3>
										</Link>
										<h4 className="product-price"><span className="qty">Cant: {product.quanty}</span> x $ {product.price} = $ {product.price * product.quanty}</h4>
									</div>
                                    <button onClick={() => handleRemove(product.ide)} className="delete"><i className="fa fa-close"></i></button>
                                </div>
                                ))}

                                <div className="cart-summary">
									<small>{totalItems} Item(s) seleccionados</small>
									<h5>TOTAL $: {total}</h5>
								</div>

								{total > 0 ? (

/* 										<a href="#" className="primary-btn order-submit" onClick={handleCheckout}>
 */										
										<button type='submit'className="primary-btn order-submit">
											Finalizar Orden
										</button>
										
									) : (
										<h5>El carrito está vacío. Agrega productos para finalizar la orden.</h5>
								)}
					</div>
					</form>
				</div>
			</div>
		</div>


    </>
  )
}

export default Checkout