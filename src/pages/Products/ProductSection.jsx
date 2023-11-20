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
    const { wish } = useContext(wishContext);
    const { cart } = useContext(cartContext);

    // Función para señalar cuando un producto está en favoritos
    const [ wishIds, setWishIds ] = useState(()=>wish.map((item) => item.id))
    useEffect(() => {
        setWishIds(wish.map((item) => item.id));
      }, [wish]);

    const { buyProduct } = useContext(cartContext);
    const [vproduct, setvProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [quantyTMP, setQuantyTMP] = useState(1);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                if (products.length > 0) {
                    const foundProduct = products.find(p => p.ide === parseInt(id));
                    //console.log("el encontrado", foundProduct)
                    if (foundProduct) {
                        const foundProduct2 = cart.find(p => p.ide === parseInt(id));
                        if (foundProduct2) {
                            setQuantyTMP(foundProduct2.quanty);
                        } else {
                            setQuantyTMP(1);
                        }
                        //console.log(foundProduct)
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
    }, [products, id]);

    useEffect(() => {

    }, [wishIds]);

    const handleQuantityChange = (newQuanty) => {
        // Actualiza el estado quantyTMP cada vez que cambia la cantidad en CartItemCounter
        setQuantyTMP(newQuanty);
      };

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
                            <h2 className="product-name">cod.: {vproduct.ide } - {vproduct.title}</h2>
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
                                    <CartItemCounter product={[vproduct]} actQuanty={quantyTMP} onValueChange={handleQuantityChange} />
                                </div>
                                <ButtonAddCart key={vproduct.ide}
                                    title="al Carrito"
                                    classNameButton="add-to-cart-btn"
                                    classNameHeart="fa fa-shopping-cart"
                                    onClick={()=> buyProduct([vproduct] , quantyTMP, true)} 
                                />
                                        <ul className="product-links">
                                {cart.some(item => item.id === vproduct.id) ? <span>El producto ya existe en su carrito, ahora actualice la cantidad si lo desea</span> : null}
                                </ul>
                            </div>

                            <ButtonAddCart key={vproduct.ide}
                                    title=" Favoritos"
                                    classNameButton="add-to-wishlist"
                                    classNameHeart={wishIds.includes(vproduct.id) ? "fa fa-heart" : "fa fa-heart-o"}
                                    onClick={()=> wishProduct([vproduct])}
                            >
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


