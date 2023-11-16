import { useEffect, useState, useContext } from 'react';

import ButtonAddCart from '../../components/ButtonAddCart';
import CartItemCounter from '../../components/Cart/CartItemCounter';

import { dataContext } from '../../context/DataContext';
import { wishContext } from '../../context/WishContext';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export function ProductSection ({id}) {

    const { products } = useContext(dataContext);

    const { wishProduct } = useContext(wishContext);
    const { buyProduct } = useContext(cartContext);

    const [vproduct, setvProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                if (products.length > 0) {
                    const foundProduct = products.find(p => p.id === parseInt(id));
                    //console.log("el encontrado", foundProduct)
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

        fetchdata();

 /*        const fetchDataAsync = async () => {
            await fetchdata(); // Espera la ejecución de fetchData antes de continuar
        };
        fetchDataAsync(); */

    }, [products, id]);

    if (loading) {
        return <div>Cargando... </div>;
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
                        </div>
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
                            </div>
                            <div>
                                <h3 className="product-price"> {vproduct.price} <del className="product-old-price">${(vproduct.price / (1-vproduct.discountPercentage/100)).toFixed(0 )}</del></h3>
                                <span className="product-available">en Stock. Cantidad: {vproduct.stock}</span>
                            </div>
                            <p>{vproduct.description}</p>
                            <div className="add-to-cart">
                                <div className="qty-label">
                                    Cantidad
                                    <CartItemCounter product={[vproduct]} />
                                </div>
                                <ButtonAddCart
                                    title="al Carrito" 
                                    onClick={()=> buyProduct([vproduct])} 
                                    key={id} 
                                    className="fa fa-shopping-cart"
                                />
                            </div>

                            <ButtonAddCart 
                                    title=" Favoritos"
                                    className="fa fa-heart-o"
                                    onClick={()=> wishProduct([vproduct])}
                            >
                                <ul className="product-btns">
                                    <li><a href="#"><i className="fa fa-heart-o"></i> Favoritos</a></li>
                                </ul>
                            </ButtonAddCart>

                            <ul className="product-links">
                                <li>Categoría: </li>
                                <Link to={`/categorias/${vproduct.category}`} key={vproduct.category}>
                                    <li><a href="#">{vproduct.category}</a></li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div id="product-tab">

                            <div className="tab-content">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

)}

export default ProductSection


