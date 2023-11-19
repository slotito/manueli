import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {wishContext} from "../context/WishContext"


const WishContent = () => {

    const { wish, setWish } = useContext(wishContext);

	const { removeFromWish } = useContext(wishContext);

/*     const handleRemove = (wishId) => {
		const updatedWish = wish.filter((item) => item.id !== parseInt(wishId));
		setWish(updatedWish);
    };
 */	
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
					<div className="col-md-5 order-details" key={wish.id}>
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
                                        <img src={product.thumbnail} alt="" />
                                    </div>
                                    <div className="product-body">
										<Link to={`/products/${product.id}`}>
                                        <h3 className="product-name"><a href="#">{product.title} - cod({product.id})</a></h3>
										</Link>
                                    </div>
                                    <button onClick={() => removeFromWish(product.id)} className="delete"><i className="fa fa-close"></i></button>
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