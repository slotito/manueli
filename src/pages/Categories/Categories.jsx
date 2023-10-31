import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css'
import { products as inicialProducts } from '../../datos/products.json'

const MuestraCategoria = () => { 

    const { lcategory } = useParams();
    const [category, setCategory] = useState(category)

    const getCategoryByName = async (lcategory) => {
        try {
            // const response = await fetch(`http://localhost:5173/api/products/category/${lcategory}`)
            const response = await fetch(inicialProducts)
            const json = await response.json()
            const result = json.filter(product => product.category === lcategory)
            setCategory(result)
        } catch (error) {
            console.log(error)
        }
    }
        
    useEffect(() => {
        getCategoryByName(lcategory)
    }, [lcategory])

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
                                        <h3>Notebooks</h3>
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