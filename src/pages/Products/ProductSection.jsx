import { useEffect, useState, useContext } from 'react';

import ButtonAddCart from '../../components/ButtonAddCart';
import CartItemCounter from '../../components/Cart/CartItemCounter';

import { dataContext } from '../../context/DataContext';
import { wishContext } from '../../context/WishContext';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export function ProductSection ({id, title, price, category, discountPercentage, image, quanty}) {

    const { productsData, cart, setCart } = useContext(dataContext);
    const { wishProduct } = useContext(wishContext);
    const { buyProduct } = useContext(cartContext);


    const [vproduct, setvProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchdata = async () => {
            try {
                if (productsData.length > 0) {
                    const foundProduct = productsData.find(p => p.id === parseInt(id));
                    if (foundProduct) {
                        setvProduct(foundProduct);
                    } else {
                        setvProduct(null); // no debería ocurrir
                    }
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        const fetchDataAsync = async () => {
            await fetchdata(); // Espera la ejecución de fetchData antes de continuar
        };

        fetchDataAsync();
    }, [productsData, id]);

    
    /* if (product === null || !product.id) {
        console.log("el product es " + product.id);
        console.log("el id es " + id);
        return <div>No se encontró el producto</div>;
    }
 */
    if (loading) {
        return <div>Cargando...</div>;
    }
    if (!vproduct) {
        return <div>No se encontró el producto</div>;
    }

    return (


        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-md-push-2">
                        <div id="product-main-img">
                            <div className="product-preview">
                                <img src={vproduct.thumbnail} alt="" />
                            </div>

{/*                             <div className="product-preview">
                                <img src={vproduct.thumbnail} alt="" />
                            </div>

                            <div className="product-preview">
                                <img src="../../../site/img/product06.png" alt="" />
                            </div>

                            <div className="product-preview">
                                <img src="../../../site/img/product08.png" alt="" />
                            </div>
 */}                        </div>
                    </div>

                    <div className="col-md-2  col-md-pull-5">
                        <div id="product-imgs">
                            <div className="product-preview">
                                <img src={vproduct.images[0]} alt="" />
                            </div>

                            <div className="product-preview">
                                <img src={vproduct.images[1]} alt="" />
                            </div>

                            <div className="product-preview">
                                <img src={vproduct.images[2]} alt="" />
                            </div>

                            <div className="product-preview">
                                <img src={vproduct.images[3]} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="product-details">
                            <h2 className="product-name">cod.: {vproduct.id } - {vproduct.title}</h2>
                            <div>
 {/*                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div> */}
                            </div>
                            <div>
                                <h3 className="product-price"> {vproduct.price} <del className="product-old-price">${(vproduct.price / (1-vproduct.discountPercentage/100)).toFixed(0 )}</del></h3>
                                <span className="product-available">en Stock. Cantidad: {vproduct.stock}</span>
                            </div>
                            <p>{vproduct.description}</p>

{/*                             <div className="product-options">
                                <label>
                                    Size
                                    <select className="input-select">
                                        <option value="0">X</option>
                                    </select>
                                </label>
                                <label>
                                    Color
                                    <select className="input-select">
                                        <option value="0">Red</option>
                                    </select>
                                </label>
                            </div> */}

                            <div className="add-to-cart">
                                <div className="qty-label">
                                    Cantidad
                                    <CartItemCounter product={vproduct} />
{/*                                     <div className="input-number">
                                        <input type="number" />
                                        <span className="qty-up">+</span>
                                        <span className="qty-down">-</span>
                                    </div> */}
                                </div>
                                <ButtonAddCart
                                    title="al Carrito" 
                                    onClick={()=> buyProduct({id, title, price, category, discountPercentage, image, quanty: 1})} 
                                    key={id} 
                                    className="fa fa-shopping-cart"
                                />
                            </div>

                            <ButtonAddCart 
                                    title=" Favoritos"
                                    className="fa fa-heart-o"
                                    onClick={()=> wishProduct({id, title, price, category, discountPercentage, image})}
                            >
                                <ul className="product-btns">
                                    <li><a href="#"><i className="fa fa-heart-o"></i> Favoritos</a></li>
                                </ul>
                            </ButtonAddCart>

                            <ul className="product-links">
                                <li>Category: </li>
                                <Link to={`/categorias/${vproduct.category}`} key={vproduct.category}>
                                    <li><a href="#">{vproduct.category}</a></li>
                                </Link>
                            </ul>

{/*                             <ul className="product-links">
                                <li>Share:</li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                            </ul> */}

                        </div>
                    </div>

                    <div className="col-md-12">
                        <div id="product-tab">

{/*                             <ul className="tab-nav">
                                <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                                <li><a data-toggle="tab" href="#tab2">Details</a></li>
                                <li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
                            </ul> */}

                            <div className="tab-content">
{/*                                 <div id="tab1" className="tab-pane fade in active">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" className="tab-pane fade in">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div> */}

                                {/* error en estas líneas */}
{/*                                 <div id="tab3" className="tab-pane fade in">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div id="rating">
                                                <div className="rating-avg">
                                                    <span>4.5</span>
                                                    <div className="rating-stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                                <ul className="rating">
                                                    <li>
                                                        <div className="rating-stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <div className="rating-progress">
                                                            <div style="width: 80%;"></div>
                                                        </div>
                                                        <span className="sum">3</span>
                                                    </li>
                                                    <li>
                                                        <div className="rating-stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <div className="rating-progress">
                                                            <div style="width: 60%;"></div>
                                                        </div>
                                                        <span className="sum">2</span>
                                                    </li>
                                                    <li>
                                                        <div className="rating-stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <div className="rating-progress">
                                                            <div></div>
                                                        </div>
                                                        <span className="sum">0</span>
                                                    </li>
                                                    <li>
                                                        <div className="rating-stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <div className="rating-progress">
                                                            <div></div>
                                                        </div>
                                                        <span className="sum">0</span>
                                                    </li>
                                                    <li>
                                                        <div className="rating-stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <div className="rating-progress">
                                                            <div></div>
                                                        </div>
                                                        <span className="sum">0</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div id="reviews">
                                                <ul className="reviews">
                                                    <li>
                                                        <div className="review-heading">
                                                            <h5 className="name">John</h5>
                                                            <p className="date">27 DEC 2018, 8:0 PM</p>
                                                            <div className="review-rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o empty"></i>
                                                            </div>
                                                        </div>
                                                        <div className="review-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="review-heading">
                                                            <h5 className="name">John</h5>
                                                            <p className="date">27 DEC 2018, 8:0 PM</p>
                                                            <div className="review-rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o empty"></i>
                                                            </div>
                                                        </div>
                                                        <div className="review-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="review-heading">
                                                            <h5 className="name">John</h5>
                                                            <p className="date">27 DEC 2018, 8:0 PM</p>
                                                            <div className="review-rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o empty"></i>
                                                            </div>
                                                        </div>
                                                        <div className="review-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className="reviews-pagination">
                                                    <li className="active">1</li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li><a href="#">4</a></li>
                                                    <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div id="review-form">
                                                <form className="review-form">
                                                    <input className="input" type="text" placeholder="Your Name" />
                                                    <input className="input" type="email" placeholder="Your Email" />
                                                    <textarea className="input" placeholder="Your Review"></textarea>
                                                    <div className="input-rating">
                                                        <span>Your Rating: </span>
                                                        <div className="stars">
                                                            <input id="star5" name="rating" value="5" type="radio" /><label htmlFor="star5"></label>
                                                            <input id="star4" name="rating" value="4" type="radio" /><label htmlFor="star4"></label>
                                                            <input id="star3" name="rating" value="3" type="radio" /><label htmlFor="star3"></label>
                                                            <input id="star2" name="rating" value="2" type="radio" /><label htmlFor="star2"></label>
                                                            <input id="star1" name="rating" value="1" type="radio" /><label htmlFor="star1"></label>
                                                        </div>
                                                    </div>
                                                    <button className="primary-btn">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
 */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

)}

export default ProductSection


