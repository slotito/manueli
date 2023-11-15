import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {wishContext} from "../context/WishContext"


const WishContent = () => {

    const { wish, removeFromWish } = useContext(wishContext);

    const handleRemove = (productId) => {
      removeFromWish(productId);
    };


  return (
    <>
		<div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">Tus deseos</h3>
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


					<div className="col-md-5 order-details">
						<div className="section-title text-center">
							<h3 className="title">Los quiero ...</h3>
						</div>
						<div className="order-summary">
							<div className="order-col">
								<div><strong>Producto</strong></div>

							</div>

			
						</div>


                        {wish.map((product) => (
                            
                                    <div key={product.id} className="product-widget">
                                    <div className="product-img">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-name"><a href="#">{product.title}</a></h3>
                                    </div>
                                    <button onClick={() => handleRemove(product.id)} className="delete"><i className="fa fa-close"></i></button>
                                </div>
                                ))}

					</div>
				</div>
			</div>
		</div>


    </>
  )
}

export default WishContent