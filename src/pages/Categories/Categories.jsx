import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css'

import environments from '../../datos/environments.js';

const MuestraCategoria = () => { 

    const { category } = useParams();
    const [ selectedCategory, setCategory] = useState(category.slice(1))
    const [ products, setProducts ] = useState([]);


    //console.log(selectedCategory)

    const getCategoryByName = async (categoryName) => {
        try {
            const response = await fetch(environments.productsUrl);
            const json = await response.json()
            const result = json.filter(product => product.category === categoryName)
            setProducts(result)
        } catch (error) {
            console.log(error)
        }
    }
        
    useEffect(() => {
        getCategoryByName(selectedCategory)
    }, [selectedCategory])

        return (
            <>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-6">
                                <div className="shop">
                                    <div className="shop-img">
                                        <img src="../img/shop01.png" alt="" />
                                    </div>
                                    <div className="shop-body">
                                        <h3>{category}</h3>
                                        <a href="#" className="cta-btn">Compra ahora <i className="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>




        )
    }


export default MuestraCategoria;